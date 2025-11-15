import { useState } from "react";
import './SelectedButton.css'


export default function Gender({setUserOptions, currentSelection}) {

    const handleClick=(genderValue) => {
        setUserOptions((prev) => ({
            ...prev,
            gender: genderValue,
        }))
    };
    return(
        <div>
            <h2 style = {{textAlign: "center"}}>
                Gender:
            </h2>
            <h3>
                <button
                    className={`button ${currentSelection === "Male" ? "selected" : ""}`}
                    onClick={() => handleClick("Male")}
                >
                    Male
                </button>

                <button
                    className={`button ${currentSelection === "Female" ? "selected" : ""}`}
                    onClick={() => handleClick("Female")}
                >
                    Female
                </button>

                <button
                    className={`button ${
                        currentSelection === "Prefer not to say" ? "selected" : ""}`}
                        onClick={() => handleClick("Prefer not to say")}
                >
                    Prefer not to say
                </button>
 
            </h3>
        </div>
    )
}

