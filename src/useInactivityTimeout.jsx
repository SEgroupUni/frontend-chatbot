import { useState, useEffect } from "react";

/**
 * Custom hook to track inactivity.
 * @param {number} timeout - Time in ms before user is considered inactive.
 * @returns {boolean} isInactive - true if user inactive.
 */
export default function useInactivityTimeout(timeout = 10000) {
  const [isInactive, setIsInactive] = useState(false);

  useEffect(() => {
    let timer;

    const resetTimer = () => {
      clearTimeout(timer);
      setIsInactive(false); // user active
      timer = setTimeout(() => setIsInactive(true), timeout); // timeout triggers inactivity
    };

    // Listen for user activity
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("mousemove", resetTimer);

    // Start initial timer
    resetTimer();

    // Cleanup when component unmounts
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("mousemove", resetTimer);
    };
  }, [timeout]);

  return isInactive;
}
