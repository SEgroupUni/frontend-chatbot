import "./ChatPage.css";

export default function ChatControls() {

  const endSession = async () => {
    try {
      await fetch("http://localhost:3001/api/sessionEnd", {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      });

      // Once backend confirms redirect to Home page, if not confirmed it'll still redirect just not save the session.
      window.location.href = "/";
    } catch (err) {
      console.error("Error ending session:", err);
      window.location.href = "/";
    }
  };
  
  const newSession = async () => {
    try {
      // Close current session and then starts a new once similar to ChatBotCard.
      await fetch("http://localhost:3001/api/sessionEnd", {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      });

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