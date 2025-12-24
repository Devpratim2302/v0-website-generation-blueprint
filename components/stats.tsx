"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 5, label: "Projects Completed" },
  { value: 1, label: "Years Experience" },
  { value: 10, label: "Employees" },
  { value: 100, label: "Client Satisfaction" },
];

type StatItemProps = {
  value: number;
  label: string;
  suffix?: string;
  show: boolean;
};

function StatItem({ value, label, suffix = "", show }: StatItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (show) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [show, value]);

  return (
    <div className="text-center p-6">
      <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </div>
  );
}

export function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:gap-8 max-w-md mx-auto">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.label === "Client Satisfaction" ? "%" : ""}
              show={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
