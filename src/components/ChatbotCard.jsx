import React from "react";
import { useNavigate } from "react-router-dom";

export default function ChatbotCard() {
    const navigate = useNavigate();
  return (
    <div className="chatbot-card" onClick={() => navigate("AiChatbot")}>
      <h2>Ramses ii AI ChatBot!</h2>
      <p>Get instant answers to your questions.</p>
      <div className="StartSection">
        <button className="StartChat" onClick={() => navigate("AiChatbot")}>Start Chat</button>
      </div>
    </div>
  );
}