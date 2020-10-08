
import Navigation from 'components/Navigation'
import Work from 'components/Work'
import Header from 'components/Header'
import About from 'components/About'
import Services from 'components/services'
import Contact from 'components/contact'
import { motion } from "framer-motion"
import {  ParallaxProvider  } from 'react-scroll-parallax' ; 
/* import Layouts   from "../components/Layouts" */
import fetch from 'isomorphic-unfetch'
const  Home = ({ posts}) => {
console.log(posts)


  return (
   
    <motion.div
    
       initial='initial'
       animate='animate'
     className="bg-fond">
   <ParallaxProvider >

<Navigation className="fixed"/>
<Header/>
<About/>

<div className="flex  flex-wrap   justify-center xl:mx-20 md:mx-10  ">
          
            
{posts.map(post =>(
<Work key={posts.id} post={post}/>

))}
</div>

<Services className="container-service"/>
<Contact/>
</ParallaxProvider>

    </motion.div>

  )

}
export async function getServerSideProps() {
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/posts`)
  const data = await res.json()

  return {
      props: {
          posts: data
      }
  }
}

export default Home 