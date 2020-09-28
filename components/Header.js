import React from 'react'
import { Parallax } from 'react-scroll-parallax';

const Header = () => {
    return (
  <div className="py-32">

  <div className="lg:container lg:mx-auto  px-4 justify-center   ">
  <div className="flex-1   text-center  px-4 py- m-0 ">
      <div className="flex-1 lg:text-5xl text-white text-right xl:text-6xl   px-2 py-0 m-2 uppercase font-bigtitle sm:text-2xl">
      LET’S CREATE YOUR
  SUCCESS TOGETHER
      </div>
   </div>
  
  </div>

  <div className="lg:container lg:mx-auto  px-4 justify-end ">
  <div className="  flex  text-center justify-end  px-4 py-0 m-0">
  <div className="flex-1 text-white text-center max-w-screen-md  px-0 py-0  text-4xl  font-bigtitle  sm:text-2xl md:text-2xl lg:text-2xl  xl:text-4xl">
  With dedication and knowledge we develop awesome designs and digital web interactions for funded startups and established companies.
  </div>
</div>
 </div>
  

 <div className="circle"></div>
 <Parallax x = { [ 1 , -2 ] } > 
 
 
 <div className=" flex  justify-center   z-10">
 <div className="flex-initial text-gray-700  text-center  px-4 py-2 m-2">
 <div className="flex   flex-wrap ">
 <div className="flex-1  sm:h-65 text-gray-700  text-center  px-4 py-10 m-0">
    <img  className=" lg:h-xxl xl:h-40 w-full object-cover" src="https://cdn.dribbble.com/users/702789/screenshots/14167472/media/8000d31c523631443cbe8eddaddd4300.png"/>
    </div>
    <div className="flex-1 text-gray-700  text-center  px-4 py- m-0">
    <img  className="h-xxl w-full object-cover" src="https://cdn.dribbble.com/users/702789/screenshots/11665639/media/422f4810d88ec9b74341b3b4785f6744.png"/>
    </div>
    <div className="flex-1 text-gray-700  text-center  px-4 py-10 m-0 space-y-24">
    <img  className="h-xxl w-full object-cover" src="https://cdn.dribbble.com/users/33073/screenshots/13919066/media/b8032dfe0e73cd4009badaa6cf8e7009.png"/>
    </div>
    <div className="flex-1 text-gray-700  text-center  px-4 py- m-0">
    <img  className="h-xxl w-full object-cover" src="https://cdn.dribbble.com/users/631735/screenshots/7700683/media/ae38732004822ff5cded0bf8af06e740.png"/>
    </div>

    
    </div>
    </div>
    </div>
    </Parallax>



        
   
 
</div>
 



      
 


    )
}

export default Header
