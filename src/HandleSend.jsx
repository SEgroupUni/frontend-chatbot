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
    if (chatScripts.length === 1) {
      botBubble = createChatBubble(
        "Ram Ram the chatbot man",
        `Welcome ${currentName}! please provide details to aid your experience.`
      );
      window.dispatchEvent(new Event("open-options"));
    } else {
      botBubble = createChatBubble(
        "Ram Ram the chatbot man",
        "This is a bot reply. Will go to backend."
      );
    }

    setChatScripts(prev => [...prev, botBubble]);
  }, 500);
}
