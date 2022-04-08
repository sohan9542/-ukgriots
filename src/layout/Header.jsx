import React from 'react'
import logo from "../images/Logo.png"
const Header = () => {
  return (
    <div className=' h-full p-3 gap-4 lg:gap-0 lg:p-0 lg:h-28 bg-pr w-full flex items-center flex-col lg:flex-row justify-between px-0 lg:px-20'>
     <div>
     <img className=' h-20' style={{objectFit:"contain"}} src={logo} alt="" />
     </div>
       <div className=' flex items-center gap-5'>
           <button className=' px-8 hover:bg-white hover:text-pr py-2 rounded-3xl border text-white bg-transparent font-bold'>Login</button>
           <button className=' px-8 bg-white py-2 rounded-3xl border text-pr hover:text-white hover:bg-transparent font-bold'>Sign Up</button>
       </div>
    </div>
  )
}

export default Header