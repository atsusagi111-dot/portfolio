"use client";

import { useState, useRef, type ReactNode, type MouseEvent } from "react";
import Image from "next/image";

export function CursorFollowHint({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  function updatePosition(event: MouseEvent<HTMLDivElement>) {
    const rect = wrapperRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  }

  return (
    <div
      ref={wrapperRef}
      className={`relative inline-block ${className}`}
      onMouseEnter={updatePosition}
      onMouseMove={updatePosition}
      onMouseLeave={() => setPos(null)}
    >
      <div className={pos ? "cursor-none" : ""}>{children}</div>

      {pos && (
        <Image
          src="/cursors/rabbit-ask.png"
          alt=""
          width={1774}
          height={749}
          priority
          className="pointer-events-none absolute z-50 w-44 max-w-none -translate-x-1/2 -translate-y-1/2 select-none sm:w-56"
          style={{ left: pos.x, top: pos.y }}
        />
      )}
    </div>
  );
}
