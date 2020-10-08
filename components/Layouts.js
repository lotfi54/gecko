import React from 'react'
import Navigation from "./Navigation"
import Header from "./Header"
import About from "./About"
import Work from "./Work"
import Services from "./Services"
import Contact from "./Contact"
import Line from "./Line"
import {  ParallaxProvider  } from 'react-scroll-parallax' ; 
const Layouts = () => {
 
    return (
        <div className="bg-fond">

        <ParallaxProvider >
        <Line/>
        <Navigation className="fixed"/>
        <Header/>
        <About/>
        <Services className="container-service"/>
        <Work/>
        <Contact/>
        </ParallaxProvider>
        </div>
    )
}

export default Layouts
