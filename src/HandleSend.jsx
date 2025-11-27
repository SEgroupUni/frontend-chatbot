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

  // Logic to set the User's Name 
  let currentName = name;
  const isFirstMessage = chatScripts.length === 1;

  if (isFirstMessage) {
    currentName = userScript;
    setName(userScript);
  }

  // Create the User Bubble 
  const userBubble = createChatBubble(currentName, userScript);
  setChatScripts(prev => [...prev, userBubble]);
  setUserScript(""); 

  // Send to Backend
  try {
    const response = await fetch("http://localhost:3001/api/message", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            text: userScript,
            sessionData: { userName: currentName } 
        }) 
    });

    const data = await response.json();

    // Create the Bot Bubble with the real reply
    const botBubble = createChatBubble(
        "Ram Ram the chatbot man", 
        data.message || "Error: No reply from AI"
    );

    setChatScripts(prev => [...prev, botBubble]);

    // Open options on the first message
    if (isFirstMessage) {
        window.dispatchEvent(new Event("open-options"));
    }

  } catch (error) {
    console.error("Connection Failed:", error);
    const errorBubble = createChatBubble("System", "Error: Could not connect to backend.");
    setChatScripts(prev => [...prev, errorBubble]);
  }
}