import React from 'react'
import Header from "../components/Header";
import Overview from "../components/Overview";
import ObesityAccordion from "../components/ObesityAccordion";
import Consult from "../components/Consult";
import image from '../assets/img/obesity-package.png';
import icon from '../assets/img/fitness-icon.png';

function BodyContouring() {
  return (
    <div>
      <Header
        title="Obesity Management Package"
        caption="Achieve Your Weight Loss Goals with Our Comprehensive Package"
        Icon={icon } // Pass the icon as a prop
      />

<Overview
        title="Obesity Management Pack"
        caption="Achieve Your Weight Loss Goals with Our Comprehensive Package"
        briefing="Our Obesity Management Package is a carefully curated program designed to support individuals in their weight loss journey through a combination of advanced therapies and personalized care. This package includes targeted treatments that address various aspects of obesity, ensuring a holistic approach to health and wellness."
        image={image} // Pass the icon as a prop
      />
      
  <ObesityAccordion/>    
  <Consult/>    
    </div>
  )
}

export default BodyContouring
