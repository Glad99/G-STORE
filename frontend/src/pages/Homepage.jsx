import {Link} from "react-router-dom"
import { MdOutlineLocalOffer } from "react-icons/md";
import CardFeature from "../components/CardFeature";
import {useSelector} from "react-redux"
import { TiArrowLeft, TiArrowUp } from "react-icons/ti";
import { TiArrowRight } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";
import FilterProduct from "../components/FilterProduct";

import AllProduct from "../components/AllProduct";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Delivery from "../components/Delivery";
import gsap from "gsap"
import ScrollToTopButton from "../components/ScrollToTopButton";



const Homepage = () => {
  let timeline = gsap.timeline()
  let para = useRef(null)
  let cartImg = useRef(null)
  // useEffect(()=>{
  //   timeline.fromTo(para, {
  //     delay: .3,
  //     duration: 1,
  //     opacity: 0,
  //     y: 100
  //   })
  //   timeline.from(cartImg, {
  //     duration: 1,
  //     opacity: 0,
  //     y: 100
  //   }, '-=.5')
  // })
  const productData = useSelector((state) =>state.product.productList)


  const flashSales = productData.filter(el => el.category === "electronics")



  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef()
  const nextProduct = ()=>{
    slideProductRef.current.scrollLeft += 200
  }
  const prevProduct = ()=>{
    slideProductRef.current.scrollLeft -= 200
  }
  

  return (
    <div className=' '>
      <div className="flex gap-5  w-full h-screen px-10 md:px-20 lg:px-20 bg-gradient-to-b from-slate-50 from-90%  justify-center items-center pt-10  ">
        <div className="relative container para" ref={el => para = el}>
          <h2 className="text-2xl lg:text-4xl font-bold max-w-[35rem] ">Explore High-Quality <span className="text-[#d96846] ">Products Flawless</span> Shopping Experience</h2>
          <p className="text-gray-900 tracking-wide my-10 max-w-[33rem] text-l font-medium  ">Welcome to G-Store, your go-to for premium products. Dive into our curated selection of high-quality items across categories like electronics and fashion. Enjoy easy shopping with our intuitive interface and secure checkout. Elevate your online experience with us!</p>
          <div className="flex gap-5">
          <Link to={'/shop'} className="bg-slate-800   text-white rounded-full p-2 font-medium px-5 flex items-center whitespace-nowrap">Shop Now</Link>
          <Link to={'/'} className="bg-slate-200 text-gray-700 font-medium  rounded-full pl-5 flex items-center gap-5 ">Offers <MdOutlineLocalOffer className="text-xl bg-[#d96846] rounded-full h-12 w-12 p-3 rotate-90 border border-dashed transition-all duration-500 group-hover:rotate-45"/></Link>

        </div>
        </div>
        <div className=" " ref={el => cartImg = el}>
        <img src="/Side Image.svg" alt="" className="hidden md:flex md:w-[20rem] md:h-[30rem] lg:flex lg:w-[30rem] transform scale-x-[-1] mix-blend-multiply " />
        </div>
      </div>
      <div className="px-10 md:px-20">
        <div className="flex gap-2 items-center py-5">
          <div className="w-3 h-6 bg-[#d96846] rounded-sm"></div>
          <p className="text-[#d96846] font-semibold">Today's</p>
        </div>
        <div className="flex justify-between items-center pb-5">
          <div className="flex gap-10 items-center">
            <h3 className="text-2xl font-semibold">Flash Sales</h3>
          {/* <div>Time & date</div> */}
          </div>
          <div className="flex items-center gap-2 ">
          <div className="bg-slate-100 p-2 rounded-full hover:bg-slate-200 cursor-pointer text-slate-900" onClick={prevProduct}><TiArrowLeft/></div>
            <div className="bg-slate-100 p-2 rounded-full hover:bg-slate-200 cursor-pointer text-slate-900" onClick={nextProduct}><TiArrowRight /></div>
          </div>
        </div>
        <div className="flex pl-1 pt-1 gap-7 overflow-scroll  scrollbar-none scroll-smooth transition-all" ref={slideProductRef}>
          {
            flashSales[0] ? flashSales.map((el) =>{
              return(
                <CardFeature key={el._id}
                name={el.name}
                id={el._id}
                category={el.category}
                price={el.price}
                image={el.image}
                />
              )
            })
            :
            loadingArrayFeature.map((el, i) => <CardFeature  key={i} loading="Loading..."/>)
          }
          
        </div>
        <div className="flex justify-center items-center">
        <Link to={"/electronics"}>  <button className="bg-[#d96846] text-white text-sm px-6 py-2 rounded-sm mb-5 mt-5">View all Products</button></Link>
        </div>
        <hr className="text-slate-800 font-medium mt-4 mb-5 w-auto" />
      </div>
      <Categories/>
      <AllProduct/>
      <Delivery/>
      <div className="flex justify-end m-2 mr-10 ">
      <ScrollToTopButton/>
  </div>
  
      <Footer/>
    </div>
  )
}

export default Homepage