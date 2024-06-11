import React from 'react'
import CardFeature from '../components/CardFeature'
import { useSelector } from 'react-redux'
import { useEffect, useRef, useState } from "react";
import { TiArrowLeft } from "react-icons/ti";
import { TiArrowRight } from "react-icons/ti";
import Footer from "../components/Footer";

const Electronics = () => {
  const productData = useSelector((state) =>state.product.productList)


  const electronics = productData.filter(el => el.category === "electronics")

  const loadingArrayFeature = new Array(10).fill(null);

 
   const slideCategoryRef = useRef()
  const nextCategory = ()=>{
    slideCategoryRef.current.scrollLeft += 200
  }
  const prevCategory = ()=>{
    slideCategoryRef.current.scrollLeft -= 200
  }


  return (
      <div>
      <div className="px-10 md:pl-20 pt-20">
    <div className="flex gap-2 items-center py-5">
    </div>
    <div className="flex justify-between items-center">
    <h3 className="text-2xl font-semibold">Electronics</h3>
      <div className="">
      <div className="flex md:hidden items-center gap-2 md:pr-12 ">
      <div className="bg-slate-100 p-2 rounded-full hover:bg-slate-200 cursor-pointer text-slate-900" onClick={prevCategory}><TiArrowLeft/></div>
        <div className="bg-slate-100 p-2 rounded-full hover:bg-slate-200 cursor-pointer text-slate-900" onClick={nextCategory}><TiArrowRight /></div>
      </div>
      </div>
    </div>
    <div className="flex pl-1 md:flex-wrap gap-7 overflow-scroll  scrollbar-none scroll-smooth transition-all py-12" ref={slideCategoryRef} >
      {
        electronics[0] ? electronics.map((el) =>{
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
     </div>
    <Footer/>
  </div>
  )
}

export default Electronics