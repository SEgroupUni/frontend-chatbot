import createChatBubble from "./CreateChatBubble";

export default async function handleSend({
  name,
  setName,
  userScript,
  setUserScript,
  chatScripts,
  setChatScripts
}) {
  if (userScript.trim() === "") return;

  let currentName = name;

  // STAGE 1 — First user message → name 
  if (chatScripts.length === 1) {
    currentName = userScript;
    setName(userScript);

    setChatScripts(prev => [...prev, createChatBubble(currentName, userScript)]);
    setUserScript("");

    setTimeout(() => {
      const botMessage = `Welcome, ${currentName}! What knowledge do you seek today? Maybe you'd like to learn about the exhibits at the museum, explore ancient Egyptian history or learn about my personal life as Pharaoh.`;
      const botBubble = createChatBubble("Ramesses II", botMessage);
      setChatScripts(prev => [...prev, botBubble]);
    }, 600);

    return; 
  }

  // STAGE 2 — Messages go to backend
  setChatScripts(prev => [...prev, createChatBubble(currentName, userScript)]);
  setUserScript("");

  setTimeout(async () => {
    try {
      const res = await fetch("http://localhost:3001/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userInput: userScript })
      });

      const data = await res.json();
      const botMessage = data.reply ?? "No reply from backend.";

      const botBubble = createChatBubble("Ramesses II", botMessage);
      setChatScripts(prev => [...prev, botBubble]);

      if (data.next) console.log("Next prompt:", data.next);

    } catch (err) {
      console.error("Backend error:", err);
      const errorBubble = createChatBubble(
        "Ramesses II",
        "Apologies, I'm unable to reach the server."
      );
      setChatScripts(prev => [...prev, errorBubble]);
    }
  }, 500);
}
