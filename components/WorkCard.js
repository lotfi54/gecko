import React from 'react'
import work from "../data/work.json"
import { Parallax } from 'react-scroll-parallax';
import Link from "next/link";
const WorkCard = () => {
    return (
        <div>
            
        
       

     <div class="w-full lg:w-6/6 px-4 py-2 m-1 sm:w-full xl:w-5/5 md:w-full " key={index}>
          <div class=" text-white  py-2 text-2xl font-mosk">{list.title}</div>
          <div className="text-gray-800 text-1xl font-cocom uppercase">{list.category}</div>
          <Parallax   y = { [ -10 , 10 ] } > 
          <div className="py-4">
          <Link href="/works/[id]" as={`/works/${list.id}`}>
          <a>
          <img className="h-64 z-10 w-full object-cover" src={list.image}/>
          </a>
          </Link>
           </div>
           </Parallax>
         

         
        </div>       
    
        
     
        </div>
    )
}

export default WorkCard
