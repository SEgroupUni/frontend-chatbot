import "./OptionTable.css";
import offSound from "../assets/ToggleOffReduced.m4a"; 
import onSound from "../assets/ToggleOnReduced.m4a";

export default function DarkMode({ setUserOptions, currentSelection }) {

    const handleClick = () => {

        if (currentSelection) {
            new Audio(offSound).play();
        } else {
            new Audio(onSound).play();
        }

        setUserOptions((prev) => {
            const newMode = !prev.DarkMode;

            // Apply/remove dark class on <body>
            if (newMode) {
                document.body.classList.add("dark");
            } else {
                document.body.classList.remove("dark");
            }

            // Save preference in localStorage
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