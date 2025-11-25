import { useState } from "react";
import "./OptionTable.css";
import offSound from "../assets/ToggleOffReduced.m4a"; 
import onSound from "../assets/ToggleOnReduced.m4a";

export default function Gender({setUserOptions, currentSelection}) {

    const handleClick=(genderValue) => {
        if (currentSelection === genderValue) { 
            new Audio(offSound).play();
        } else {
            new Audio(onSound).play();
        }

        setUserOptions((prev) => ({
            ...prev,
            gender: prev.gender === genderValue ? null : genderValue
        }))
    };
    return(
        <div>
            <h2 style = {{textAlign: "center"}}>
                Gender:
            </h2>
            <div className="option-buttons">
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
 
            </div>
        </div>
    )
}

