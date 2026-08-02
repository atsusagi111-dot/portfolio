"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";

const DISPLAY_MS = 3000;
const FADE_MS = 300;
const REDUCED_MOTION_DISPLAY_MS = 400;

function subscribeReducedMotion(callback: () => void) {
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
}

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const prefersReduced = usePrefersReducedMotion();
  const motionOk = !prefersReduced;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const displayMs = prefersReduced ? REDUCED_MOTION_DISPLAY_MS : DISPLAY_MS;
    const fadeTimer = setTimeout(() => setFading(true), displayMs);
    const hideTimer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = previousOverflow;
    }, displayMs + FADE_MS);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, [prefersReduced]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-surface transition-opacity duration-300 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="relative h-32 w-full overflow-hidden sm:h-40">
        <div
          className={`absolute top-1/2 left-0 -translate-y-1/2 ${
            motionOk ? "animate-rabbit-run" : "left-1/2 -translate-x-1/2"
          }`}
        >
          <div className={motionOk ? "animate-rabbit-hop" : ""}>
            <Image
              src="/animations/rabbit-run.png"
              alt=""
              width={652}
              height={378}
              priority
              className="h-auto w-28 sm:w-36"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
