import React from 'react'
import TreatmentHeader from "../components/TreatmentHeader";
import Overview from "../components/Overview";
import Consult from "../components/Consult";
import image from '../assets/img/prp-treatment2.png';

function PrpTreatment() {
  return (
    <div>
      <TreatmentHeader
        title="PRP Treatment"
        caption="Harnessing your body's natural healing power"
      />

<Overview
        title="PRP Treatment"
        caption="Harnessing your body's natural healing power"
        briefing="Platelet-Rich Plasma (PRP) therapy utilizes your own blood to stimulate regeneration and repair. Commonly used for hair restoration and skin rejuvenation, PRP boosts collagen production and strengthens hair follicles.
This non-surgical treatment promotes natural growth and vitality, addressing issues like thinning hair and dull skin. Expect noticeable improvements in texture, volume, and overall appearance with regular sessions. Ideal for those seeking natural yet effective results with minimal downtime."
        image={image} // Pass the icon as a prop
      />
       
  <Consult/>    
    </div>
  )
}

export default PrpTreatment
