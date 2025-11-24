import React from "react";
import {useNavigate} from "react-router-dom";
import Logo from "../assets/Logo.jpg";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <nav>
        <ul className="nav-bar">
        <div>
        <img src={Logo} className="logo" alt="BritishMuseumLogo"/>
        </div>

      <button className="home" onClick={() => navigate("/")}>Home</button>
        <button className="visit" onClick={() => navigate("/About")}>Visit</button>
        <button className="map" onClick={() => navigate("/Map")}>Map</button>
        <button className="support-us" onClick={() => navigate("/SupportUs")}>Support Us</button>
        <button className="contact" onClick={() => navigate("/Contact")}>Contact</button>
        </ul>
    </nav>
  );
}

