import React from "react";
import { useNavigate } from "react-router-dom";

export default function ChatbotCard() {
    const navigate = useNavigate();
  return (
    <div className="chatbot-card" onClick={() => navigate("AiChatbot")}>
      <h2>Chat with Our Bot!</h2>
      <p>Get instant answers to your questions.</p>
      <button className="start-chat-button" onClick={() => navigate("AiChatbot")}>Start Chat</button>
    </div>
  );
}