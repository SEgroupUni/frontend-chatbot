import { useState } from "react";
import "./OptionTable.css";

export default function Age({setUserOptions, currentSelection}) {

    const handleClick = (ageValue) => {
        setUserOptions((prev) => ({
            ...prev,
            ageGroup: ageValue,
        }));
    };

    return(
        <div>
            <h2 style = {{textAlign: "center"}}>
                Age:
            </h2>
            <h3>
                <button
                    className={`button ${currentSelection === "3-11" ? "selected" : ""}`}
                    onClick={() => handleClick("3-11")}
                >
                    3-11
                </button>
                
                <button
                    className={`button ${currentSelection === "12-16" ? "selected" : ""}`}
                    onClick={() => handleClick("12-16")}
                >
                    12-16
                </button>

                <button
                    className={`button ${currentSelection === "17+" ? "selected" : ""}`}
                    onClick={() => handleClick("17+")}
                >
                    17+
                </button>
                
            </h3>
        </div>
    )
}

