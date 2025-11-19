import { useState } from "react";
import "./OptionTable.css";

export default function Age({setUserOptions, currentSelection}) {

    const handleClick = (ageValue) => {
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

