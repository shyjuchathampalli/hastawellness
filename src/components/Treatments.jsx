import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

// Import images
import image1 from '../assets/img/Comsetic_dentsitry.png';
import image2 from '../assets/img/laser-hair-removal.png';
import image3 from '../assets/img/anti-aging.png';
import image4 from '../assets/img/smile-desiging.png';
import image5 from '../assets/img/prp-treatment.png';
import image6 from '../assets/img/chemical-peel.png';
import image7 from '../assets/img/carbon-peels.png';
import image8 from '../assets/img/mesotherapy.png';
import image9 from '../assets/img/body-contouring.png';
import image10 from '../assets/img/gum-treatment.png';
import image11 from '../assets/img/tattoo-removal.png';


const treatmentsData = [
  {
    img: image1,
    name: "Cosmetic Dentistry",
    category: "Dental",
    description: "Enhance your smile focusing on improving the appearance of teeth and gums through procedures like whitening, veneers, and bonding for a confident, radiant look",
  },
  {
    img: image2,
    name: "Laser Hair Removal",
    category: "Hair Care",
    description: " Experience smooth skin with laser hair removal. Enjoy long-lasting results with minimal discomfort for a confident, hair-free appearance",
  },
  {
    img: image3,
    name: "Anti-Aging",
    category: "Skin Care",
    description: "Reduce the visible signs of aging, such as wrinkles and fine lines, restoring youthful skin through various procedures that promote collagen production and skin elasticity.",
  },
  {
    img: image4,
    name: "Smile Designing",
    category: "Dental",
    description: "Create a personalized smile makeover, enhancing facial aesthetics and boosting confidence through tailored dental treatments and cosmetic procedures.",
  },
  {
    img: image5,
    name: "PRP Treatment",
    category: "Hair Care",
    description: "PRP (Platelet-Rich Plasma) treatment utilizes your body's own healing properties to rejuvenate skin and promote hair growth, offering a natural solution for enhanced beauty and vitality.",
  },
  {
    img: image6,
    name: "Chemical Peels",
    category: "Skin Care",
    description: "Chemical peels exfoliate the skin's surface to reveal a smoother, brighter complexion. They effectively treat issues like acne scars, pigmentation, and signs of aging for rejuvenated skin.",
  },
  {
    img: image7,
    name: "Carbon Peels",
    category: "Skin Care",
    description: "Carbon peels utilize activated carbon to deeply cleanse pores and exfoliate the skin. This treatment helps improve skin texture, reduce oiliness, and combat acne for a clearer complexion.",
  },
  {
    img: image8,
    name: "Mesotherapy",
    category: "Skin Care",
    description: "Mesotherapy involves injecting vitamins, enzymes, or hormones into the skin to rejuvenate and tighten it. This non-surgical treatment enhances hydration and promotes a youthful appearance.",
  },
  {
    img: image9,
    name: "Body Contouring",
    category: "Diet and Body Contouring",
    description: "Body contouring reshapes areas of the body through non-invasive techniques like CoolSculpting or liposuction. Achieve your desired silhouette with targeted fat reduction for enhanced body confidence.",
  },
  {
    img: image10,
    name: "Gum Treatment",
    category: "Dental",
    description: "Gum treatments focus on improving gum health through procedures like scaling, root planing, or gum grafting. Healthy gums are essential for overall oral health and an attractive smile.",
  },
  {
    img: image11,
    name: "Tattoo Removal",
    category: "Skin Care",
    description: "Tattoo removal employs advanced laser technology to break down ink particles in the skin. This effective method gradually fades tattoos for those seeking to erase past ink choices.",
  },
];

const Treatments = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const slider = useRef(null);

  const categories = ["All", "Skin Care", "Hair Care", "Dental", "Diet and Body Contouring"];

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
    slidesToShow: 4,
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
          Explore a range of advanced treatments at Hasta Wellness designed to enhance your beauty and well-being.
          </p>
        </div>
        
      </div>
      <div className="flex justify-center gap-4 mb-6 mt-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-lg font-semibold ${
              activeCategory === category
                ? "bg-[#DABC70] text-white"
                : "bg-[#D9D9D9] text-backgroundColor"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}

<div className="flex gap-5 mt-4 lg:mt-0">
          <button
            className="bg-[#DABC70] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickPrev()}
          >
            <FaArrowLeft size={25} />
          </button>
          <button
            className="bg-[#DABC70] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickNext()}
          >
            <FaArrowRight size={25} />
          </button>
        </div>
      </div>
      <div className="mt-6">
        <Slider ref={slider} {...settings}>
          {filteredData.map((treatment, index) => (
            <div
  className="relative h-[520px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer group"
  key={index}
>
  <div className="relative">
    <img
      src={treatment.img}
      alt={treatment.name}
      className="rounded-t-xl w-full"
    />
    {/* Hover Mask */}
    <div className="absolute top-0 left-0 w-full h-full bg-[#5A3E67] opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-t-xl"></div>
    {/* Explore Button */}
    <button
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#DABC70] text-white text-sm px-6 py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      Explore Treatment
    </button>
  </div>
  <div className="flex flex-col justify-center items-center">
    <h1 className="font-light text-xl text-center pt-4">{treatment.name}</h1>
    <h3 className="pt-2 text-center px-4 text-gray-600">{treatment.description}</h3>
  </div>
</div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Treatments;
