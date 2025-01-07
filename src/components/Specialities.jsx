import React from 'react';

const Specialities = () => {
  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Best Dental-Skin Clinic in Trivandrum – Why Patients Trust Us
      </h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto">
        {[
          "Personalized care from expert dermatologists and dental specialists",
          "State-of-the-art facilities with advanced technology",
          "Located in the heart of Kazhakoottam, Trivandrum",
          "Holistic approach to beauty and wellness"
        ].map((item, index) => (
          <div key={index} className="p-4 border rounded shadow-md bg-gray-50">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialities;
