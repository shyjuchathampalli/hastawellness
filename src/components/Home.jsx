import React, { useState, useEffect } from "react";
import Button from "../layouts/Button";

// Import images from the src folder
import image1 from '../assets/img/home1.png';
import image2 from '../assets/img/home2.png';
import image3 from '../assets/img/home3.png';
import image4 from '../assets/img/home4.png';

const images = [image1, image2, image3, image4];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div
      className="w-full h-auto flex flex-col justify-center text-white bg-no-repeat bg-cover bg-center opacity-90 overflow-hidden mt-[106px]"
      style={{
        height: 'calc(100vw * 9 / 16)',
        backgroundImage: `url(${images[currentIndex]})`
      }}
    >
      <div className="w-full lg:w-4/5 space-y-5 mt-10 no-scrollbar overflow-auto">
        <Button title="See Services" />
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${currentIndex === index ? 'bg-white' : 'bg-gray-500'}`}
            onClick={() => setCurrentIndex(index)} // Allow manual selection of dots
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
