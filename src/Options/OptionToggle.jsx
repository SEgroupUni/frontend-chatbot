import { useState, useEffect } from "react";
import OptionTable from "./OptionTable";
import "./OptionDrawer.css";
import SwipeSound from "../assets/OptionsTableSwipeIncreased.m4a";

export default function OptionToggle({ globalVolume, setGlobalVolume }) {
  const [open, setOpen] = useState(false);

  const [userOptions, setUserOptions] = useState({
    fontSize: null, ageGroup: null, gender: null, historyInterest: null,
  })

  const toggle = () => {
    const audio = new Audio(SwipeSound);
    audio.volume = globalVolume;
    audio.play();
    
    setOpen(prev => !prev);
  };

  useEffect(() => {
    const openDrawer = () => {
      const audio = new Audio(SwipeSound);
      audio.volume = globalVolume;
      audio.play();
      
      setOpen(true);
    } 
    
    window.addEventListener("open-options", openDrawer);
    return () => window.removeEventListener("open-options", openDrawer);
  }, [globalVolume]); 

  return (
    <div className="option-toggle-wrapper">
      <button className="options-toggle" onClick={toggle}>
        {open ? "Close Options" : "Show Options"}
      </button>

      <div className={`options-drawer ${open ? "open" : ""}`}>
        <OptionTable 
          userOptions={userOptions}
          setUserOptions={setUserOptions}
          globalVolume={globalVolume}       
        />
      </div>
    </div>
  );
}