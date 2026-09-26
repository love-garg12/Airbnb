import React from 'react'
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import logo from "../assets/logo.png"

function Nav() {
  return (
    <div>
      <div className='w-[100vw] min-h-[60px] border-b-[1px] border-black px-[20px] flex items-center justify-between'>
        <div><img src={logo} alt="Logo" className='w-[100px]'/></div>
        <div className='w-[40%] gap-2 relative'>
            <input type="text" placeholder='Any Where | Any Location | Any City' className='w-[90%] h-[40px] px-10 border-[1px] border-[#f19aa6] rounded-full'/>
            <button className='absolute p-[8px] rounded-full bg-red-800 text-white right-[11%] top-[4px]'><FaSearch className='text-white w-[17px] h-[17px]' /></button>
        </div>
        <div className="flex items-center justify-center gap-[10px]">
            <span className="text-[18px] cursor-pointer rounded-[50px] hover:bg-[#b8b3b4] px-[5px] py-[5px]">List your home</span>
            <button><GiHamburgerMenu /><CgProfile /></button>
        </div>
      </div>
    </div>
  )
}

export default Nav
