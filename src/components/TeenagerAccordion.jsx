import React, { useState } from "react";

const treatments = [
    {
        title: "Carbon Peel",
        description: "A deep cleansing treatment that removes impurities and enhances skin radiance.",
        sessions: "3",
      },
      {
        title: "Chemical Peels",
        description: "Exfoliating treatments that improve skin texture and reduce blemishes.",
        sessions: "3",
      },
      {
        title: "IV Antioxidants",
        description: "Intravenous therapy to boost skin health and overall vitality.",
        sessions: "3",
      },
      {
        title: "Products (Facewash, Sunscreens, Antioxidant Supplements)",
        description: "Recommended skincare products to maintain healthy skin.",
        sessions: "-",
      },
      {
        title: "3-Month Diet Plan",
        description: "Customized diet plan focusing on balanced nutrition for teenagers.",
        sessions: "4",
      },
      {
        title: "Blood Diagnostics",
        description: "Comprehensive blood tests to monitor health and tailor treatments accordingly.",
        sessions: "2",
      },
      {
        title: "General Physician Consultation",
        description: "Expert consultation to address health concerns and provide guidance.",
        sessions: "3",
      },
  ];

const TeenagerAccordion = () => {
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

export default TeenagerAccordion;
