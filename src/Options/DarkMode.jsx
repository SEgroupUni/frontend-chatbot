import "./OptionTable.css";

export default function DarkMode({ setUserOptions, currentSelection }) {

    const handleClick = () => {
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