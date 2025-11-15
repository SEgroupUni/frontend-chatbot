import { useState } from "react";
import './SelectedButton.css'

export default function Font({setUserOptions, currentSelection}){

    const handleClick = (sizeValue) => {
        setUserOptions((prev) => ({
            ...prev,
            fontSize: sizeValue, 
        }))
    };
    return(
        <div>
            <h2 style = {{textAlign: "center"}}>
                FontSize:
            </h2>
            <h3>
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
            </h3>
        </div>
    )
}

