import React from 'react'
import {FaFacebookF} from "react-icons/fa"
import {BsInstagram,BsYoutube} from "react-icons/bs"
import {AiOutlineTwitter} from "react-icons/ai"

const Footer = () => {
  return (
    <div className=' h-72 bg-white w-full flex items-center justify-center'>
<div className="container">
<div className=' w-full grid grid-cols-1 lg:grid-cols-3 items-center gap-8'>
<div className=' flex items-center gap-5 justify-center'>
  <h6 className=' text-pr font-semibold cursor-pointer'>Contact Us</h6>
  <h6 className=' text-pr font-semibold cursor-pointer'>FAQ</h6>
  <h6 className=' text-pr font-semibold cursor-pointer'>Blog</h6>
</div>
<div className=' flex items-center gap-8 justify-center'>
  <h6 className=' text-gray-500 text-sm cursor-pointer'>Terms & Condition</h6>
  <h6 className=' text-gray-500 text-sm cursor-pointer'>Legal</h6>
  <h6 className=' text-gray-500 text-sm cursor-pointer'>Cookies</h6>
</div>
<div className=' flex items-center gap-8 justify-center'>
  <FaFacebookF className=' w-6 h-6 text-pr cursor-pointer'/>
  <BsInstagram className=' w-6 h-6 text-pr cursor-pointer'/>
  <AiOutlineTwitter className=' w-6 h-6 text-pr cursor-pointer'/>
  <BsYoutube className=' w-6 h-6 text-pr cursor-pointer'/>
</div>
</div>
</div>
    </div>
  )
}

export default Footer