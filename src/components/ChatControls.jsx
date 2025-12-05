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
  
  const newSession = async () => {
    try {
      // Close current session
      await fetch("http://localhost:3001/api/sessionEnd", {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      });

      // Start a brand new session with persona
      await fetch("http://localhost:3001/api/session/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ initialData: "ramesses" })
      });
    } finally {
      window.location.href = "/AiChatbot";
    }
  };

  return (
    <div className="chat-box-controls">

      <button
        className="chat-box-reset"
        onClick={newSession}
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