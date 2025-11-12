import { useState } from "react";
import './SelectedButton.css'
export default function Gender(){
    const[gender, setGender] = useState(null)

    const handleClick=(buttonIndex)=>{
        setGender(buttonIndex);
    }
    return(
        <div>
            <h2 style = {{textAlign: "center"}}>
                Gender:
            </h2>
            <h3>
                <button className={`button ${gender === 0 ? 'selected' : ''}`}onClick={() => handleClick(0)}>Male</button>
                <button className={`button ${gender === 1 ? 'selected' : ''}`}onClick={() => handleClick(1)}>Female</button>
                <button className={`button ${gender === 2 ? 'selected' : ''}`}onClick={() => handleClick(2)}>Prefer not to say</button>
            </h3>
        </div>
    )
}

