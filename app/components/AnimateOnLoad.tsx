"use client";

import { useEffect, useState } from "react";

export default function AnimateOnLoad({
  children,
  animation,
  delay = 0,
}: {
  children: React.ReactNode;
  animation: string;
  delay?: number;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={mounted ? animation : "opacity-0"}>
      {children}
    </div>
  );
}
