import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const treatments = [
    {
      title: "Cryo Back & Abdomen Therapy",
      description: "Non-invasive fat freezing treatment to target stubborn areas post-pregnancy.",
      sessions: "3",
    },
    {
      title: "Anti-Hairfall Therapy / IV Antioxidant Therapy",
      description: "Revitalizing treatments to combat hair loss and enhance overall vitality.",
      sessions: "3",
    },
    {
      title: "3-Month Diet Plan",
      description: "Customized diet plan focusing on gradual weight loss and nutritional balance.",
      sessions: "4",
    },
    {
      title: "Blood Diagnostics",
      description: "Comprehensive blood tests to monitor health and tailor treatments accordingly.",
      sessions: "2",
    },
    {
      title: "Products (Creams, Sunscreens, Antioxidant Supplements)",
      description: "Recommended skincare and supplements for postpartum care.",
      sessions: "-",
    },
    {
      title: "General Physician Consultation",
      description: "Expert consultation to address health concerns and provide guidance throughout recovery.",
      sessions: "3",
    },
    {
      title: "Laser Stretch Mark Treatment",
      description: "Advanced laser therapy to reduce the appearance of stretch marks effectively.",
      sessions: "2",
    },
  ];

const ObesityAccordion = () => {
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

export default ObesityAccordion;
