import React, { useEffect, useRef } from 'react'
import fetch from 'isomorphic-unfetch'
import getConfig from 'next/config'
import { motion } from 'framer-motion';
const Post = ({ post,imageDetails }) => {
    const transition = {
        duration:1.3,
        ease:[0.6,0.04,-0.04,0.9]
      };

      const title = {
          initial:{
              y:0
          }, 
          animate:{
              y:0,
              transition:{
                  delayChildren :1,
                  staggerChildren:.08,
                  staggerDirection: -1,
              }

          }
      }

      const letter = {
          initial:{
              y:300,
              opacity:0,
          },
          animate: {
              y: 0,
              opacity:1,
              transition: {duration:1, ...transition}
          }
      }


      function useWindowSize() {
     
        useEffect(() => {
          // Handler to call on window resize
          function handleResize() {
          
              
              window.innerHeight > 1440 ? 800 : 400;
            
          }
          
          // Add event listener
          window.addEventListener("resize", handleResize);
          
          // Call handler right away so state gets updated with initial window size
          handleResize();
          
          // Remove event listener on cleanup
          return () => window.removeEventListener("resize", handleResize);
        }, []); // Empty array ensures that effect is only run on mount
      
        return windowSize;
      }
     
    console.log(post)
    return (
        <motion.div  initial='initial' animate='animate' exit='exit' className="flex-1 max-w-full">
        <div className="bg-fond">
        
        <motion.div variants={title} className="text-white text-center py-20 text-6xl font-cocom">
        <motion.div variants={letter} >{post.title}</motion.div>   
           </motion.div> 
           <div className=" flex  justify-center">
           <motion.div  
          
           initial={{
               width:'420px',
               
               y:"-50%"
               }}
               animate={{
                   y:0,
                   
                   width:"100%",
                   transition: {
                       delay:.1, 
                       ...transition
                   }
               }}
               
               >
        <motion.img 
        className="image-cover"
        initial={{scale:1}}
               src={API_URL + post.image.url}/>
        </motion.div>
        </div>
        <div className="container mx-auto text-white">
            {post.content}
        </div>
        </div>
        </motion.div>
    )
}


const {API_URL} = process.env
export async function getServerSideProps(context) {
    const {id} = context.query
    const res = await fetch(`${API_URL}/posts/${id}`)
    const data = await res.json()


    return {
        props:{
         post: data   
        },
        
    }

}

export default Post
