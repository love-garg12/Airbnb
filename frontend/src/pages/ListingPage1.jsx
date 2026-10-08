import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function ListingPage1() {
    let navigate = useNavigate();
  return (
    <div className='w-[100%] h-[100vh] bg-white flex items-center justify-center relative'>
       <form action="" className="flex flex-col items-center justify-start w-[90%] h-[600px] px-2 mt-5
                    rounded-md  overflow-auto gap-2">
            <div className="flex items-center justify-center">
                      <FaArrowLeft
                        className="absolute left-[20px] top-[35px] text-[45px] cursor-pointer  bg-[red] rounded-full p-2"
                        onClick={() => navigate("/")}
                      />
                    </div>
                    <div className="w-[180px] h-[40px] text-[17px] bg-[#f14242] text-white flex items-center justify-center rounded-[30px] cursor-pointer absolute top-[15px] right-[10px] shadow-lg">
                        setUp Your Home
                    </div>
                    <div className="w-[90%] flex items-start justify-start flex-col ">
          <label htmlFor="title" className="text-[20px] text-black text-weight-bold">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="h-[40px] w-[90%] border-[2px] border-[#326d4b] rounded-lg px-3 text-[18px]"
            required/>
        </div>
         <div className="w-[90%] flex items-start justify-start flex-col">
          <label htmlFor="description" className="text-[20px]">
            Description
          </label>
          <textarea
            id="description"
            className="h-[70px] w-[90%] border-[2px] border-[#326d4b] rounded-lg px-3 text-[18px]"
            required
          ></textarea>
        </div>
          <div className="w-[90%] flex items-start justify-start flex-col">
          <label htmlFor="image1" className="text-[20px]">
            Image1
          </label>
          <input
            type="file"
            id="image1"
            className="h-[40px] w-[90%] border-[2px] border-[#326d4b] rounded-lg p-[3.3px] text-[17px]"
            required/>
        </div>
        <div className="w-[90%] flex items-start justify-start flex-col">
          <label htmlFor="image2" className="text-[20px]">
            Image2
          </label>
          <input
            type="file"
            id="image2"
            className="h-[40px] w-[90%] border-[2px] border-[#326d4b] rounded-lg p-[3.3px] text-[17px]"
            required/>
        </div>
        <div className="w-[90%] flex items-start justify-start flex-col">
          <label htmlFor="image3" className="text-[20px]">
            Image3
          </label>
          <input
            type="file"
            id="image3"
            className="h-[40px] w-[90%] border-[2px] border-[#326d4b] rounded-lg p-[3.3px] text-[17px]"
            required/>
        </div>
         <div className="w-[90%] flex items-start justify-start flex-col ">
          <label htmlFor="rent" className="text-[20px] text-black text-weight-bold">
            Rent
          </label>
          <input
            type="text"
            id="rent"
            className="h-[40px] w-[90%] border-[2px] border-[#326d4b] rounded-lg px-3 text-[18px]"
            required/>
        </div>
         <div className="w-[90%] flex items-start justify-start flex-col ">
          <label htmlFor="city" className="text-[20px] text-black text-weight-bold">
            City
          </label>
          <input
            type="text"
            id="city"
            className="h-[40px] w-[90%] border-[2px] border-[#326d4b] rounded-lg px-3 text-[18px]"
            required/>
        </div>
         <div className="w-[90%] flex items-start justify-start flex-col ">
          <label htmlFor="landmark" className="text-[20px] text-black text-weight-bold">
            Landmark
          </label>
          <input
            type="text"
            id="landmark"
            className="h-[40px] w-[90%] border-[2px] border-[#326d4b] rounded-lg px-3 text-[18px]"
            required/>
        </div>

       </form>
    </div>
  )
}

export default ListingPage1
