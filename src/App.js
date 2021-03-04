// ES6 Imports
import { Link, Element, Events, animateScroll as scroll, scrollSpy} from 'react-scroll';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.css';
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
      <Element name={props.heading} className="element">
        {props.heading} Zone
      </Element>
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

class App extends React.Component{
  componentDidMount(){
    Events.scrollEvent.register('begin', function(to, element) {
      console.log('begin', arguments);
    });
 
    Events.scrollEvent.register('end', function(to, element) {
      console.log('end', arguments);
    });
 
    scrollSpy.update();
  };
  componentWillUnmount(){
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  };
  scrollToTop(){
    scroll.scrollToTop();
  };
  scrollToBottom(){
    scroll.scrollToBottom();
  };
  scrollTo(){
    scroll.scrollTo(100);
  };
  scrollMore(){
    scroll.scrollMore(100);
  };
  handleSetActive(to){
    console.log(to);
  };
  render(){
    return(
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home"> </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="$H">
              {/* Here */}
              <Link activeClass="active" to="Epipelagic" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                Epipelagic Zone
              </Link>
            </Nav.Link>
            <Nav.Link href="#home">
              {/* Here2 */}
              <Link activeClass="active" to="Mesopelagic" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                Mesopelagic Zone
              </Link>
            </Nav.Link>
            <Nav.Link href="#features">
              {/* Here 3 */}
              <Link activeClass="active" to="Bathypelagic" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                Bathypelagic Zone
              </Link>
            </Nav.Link>
            <Nav.Link href="#pricing">
              {/* Here 4 */}
              <Link activeClass="active" to="Abyssopelagic" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                Abyssopelagic Zone
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar>
        <div>
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
            <a className="top" href="/#" onClick={this.scrollToTop}> Scroll to Top</a>
          </div>
        </div>
      </div>
    );
  };
}

export default App;