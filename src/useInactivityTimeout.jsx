import { useState, useEffect } from "react";

/**
 * Custom hook to track inactivity.
 * @param {number} timeout - Time in ms before user is considered inactive.
 * @returns {boolean} isInactive - true if user inactive.
 */
export default function useInactivityTimeout(timeout = 10000) {
  const [isInactive, setIsInactive] = useState(false);

  useEffect(() => {
    if (isInactive) return; // already timed out, do nothing

    let timer = setTimeout(() => setIsInactive(true), timeout);

    const resetTimer = () => {
      // Only reset the timer if user hasn't timed out yet
      if (!isInactive) {
        clearTimeout(timer);
        timer = setTimeout(() => setIsInactive(true), timeout);
      }
    };

    // Listen for user activity
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("mousemove", resetTimer);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("mousemove", resetTimer);
    };
  }, [timeout, isInactive]);

  return isInactive;
}
