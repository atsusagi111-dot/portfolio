import Image from "next/image";

const LOGOS = {
  horizontal: {
    src: "/logo/atsusagi-lab-horizontal.png",
    width: 1331,
    height: 294,
  },
  badge: {
    src: "/logo/atsusagi-lab-badge.png",
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
