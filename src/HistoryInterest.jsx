import { useState } from "react";
import './SelectedButton.css'
export default function HistoryInterest(){
    const[selectedButton, setSelectedButton] = useState(null)

    const handleClick=(buttonIndex)=>{
        setSelectedButton(buttonIndex);
    }
    return(
        <div>
            <h2 style = {{textAlign: "center"}}>
                History engagement:
            </h2>
            <h3>
                <button className={`button ${selectedButton === 0 ? 'selected' : ''}`}onClick={() => handleClick(0)}>I enjoy history</button>
                <button className={`button ${selectedButton === 1 ? 'selected' : ''}`}onClick={() => handleClick(1)}>I am chatting casually</button>
            </h3>
        </div>
    )
}

