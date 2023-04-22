import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from "react"


function Navbar(props) {

  
  const [navbar, setNavbar] = useState(false);

//   const [isActive,setisActive]=useState(false)


  return (
    
//   <nav className="bg-black p-6">
//     <div className="flex items-center justify-between flex-shrink-0 text-white mr-6">
//       <NavLink to="/"> <div className="font-semibold text-2xl tracking-tight">NEWS Times</div>  </NavLink>
    
//     <div>
//     <ul className="flex space-x-4">
//   <NavLink to="/business">  <li className="px-2">business</li> </NavLink>
//   <NavLink to="entertainment"><li className="px-2">entertainment</li> </NavLink>
//   <NavLink to="health"><li className="px-2">health</li> </NavLink>
//   <NavLink to="science"><li className="px-2">science</li></NavLink>
//   <NavLink to="sports"><li className="px-2">sports</li></NavLink>
//   <NavLink to="technology"><li className="px-2">technology</li></NavLink>
// </ul>

//     </div>
   
//   </div>
// </nav>

//copied code from a yt vid
<nav className="w-full bg-black shadow">
<div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
    <div>
        <div className="flex items-center justify-between py-3 md:py-5 md:block"> 
             <NavLink to="/"> <h2 className="text-2xl font-bold text-white">NEWS Times</h2> </NavLink>   
            <div className="md:hidden">
                <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                >
                    {navbar ? (
                       
                          <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                         </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    </div>
    <div>
        <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
            }`}
        >


{/* <NavLink to="users" className={({ isActive }) => (isActive ? 'active' : 'inactive')}> <></> */}

<ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
    <li> 
        <NavLink to="business" className="text-white font-bold">business</NavLink>
    </li>
      <li > 
        <NavLink to="entertainment" className="text-white font-bold" >
          entertainment
        </NavLink>
      </li>
      <li>
        <NavLink to="science" className="text-white font-bold" >
        science
        </NavLink>
      </li>
      <li >
        <NavLink to="sports" className="text-white font-bold">
         sports
        </NavLink>
      </li>
      <li>
        <NavLink to="technology" className="text-white font-bold">
         technology
        </NavLink>
      </li>
    </ul>
        </div>
    </div>
</div>
</nav>



  )
}


export default Navbar