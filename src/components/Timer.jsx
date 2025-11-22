import { useState, useEffect } from "react";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft(t => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div>
      <h2>{timeLeft}</h2>
    </div>
  );
}