import NavBar from "../components/NavBar.jsx";
import ChatbotCard from "../components/ChatbotCard.jsx";
import RotatingCard from "../components/RotatingCard.jsx";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Welcome to the British Museum</h1>
      <ChatbotCard />
      <h2>Book Exhibitions and Events</h2>
      <RotatingCard interval={5000} />
    </div>
  );
}