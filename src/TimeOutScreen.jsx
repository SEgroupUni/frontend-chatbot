import { useState, useEffect } from "react";
import './TimeOutScreen.css'
import logo from './assets/british-museum-logo.jpg'
import image1 from './assets/BritishMuseum1.png'
import image2 from './assets/BritishMuseum2.png'
import image3 from './assets/BritishMuseum3.png'
import image4 from './assets/BritishMuseum4.png'
import image5 from './assets/BritishMuseum5.png'
import image6 from './assets/BritishMuseum6.png'

function ImageRotator() {
  const [index, setIndex] = useState(0);
  const images = [image1, image2, image3, image4, image5, image6]

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length); // cycle through 0-5
    }, 2000); // change every 2 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return <img src={images[index]} alt="rotating" />;
}
    
function TimeOutScreen() {
  return (
    <>
      <header className="header-container">
        <img src={logo} className="header-img" alt="Logo" />
      </header>

      <div className="image-container">
        <ImageRotator />  {/* no need to pass images */}
      </div>
    </>
  );
}

export default TimeOutScreen;
