import React, { useState } from "react";

const treatments = [
    {
        title: "Dandruff Rub With Shower",
        description: "A soothing treatment that helps eliminate dandruff while promoting scalp health.",
        sessions: "3",
      },
      {
        title: "Multi-vitamin Mesotherapy",
        description: "Nutrient-rich injections that nourish the scalp and stimulate hair growth.",
        sessions: "3",
      },
      {
        title: "PRP Therapy",
        description: "Platelet-rich plasma therapy that rejuvenates hair follicles for improved growth.",
        sessions: "3",
      },
      {
        title: "Products (Serum, Antioxidants, Shampoo, Conditioner)",
        description: "Recommended products to support daily hair care and enhance overall hair health.",
        sessions: "-",
      },
      {
        title: "3-Month Diet Plan",
        description: "Customized diet plan focusing on nutrition essential for healthy hair.",
        sessions: "4",
      },
      {
        title: "Blood Diagnostics",
        description: "Comprehensive blood tests to assess health and identify deficiencies affecting hair growth.",
        sessions: "2",
      },
      {
        title: "General Physician Consultation",
        description: "Expert consultation to address health concerns related to hair loss.",
        sessions: "3",
      },
  ];

const HairfallAccordion = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Title at the top */}
      <h2 className="text-2xl font-bold text-customPurple text-center mb-6">
        Our Package Includes...
      </h2>
      {/* Cards displayed below */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {treatments.map((treatment, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-lg transition-all hover:shadow-xl"
          >
            <h3 className="font-light text-lg font-semibold text-customPurple mb-2">{treatment.title}</h3>
            <p className="text-gray-700 text-sm mb-3">{treatment.description}</p>
            <div className="flex justify-between items-center text-gray-500">
              <span><strong>Sessions:</strong> {treatment.sessions}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HairfallAccordion;
