import Image from "next/image";

const LOGOS = {
  horizontal: {
    src: "/images/logo/atsusagi-lab-horizontal.webp",
    width: 1331,
    height: 294,
  },
  badge: {
    src: "/images/logo/atsusagi-lab-badge.webp",
    width: 445,
    height: 443,
  },
} as const;

type LogoProps = {
  variant: keyof typeof LOGOS;
  className?: string;
  priority?: boolean;
};

export function Logo({ variant, className, priority }: LogoProps) {
  const { src, width, height } = LOGOS[variant];
  return (
    <Image
      src={src}
      alt="ATSUSAGI LAB"
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
}
