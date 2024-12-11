import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

// Import images
import image1 from '../assets/img/skincare1.png';
import image2 from '../assets/img/skincare2.png';
import image3 from '../assets/img/haircare1.png';
import image4 from '../assets/img/haircare2.png';
import image5 from '../assets/img/dental1.png';
import image6 from '../assets/img/dental2.png';
import image7 from '../assets/img/diet1.png';
import image8 from '../assets/img/diet2.png';

const treatmentsData = [
  {
    img: image1,
    name: "HydraFacial",
    category: "Skincare",
    description: "A rejuvenating facial treatment for glowing skin.",
  },
  {
    img: image2,
    name: "Chemical Peel",
    category: "Skincare",
    description: "Reduces blemishes and rejuvenates skin tone.",
  },
  {
    img: image3,
    name: "Hair PRP",
    category: "Hair Care",
    description: "Promotes hair regrowth and strengthens roots.",
  },
  {
    img: image4,
    name: "Hair Spa",
    category: "Hair Care",
    description: "Deep conditioning treatment for silky hair.",
  },
  {
    img: image5,
    name: "Teeth Whitening",
    category: "Dental",
    description: "Brightens your teeth for a confident smile.",
  },
  {
    img: image6,
    name: "Dental Implants",
    category: "Dental",
    description: "Restore missing teeth with precision implants.",
  },
  {
    img: image7,
    name: "Weight Management",
    category: "Diet and Body Contouring",
    description: "Personalized plans to achieve your ideal weight.",
  },
  {
    img: image8,
    name: "CoolSculpting",
    category: "Diet and Body Contouring",
    description: "Non-invasive fat reduction for a sculpted body.",
  },
];

const Treatments = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const slider = useRef(null);

  const categories = ["All", "Skincare", "Hair Care", "Dental", "Diet and Body Contouring"];

  const filteredData =
    activeCategory === "All"
      ? treatmentsData
      : treatmentsData.filter((item) => item.category === activeCategory);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16">
      <div className="flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Our Treatments
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Explore a variety of treatments tailored for your skincare, hair care, dental, and wellness needs.
          </p>
        </div>
        <div className="flex gap-5 mt-4 lg:mt-0">
          <button
            className="bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickPrev()}
          >
            <FaArrowLeft size={25} />
          </button>
          <button
            className="bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickNext()}
          >
            <FaArrowRight size={25} />
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-4 mb-6">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-lg font-semibold ${
              activeCategory === category
                ? "bg-[#ade9dc] text-white"
                : "bg-[#d5f2ec] text-backgroundColor"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-5">
        <Slider ref={slider} {...settings}>
          {filteredData.map((treatment, index) => (
            <div
              className="h-[500px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer"
              key={index}
            >
              <div>
                <img
                  src={treatment.img}
                  alt={treatment.name}
                  className="rounded-t-xl w-full"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-semibold text-xl text-center pt-4">{treatment.name}</h1>
                <h3 className="pt-2 text-center px-4">{treatment.description}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Treatments;
