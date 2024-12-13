import React from "react";

const Overview = ({ title, caption, briefing, image }) => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between mx-5 lg:mx-36 my-16">
      {/* Left Section */}
      <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
        <h2 className="text-3xl font-bold text-customPurple mb-4">{title}</h2>
        <p className="text-lg text-gray-700 mb-6">{caption}</p>
        <p className="text-sm text-gray-500">{briefing}</p>
      </div>

      {/* Right Section */}
      <div className="flex justify-center items-center">
        <img src={image} alt="Overview" className="max-w-full h-auto rounded-md shadow-lg h-[400px]" />
      </div>
    </div>
  );
};

export default Overview;
