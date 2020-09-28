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
    
        
        
        <div className="flex-1 max-w-full xl:max-w-1/5 bg-blue-about justify-center xl:mx-20 md:mx-10  ">    
      <div class=" lg:flex xl:max-w-full lg:max-h-about sm:max-w-full max-h-full  max-w-full  md:max-w-full lg:max-w-full  px-4 py-3 sm:flex-wrap md:flex-wrap  max-h-full flex-wrap md:justify-center justify-center  xl:bg-black-800">
       
        <div class="flex  flex-wrap text-gray-700 justify-center    lg:w-3/5 xl:w-2/5 lg:max-h-full xl:h-full xl:w-3/5 md:w-full text-center  px-5 py-2 m-2">
        <div class="flex-initial  xl:w-2/3 text-center sm:w-full   py-10 m-5 bg-white p-5 ">
        <div className="text-2xl xl:text-4xl lg:text-2xl font-bigtitle uppercase text-black">We imagine digital, graphic and thinking, to create amazing leading brand experiences that have meaning and add value for your company.</div>
       
      </div>
        <div class="flex-initial   text-gray-700 xl:w-1/3 text-center sm:w-full w-full  py-10 m-5 border-0 border-border">
        <div className="text-4xl font-bigtitle uppercase text-white">Design</div>
        <ul className="font-bigtitle text-2xl  lg:text-2xl sm:text-base text-white uppercase">
        <li>Design</li>
<li>Visuel identity</li>
<li>Web design</li>
<li>Print design</li>
<li>Ergonomie</li>
        </ul>
      </div>
      <div class="flex-initial   text-gray-700 xl:w-1/3 text-center sm:w-full w-full  py-10 m-5 border-t-2  border-border">
        <div className="text-4xl font-bigtitle uppercase text-white">Digital creativity</div>
        <ul className="font-bigtitle text-2xl lg:text-2xl sm:text-base text-white uppercase">
        <li>Design</li>
        <li>Digital creativity</li>
        <li>E-commerce</li>
        <li>Online business </li>
        <li>Strategies</li>
        </ul>
      </div>

      <div class="flex-initial   text-gray-700 xl:w-1/3 text-center sm:w-full w-full  py-10 m-5 border-t-2  border-border">
        <div className="text-4xl font-bigtitle uppercase text-white ">Growth</div>
        <ul className="font-bigtitle text-2xl  lg:text-2xl sm:text-base text-white uppercase">
        <li>Growth</li>
        <li>Content strategy</li>
        <li>Technological creativity</li>
        <li>Community </li>
        <li>management</li>
        <li>Media performance</li>
        </ul>
      </div>

        </div>
        
        <div class="flex-1 max-full  mx-10 items-center mx-10 px-4 py-3 self-center ">
        <div class="flex-initial py-10 m-5 border-2 border-border ">
        <Parallax  y={[-10, 10]} >
       <img  className="w-full max-h-full  px-4 py-3" src="https://images.pexels.com/photos/3817583/pexels-photo-3817583.jpeg?cs=srgb&dl=pexels-rfstudio-3817583.jpg&fm=jpg"/>
      </Parallax>
       </div>
     
        </div>
      </div>

      </div>
      </Parallax>
        </>
    )
}

export default About

