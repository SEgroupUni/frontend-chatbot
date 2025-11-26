import Avatar1 from "../assets/Avatar_0.png";
import Avatar2 from "../assets/Avatar_1.png";
import Avatar3 from "../assets/Avatar_2.png";
import "./Icon.css";
import onSound from "../assets/ToggleOnReduced.m4a";

export default function IconSelect({ selectedAvatar, onChange, globalVolume = 0.5 }) {
  const avatars = [Avatar1, Avatar2, Avatar3];

  const handleClick = (avatar) => {
    // Play sound
    const audio = new Audio(onSound);
    audio.volume = globalVolume;
    audio.play();

    // Update avatar
    onChange(avatar);
  };

  return (
    <div> <h2>Choose Icon:</h2> 
    <div className="avatar-grid">
      {avatars.map((avatar, index) => (
        <img
            key={index}
            src={avatar}
            alt={"Avatar " + index}
            className={`avatar-option ${
        selectedAvatar === avatar ? "avatar-selected" : ""
        }`}
        onClick={() => handleClick(avatar)}
        />
      ))}
     </div>
    </div>
  );
}