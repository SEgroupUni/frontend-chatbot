import { useState, useEffect } from "react";
import TimeoutOverlay from "./Pages/TimeOut.jsx";
import useInactivityTimeout from "./components/useInactivityTimeout.jsx";
import RamBot from "./components/Ram.jsx";
import './index.css';
import ChatBox from "./components/ChatBox.jsx";

export default function App() {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [isInactive, resetInactivity, setIsInactive] = useInactivityTimeout(20000);
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
    {/* Timeout page after 20s inactivity, after popup expires will go to home page */}
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
    {/* Main components of chat page */} 
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