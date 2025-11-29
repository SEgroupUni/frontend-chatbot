import { useState } from "react";
import VolumeController from "./VolumeController";

export default function ChatInput({ onSend, volume, setVolume }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() === "") return;
    onSend(message);      // send message upward to ChatBox
    setMessage("");       // clear input
  };

  return (
    <div className="chat-input-container">
      <div className="chat-input-bar">

        {/* Text Input */}
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Enter your message..."
        />

        {/* Send Button */}
        <button onClick={handleSend}>Send</button>
        
        {/* Volume Controller */}
        <VolumeController volume={volume} setVolume={setVolume} />

      </div>
    </div>
  );
}
