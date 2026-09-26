import React from "react";
import axios from "axios";
import { useContext } from "react";
import {authContext} from "../Context/AuthContext.jsx";
import { useState } from "react";
import { MdRemoveRedEye } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function SignUp() {
  let [show, setShow] = useState(false);
  let navigate = useNavigate();
  let {serverUrl} = useContext(authContext)
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  const handleSignUP = async (e) => {
    try{
         e.preventDefault();
         let result = await axios.post(serverUrl+"/api/auth/signup", {
          name,
          email,
          password
        },{withCredentials:true})
        console.log(result)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center ">
      <form
        action=""
        className="flex flex-col items-center justify-center max-w-[500px] w-[90%] h-[500px] p-4 border border-gray-300 
                rounded-md bg-slate-700 relative "
            onSubmit={handleSignUP} >
        <div className="flex items-center justify-center">
          <FaArrowLeft
            className="absolute left-[40px] top-[40px] text-[30px] cursor-pointer"
            onClick={() => navigate("/")}
          />

          <h1 className="text-2xl font-normal text-black mb-4 text-center">
            Welcome to Airbnb
          </h1>
        </div>
        <div className="w-[90%] flex items-start justify-start flex-col gap-2 mt-[30px]">
          <label htmlFor="name" className="text-[20px]">
            UserName
          </label>
          <input
            type="text"
            id="name"
            className="h-[40px] w-[90%] border-[2px] border-[#326d4b] rounded-lg px-3 text-[18px]"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="w-[90%] flex items-start justify-start flex-col gap-2 ">
          <label htmlFor="email" className="text-[20px]">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="h-[40px] w-[90%] border-[2px] border-[#326d4b] rounded-lg px-3 text-[18px]"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-[90%] flex items-start justify-start flex-col gap-2 relative">
          <label htmlFor="password" className="text-[20px]">
            Password
          </label>
          <input
            type={show ? "text" : "password"}
            id="password"
            className="h-[40px] w-[90%] border-[2px] border-[#326d4b] rounded-lg px-3 text-[18px] "
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!show && (
            <MdRemoveRedEye
              className="absolute right-[58px] top-[50px] text-[20px] cursor-pointer"
              onClick={() => setShow((prev) => !prev)}
            />
          )}
          {show && (
            <FaEyeSlash
              className="absolute right-[58px] top-[50px] text-[20px] cursor-pointer"
              onClick={() => setShow((prev) => !prev)}
            />
          )}
        </div>
        <p className="text-[15px] mt-2 ">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 cursor-pointer">
            Login
          </a>
        </p>
        <button className="px-[50px] py-[10px] bg-red-700 mt-5 text-white rounded-lg text-[18px]">
          SignUp
        </button>
      </form>
    </div>
  );
}

export default SignUp;
