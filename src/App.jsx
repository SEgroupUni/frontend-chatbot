import { useState, useEffect } from "react";
import ChatBox from "./ChatBox";
import OptionToggle from "./Options/OptionToggle";
import NavBar from "./components/NavBar";
import TimeoutOverlay from "./Pages/TimeOut.jsx";
import useInactivityTimeout from "./useInactivityTimeout";
import RamBot from "./Ram.jsx"
import './index.css';

export default function App() {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [isInactive, resetInactivity, setIsInactive] = useInactivityTimeout(20000);

  useEffect(() => {
    if (isInactive) setOverlayVisible(true);
  }, [isInactive]);

  return (
    <div>
      <NavBar />
      <OptionToggle />

      {overlayVisible && (
        <TimeoutOverlay
          onTimeoutEnd={() => window.location.href = "/"} 
          onContinue={() => {
            setOverlayVisible(false); // hide overlay
            resetInactivity();        // restart inactivity timer
            setIsInactive(false);     // ensure inactive state cleared
          }}
        />
      )}
      <div className="chatbox-wrapper">
        <div className="RamAvatar">
          <RamBot />
        </div>
        <ChatBox />
      </div>
      <div className="ResetChat">
        <button className="ResetButton" onClick={() => (window.location.href = "AiChatbot")}>New Chat</button>
      </div>
    </div>
  );
}