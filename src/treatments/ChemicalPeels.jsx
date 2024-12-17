import React from 'react'
import TreatmentHeader from "../components/TreatmentHeader";
import Overview from "../components/Overview";
import Consult from "../components/Consult";
import image from '../assets/img/chemical-peel2.png';

function ChemicalPeels() {
  return (
    <div>
      <TreatmentHeader
        title="Chemical Peels"
        caption="Renew Your Skin and Confidence"
      />

<Overview
        title="Chemical Peels"
        caption="Harnessing your body's natural healing power"
        briefing="Chemical peels work by exfoliating the skin’s outer layer, revealing a smoother and healthier complexion underneath. These treatments address issues such as acne scars, pigmentation, and wrinkles.
Depending on your needs, light, medium, or deep peels are applied to improve texture and tone. The results? Radiant, youthful skin with a noticeable reduction in imperfections. Whether for regular upkeep or specific skin concerns, chemical peels are a trusted solution for glowing, refreshed skin."
        image={image} // Pass the icon as a prop
      />
       
  <Consult/>    
    </div>
  )
}

export default ChemicalPeels
