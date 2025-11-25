import { useState, useEffect } from "react";
import OptionTable from "./OptionTable";
import "./OptionDrawer.css";
import SwipeSound from "../assets/OptionsTableSwipe.mp3";

export default function OptionToggle() {
  const [open, setOpen] = useState(false);

  const [userOptions, setUserOptions] = useState({
    fontSize: null, ageGroup: null, gender: null, historyInterest: null,
  })


  const toggle = () => {
    new Audio(SwipeSound).play();
    setOpen(prev => !prev);
  };

  useEffect(() => {
    const openDrawer = () => {
      new Audio(SwipeSound).play();
      setOpen(true);
    } 
    
    window.addEventListener("open-options", openDrawer);
    return () => window.removeEventListener("open-options", openDrawer);
  }, []);

  return (
    <div className="option-toggle-wrapper">
      <button className="options-toggle" onClick={toggle}>
        {open ? "Close Options" : "Show Options"}
      </button>

      <div className={`options-drawer ${open ? "open" : ""}`}>
        <OptionTable 
          userOptions={userOptions}
          setUserOptions={setUserOptions}        
        />
      </div>
    </div>
  );
}

