import { useState, useEffect } from "react";
import "../index.css";

// Import images
import img1 from "../assets/BritishMuseum1.png";
import img2 from "../assets/BritishMuseum2.png";
import img3 from "../assets/BritishMuseum3.png";
import img4 from "../assets/BritishMuseum4.png";
import img5 from "../assets/BritishMuseum5.png";
import img6 from "../assets/BritishMuseum6.png";

const images = [img1, img2, img3, img4, img5, img6];

export default function RotatingCard({ interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const link = "https://ticketing.britishmuseum.org/events/hawaii-a-kingdom-crossing-oceans/?view=calendar&span=month&startdate=2026-01-15&_gl=1*1vqkjg6*_gcl_au*NzA3MjQ2NTAuMTc2MDYzMzE4Ng..*_ga*MTI4MzYwNDY4My4xNzYwNjMzMTg3*_ga_08TLB9R8X1*czE3NjM4Mjk1MDEkbzckZzEkdDE3NjM4Mjk1MzYkajI1JGwwJGgw";

  useEffect(() => {
    const rotation = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(rotation);
  }, [interval]);

  return (
   <div className="rotation-card">
      <img
        src={images[currentIndex]}
        alt={`British Museum ${currentIndex + 1}`}
        onClick={() => window.open(link, "_blank")}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}