import { useState, useRef, useEffect } from "react";
import handleSend from "./HandleSend";
import sendSoundFile from "./assets/Send-sound-effect-1-trimmed.m4a";
import './index.css';

const sendSound = new Audio(sendSoundFile);

function createChatBubble(sender, text) {
  return { sender, text };
}

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

  // Wrapper for passing all state to handleSend
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
        {chatScripts.map((bubble, index) => (
          <div
            key={index}
            className={`chat-bubble ${
              bubble.sender === "Ram Ram the chatbot man" ? "bot" : "user"
            }`}
          >
            <strong>{bubble.sender}:</strong>
            <div>{bubble.text}</div>
          </div>
        ))}
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

