import React, { useState, useEffect } from "react";
import Button from "../layouts/Button";
import PropTypes from "prop-types";

const Banner = ({ images, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval); // Change image every 'interval' milliseconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [images.length, interval]);

  return (
    <div
      className="w-full h-auto flex flex-col justify-center text-white bg-no-repeat bg-cover bg-center opacity-90 overflow-hidden mt-[106px]"
      style={{
        height: 'calc(100vw * 9 / 16)',
        backgroundImage: `url(${images[currentIndex]})`
      }}
    >
      <div className="w-full lg:w-4/5 space-y-5 mt-10 no-scrollbar overflow-auto">
        {/* You can add any buttons or content here */}
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
      <div className="w-full lg:w-4/5 space-y-5 mt-10 no-scrollbar overflow-auto">
        <Button title="See Services" />
      </div>
    </div>
  );
};

Banner.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  interval: PropTypes.number,
};

Banner.defaultProps = {
  interval: 5000,
};

export default Banner;
