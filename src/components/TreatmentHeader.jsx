import React from "react";

const TreatmentHeader = ({ title, caption }) => {
  return (
    <div className="bg-customPurple text-white text-center py-10 h-[320px] mt-[106px] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-2 mt-8">{title}</h1>
      <p className="text-lg">{caption}</p>
    </div>
  );
};

export default TreatmentHeader;