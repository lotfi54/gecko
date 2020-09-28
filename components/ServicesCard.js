import React,{useState,useEffect,useRef} from 'react'
import { FiChevronRight } from 'react-icons/fi';


const ServicesCard = ({titleservice,quote,roles,id}) => {
    const [active, setActive] = useState(false)
    const contentRef = useRef(null)
  
    useEffect(() => {
      contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : '0px'
    }, [contentRef, active])

    const toogleActive = () => {
      setActive(!active)
    }


    return (
        <div>
        <div className="flex bg-service flex-col p-4">
  <div class="accordion flex items-center cursor-pointer  border-t-0 border-r-0 border-l-0  border p-4" onClick={toogleActive}>
  <p className="m-5 text-3xl font-mosk5">{id}</p>
  <p className="text-3xl  font-mosk5">{titleservice}</p>
  <FiChevronRight className={active ? 'accordion-icon rotate': 'accordion-icon'}  />
  </div>
  <div className="flex  h-full   accordion-content justify-center border-0 p- bg-green-400" ref={contentRef} >
  <div className="flex-1 p-5  sm:flex md:flex-1 justify-center lg:flex xl:flex">
  <div className=" py-10 w-full leading-relaxed font-mosk4 lg:w-2/5">
  {quote}
  </div>
  <div className="flex-1 row-col text-center p-0  w-full py-10  lg:w-2/5">
  
  {roles.map(function (role, i) { 
    return <div className="flex-1 text-center" key={i}>
    <h5 className="font-mosk5"> {role.service}</h5>
    <li className="list-none leading-relaxed  font-mosk4 justfiy-center  ">
    {role.title}
    
  </li>
    </div>
  })}
  </div>
  </div>
  </div>

</div>
         
          
          </div>
        
    )
}

export default ServicesCard
