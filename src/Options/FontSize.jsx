import { useState } from "react";
import "./OptionTable.css";

export default function Font({setUserOptions, currentSelection}){

    const handleClick = (sizeValue) => {
        setUserOptions((prev) => ({
            ...prev,
            fontSize: prev.fontSize === sizeValue ? null : sizeValue
        }))
    };
    return(
        <div>
            <h2 style = {{textAlign: "center"}}>
                Font Size:
            </h2>
            <div className="option-buttons">
                <button
                    className={`button ${currentSelection === "Small" ? "selected" : ""}`}
                    onClick={() => handleClick("Small")}
                >
                    Small
                </button>

                <button
                    className={`button ${currentSelection === "Medium" ? "selected" : ""}`}
                    onClick={() => handleClick("Medium")}
                >
                    Medium
                </button>

                <button
                    className={`button ${currentSelection === "Large" ? "selected" : ""}`}
                    onClick={() => handleClick("Large")}
                >
                    Large
                </button>
            </div>
        </div>
    )
}

