import React from 'react'
import TreatmentHeader from "../components/TreatmentHeader";
import Overview from "../components/Overview";
import Consult from "../components/Consult";
import image from '../assets/img/anti-aging2.png';

function AntiAging() {
  return (
    <div>
      <TreatmentHeader
        title="Anti-Aging"
        caption="Turn Back the Clock on Aging Skin"
      />

<Overview
        title="Anti-Aging"
        caption="Turn Back the Clock on Aging Skin"
        briefing="Anti-aging treatments are designed to rejuvenate skin and combat visible signs of aging. These treatments include wrinkle reduction, skin tightening, and advanced methods like collagen-stimulating therapies.
By restoring elasticity, reducing fine lines, and improving hydration, anti-aging procedures reveal firmer, younger-looking skin. Regular sessions promote long-term skin health while restoring confidence in your appearance. Whether you wish to address specific concerns or maintain youthful skin, this customized approach ensures lasting benefits."
        image={image} // Pass the icon as a prop
      />
       
  <Consult/>    
    </div>
  )
}

export default AntiAging
