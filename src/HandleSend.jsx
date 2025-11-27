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
      botBubble = createChatBubble("Ram Ram the chatbot man", botMessage);
      window.dispatchEvent(new Event("open-options"));
    } else {
      botMessage = "This is a bot reply. Will go to backend.";
      botBubble = createChatBubble("Ram Ram the chatbot man", botMessage);
    }

    setChatScripts(prev => [...prev, botBubble]);

    // Text-to-Speech for bot response
    if (window.speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(botMessage);

      utterance.voice = window.speechSynthesis.getVoices()[0];

      window.speechSynthesis.speak(utterance);
    }

  }, 500);
}
