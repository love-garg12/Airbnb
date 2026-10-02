import React from "react";
import { useState } from "react";
import { MdRemoveRedEye } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { authContext } from "../Context/AuthContext.jsx";

import { userDataContext } from "../Context/UserContext.jsx";

function Login() {
  let [show, setShow] = useState(false);
  let {serverUrl} = useContext(authContext)
  let { userData, setUserData } = useContext(userDataContext)
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let navigate = useNavigate();
  
  const handleLogin = async (e) => {
    try{
         e.preventDefault();
         let result = await axios.post(serverUrl+"/api/auth/login", {
          email,
          password
        },{withCredentials:true})
        setUserData(result.data)
        navigate("/")
        console.log(result)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <form
        action=""
        className="flex flex-col items-center justify-center max-w-[500px] w-[90%] h-[500px] p-4 border border-gray-300 
                    rounded-md bg-slate-700  relative"
                    onSubmit={handleLogin}
      >
        <div className="flex items-center justify-center">
          <FaArrowLeft
            className="absolute left-[40px] top-[40px] text-[30px] cursor-pointer"
            onClick={() => navigate("/")}
          />

          <h1 className="text-2xl font-normal text-black mb-4 text-center">
            Welcome to Airbnb
          </h1>
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
            onChange={(e)=>{
            setEmail(e.target.value)
          }}/>
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
           onChange={(e)=>setPassword(e.target.value)}/>
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
        <p className="text-[15px] mt-2">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500 cursor-pointer">
            SignUp
          </a>
        </p>
        <button className="px-[50px] py-[10px] bg-red-700 mt-5 text-white rounded-lg text-[18px]">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
