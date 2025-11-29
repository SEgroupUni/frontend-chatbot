import { useState, useEffect } from "react";
import TimeoutOverlay from "./Pages/TimeOut.jsx";
import useInactivityTimeout from "./useInactivityTimeout";
import RamBot from "./Ram.jsx";
import './index.css';

import ChatBox from "./ChatBox";
import VolumeController from "./components/VolumeController"; 

export default function App() {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [isInactive, resetInactivity, setIsInactive] = useInactivityTimeout(20000000);
  const [globalVolume, setGlobalVolume] = useState(0.5);

  // NEW — user avatar selection
  const [userAvatar, setUserAvatar] = useState(null);

  // Bot avatar state: null = default, "thinking", "talking"
  const [botStatus, setBotStatus] = useState(null);

  useEffect(() => {
    if (isInactive) setOverlayVisible(true);
  }, [isInactive]);

  // Called when the user sends a message
  const handleUserMessage = () => {
    setBotStatus("thinking"); 

    setTimeout(() => {
      setBotStatus("talking");

      setTimeout(() => {
        setBotStatus(null);
      }, 1500);
    }, 1000);
  };

  return (
    <div className="background">
    
      {overlayVisible && (
        <TimeoutOverlay
          onTimeoutEnd={() => window.location.href = "/"} 
          onContinue={() => {
            setOverlayVisible(false);
            resetInactivity();
            setIsInactive(false);
          }}
          globalVolume={globalVolume}
        />
      )}

      <div className="chat-box-wrapper">
        <div className="ram-avatar">
          <RamBot status={botStatus} /> 
        </div>

        <div style={{ position: 'relative' }}>

          <ChatBox 
            globalVolume={globalVolume}
            setGlobalVolume={setGlobalVolume}  
            onUserMessage={handleUserMessage}
            botStatus={botStatus}
            userAvatar={userAvatar}
          />

          <div style={{ 
            position: 'absolute', 
            bottom: '10px',
            left: '100%',
            marginLeft: '15px',
            zIndex: 10
          }}>
          
          </div>
        </div>
      </div>
    </div>
  );
}