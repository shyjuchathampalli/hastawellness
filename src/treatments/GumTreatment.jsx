import React from 'react'
import TreatmentHeader from "../components/TreatmentHeader";
import Overview from "../components/Overview";
import Consult from "../components/Consult";
import image from '../assets/img/gum-treatment2.png';

function GumTreatment() {
  return (
    <div>
      <TreatmentHeader
        title="Gum Treatment"
        caption="Healthy Gums, Healthy Smile"
      />

<Overview
        title="Gum Treatment"
        caption="Healthy Gums, Healthy Smile"
        briefing="Gum treatments focus on resolving issues like gum inflammation, recession, or disease. Procedures such as scaling, root planing, and grafting are used to restore gum health and protect your teeth.
With healthier gums, you’ll enjoy improved oral hygiene, reduced sensitivity, and a brighter smile. Regular maintenance prevents further complications, ensuring lasting results and overall oral wellness."
        image={image} // Pass the icon as a prop
      />
       
  <Consult/>    
    </div>
  )
}

export default GumTreatment
