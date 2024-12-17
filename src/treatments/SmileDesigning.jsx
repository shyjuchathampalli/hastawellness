import React from 'react'
import TreatmentHeader from "../components/TreatmentHeader";
import Overview from "../components/Overview";
import Consult from "../components/Consult";
import image from '../assets/img/smile-designing2.png';

function SmileDesigning() {
  return (
    <div>
      <TreatmentHeader
        title="Smile Designing"
        caption="Your Dream Smile, Perfectly Designed"
      />

<Overview
        title="Smile Designing"
        caption="Your Dream Smile, Perfectly Designed"
        briefing="Smile designing is a customized process to improve the harmony and aesthetics of your smile. From aligning crooked teeth to correcting discoloration and gaps, this treatment integrates veneers, crowns, and other dental techniques.
Every smile makeover is tailored to your facial features, ensuring results that enhance your natural beauty. With the guidance of dental experts, achieve a balanced, radiant smile that transforms not just your look but also your confidence."
        image={image} // Pass the icon as a prop
      />
       
  <Consult/>    
    </div>
  )
}

export default SmileDesigning
