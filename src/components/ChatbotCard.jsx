import { useNavigate } from "react-router-dom";

export default function ChatbotCard() {
    const navigate = useNavigate();

    const startChat = async () => {
        try {
            // Create session on backend
            await fetch("http://localhost:3001/api/session/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ initialData: "ramesses" })
            });

            // Navigate to chatbot page, if check was successful then chatbot page will be functional
            navigate("AiChatbot");
        } catch (err) {
            console.error("Failed to start session:", err);
            alert("Unable to start conversation with Ramesses II.");
        }
    };

    return (
      <div className="chatbot-card" onClick={startChat}>
        <div className="card-info">
          <h2>Chat With Ramesses II</h2>
          <p>Learn about Ramsesses II, Ancient Egyptian history, or the galleries around you.</p>
        </div>

        <div className="start-section">
          <button className="start-chat" onClick={startChat}>
            <em>Click anywhere to start chatting</em>
          </button>
        </div>
      </div>
    );
}