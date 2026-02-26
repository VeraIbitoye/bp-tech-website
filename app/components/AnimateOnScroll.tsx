"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimateOnScroll({
  children,
  animation,
}: {
  children: React.ReactNode;
  animation: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={visible ? animation : "opacity-0 translate-y-6"}
    >
      {children}
    </div>
  );
}
