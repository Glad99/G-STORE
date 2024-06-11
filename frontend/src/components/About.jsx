import React, { useRef } from 'react'
import Footer from './Footer'
import Delivery from './Delivery'
import { RiProductHuntLine } from 'react-icons/ri'
import { TbTruckDelivery } from 'react-icons/tb'
import { TiArrowLeft, TiArrowRight, TiSocialFacebook } from 'react-icons/ti'
import { LuTwitter } from 'react-icons/lu'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import { TbBuildingStore } from "react-icons/tb";
import { MdOutlineMonetizationOn } from "react-icons/md";
import { IoGiftOutline } from "react-icons/io5";
import { CiBag1 } from "react-icons/ci";
import ScrollToTopButton from './ScrollToTopButton'

const About = () => {
  const slideRef = useRef()
  const nextCategory = ()=>{
    slideRef.current.scrollLeft += 200
  }
  const prevCategory = ()=>{
    slideRef.current.scrollLeft -= 200
  }
  return (
    <div className='pt-[5rem]'>
      <div className='flex justify-center items-center gap-[5rem] mt-5'>
        <div className='max-w-[32rem] px-5 md:px-10 lg:0'>
          <h2 className='text-3xl font-bold pb-4 tracking-wider'>Our Story</h2>
          <p >Launced in 2024, G-Store is premier online shopping makterplace with an active presense in Nigeria. Supported by wide range of tailored marketing, data and service solutions, G-Store has 10,500 sallers and 300 brands and serves 3 millions customers across the internet. </p>
          <p className='mt-5'>G-Store has more than 1 Million products to offer, growing at a very fast. G-Store offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        <div className='md:flex  hidden size-[450px]'>
          <img src="portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.svg" alt="" />
        </div>
      </div>
      <div className="">
      <div className="flex items-center gap-2 justify-end mr-3 pt-10 md:hidden ">
      <div className="bg-slate-100 p-2 rounded-full hover:bg-slate-200 cursor-pointer text-slate-900" onClick={prevCategory}><TiArrowLeft/></div>
        <div className="bg-slate-100 p-2 rounded-full hover:bg-slate-200 cursor-pointer text-slate-900" onClick={nextCategory}><TiArrowRight /></div>
      </div>
      </div>
      <div className="flex overflow-hidden gap-2 md:gap-20 justify-center items-center pt-2 pb-10 pl-[16rem] md:pl-0 md:pr-0 pr-2" ref={slideRef}>
        <div className="flex flex-col py-5 bg-white text-slate-700 hover:shadow-lg border border-slate-300 rounded cursor-pointer justify-center items-center gap-2 hover:bg-[#d96846] hover:text-white min-w-[130px] w-[1rem]">
        <div className="flex justify-center items-center p-2 bg-slate-300 mx-8 md:mx-32 rounded-full">
            <div className="p-2 bg-black text-slate-200 flex justify-center items-center md:max-w-10 md:h-10 md:w-10  rounded-full">
        <TbBuildingStore className="size-6"/>
        </div>
        </div>
        <p className='text-lg font-bold'>10.5K</p>
        <p className="text-[10px] font-semibold flex items-center justify-center">Sellers active our site</p>
        </div>
        <div className="flex flex-col py-5 bg-white text-slate-700 hover:shadow-lg border border-slate-300 rounded cursor-pointer justify-center items-center gap-2 hover:bg-[#d96846] hover:text-white min-w-[130px] w-[1rem]">
        <div className="flex justify-center items-center p-2 bg-slate-300 mx-8 md:mx-32 rounded-full">
            <div className="p-2 bg-black text-slate-200 flex justify-center items-center md:max-w-10 md:h-10 md:w-10  rounded-full">
        <MdOutlineMonetizationOn className="size-6"/>
        </div>
        </div>
        <p className='text-lg font-bold'>30K</p>
        <p className="text-[10px] font-semibold flex items-center justify-center">Monthly product sale</p>
        </div>
        <div className="flex flex-col py-5 bg-white text-slate-700 hover:shadow-lg border border-slate-300 rounded cursor-pointer justify-center items-center gap-2 hover:bg-[#d96846] hover:text-white min-w-[130px] w-[1rem]">
        <div className="flex justify-center items-center p-2 bg-slate-300 mx-8 md:mx-32 rounded-full">
            <div className="p-2 bg-black text-slate-200 flex justify-center items-center md:max-w-10 md:h-10 md:w-10  rounded-full">
        <IoGiftOutline className="size-6"/>
        </div>
        </div>
        <p className='text-lg font-bold'>43.5K</p>
        <p className="text-[10px] font-semibold flex items-center justify-center">Customers active our site</p>
        </div>
        <div className="flex flex-col py-5 bg-white text-slate-700 hover:shadow-lg border border-slate-300 rounded cursor-pointer justify-center items-center gap-2 hover:bg-[#d96846] hover:text-white min-w-[130px] w-[1rem]">
        <div className="flex justify-center items-center p-2 bg-slate-300 mx-8 md:mx-32 rounded-full">
            <div className="p-2 bg-black text-slate-200 flex justify-center items-center md:max-w-10 md:h-10 md:w-10  rounded-full">
        <CiBag1 className="size-6"/>
        </div>
        </div>
        <p className='text-lg font-bold'>25K</p>
        <p className="text-[10px] font-semibold flex items-center justify-center ">Annual gross sale </p>
        </div>
      </div>
      
      <div className='flex px-5 md:py-5 md:pb-8  pb-3 gap-4 md:gap-20 justify-center items-center'>
        <div className=''>
          <img src="CEO.jpg" alt="" className='size-20 md:size-40 rounded bg-slate-200'/>
          <p className='font-bold text-sm md:text-xl  pt-2 pb-1'>Gladys Alu</p>
          <p className='text-[8px] md:text-[10px] md:py-1'>Founder & Chairman</p>
          <div className="flex gap-3 my-1">
            <LuTwitter className='size-3 md:size-4 ' />
            <FaInstagram className='size-3 md:size-4'/>
            <FaLinkedinIn className='size-3 md:size-4 '/>
            </div>
        </div>
        <div className=''>
          <img src="image 51.png" alt="" className='size-20 md:size-40 rounded bg-slate-200'/>
          <p className='font-bold text-sm md:text-xl  pt-2 pb-1'>Emma Rye</p>
          <p className='text-[8px] md:text-[10px] md:py-1'>Manager</p>
          <div className="flex gap-3 my-1">
            <LuTwitter className='size-3 md:size-4 ' />
            <FaInstagram className='size-3 md:size-4'/>
            <FaLinkedinIn className='size-3 md:size-4 '/>
            </div>
        </div>
        <div className=''>
          <img src="image 47.png" alt="" className='size-20 md:size-40 rounded bg-slate-200'/>
          <p className='font-bold text-sm md:text-xl  pt-2 pb-1'>Will Smith</p>
          <p className='text-[8px] md:text-[10px] md:py-1'>Product Designer</p>
          <div className="flex gap-3 my-1">
            <LuTwitter className='size-3 md:size-4 ' />
            <FaInstagram className='size-3 md:size-4'/>
            <FaLinkedinIn className='size-3 md:size-4 '/>
            </div>
        </div>
      </div>
      <Delivery/>
      <div className="flex justify-end m-2 mr-10 ">
      <ScrollToTopButton/>
  </div>
      <Footer/>
    </div>
  )
}

export default About