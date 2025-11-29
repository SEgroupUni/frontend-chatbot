import createChatBubble from "./CreateChatBubble"; 

export default function handleSend({
  name,
  setName,
  userScript,
  setUserScript,
  chatScripts,
  setChatScripts
}) {
  if (userScript.trim() === "") return;

  // Decide what name to use
  let currentName = name;
  if (chatScripts.length === 1) {
    currentName = userScript;
    setName(userScript);
  }

  const userBubble = createChatBubble(currentName, userScript);
  setChatScripts(prev => [...prev, userBubble]);
  setUserScript("");
  
  // Delay bot reply
  setTimeout(() => {
    let botBubble;
    let botMessage;

    if (chatScripts.length === 1) {
      botMessage = `Welcome ${currentName}! please provide details to aid your experience.`;
      botBubble = createChatBubble("Ramesses II", botMessage);
      window.dispatchEvent(new Event("open-options"));
    } else {
      botMessage = "This is a bot reply. Will go to backend.";
      botBubble = createChatBubble("Ramesses II", botMessage);
    }

    setChatScripts(prev => [...prev, botBubble]);

  }, 500);
}
