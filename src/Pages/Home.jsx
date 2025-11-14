import { Link } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import ChatbotCard from "../components/ChatbotCard.jsx";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>
      <ChatbotCard />
    </div>
  );
}