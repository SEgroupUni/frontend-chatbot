import "./OptionTable.css";
import offSound from "../assets/ToggleOffReduced.m4a"; 
import onSound from "../assets/ToggleOnReduced.m4a";

export default function Age({setUserOptions, currentSelection, globalVolume}) {

    const handleClick = (ageValue) => {
        const audio = new Audio(currentSelection === ageValue ? offSound : onSound);
        audio.volume = globalVolume; 
        audio.play();


        setUserOptions((prev) => ({
            ...prev,
            ageGroup: prev.ageGroup === ageValue ? null : ageValue,
        }));
    };

    return(
        <div>
            <h2 style = {{textAlign: "center"}}>
                Age:
            </h2>
            <div className="option-buttons">
                <button
                    className={`button ${currentSelection === "3-11" ? "selected" : ""}`}
                    onClick={() => handleClick("3-11")}
                >
                    3-11
                </button>
                
                <button
                    className={`button ${currentSelection === "12–17" ? "selected" : ""}`}
                    onClick={() => handleClick("12–17")}
                >
                    12–17
                </button>
                
                <button
                    className={`button ${currentSelection === "18+" ? "selected" : ""}`}
                    onClick={() => handleClick("18+")}
                >
                    18+
                </button>
            </div>
            
        </div>
    )
}