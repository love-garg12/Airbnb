import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { GiFamilyHouse } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { MdWhatshot } from 'react-icons/md';
import { MdVilla } from 'react-icons/md';
import { MdOutlinePool } from 'react-icons/md';
import { GiSpookyHouse } from 'react-icons/gi';
import { MdBedroomParent } from 'react-icons/md';
import { PiBuildingApartmentFill } from 'react-icons/pi';
import { GiWoodCabin } from 'react-icons/gi';
import { BsShopWindow } from 'react-icons/bs';

function ListingPage2() {
  const navigate = useNavigate();
  return (
    <div className='w-[100%] h-[100vh] bg-white flex-col flex items-center justify-center relative'>
          <div className="flex items-center justify-center">
                               <FaArrowLeft
                                 className="absolute left-[20px] top-[35px] text-[35px] cursor-pointer  bg-[red] rounded-full p-2"
                                 onClick={() => navigate("/listingpage1")}
                               />
                             </div>
                             <div className="w-[180px] h-[40px] text-[17px] bg-[#f14242] text-white flex items-center justify-center rounded-[30px] cursor-pointer absolute top-[30px] right-[10px] shadow-lg">
                                 setUp Your Category
                             </div>
                             <div className="text-[18px] text-[black] md:text-[30px] flex items-center justify-center " >
                             <h1>Which of these best describes your place?</h1>
                             </div>
                             <div className="flex flex-wrap items-start justify-center w-[60%] h-[500px] px-[50px] py-[50px]
                                   gap-10">
                                 <div className="w-[170px] h-[80px] flex justify-center items-center flex-col cursor-pointer border-[1px] hover:border-[#a6a5a5] text-[20px] rounded-lg">
                                     <MdWhatshot className="w-[30px] h[30px] text-[black]"/><h3>Villa</h3>
                                 </div>
                                 <div className="w-[170px] h-[80px] flex justify-center items-center flex-col cursor-pointer border-[1px] hover:border-[#a6a5a5] text-[20px] rounded-lg">
                                     <MdVilla className="w-[30px] h[30px] text-[black]"/><h3>Villa</h3>
                                 </div>
                                 <div className="w-[170px] h-[80px] flex justify-center items-center flex-col cursor-pointer border-[1px] hover:border-[#a6a5a5] text-[20px] rounded-lg">
                                     <GiSpookyHouse className="w-[30px] h[30px] text-[black]"/><h3>Villa</h3>
                                 </div>

                                 <div className="w-[170px] h-[80px] flex justify-center items-center flex-col cursor-pointer border-[1px] hover:border-[#a6a5a5] text-[20px] rounded-lg">
                                     <MdOutlinePool className="w-[30px] h[30px] text-[black]"/><h3>Villa</h3>
                                 </div>
                                 <div className="w-[170px] h-[80px] flex justify-center items-center flex-col cursor-pointer border-[1px] hover:border-[#a6a5a5] text-[20px] rounded-lg">
                                     <MdBedroomParent className="w-[30px] h[30px] text-[black]"/><h3>Villa</h3>
                                 </div>
                                 <div className="w-[170px] h-[80px] flex justify-center items-center flex-col cursor-pointer border-[1px] hover:border-[#a6a5a5] text-[20px] rounded-lg">
                                     <PiBuildingApartmentFill className="w-[30px] h[30px] text-[black]"/><h3>Villa</h3>
                                 </div>
                                 
                                 <div className="w-[170px] h-[80px] flex justify-center items-center flex-col cursor-pointer border-[1px] hover:border-[#a6a5a5] text-[20px] rounded-lg">
                                     <GiWoodCabin className="w-[30px] h[30px] text-[black]"/><h3>Villa</h3>
                                 </div>
                                 <div className="w-[170px] h-[80px] flex justify-center items-center flex-col cursor-pointer border-[1px] hover:border-[#a6a5a5] text-[20px] rounded-lg">
                                     <BsShopWindow className="w-[30px] h[30px] text-[black]"/><h3>Villa</h3>
                                 </div>
                                  <div className="w-[170px] h-[80px] flex justify-center items-center flex-col cursor-pointer border-[1px] hover:border-[#a6a5a5] text-[20px] rounded-lg">
                                     <GiFamilyHouse className="w-[30px] h[30px] text-[black]"/><h3>Villa</h3>
                                 </div>
                             </div>
                             
    </div>
  )
}

export default ListingPage2
