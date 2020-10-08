import React,{useRef,useEffect} from 'react'
import Carousel from 'styled-components-carousel';
import work from "../data/work.json"
import CircleType from "circletype";
import gsap,{Expo} from "gsap";
import { Parallax } from 'react-scroll-parallax';
import Link from "next/link";
import { motion } from 'framer-motion';

const Work = ({post}) => {

  const {API_URL} = process.env


const transition = {
  duration:.1,
  ease:[0.10,0.13,0.10,0.90]
};
    return (
     
        <div className="flex lg:w-6/6 md:w-full xl:w-1/3 xl:flex-wrap">
     
        
            

         <motion.div  class="flex-1 overflow-hidden   px-4 py-2 m-1  ">
              <motion.div exit={{opacity:0}} transition={transition} class=" text-white  py-2 text-2xl font-mosk">{post.title}</motion.div>
              <div className="text-gray-800 text-1xl font-cocom uppercase">category</div>
           
              <div className=" overflow-hidden">
            
             <Link href="/posts/[id]" as={`/posts/${post.id}`}>
             <a>
              <motion.img whileHover={{scale:1.1}} transition={transition} className="overflow-hidden h-64 z-10 w-full  object-cover" src={API_URL + post.image.url} alt=""/>
              </a>
              </Link>
               </div>
              
             

             
            </motion.div>       
         
            
        

         

            
        </div>
        
    )
}

export default Work
