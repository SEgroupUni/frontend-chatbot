import createChatBubble from "./CreateChatBubble";

export default async function handleSend({
  name,
  setName,
  userScript,
  setUserScript,
  chatScripts,
  setChatScripts,
  setBotStatus
}) {
  if (!userScript.trim()) return;

  let currentName = name;

  // Asks for Name
  if (chatScripts.length === 1) {
    setChatScripts(prev => [...prev, createChatBubble(currentName, userScript)]);
    setUserScript("");

    currentName = userScript;
    setName(userScript);

    setBotStatus("thinking");

    setTimeout(() => { //Initial prompt to give users Ideas on what to ask. Bot will do thinking and talking animations 
      const botMessage = `Welcome, ${currentName}! What knowledge do you seek today?  
      Perhaps you are curious about the museum exhibits, Egyptian history,  
      or my personal life as Pharaoh.`;

      setBotStatus("talking");

      setChatScripts(prev => [
        ...prev,
        createChatBubble("Ramesses II", botMessage)
      ]);

      setTimeout(() => setBotStatus(null), 1500);
    }, 600);

    return;
  }

  // Chats with backend
  setChatScripts(prev => [...prev, createChatBubble(currentName, userScript)]);
  setUserScript("");

  setBotStatus("thinking");


  try {
    const res = await fetch("http://localhost:3001/api/messages", { //will retrieve response from backend and do animations too
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userInput: userScript })
    });

    const data = await res.json();
    const botMessage = data.response ?? "No reply from backend.";

    setBotStatus("talking");

    setChatScripts(prev => [
      ...prev,
      createChatBubble("Ramesses II", botMessage)
    ]);

    setTimeout(() => setBotStatus(null), 1500);

  } catch (err) {
    console.error("Backend error:", err);

    setBotStatus("talking");
    setChatScripts(prev => [
      ...prev,
      createChatBubble("Ramesses II", "Apologies, I cannot reach the server.")
    ]);

    setTimeout(() => setBotStatus(null), 1500);
  }
}