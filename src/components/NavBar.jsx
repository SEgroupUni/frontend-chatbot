import React from "react";
import {useNavigate} from "react-router-dom";
import Logo from "../assets/Logo.jpg";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <nav>
        <ul className="NavBar">
        <div>
        <img src={Logo} className="Logo" alt="BritishMuseumLogo"/>
        </div>

      <button className="Home" onClick={() => navigate("/")}>Home</button>
        <button className="Visit" onClick={() => navigate("/About")}>Visit</button>
        <button className="Map" onClick={() => navigate("/Map")}>Map</button>
        <button className="SupportUs" onClick={() => navigate("/SupportUs")}>Support Us</button>
        <button className="Contact" onClick={() => navigate("/Contact")}>Contact</button>
        </ul>
    </nav>
  );
}

