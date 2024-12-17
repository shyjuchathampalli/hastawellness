import React from 'react'
import TreatmentHeader from "../components/TreatmentHeader";
import Overview from "../components/Overview";
import Consult from "../components/Consult";
import image from '../assets/img/tattoo-removal2.png';

function TattooRemoval() {
  return (
    <div>
      <TreatmentHeader
        title="Tattoo Removal"
        caption="Erase the Past, Redefine Yourself"
      />

<Overview
        title="Tattoo Removal"
        caption="Erase the Past, Redefine Yourself"
        briefing="Tattoo removal uses cutting-edge laser technology to safely break down tattoo ink particles, allowing them to fade over time. Multiple sessions ensure effective removal for tattoos of any size or color.
Whether you’re seeking a complete erasure or preparation for a cover-up, this treatment delivers satisfying results with minimal discomfort. Say goodbye to unwanted ink and embrace a clean slate with confidence."
        image={image} // Pass the icon as a prop
      />
       
  <Consult/>    
    </div>
  )
}

export default TattooRemoval
