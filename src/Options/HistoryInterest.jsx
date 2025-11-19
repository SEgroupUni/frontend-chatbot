import { useState } from "react";
import "./OptionTable.css";

export default function HistoryInterest({setUserOptions, currentSelection}) {

    const handleClick=(interestValue) => {
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

