import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Map, About, SupportUs, Contact, NotFound } from "./Pages" ;
import './index.css';
import App from './App.jsx';


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />         
      <Route path="about" element={<About />} />  
      <Route path="map" element={<Map />} />  
      <Route path="supportus" element={<SupportUs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="aichatbot" element={<App />} />   
      <Route path="*" element={<NotFound />} /> 
    </Routes>
  </BrowserRouter>
);