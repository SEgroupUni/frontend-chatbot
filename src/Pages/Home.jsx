import ChatbotCard from "../components/ChatbotCard.jsx";
import Logo from "../assets/Museum_logo.png";
import "../index.css";

export default function Home() {
  return (

    <div className="background">
       <img 
        src={Logo}
        alt="British Museum Logo" 
        style={{ height: "70px", marginRight: "10px" }}
        />
        <h1 className="welcome">Welcome to the British Museum</h1>
      <ChatbotCard />
    </div>
  );
}