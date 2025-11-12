import { useState, useEffect } from "react";
import OptionTable from "./OptionTable";
import "./OptionDrawer.css";

export default function OptionToggle() {
  const [open, setOpen] = useState(false);


  const toggle = () => setOpen(prev => !prev);

  useEffect(() => {
    const openDrawer = () => setOpen(true);
    window.addEventListener("open-options", openDrawer);
    return () => window.removeEventListener("open-options", openDrawer);
  }, []);

  return (
    <div className="option-toggle-wrapper">
      <button className="options-toggle" onClick={toggle}>
        {open ? "Close Options" : "Show Options"}
      </button>

      <div className={`options-drawer ${open ? "open" : ""}`}>
        <OptionTable />
      </div>
    </div>
  );
}

