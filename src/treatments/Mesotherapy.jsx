import React from 'react'
import TreatmentHeader from "../components/TreatmentHeader";
import Overview from "../components/Overview";
import Consult from "../components/Consult";
import image from '../assets/img/mesotherapy2.png';

function Mesotherapy() {
  return (
    <div>
      <TreatmentHeader
        title="Mesotherapy"
        caption="Nourish Your Skin, Naturally"
      />

<Overview
        title="Mesotherapy"
        caption="Nourish Your Skin, Naturally"
        briefing="Mesotherapy is a minimally invasive technique where vitamins, enzymes, and hyaluronic acid are injected into the skin. This treatment hydrates, tightens, and rejuvenates dull and tired-looking skin.
Ideal for the face, neck, and décolletage, mesotherapy boosts elasticity and promotes a youthful glow. Regular sessions reduce fine lines and improve skin texture. Whether for hydration or anti-aging, this solution offers visible improvements and long-term benefits for skin health."
        image={image} // Pass the icon as a prop
      />
       
  <Consult/>    
    </div>
  )
}

export default Mesotherapy
