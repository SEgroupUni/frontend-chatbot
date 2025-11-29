import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, NotFound } from "./Pages" ;
import './index.css';
import App from './App.jsx';


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />         
      <Route path="aichatbot" element={<App />} />   
      <Route path="*" element={<NotFound />} /> 
    </Routes>
  </BrowserRouter>
);