import loginAnimation from "../assets/login-animation.gif"
import { Link } from "react-router-dom";
import { useState } from "react";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../redux/userSlice";
import Footer from "./Footer";


const LogIn = () => {
  const [showPassword, setShowPassword]=useState(false)
  const [data, setData]= useState({
    email: "",
    password : "",
  })
  const navigate = useNavigate()
  
  const userData = useSelector(state =>state)

  const dispatch = useDispatch()

  const handleShowPassword = ()=> {
    setShowPassword(prev => !prev)
  }


  const handleOnChange = (e)=>{
    const {name, value} = e.target
    setData((prev)=>{
      return {
        ...prev,
        [name] : value

      } 
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const {email, password} = data
    if(email && password){
      const fetchData = await fetch(`${import.meta.env.VITE_SERVER_DOMIN}/login`, {
        method : "POST",
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify(data)
      })
      
      const dataRes = await fetchData.json()
      console.log(dataRes);
      // alert("successfull")
      toast(dataRes.message)

      if(dataRes.alert){
        dispatch(loginRedux(dataRes))
        setTimeout(()=>{
          navigate("/")
        }, 1000)
      }
      console.log(userData);
    }

    else{
      alert("please enter the required fields ")
    }
  }
  return (
    <div className='pt-16 w-screen'>
      <div className="hero min-h-screen bg-base-200 w-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left lg:text-nowrap">
      <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold">Log In</h1>
      <p className="py-5">Enter your details</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 -mt-5 lg:mt-5">
      <form className="card-body"onSubmit={handleSubmit}>
      <div className=" hidden md:inline-block lg:inline-block md:w-20 lg:w-20 overflow-hidden rounded-full drop-shadow-md shadow-md mb-3 -mt-4 m-auto ">
      <img src={loginAnimation} alt=""  className=""/>
      </div>
        <div className="form-control">
      
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered focus-within:outline-blue-300" name="email" value={data.email} onChange={handleOnChange} required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="flex flex-col">
          <input type={showPassword ? "text" :"password"} placeholder="password" className="input input-bordered focus-within:outline focus-within:outline-blue-300" name="password" value={data.password} onChange={handleOnChange} required />
          <span className="absolute bottom-3.5 right-3 text-xl flex cursor-pointer" onClick={handleShowPassword}>{showPassword ? <BiShow/>:
          <BiHide />}</span>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#d96846] text-white">Login</button>
        </div>
        <div className="form-control mt-2">
          <button className="btn bg-gray">Log in with Google</button>
        </div>
        <p className="mt-3">Don't have an account? <Link to={"/signup"} className="text-red-500 underline">Sign up</Link></p>
      </form>
      <div>
      </div>
    </div>
  </div>
</div>
<Footer/>
    </div>
  )
}

export default LogIn