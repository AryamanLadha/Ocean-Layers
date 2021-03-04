// ES6 Imports
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
//
import Layers from './Layers.jpg';
import './App.css';
import {epipelagic_general, epipelagic_marine, epipelagic_media, mesopelagic_general, mesopelagic_marine, mesopelagic_media, bathypelagic_general, bathypelagic_marine, bathypelagic_media, abyssopelagic_general, abyssopelagic_marine, abyssopelagic_media} from "./data.js";
function Zone(props){
  var general, marine, media
  if(props.heading === "Epipelagic"){
    general = epipelagic_general;
    marine = epipelagic_marine;
    media = epipelagic_media;
  }
  else if(props.heading === "Mesopelagic"){
    general = mesopelagic_general;
    marine = mesopelagic_marine;
    media = mesopelagic_media;
  }
  else if(props.heading === "Bathypelagic"){
    general = bathypelagic_general;
    marine = bathypelagic_marine;
    media = bathypelagic_media;
  }
  else if(props.heading === "Abyssopelagic"){
    general = abyssopelagic_general;
    marine = abyssopelagic_marine;
    media = abyssopelagic_media;
  }
  
  return(
    <div className="whitebox">
      <div className="zone-heading">
        {props.heading} Zone
      </div>
      <Section type="General Information" data= {general}/>
      <Section type="Marine Life" data={marine}/>
      <Section type="Popular Media and Marine Life" data={media} />
    </div>
  );
}

function Section(props){
  return(
  <div className="content">
    <div className="bold"> {props.type}</div>
    <div>
      {props.data}
    </div>
  </div>
  );

}
function App() {
  return (
    <div className="main">
      <div className="heading">
        Layers of the Ocean
      </div>
      <div>
        <img src={Layers} alt="Layers of the Ocean" />
      </div>
      <Zone heading="Epipelagic"/>
      <Zone heading="Mesopelagic"/>
      <Zone heading="Bathypelagic"/>
      <Zone heading="Abyssopelagic"/>
    </div>
  );
}
export default App;
