import React from "react";
import img from "../assets/img/about.png";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <p className=" text-justify lg:text-start">
        Hasta Wellness is a premier health and wellness clinic dedicated to enhancing the well-being of its clients. Located at 1st Floor, Anjali Arcade, Near Nippon Toyota, Technopark Phase 3 Service Road, Kazhakkoottam, Thiruvananthapuram, Kerala 695582, the clinic specializes in skin care, dental treatments, hair care, and body contouring.
        </p>
        <p className="text-justify lg:text-start">
        In addition to aesthetic services, Hasta Wellness provides targeted packages for post-pregnancy weight loss, obesity management, and tailored solutions for teenagers dealing with skin issues. The clinic is praised for its hygienic environment and personalized care, as reflected in numerous positive reviews from satisfied patients.
        </p>
        <p className="text-justify lg:text-start">
        Among its standout offerings is the PRP facial rejuvenation, a cutting-edge treatment that utilizes the patient’s own platelet-rich plasma to stimulate collagen production, reduce wrinkles, and improve skin texture. This non-invasive procedure is effective for all skin types and ages, making it an ideal choice for those beginning their anti-aging journey or preparing for special events.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
