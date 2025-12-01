import Default from "../assets/Default1.png"
import Thinking from "../assets/Thinking.png";
import Talking from "../assets/Talking.png";
import "../index.css"

export default function RamBot({ status }) {
  
  const getImage = () => {
    switch (status) {
      case "thinking":
        return Thinking;
      case "talking":
        return Talking;
      default:
        return Default;
    }
  };

  return (
    <div>
      <img src={getImage()} alt="Ramesses II" />
    </div>
  );
}