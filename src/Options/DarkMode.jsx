import "./OptionTable.css";
import offSound from "../assets/ToggleOffReduced.m4a"; 
import onSound from "../assets/ToggleOnReduced.m4a";

export default function DarkMode({ setUserOptions, currentSelection, globalVolume }) {

    const handleClick = () => {
        const audio = new Audio(currentSelection ? offSound : onSound);
        audio.volume = globalVolume;
        audio.play();

        setUserOptions((prev) => {
            const newMode = !prev.DarkMode;

            if (newMode) {
                document.body.classList.add("dark");
            } else {
                document.body.classList.remove("dark");
            }

            localStorage.setItem("darkMode", newMode);

            return {
                ...prev,
                DarkMode: newMode
            };
        });
    };

    return (
        <div>
            <h2>Dark Mode:</h2>
            <button
                className={`button ${currentSelection ? "selected" : ""}`}
                onClick={handleClick}
            >
                Toggle Dark Mode
            </button>
        </div>
    );
}