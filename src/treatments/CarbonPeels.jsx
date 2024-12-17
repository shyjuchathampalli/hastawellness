import React from 'react'
import TreatmentHeader from "../components/TreatmentHeader";
import Overview from "../components/Overview";
import Consult from "../components/Consult";
import image from '../assets/img/carbon-peel.png';

function CarbonPeels() {
  return (
    <div>
      <TreatmentHeader
        title="Carbon Peels"
        caption="Deep Cleanse, Clear Complexion"
      />

<Overview
        title="Carbon Peels"
        caption="Deep Cleanse, Clear Complexion"
        briefing="Carbon peels use activated carbon and laser technology to deeply cleanse and exfoliate your skin. This treatment removes impurities, reduces oiliness, and shrinks pores for a smoother, more balanced texture.
Perfect for those struggling with acne or dull skin, carbon peels restore clarity and radiance in just a few sessions. It’s non-invasive, painless, and delivers long-lasting results, leaving your skin looking fresh and revitalized."
        image={image} // Pass the icon as a prop
      />
       
  <Consult/>    
    </div>
  )
}

export default CarbonPeels
