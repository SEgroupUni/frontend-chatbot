import { useState, useRef, useEffect } from "react";
import handleSend from "./HandleSend";
import sendSoundFile from "../assets/Send-sound-effect-1-trimmed.m4a";
import DefaultUserAvatar from "../assets/Avatar_0.png";
import ChatInput from "./ChatInput";
import ChatControls from "./ChatControls"; 

import "./ChatPage.css";

export default function ChatBox({
  globalVolume,
  setGlobalVolume,
  onUserMessage,
  userAvatar,
  setBotStatus
}) {
  const [name, setName] = useState("User");
  const [userScript, setUserScript] = useState("");
  const [chatScripts, setChatScripts] = useState([
    {
      sender: "Ramesses II",
      text: "Greetings! I am the great Ramesses II. What is your name visitor?"
    }
  ]);

  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatScripts]);

  const sendMessage = (messageFromInput) => {
    const finalMessage = messageFromInput || userScript;

    if (!finalMessage.trim()) return;

    // Play sound
    const audio = new Audio(sendSoundFile);
    audio.volume = globalVolume;
    audio.play();

    handleSend({
      name,
      setName,
      userScript: finalMessage,
      setUserScript,
      chatScripts,
      setChatScripts,
      setBotStatus
    });

    if (onUserMessage) onUserMessage();
    setUserScript("");
  };

  return (
  <div className="chat-wrapper">
      
      {/* CHAT WINDOW */}
      <div className="chat-box">
      <div>
        {/* ChatBox Buttons */}
        <ChatControls />
      </div>

        <div className="chat-box-messages">
          {chatScripts.map((bubble, index) => {
            const isBot = bubble.sender === "Ramesses II";

            return (
              <div
                key={index}
                className={`chat-bubble ${isBot ? "bot" : "user"}`}
              >
                <div className="chat-text">
                  <div className="chat-header">


                    {!isBot && (
                      <img
                        src={userAvatar || DefaultUserAvatar}
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
      </div>

      <ChatInput
        onSend={sendMessage}         
        volume={globalVolume}           
        setVolume={setGlobalVolume}     
      />

    </div>
  );
}