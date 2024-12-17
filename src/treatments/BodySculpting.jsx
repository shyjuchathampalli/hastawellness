import React from 'react'
import TreatmentHeader from "../components/TreatmentHeader";
import Overview from "../components/Overview";
import Consult from "../components/Consult";
import image from '../assets/img/body-contouring2.png';

function BodySculpting() {
  return (
    <div>
      <TreatmentHeader
        title="Body Contouring"
        caption="Sculpt Your Best Shape"
      />

<Overview
        title="Body Contouring"
        caption="Sculpt Your Best Shape"
        briefing="Body contouring treatments target stubborn fat pockets and reshape specific areas like the abdomen, thighs, and arms. Using advanced techniques such as CoolSculpting or laser liposuction, it’s a safe and non-invasive way to enhance your silhouette.
Not only does body contouring refine your appearance, but it also improves self-confidence. With noticeable results in just a few sessions, this treatment helps you achieve the toned, contoured body you desire."
        image={image} // Pass the icon as a prop
      />
       
  <Consult/>    
    </div>
  )
}

export default BodySculpting
