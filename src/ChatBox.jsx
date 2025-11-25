import { useState, useRef, useEffect } from "react";
import handleSend from "./HandleSend";
import sendSoundFile from "./assets/Send-sound-effect-1-trimmed.m4a";
import Ram from "./assets/RamAvatar.png"; 
import UserAvatar from "./assets/User_icon.png"; 
import "./index.css";

const sendSound = new Audio(sendSoundFile);

export default function ChatBox() {
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
    sendSound.play();

    handleSend({
      name,
      setName,
      userScript,
      setUserScript,
      chatScripts,
      setChatScripts
    });
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

                  {/* BOT ICON */}
                  {isBot && (
                    <img
                      src={Ram}
                      alt="Ramesses Avatar"
                      className="chat-avatar"
                    />
                  )}

                  {/* USER ICON */}
                  {!isBot && (
                    <img
                      src={UserAvatar}
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