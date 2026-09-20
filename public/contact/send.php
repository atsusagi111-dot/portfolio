<?php
// お問い合わせフォームの送信処理（ConoHa WING 上の PHP で動作）。
// components/forms/ContactForm.tsx から POST され、結果を JSON で返す。

declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

function respond(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

/** メールヘッダインジェクション対策：改行と制御文字を取り除く */
function single_line(string $value): string
{
    return trim(preg_replace('/[\x00-\x1F\x7F]+/u', ' ', $value) ?? '');
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'method_not_allowed']);
}

// 他サイトからの送信を拒否する（Origin / Referer のホストが自サイトと一致すること）
$host = $_SERVER['HTTP_HOST'] ?? '';
$source = $_SERVER['HTTP_ORIGIN'] ?? ($_SERVER['HTTP_REFERER'] ?? '');
if ($source === '' || parse_url($source, PHP_URL_HOST) !== preg_replace('/:\d+$/', '', $host)) {
    respond(403, ['ok' => false, 'error' => 'forbidden']);
}

$config = require __DIR__ . '/config.php';
if (
    !filter_var($config['to'], FILTER_VALIDATE_EMAIL) ||
    !filter_var($config['from'], FILTER_VALIDATE_EMAIL)
) {
    // config.php のメールアドレスが未設定
    respond(500, ['ok' => false, 'error' => 'not_configured']);
}

// スパム対策1：ハニーポット（人には見えない項目）が埋まっていたら、成功を装って破棄する
if (trim((string)($_POST['website'] ?? '')) !== '') {
    respond(200, ['ok' => true]);
}
// スパム対策2：フォームを開いてから2秒未満の送信はボットとみなす
if ((int)($_POST['elapsed'] ?? 0) < 2) {
    respond(200, ['ok' => true]);
}

$name = single_line((string)($_POST['name'] ?? ''));
$company = single_line((string)($_POST['company'] ?? ''));
$email = single_line((string)($_POST['email'] ?? ''));
$message = trim(str_replace("\r\n", "\n", (string)($_POST['message'] ?? '')));

if ($name === '' || $email === '' || $message === '') {
    respond(400, ['ok' => false, 'error' => 'missing_fields']);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(400, ['ok' => false, 'error' => 'invalid_email']);
}
if (
    mb_strlen($name) > 100 || mb_strlen($company) > 100 ||
    strlen($email) > 254 || mb_strlen($message) > 5000
) {
    respond(400, ['ok' => false, 'error' => 'too_long']);
}

// スパム対策3：同じIPアドレスからの連続送信を30秒間制限する
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$lockFile = sys_get_temp_dir() . '/atsusagi_contact_' . hash('sha256', $ip);
if (is_file($lockFile) && time() - (int)filemtime($lockFile) < 30) {
    respond(429, ['ok' => false, 'error' => 'too_many_requests']);
}
@touch($lockFile);

mb_language('Japanese');
mb_internal_encoding('UTF-8');

$siteName = $config['site_name'];
$fromHeader = mb_encode_mimeheader($siteName) . ' <' . $config['from'] . '>';
$envelope = '-f ' . $config['from'];

// 1) 運営者への通知メール
$adminBody = "ホームページのお問い合わせフォームから送信がありました。\n\n"
    . "お名前: {$name}\n"
    . '会社名・屋号: ' . ($company !== '' ? $company : '（未入力）') . "\n"
    . "メールアドレス: {$email}\n\n"
    . "お問い合わせ内容:\n{$message}\n\n"
    . "----\n送信日時: " . date('Y-m-d H:i:s') . "\n送信元IP: {$ip}\n";

$sent = mb_send_mail(
    $config['to'],
    "【お問い合わせ】{$name}様より",
    $adminBody,
    "From: {$fromHeader}\r\nReply-To: {$email}",
    $envelope
);

if (!$sent) {
    @unlink($lockFile);
    respond(500, ['ok' => false, 'error' => 'send_failed']);
}

// 2) お客様への自動返信メール（失敗してもお問い合わせ自体は成功として扱う）
if (!empty($config['auto_reply'])) {
    $replyBody = "{$name} 様\n\n"
        . "このたびは {$siteName} へお問い合わせいただき、ありがとうございます。\n"
        . "以下の内容でお問い合わせを受け付けました。\n"
        . "内容を確認のうえ、担当より折り返しご連絡いたします。\n\n"
        . "――――――――――――――――\n"
        . "お問い合わせ内容:\n{$message}\n"
        . "――――――――――――――――\n\n"
        . "※このメールは自動送信です。お心当たりのない場合は、お手数ですが破棄してください。\n\n"
        . "{$siteName}\n";

    mb_send_mail(
        $email,
        "【{$siteName}】お問い合わせを受け付けました",
        $replyBody,
        "From: {$fromHeader}\r\nReply-To: {$config['to']}",
        $envelope
    );
}

respond(200, ['ok' => true]);
