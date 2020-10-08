import React from 'react'
import Marquee from 'react-double-marquee';
import { Parallax } from 'react-scroll-parallax';
const About = () => {
    return (
        <>
       
        <Parallax y = { [2  , -2 ] } > 
        <div className="lg:flex   max-h-full mx-auto px-10 mt-15">
        <div className="stroke-title flex  text-opacity-50  whitespace-no-wrap  w-full text-center  font-bigtitle text-3xl">
     
       
        About
       
        
        </div>
        
        </div>
    
        
       
        <div className="flex-1  lg:flex-1 max-w-full xl:max-w-1/5  justify-center xl:mx-20 md:mx-10  ">    
      <div class=" xl:max-w-full  lg:max-h-about sm:max-w-full max-h-full  max-w-full  md:max-w-full lg:max-w-full  px-4 py-3 sm:flex-wrap md:flex-wrap  max-h-full flex-wrap md:justify-center justify-center  xl:bg-black-800">
       
        <div class="container-about flex  flex-wrap text-gray-700 justify-center    lg:w-3/5 xl:w-2/5 lg:max-h-full xl:h-full xl:w-3/5 md:w-full text-center  px-5 py-2 m-2">
        <div class="flex-initial  xl:w-2/3 text-center sm:w-full   py-10 m-5  p-5 ">
        <div className="text-2xl xl:text-4xl lg:text-2xl font-mosk5 uppercase text-white">We imagine digital, graphic and thinking, to create amazing leading brand experiences that have meaning and add value for your company.</div>
       
      </div>
      </div>
      <div className="lg:flex md:flex-1 w-full   justify-center md:flex  ">
        <div class="flex-1   lg:w-1/3 text-gray-700 xl:w-2/3 text-center sm:w-full w-full  py-10  border-0 border-border">
        <div className="text-4xl font-mosk5 uppercase text-white">Design</div>
        <ul className="font-mosk4 text-2xl  lg:text-2xl sm:text-2xl text-white ">
        <li>Design</li>
<li>Visuel identity</li>
<li>Web design</li>
<li>Print design</li>
<li>Ergonomie</li>
        </ul>
      </div>
      <div class="flex-1  lg:w-1/3 text-gray-700 xl:w-2/3 text-center sm:w-full w-full  py-10  border-0 border-border">
        <div className="text-4xl font-mosk5 uppercase text-white">Digital creativity</div>
        <ul className="font-mosk4 text-2xl lg:text-2xl sm:text-2xl text-white ">
        
        <li>Digital creativity</li>
        <li>E-commerce</li>
        <li>Online business </li>
        <li>Strategies</li>
        </ul>
      </div>

      <div class="flex-1   lg:w-1/3 text-gray-700 xl:w-2/3 text-center sm:w-full w-full  py-10  border-0 border-border">
        <div className="text-4xl font-mosk5 uppercase text-white ">Growth</div>
        <ul className="font-mosk4 text-2xl  lg:text-2xl sm:text-2xl text-white ">
        <li>Growth</li>
        <li>Content strategy</li>
        <li>Technological creativity</li>
        <li>Community </li>
        <li>management</li>
        <li>Media performance</li>
        </ul>
      </div>

        </div>
        </div>
       
      

      </div>
      </Parallax>
        </>
    )
}

export default About

