import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import TimeoutOverlay from "./Pages/TimeOut.jsx";
import useInactivityTimeout from "./useInactivityTimeout";
import RamBot from "./Ram.jsx";
import './index.css';

import ChatBox from "./ChatBox";
import OptionToggle from "./Options/OptionToggle";
import VolumeController from "./components/VolumeController"; 

export default function App() {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [isInactive, resetInactivity, setIsInactive] = useInactivityTimeout(20000);

  // Global Volume State
  const [globalVolume, setGlobalVolume] = useState(0.5); 

  useEffect(() => {
    if (isInactive) setOverlayVisible(true);
  }, [isInactive]);

  return (
    <div>
      <NavBar />
      
      <OptionToggle 
        globalVolume={globalVolume} 
        setGlobalVolume={setGlobalVolume} 
      />

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
          <RamBot />
        </div>
        

        <div style={{ position: 'relative' }}>
            
            <ChatBox globalVolume={globalVolume} />

            <div style={{ 
                position: 'absolute', 
                bottom: '10px',      
                left: '100%',        
                marginLeft: '15px',  
                zIndex: 10
            }}>
                <VolumeController volume={globalVolume} setVolume={setGlobalVolume} />
            </div>
        </div>
      </div>
      <div className="reset-chat">
        <button className="reset-button" onClick={() => (window.location.href = "AiChatbot")}>Start New Chat</button>
      </div>
    </div>
  );
}