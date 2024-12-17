import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Banner = ({ images, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Update progress bar every 50ms
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + (50 / interval) * 100;
        return newProgress >= 100 ? 0 : newProgress;
      });
    }, 50);

    // Change image when interval completes
    const imageInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setProgress(0); // Reset progress when image changes
    }, interval);

    return () => {
      clearInterval(progressInterval);
      clearInterval(imageInterval);
    };
  }, [images.length, interval]);

  return (
    <div
      className="relative w-full h-auto flex flex-col justify-center text-white bg-no-repeat bg-cover bg-center opacity-90 overflow-hidden mt-[106px]"
      style={{
        height: "calc(100vw * 9 / 16)",
        backgroundImage: `url(${images[currentIndex]})`,
      }}
    >
      <div className="w-full lg:w-4/5 space-y-5 mt-10 no-scrollbar overflow-auto">
        {/* Add any buttons or content here */}
      </div>
      
      {/* Progress bar */}
      <div
        className="absolute top-5 left-0 h-1 bg-customYellow z-10"
        style={{
          width: `${progress}%`,
          transition: "width 50ms linear",
        }}
      />

      {/* Navigation dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => {
              setCurrentIndex(index);
              setProgress(0); // Reset progress on manual navigation
            }}
          />
        ))}
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
