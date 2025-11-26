import "./OptionTable.css";
import offSound from "../assets/ToggleOffReduced.m4a"; 
import onSound from "../assets/ToggleOnReduced.m4a";

export default function HistoryInterest({setUserOptions, currentSelection, globalVolume}) {

    const handleClick=(interestValue) => {
        const audio = new Audio(currentSelection === interestValue ? offSound : onSound);
        audio.volume = globalVolume;
        audio.play();

        setUserOptions((prev) => ({
            ...prev,
            historyInterest: prev.historyInterest === interestValue ? null : interestValue
        }));
    };
    return(
        <div>
            <h2 style = {{textAlign: "center"}}>
                History engagement:
            </h2>
            <div className="option-buttons">
                <button
                    className={`button ${
                        currentSelection === "History Enthusiast" ? "selected" : ""}`}
                        onClick={() => handleClick("History Enthusiast")}
                >
                    History Enthusiast
                </button>

                <button
                    className={`button ${
                        currentSelection === "Casually Chatting " ? "selected" : ""}`}
                        onClick={() => handleClick("Casually Chatting ")}
                >
                    Casually Chatting 
                </button>
            </div>
        </div>
    )
}