import React from 'react'
import ServicesCard from "./ServicesCard"
import service from "../data/services.json"
import Marquee from 'react-double-marquee';
import Parallax from 'react-rellax'
const Services = () => {
    
    return (
        <div className="container-about">
        
        
        <div className="lg:flex  max-h-full mx-auto px-10 mt-32">
        
        <div className="container stroke-title  flex whitespace-no-wrap text-black w-full text-center  font-bigtitle text-3xl">
      
      
        Services
      
        </div>
        
        </div>  
       
      

        <div className=" flex-1 max-w-full xl:max-w-1/5 bg-blue-about justify-center xl:mx-20 md:mx-10    ">    
        {service.Services.map((list, index) => (
            <ServicesCard key={index} titleservice={list.titleservice} quote={list.quote} roles={list.roles} id={list.id}  />
        ))}
    
      </div>
       </div>

       



    )
}

export default Services
