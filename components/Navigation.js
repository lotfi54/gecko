import React,{useState,useEffect} from 'react'

const Navigation = () => {
const [navbar,setNavbar] = useState(false)
useEffect(() => {
    const changeColor = ()=> {
      /*   console.log(window.scrollY); */
        if(window.scrollY>= 1002) {
            setNavbar(true);
        }else if(window.scrollY>= 2304){
            setNavbar(false);
        }
        
        else {
            setNavbar(false);
        }; 
       
        
       
    };

    window.addEventListener('scroll',changeColor);
}, [])



    
    return (
        <div>
 
            <nav className={navbar ? 'nav active flex items-center   justify-between flex-wrap p-0  w-full z-10 top-0' :'nav flex items-center  justify-between flex-wrap p-5  w-full z-10 top-0'}>
            <div className="container  justify-center mx-auto">
            <div className={navbar ?'flex items-center justify-between  text-black mr-6':'flex items-center justify-between  text-white'}>
            <a href="#" className=" text-3xl font-blod p-3 font-title">Gecko</a>
            <ul className="sm:self-center text-xl ">
            <li className="inline-block"> 
            <a href="#" className=" text-2xl font-bigtitle font-blod p-6">Home</a>
            </li>
            <li className="inline-block"> 
            <a href="#" className=" text-2xl font-bigtitle font-blod p-6">About</a>
            </li>
            <li className="inline-block"> 
            <a href="#" className=" text-2xl font-bigtitle font-blod p-6">Work</a>
            </li>
            </ul>
            </div>
            </div>
            </nav>
        </div>
    )
}

export default Navigation
