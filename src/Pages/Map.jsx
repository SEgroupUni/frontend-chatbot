import NavBar from "../components/NavBar.jsx";
import groundFloor from "../assets/Museum_map_ground_floor.webp";
import lowerFloor from "../assets/Museum_map_lower_floor.webp";
import upperFloor from "../assets/Museum_map_upper_floor.webp";
import { useState } from "react";

export default function Map() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [startDrag, setStartDrag] = useState({ x: 0, y: 0 });

  const mapImages = [
    { src: lowerFloor, alt: "Lower Floor Map" },
    { src: groundFloor, alt: "Ground Floor Map" },
    { src: upperFloor, alt: "Upper Floor Map" },
  ];

  const handleMouseDown = (e) => {
    e.preventDefault();
    setDragging(true);
    setStartDrag({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    setPosition({ x: e.clientX - startDrag.x, y: e.clientY - startDrag.y });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;
    setZoom((prev) => Math.min(Math.max(prev * zoomFactor, 1), 3)); // zoom between 1x and 3x
  };

  return (
    <div>
      <NavBar />
      <h1>Museum Map</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        {mapImages.map((map, index) => (
          <img
            key={index}
            src={map.src}
            alt={map.alt}
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "8px",
              border: "1px solid #ccc",
              cursor: "pointer",
            }}
            onClick={() => {
              setSelectedImage(map.src);
              setZoom(1);
              setPosition({ x: 0, y: 0 });
            }}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
  <div
    onClick={() => setSelectedImage(null)} // clicking outside closes modal
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.8)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
      overflow: "hidden",
    }}
  >
    <img
      src={selectedImage}
      alt="Enlarged Map"
      style={{
        cursor: dragging ? "grabbing" : "grab",
        transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
        transition: dragging ? "none" : "transform 0.1s ease-out",
        maxWidth: "135%",
        maxHeight: "135%",
        borderRadius: "8px",
        userSelect: "none",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
      onClick={(e) => e.stopPropagation()} 
    />
  </div>
)}
    </div>
  );
}