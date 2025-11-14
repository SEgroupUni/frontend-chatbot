import React from "react";
import {useNavigate} from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <nav>
        <ul className="NavBar">
      <button className="Home" onClick={() => navigate("/")}>Home</button>
        <button className="About" onClick={() => navigate("/About")}>About</button>
        <button className="Map" onClick={() => navigate("/Map")}>Map</button>
        <button className="SupportUs" onClick={() => navigate("/SupportUs")}>Support Us</button>
        <button className="Contact" onClick={() => navigate("/Contact")}>Contact</button>
        </ul>
    </nav>
  );
}

