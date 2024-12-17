import React from 'react'
import TreatmentHeader from "../components/TreatmentHeader";
import Overview from "../components/Overview";
import Consult from "../components/Consult";
import image from '../assets/img/laser-hair-removal2.png';

function LaserhairRemoval() {
  return (
    <div>
      <TreatmentHeader
        title="Laser Hair Removal"
        caption="Say goodbye to unwanted hair - silky smooth skin awaits!"
      />

<Overview
        title="Laser Hair Removal"
        caption="Say goodbye to unwanted hair - silky smooth skin awaits!"
        briefing="Laser hair removal uses advanced laser technology to remove unwanted hair from areas like the face, arms, legs, and bikini line. This non-invasive treatment offers precision by targeting hair follicles, ensuring minimal damage to surrounding skin.
With multiple sessions, you’ll notice significantly reduced hair growth, smoother skin, and long-lasting results. Unlike traditional methods like waxing or shaving, it’s a hassle-free, permanent solution for hair-free confidence. Perfect for those seeking a flawless, low-maintenance beauty routine."
        image={image} // Pass the icon as a prop
      />
       
  <Consult/>    
    </div>
  )
}

export default LaserhairRemoval
