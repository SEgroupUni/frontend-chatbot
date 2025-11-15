import { useState } from "react";
import './SelectedButton.css'


export default function HistoryInterest({setUserOptions, currentSelection}) {

    const handleClick=(interestValue) => {
        setUserOptions((prev) => ({
            ...prev,
            historyInterest: interestValue,
        }));
    };
    return(
        <div>
            <h2 style = {{textAlign: "center"}}>
                History engagement:
            </h2>
            <h3>
                <button
                    className={`button ${
                        currentSelection === "I enjoy history" ? "selected" : ""}`}
                        onClick={() => handleClick("I enjoy history")}
                >
                    I enjoy history
                </button>

                <button
                    className={`button ${
                        currentSelection === "I am chatting casually" ? "selected" : ""}`}
                        onClick={() => handleClick("I am chatting casually")}
                >
                    I am chatting casually
                </button>
            </h3>
        </div>
    )
}

