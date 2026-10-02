import React from "react";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdWhatshot } from "react-icons/md";
import { MdVilla } from "react-icons/md";
import { MdOutlinePool } from "react-icons/md";
import { GiSpookyHouse } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { MdOutlineBedroomChild } from "react-icons/md";
import { GiWoodCabin } from "react-icons/gi";
import { BsShopWindow } from "react-icons/bs";
import logo from "../assets/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../Context/AuthContext";
import axios from "axios";
import { userDataContext } from "../Context/UserContext.jsx";

function Nav() {
     let [showpopup,setShowpopup] =useState(false);
     let navigate=useNavigate();
     let {serverUrl}=useContext(authContext);
     let { userData, setUserData } = useContext(userDataContext);

     const handlerLogout = async ()=>{
      try{
            let result=await axios.post(serverUrl+"/api/auth/logout",{},{withCredentials:true});
            setUserData(null)
            console.log(result);
      }catch(err){
        console.log(err)
      }
     }
  return (
    <div>
      <div className="w-full min-h-[60px] border-b-[1px] border-black px-[20px] flex items-center justify-between bg-red-600">
        <div>
          <img src={logo} alt="Logo" className="w-[100px]" />
        </div>
        <div className="w-[40%] gap-2 relative hidden md:block">
          <input
            type="text"
            placeholder="Any Where | Any Location | Any City"
            className="w-[90%] h-[40px] px-10 border-[1px] border-[#f19aa6] rounded-full"
          />
          <button className="absolute p-[8px] rounded-full bg-red-800 text-white right-[11%] top-[4px] ">
            <FaSearch className="text-white w-[17px] h-[17px]" />
          </button>
        </div>
        <div className="flex items-center justify-center gap-[10px] relative">
          <span className="text-[18px] cursor-pointer rounded-[50px] hover:bg-[#b8b3b4] px-[5px] py-[5px] hidden md:block">
            List your home
          </span>
          <button className="px-[20px] py-[10px] flex items-center justify-center gap-3 border-[1px] border-[#d3d1d1] rounded-full hover:bg-[#cecccc] hover:text-white hover:shadow-lg"
          onClick={()=>setShowpopup(prev=>!prev)}>
            <GiHamburgerMenu className="w-[20px] h-[20px]"/>
            {userData == null && <CgProfile className="w-[22px] h-[22px]"/>}
            {userData != null && <span className="w-[30px] h-[30px] bg-[#080808] text-[white] rounded-full flex items-center justify-center">{userData?.name?.charAt(0)}</span>}
          </button>
          {showpopup && <div className='w-[190px] h-[220px] absolute bg-slate-50 top-[110%] right-[10%] border-[1px] border-[#b8b3b4] z-10 rounded-lg'>
              <ul className="w-[100%] h-[100%] text-[15px] flex items-start justify-around flex-col py-[8px]">
                <li className="w-[100%] px-[10px] py-[9px] hover:bg-slate-300 cursor-pointer" onClick={()=>{navigate('/login')}}>Login</li>
                <li className="w-[100%] px-[10px] py-[9px] hover:bg-slate-300 cursor-pointer border-b-2">
                  Logout
                </li>
                <li className="w-[100%] px-[10px] py-[9px] hover:bg-slate-300 cursor-pointer">List your Home</li>
                <li className="w-[100%] px-[10px] py-[9px] hover:bg-slate-300 cursor-pointer">My Listing</li>
                <li className="w-[100%] px-[10px] py-[9px] hover:bg-slate-300 cursor-pointer">Check Booking</li>
              </ul>
          </div>}
        </div>
      </div>
      <div className="w-full h-[40px] flex justify-center items-center relative mt-2 md:hidden">
          <input
            type="text"
            placeholder="Any Where | Any Location | Any City"
            className="w-[90%] h-[40px] px-10 border-[1px] border-[#f19aa6] rounded-full"
          />
          <button className="absolute p-[8px] rounded-full bg-red-800 text-white right-[6%] top-[4px] ">
            <FaSearch className="text-white w-[17px] h-[17px]" />
          </button>
        </div>
      <div className='w-full h-[80px] flex items-center justify-start overflow-auto md:justify-center px-[9px]'>
            <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#b8b3b4] px-[20px] py-[10px] cursor-pointer text-[14px]'>
              <MdWhatshot className="w-[30px] h-[30px] text-black" />
              <h3>Trending</h3>
            </div>
            <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#b8b3b4] px-[20px] py-[10px] cursor-pointer text-[14px]'>
              <MdVilla className="w-[30px] h-[30px] text-black" />
              <h3>Villa</h3>
            </div>
            <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#b8b3b4] px-[20px] py-[10px] cursor-pointer text-[14px] text-nowrap'>
              <GiSpookyHouse className="w-[30px] h-[30px] text-black" />
              <h3>Farm House</h3>
            </div>
            <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#b8b3b4] px-[20px] py-[10px] cursor-pointer text-[14px] text-nowrap'>
              <MdOutlinePool className="w-[30px] h-[30px] text-black" />
              <h3>Pool House</h3>
            </div>
            <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#b8b3b4] px-[20px] py-[10px] cursor-pointer text-[14px]'>
              <MdBedroomParent className="w-[30px] h-[30px] text-black" />
              <h3>Rooms</h3>
            </div>
            <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#b8b3b4] px-[20px] py-[10px] cursor-pointer text-[14px]'>
              <PiBuildingApartmentFill className="w-[30px] h-[30px] text-black" />
              <h3>Flat</h3>
            </div>
            <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#b8b3b4] px-[20px] py-[10px] cursor-pointer text-[14px]'>
              <MdOutlineBedroomChild className="w-[30px] h-[30px] text-black" />
              <h3>PG</h3>
            </div>
            <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#b8b3b4] px-[20px] py-[10px] cursor-pointer text-[14px]'>
              <GiWoodCabin className="w-[30px] h-[30px] text-black" />
              <h3>Cabins</h3>
            </div>
            <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#b8b3b4] px-[20px] py-[10px] cursor-pointer text-[14px]'>
              <BsShopWindow className="w-[30px] h-[30px] text-black" />
              <h3>Shops</h3>
            </div>
      </div>
    </div>
  );
}

export default Nav;
