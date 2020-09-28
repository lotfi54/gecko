import React from 'react'
import Navigation from "./Navigation"
import Header from "./Header"
import About from "./About"
import Work from "./Work"
import Services from "./Services"
import Contact from "./Contact"
import {  ParallaxProvider  } from 'react-scroll-parallax' ; 
const Layouts = () => {
    return (
        <div className="bg-fond">
        <ParallaxProvider >
        <Navigation className="fixed"/>
        <Header/>
        <About/>
        <Services/>
        <Work/>
        <Contact/>
        </ParallaxProvider>
        </div>
    )
}

export default Layouts
