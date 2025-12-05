import "./ChatPage.css";

export default function ChatControls() {

  const endSession = async () => {
    try {
      await fetch("http://localhost:3001/api/sessionEnd", {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      });

      // Once backend confirms redirect to Home page
      window.location.href = "/";
    } catch (err) {
      console.error("Error ending session:", err);
      // If there is an error still redirect but backend will not save log
      window.location.href = "/";
    }
  };

  return (
    <div className="chat-box-controls">

      <button
        className="chat-box-reset"
        onClick={() => (window.location.href = "AiChatbot")}
      >
        New Chat
      </button>

      <button
        className="chat-box-end"
        onClick={endSession}
      >
        End Session
      </button>

    </div>
  );
}