import React,{useRef,useEffect} from 'react'
import Carousel from 'styled-components-carousel';
import work from "../data/work.json"
import CircleType from "circletype";
import gsap,{Expo} from "gsap";
const Work = () => {



    return (
        <div>
        <div className="lg:flex   max-h-full mx-auto px-10 mt-32">
        <div className="stroke-title flex  text-opacity-50  whitespace-no-wrap  w-full text-center  font-bigtitle text-3xl">
      
        
       
        Work
       
      
        
        </div>
        
        </div>
            <div className="  flex-1  max-w-full   justify-center xl:mx-20 md:mx-10  ">
            <div class="flex flex-wrap ">
            {work.map((list,index)=>(

         <div class="w-full lg:w-5/5 px-4 py-2 m-1 sm:w-full  md:w-full " key={index}>
              <div class=" text-white  py-2 text-2xl font-mosk">{list.title}</div>
              <div className="text-gray-800 text-1xl font-cocom uppercase">{list.category}</div>
              <div className="py-4">
              <img className="h-56 z-10 w-full object-cover" src={list.image}/>
               </div>
             
              <div className="text-black  text-center text-2Xl font-cocom z-20  w-32 p-5 view" >{list.view}</div>
             
            </div>       
            ))}
            
          </div>
            </div>

            <div className=" flex  justify-center mt-5">
            <div className="more-work flex-1  text-white  whitespace-no-wrap  w-full text-center  font-bigtitle text-2xl">
          
            
           
          More  Work
           
          
            </div>
            </div>


            
        </div>
    )
}

export default Work
