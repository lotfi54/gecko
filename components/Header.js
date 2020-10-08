import React,{useEffect,useRef} from 'react'
import { Parallax } from 'react-scroll-parallax';
import gsap,{Expo} from "gsap";
import { CgArrowLongDown } from 'react-icons/cg';
const Header = () => {

    let para1 = useRef(null); 
    let para2 = useRef(null); 
    let image = useRef(null); 


    useEffect(() => {
        gsap.from(para1.current,1.2,{ 
            delay:.1,
            opacity:0,
             y: 10,
             color:'#fff',
            ease:Expo.easeIn 
    
        });
    },[]);

    useEffect(() => {
        gsap.from(para2.current,1.2,{ 
            delay:.7,
            opacity:0,
             y: 10,
             color:'#fff',
            ease:Expo.easeIn 
    
        });
    },[]);

    useEffect(() => {
        gsap.to(".image", {delay:1.5,duration: 1.2, opacity:1, y:-15, stagger: 0.4});
    },[]);

    return (
  <div className="py-32">
  
  <div className="lg:container lg:mx-auto  px-4 justify-center   ">
  <div className="flex-1   text-center  px-4 py- m-0 ">
      <div ref={para1} className="flex-1 lg:text-5xl text-white text-right xl:text-6xl   px-2 py-0 m-2 uppercase font-bigtitle sm:text-2xl">
      LET’S CREATE YOUR
  SUCCESS TOGETHER
      </div>
   </div>
  
  </div>

  <div className="lg:container lg:mx-auto  px-4 justify-end ">
  <div className="  flex  text-center justify-end  px-4 py-0 m-0">
  <div ref={para2} className="flex-1 text-white text-center max-w-screen-md  px-0 py-0  text-4xl  font-bigtitle  sm:text-2xl md:text-2xl lg:text-2xl  xl:text-4xl">
  With dedication and knowledge we develop awesome designs and digital web interactions for funded startups and established companies.
  </div>
</div>
 </div>
  

 <div className="circle">
 <div className="arrow"><CgArrowLongDown/><h5>Scroll</h5></div>
 </div>
 <Parallax  speed={0.6} y = { [ -10 , 20 ] } > 
 
 
 <div className=" flex  justify-center">
 <div className="flex-initial text-gray-700  text-center  px-4 py-2 m-2">
 <div className="flex   flex-wrap ">
 <div className=" flex-1   sm:h-65 text-gray-700  text-center  px-4 py-10 m-0">
    <img  className=" container-header image lg:h-xxl xl:h-40 w-full object-cover" src="https://cdn.dribbble.com/users/702789/screenshots/14167472/media/8000d31c523631443cbe8eddaddd4300.png"/>
    </div>
    <div className="flex-1 text-gray-700  text-center  px-4 py- m-0">
    <img  className="image h-xxl w-full object-cover" src="https://cdn.dribbble.com/users/702789/screenshots/11665639/media/422f4810d88ec9b74341b3b4785f6744.png"/>
    </div>
    <div className="flex-1 text-gray-700  text-center  px-4 py-10 m-0 space-y-24">
    <img  className="image h-xxl w-full object-cover" src="https://cdn.dribbble.com/users/33073/screenshots/13919066/media/b8032dfe0e73cd4009badaa6cf8e7009.png"/>
    </div>
    <div className="flex-1 text-gray-700  text-center  px-4 py- m-0">
    <img  className="image h-xxl w-full object-cover" src="https://cdn.dribbble.com/users/631735/screenshots/7700683/media/ae38732004822ff5cded0bf8af06e740.png"/>
    </div>

    
    </div>
    </div>
    </div>
    </Parallax>



        
   
 
</div>
 



      
 


    )
}

export default Header
