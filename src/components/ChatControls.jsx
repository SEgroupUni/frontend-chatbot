import "./ChatPage.css";

export default function ChatControls() {
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
        onClick={() => (window.location.href = "/")}
      >
        End Session
      </button>

    </div>
  );
}