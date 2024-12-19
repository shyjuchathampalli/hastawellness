import React from "react";
import { Link } from 'react-router-dom'; 
import featured from '../assets/img/featured.png';

const Featured = () => {
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-between sm:px-10 pt-10 lg:px-32 mt-16"
      style={{ backgroundColor: "#DABC70" }}
    >
      {/* Left Section */}
      <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
        <h1 className="text-4xl font-semibold text-white mb-4">
          Discover Our Exclusive Treatments
        </h1>
        <p className="text-lg text-white mb-6">
        This process is effective for all skin types and ages. PRP facial rejuvenation is an excellent treatment option for individuals just starting to explore anti-aging and skin rejuvenation. Additionally, PRP facials are great for people looking to maintain healthy skin or enhance it before a big event
        </p>
        <button
          className="px-6 py-3 my-2 border-2 border-[#ffffff] text-[#ffffff] font-semibold rounded-lg hover:bg-[#DABC70] hover:text-white"
        >
          <Link to="/packages/pregnancywellness" className="block hover:bg-hoverColor hover:text-white transition-all">
          Post Pregnancy Weight Loss
          </Link>
        </button>
        <button
          className="px-6 mx-6 py-3 my-2 border-2 border-[#ffffff] text-[#ffffff] font-semibold rounded-lg hover:bg-[#DABC70] hover:text-white"
        >
          <Link to="/packages/bodycontouring" className="block hover:bg-hoverColor hover:text-white transition-all">
                    Obesity Package
                    </Link>
        </button>
        <button
          className="px-6 py-3 my-2 border-2 border-[#ffffff] text-[#ffffff] font-semibold rounded-lg hover:bg-[#DABC70] hover:text-white"
        >
          <Link to="/packages/teenagerspack" className="block hover:bg-hoverColor hover:text-white transition-all">
                    Teenager's Pack
                    </Link>
        </button>
        <button
          className="px-6 mx-6  py-3 my-2 border-2 border-[#ffffff] text-[#ffffff] font-semibold rounded-lg hover:bg-[#DABC70] hover:text-white"
        >
          <Link to="/packages/antihairfallpack" className="block hover:bg-hoverColor hover:text-white transition-all">
                    Anti-Hair Fall
                    </Link>
        </button>
        <button
          className="px-6 py-3 my-2 border-2 border-[#ffffff] text-[#ffffff] font-semibold rounded-lg hover:bg-[#DABC70] hover:text-white"
        >
          <Link to="/packages/antiagingpack" className="block hover:bg-hoverColor hover:text-white transition-all">
                    Anti-Aging
                    </Link>
        </button>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 flex justify-center items-center">
        <img
          src={featured}
          alt="Featured Treatment"
          className="w-[400px] h-[599px] h-auto rounded-lg" 
        />
      </div>
    </div>
  );
};

export default Featured;