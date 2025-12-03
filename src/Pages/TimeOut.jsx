import { useEffect } from "react";
import Timer from "../components/Timer.jsx";
import '../index.css';
import warningSoundFile from "../assets/TimeoutWarning.mp3";
import endSoundFile from "../assets/SessionTimedOut.mp3";

export default function TimeoutOverlay({ onTimeoutEnd, onContinue }) {
  useEffect(() => {
    // Session End Warning
    const warningAudio = new Audio(warningSoundFile);
    const endAudio = new Audio(endSoundFile);
    warningAudio.play().catch(e => console.log("Audio play failed:", e));

    // Schedule the End sound
    const soundTimer = setTimeout(() => {
      endAudio.play().catch(e => console.log("Audio play failed:", e));
    }, 4300);

    // Auto end session after 5 seconds 
    const timerEnd = setTimeout(() => {
      onTimeoutEnd();
    }, 5000);

    // Cancel overlay when movement is detected
    const events = ["click", "touchstart", "mousemove", "keydown"];
    const resetHandler = () => {
      warningAudio.pause();
      warningAudio.currentTime = 0;
      endAudio.pause();
      endAudio.currentTime = 0;

      clearTimeout(timerEnd);
      onContinue();
    };
    events.forEach(e => document.addEventListener(e, resetHandler));

    return () => {
      warningAudio.pause();
      endAudio.pause();
      clearTimeout(timerEnd);
      clearTimeout(soundTimer);
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