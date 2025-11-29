
import { useNavigate } from "react-router-dom";

export default function ChatbotCard() {
    const navigate = useNavigate();
  return (
    <div className="chatbot-card" onClick={() => navigate("AiChatbot")}>
      <div className="card-info">
        <h2>Chat With Ramesses II</h2>
       <p>Learn about Ramsesses II, Ancient Egyptian history, or the galleries around you.</p>
      </div>
      <div className="start-section">
        <button className="start-chat" onClick={() => navigate("AiChatbot")}><em>Click anywhere to start chatting</em></button>
      </div>
    </div>
  );
}