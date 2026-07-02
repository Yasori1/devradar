import { useEffect, useState } from "react";

interface Props {
  label: string;
  value: number;
  icon: string;
}

export default function StatCounter({ label, value, icon }: Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (value === 0) return;

    const duration = 1500; // 1.5 saniyede tamamla
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
  }, [value]);

  return (
    <div className="stat-card">
      <span className="stat-icon">{icon}</span>
      <span className="stat-value">{count.toLocaleString("tr-TR")}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}