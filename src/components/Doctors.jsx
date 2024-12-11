import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import img1 from '../assets/img/doc1.png';
import img2 from '../assets/img/doc2.png';
import img3 from '../assets/img/doc3.png';
import img4 from '../assets/img/doc4.png';
import img5 from '../assets/img/doc5.png';

const Doctors = () => {
  const data = [
    {
      img: img1,
      name: "Dr. Anjana Ravindran",
      specialties: "Oral Maxillofacial Prosthodontist, Implantologist, Smile Designer, Cosmetic Dentist",
    },
    {
      img: img2,
      name: "Dr Vinod Nair",
      specialties: "Oral Maxillofacial Surgeon & Implantologist",
    },
    {
      img: img3,
      name: "Dr. Greeshma Yukthi",
      specialties: "Periodontist, Implantologist and Esthetic Dentistry",
    },
    {
      img: img4,
      name: "Dr Sooraj Swaraj",
      specialties: "Dental Surgeon, Smile Designer, Cosmetologist",
    },
    {
      img: img5,
      name: "Dr Archa M Nair",
      specialties: "MBBS , PgDipPH [Public Health], PGDCC (Clinical Cosmetology)",
    },
  ];

  const slider = useRef(null);

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
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Our Doctors
          </h1>
          <p className=" mt-2 text-center lg:text-start">
          Meet our team of dedicated specialists, ensuring your best smile and healthiest skin with personalised care.
          </p>
        </div>
        <div className="flex gap-5 mt-4 lg:mt-0">
          <button
            className=" bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickPrev()}
          >
            <FaArrowLeft size={25} />
          </button>
          <button
            className=" bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickNext()}
          >
            <FaArrowRight size={25} />
          </button>
        </div>
      </div>
      <div className=" mt-5">
        <Slider ref={slider} {...settings}>
          {data.map((e, index) => (
            <div
              className="h-[500px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer"
              key={index}
            >
              <div>
                <img
                  src={e.img}
                  alt="img"
                  className="rounded-t-xl w-full"
                />
              </div>

              <div className=" flex flex-col justify-center items-center">
                <h1 className=" font-semibold text-xl text-center pt-4">{e.name}</h1>
                <h3 className=" pt-2 text-center px-4">{e.specialties}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Doctors;
