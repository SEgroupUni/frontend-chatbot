import NavBar from "../components/NavBar.jsx";
import groundFloor from "../assets/Museum_map_ground_floor.webp";
import lowerFloor from "../assets/Museum_map_lower_floor.webp";
import upperFloor from "../assets/Museum_map_upper_floor.webp";
import { useState } from "react";

export default function Map() {
  const [selectedImage, setSelectedImage] = useState(null);
  const mapImages = [
    { src: groundFloor, alt: "Ground Floor Map" },
    { src: lowerFloor, alt: "Lower Floor Map" },
    { src: upperFloor, alt: "Upper Floor Map" },
  ];

  return (
    <div>
      <NavBar />
      <h1>Map Page</h1>
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
              cursor: "pointer", // show it’s clickable
            }}
            onClick={() => setSelectedImage(map.src)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
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
            cursor: "pointer",
          }}
        >
          <img
            src={selectedImage}
            alt="Enlarged Map"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "8px",
            }}
          />
        </div>
      )}
    </div>
  );
}