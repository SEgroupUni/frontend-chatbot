import { useState, useEffect, useRef } from "react";

/**
 * Custom hook to track inactivity.
 * @param {number} timeout - Time in ms before user is considered inactive.
 * @returns {[isInactive, resetInactivity]} - Inactivity state and a reset function.
 */
export default function useInactivityTimeout(timeout = 10000) {
  const [isInactive, setIsInactive] = useState(false);
  const timerRef = useRef(null);

  const resetInactivity = () => {
    setIsInactive(false); // reset inactive state
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setIsInactive(true), timeout);
  };

  useEffect(() => {
    // Start timer
    resetInactivity();

    // Reset on any user activity
    const events = ["mousemove", "keydown", "mousedown", "touchstart"];
    events.forEach(e => window.addEventListener(e, resetInactivity));

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      events.forEach(e => window.removeEventListener(e, resetInactivity));
    };
  }, [timeout]);

  return [isInactive, resetInactivity, setIsInactive]; //post end session 
}

