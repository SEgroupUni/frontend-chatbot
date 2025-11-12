import { useState } from "react";
import './SelectedButton.css'
export default function Age(){
    const[Age, setAge] = useState(null)

    const handleClick=(buttonIndex)=>{
        setAge(buttonIndex);
    }
    return(
        <div>
            <h2 style = {{textAlign: "center"}}>
                Age:
            </h2>
            <h3>
                <button className={`button ${Age === 0 ? 'selected' : ''}`}onClick={() => handleClick(0)}>3-11</button>
                <button className={`button ${Age === 1 ? 'selected' : ''}`}onClick={() => handleClick(1)}>12-16</button>
                <button className={`button ${Age === 2 ? 'selected' : ''}`}onClick={() => handleClick(2)}>17+</button>
            </h3>
        </div>
    )
}

