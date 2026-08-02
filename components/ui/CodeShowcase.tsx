"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";
import { useIsMobile } from "@/lib/hooks/useIsMobile";

const SNIPPET = `type Client = {
  name: string;
  goal: "web" | "ai" | "automation";
};

export function buildSolution(client: Client) {
  const plan = designFor(client.goal);
  return launch(plan);
}`;

const TYPE_SPEED_MS = 35;
const PAUSE_AFTER_MS = 1800;

const KEYWORDS = ["export", "function", "return", "const", "type"];
const TYPES = ["Client", "string"];

function highlight(line: string): ReactNode[] {
  const pattern = /("[^"]*"|\bexport\b|\bfunction\b|\breturn\b|\bconst\b|\btype\b|\bClient\b|\bstring\b)/g;
  return line
    .split(pattern)
    .map((part, i) => {
      if (!part) return null;
      if (part.startsWith('"')) {
        return (
          <span key={i} className="text-[#9fd88f]">
            {part}
          </span>
        );
      }
      if (KEYWORDS.includes(part)) {
        return (
          <span key={i} className="text-[#d4b46a]">
            {part}
          </span>
        );
      }
      if (TYPES.includes(part)) {
        return (
          <span key={i} className="text-[#7fb8e0]">
            {part}
          </span>
        );
      }
      return <span key={i}>{part}</span>;
    })
    .filter(Boolean);
}

export function CodeShowcase() {
  const prefersReduced = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const skipAnimation = prefersReduced || isMobile;
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (skipAnimation) {
      return;
    }

    let index = 0;
    let timer: ReturnType<typeof setTimeout>;

    function tick() {
      index += 1;
      setVisibleCount(index);
      if (index >= SNIPPET.length) {
        timer = setTimeout(() => {
          index = 0;
          setVisibleCount(0);
          timer = setTimeout(tick, TYPE_SPEED_MS);
        }, PAUSE_AFTER_MS);
      } else {
        timer = setTimeout(tick, TYPE_SPEED_MS);
      }
    }

    timer = setTimeout(tick, TYPE_SPEED_MS);
    return () => clearTimeout(timer);
  }, [skipAnimation]);

  const effectiveCount = skipAnimation ? SNIPPET.length : visibleCount;
  const lines = SNIPPET.slice(0, effectiveCount).split("\n");

  return (
    <div className="w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-navy-700 shadow-xl">
      <div className="flex items-center gap-2 bg-black/20 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-white/40">solution.ts</span>
      </div>
      <pre className="overflow-x-auto px-5 py-5 text-left font-mono text-[13px] leading-relaxed sm:text-sm">
        <code>
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span className="mr-4 shrink-0 select-none text-white/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-slate-200">
                {highlight(line)}
                {!skipAnimation && i === lines.length - 1 && (
                  <span className="ml-0.5 inline-block h-4 w-[2px] animate-pulse bg-gold align-middle" />
                )}
              </span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
