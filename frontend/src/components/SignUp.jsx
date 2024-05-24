import loginAnimation from "../assets/login-animation.gif"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { ImagetoBase64 } from "../utility/ImagetoBase64";
import { toast } from "react-hot-toast";
import Footer from "./Footer";

const SignUp = () => {
  
  const navigate = useNavigate(false)
  const [showPassword, setShowPassword]=useState(false)
  const [showConfirmPassword, setShowConfirmPassword]=useState(false)
  const [data, setData]= useState({
    name : "",
    email: "",
    password : "",
    confirmPassword : "",
    image : ""
  })
  console.log(data);

  const handleShowPassword = ()=> {
    setShowPassword(prev => !prev)
  }

  const handleShowConfirmPassword = ()=> {
    setShowConfirmPassword(prev => !prev)
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

  const handleUploadProfileImage = async (e) =>{
    const data = await ImagetoBase64((e.target.files[0]))
    console.log(data);

    setData((prev)=>{
      return{
        ...prev,
        image : data
      }
    })
  }
  console.log(import.meta.env.VITE_SERVER_DOMIN);

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const {image, name, email, password, confirmPassword} = data
    if(image && name && email && password && confirmPassword){
    if(password === confirmPassword){
      const fetchData = await fetch(`${import.meta.env.VITE_SERVER_DOMIN}/signup`, {
        method : "POST",
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify(data)
      })
      
      const dataRes = await fetchData.json()
      console.log(dataRes);
      // alert(dataRes.message)
      toast(dataRes.message)
      if(dataRes.alert){
        navigate("/login")
      }
      
    }
    else{
      alert("password and confirm password not equal")
      }
    }
    else{
      alert("please enter the required fields ")
    }
  }
  return (
    <div className='pt-12 w-screen'>
      <div className="hero min-h-screen bg-base-200 w-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left lg:text-nowrap">
      <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold">Create an account</h1>
      <p className="py-5">Enter your details</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 -mt-5 lg:mt-5">
      <form className="card-body"onSubmit={handleSubmit}>
      <div className=" w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md -mt-4 m-auto relative">
      <img src={data.image ? data.image : loginAnimation} alt=""  className="w-full h-full"/>
      <label htmlFor="profileImage">
      <div className="absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer">
        <p className="text-sm p-1 text-white">Upload</p>
      </div>
      <input type={"file"} id="profileImage" accept="image/*" className="hidden" onChange={handleUploadProfileImage} />
      </label>
      </div>
        <div className="form-control">
      <label className="label">
            <span className="label-tex">Name</span>
          </label>
          <input type="name" placeholder="name" className="input input-bordered focus-within:outline-blue-300" name="name" value={data.name} onChange={handleOnChange} required />
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
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <div className="flex flex-col">
          <input type={showConfirmPassword ? "text" :"password"} placeholder="confirm password" className="input input-bordered focus-within:outline focus-within:outline-blue-300" name="confirmPassword" value={data.confirmPassword} onChange={handleOnChange} required />
          <span className="absolute bottom-3.5 right-3 text-xl flex cursor-pointer" onClick={handleShowConfirmPassword}>{showConfirmPassword ? <BiShow/>:
          <BiHide />}</span>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#d96846] text-white">Create Account</button>
        </div>
        <div className="form-control mt-2">
          <button className="btn bg-gray">Sign up with Google</button>
        </div>
        <p>Already have an account? <Link to={"/login"} className="text-red-500 underline">Log in</Link></p>
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

export default SignUp