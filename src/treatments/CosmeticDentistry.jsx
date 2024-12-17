import React from 'react'
import TreatmentHeader from "../components/TreatmentHeader";
import Overview from "../components/Overview";
import Consult from "../components/Consult";
import image from '../assets/img/Comsetic_dentsitry2.png';

function CosmeticDentistry() {
  return (
    <div>
      <TreatmentHeader
        title="Comsetic Dentistry"
        caption="Transform Your Smile and Confidence"
      />

<Overview
        title="Comsetic Dentistry"
        caption="Transform Your Smile and Confidence"
        briefing="Cosmetic dentistry focuses on enhancing the aesthetic appeal of your smile. This treatment includes teeth whitening, veneers, bonding, and reshaping to correct discoloration, gaps, or uneven teeth. By combining artistic precision and modern technology, it ensures a brighter, symmetrical smile.
The result? A radiant, confident appearance that positively impacts your personal and professional life. Beyond aesthetics, improved oral health and functionality are added benefits. Whether it's a subtle tweak or a dramatic transformation, this personalized approach ensures your smile reflects your best self."
        image={image} // Pass the icon as a prop
      />
       
  <Consult/>    
    </div>
  )
}

export default CosmeticDentistry
