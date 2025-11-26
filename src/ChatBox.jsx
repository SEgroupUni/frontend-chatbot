import { useState, useRef, useEffect } from "react";
import handleSend from "./HandleSend";
import sendSoundFile from "./assets/Send-sound-effect-1-trimmed.m4a";

import DefaultUserAvatar from "./assets/Avatar_0.png"; 
import RamAvatar from "./assets/RamAvatar.png";

import "./index.css";

export default function ChatBox({ 
  globalVolume, 
  onUserMessage, 
  botStatus,
  userAvatar        // ⬅ NEW: custom avatar from App
}) { 
  const [name, setName] = useState("User");
  const [userScript, setUserScript] = useState("");
  const [chatScripts, setChatScripts] = useState([
    {
      sender: "Ram Ram the chatbot man",
      text: "I the Pharaoh Ram Ram the chatbot man! What is your name, mortal?"
    }
  ]);

  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatScripts]);

  const sendMessage = () => {
    if (userScript.trim() === "") return;

    const audio = new Audio(sendSoundFile);
    audio.volume = globalVolume; 
    audio.play();

    handleSend({
      name,
      setName,
      userScript,
      setUserScript,
      chatScripts,
      setChatScripts
    });

    if (onUserMessage) onUserMessage();

    setUserScript("");
  };

  return (
    <div className="chat-box">
      <div className="chat-box-messages">
        {chatScripts.map((bubble, index) => {
          const isBot = bubble.sender === "Ram Ram the chatbot man";

          return (
            <div
              key={index}
              className={`chat-bubble ${isBot ? "bot" : "user"}`}
            >
              <div className="chat-text">
                <div className="chat-header">

                  {isBot && (
                    <img
                      src={RamAvatar}
                      alt="Ram Avatar"
                      className="chat-avatar"
                    />
                  )}

                  {!isBot && (
                    <img
                      src={userAvatar || DefaultUserAvatar}   // ⬅ UPDATED: dynamic avatar
                      alt="User Avatar"
                      className="chat-avatar"
                    />
                  )}

                  <strong className="chat-name">{bubble.sender}:</strong>
                </div>

                <div className="chat-message">{bubble.text}</div>
              </div>
            </div>
          );
        })}

        <div ref={messagesEndRef} />
      </div>

      <div className="chat-bubble user input-bubble">
        <input
          type="text"
          value={userScript}
          onChange={(e) => setUserScript(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Enter your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}