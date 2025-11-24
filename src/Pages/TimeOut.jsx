import { useEffect } from "react";
import Timer from "../components/Timer.jsx";
import '../index.css';

export default function TimeoutOverlay({ onTimeoutEnd, onContinue }) {
  useEffect(() => {
    // Auto end session after 5 seconds (or whatever Timer counts)
    const timerEnd = setTimeout(() => {
      onTimeoutEnd();
    }, 5000);

    // Cancel overlay on any user activity
    const events = ["click", "touchstart", "mousemove", "keydown"];
    const resetHandler = () => {
      clearTimeout(timerEnd);
      onContinue();
    };
    events.forEach(e => document.addEventListener(e, resetHandler));

    return () => {
      clearTimeout(timerEnd);
      events.forEach(e => document.removeEventListener(e, resetHandler));
    };
  }, [onTimeoutEnd, onContinue]);

  return (
    <div className="timeout-overlay">
      <h1>Are you still there?</h1>
      <h2>Session will time out in: <Timer start={5} /></h2>
      <p>Move the mouse or tap anywhere to continue your session</p>
    </div>
  );
}