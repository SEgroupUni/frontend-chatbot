import { useState } from "react";
import './SelectedButton.css'
export default function Font(){
    const[Size, setSize] = useState(null)

    const handleClick=(buttonIndex)=>{
        setSize(buttonIndex);
    }
    return(
        <div>
            <h2 style = {{textAlign: "center"}}>
                FontSize:
            </h2>
            <h3>
                <button className={`button ${Size === 0 ? 'selected' : ''}`}onClick={() => handleClick(0)}>Small</button>
                <button className={`button ${Size === 1 ? 'selected' : ''}`}onClick={() => handleClick(1)}>Medium</button>
                <button className={`button ${Size === 2 ? 'selected' : ''}`}onClick={() => handleClick(2)}>Large</button>
            </h3>
        </div>
    )
}

