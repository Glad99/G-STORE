import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux"
import FilterProduct from "./FilterProduct";
import CardFeature from "./CardFeature";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { TiArrowLeft } from "react-icons/ti";
import { TiArrowRight } from "react-icons/ti";
import { Link } from "react-router-dom";


const AllProduct = () => {
    const productData = useSelector((state) =>state.product.productList)
    const categoryList = [...new Set( productData.map(el=>el.category))]
  console.log(categoryList);

   //filterData display
   const [filterby, setFilterby] = useState("")
   const [dataFilter, setDataFilter] = useState(productData
   )
 
   const slideCategoryRef = useRef()
  const nextCategory = ()=>{
    slideCategoryRef.current.scrollLeft += 200
  }
  const prevCategory = ()=>{
    slideCategoryRef.current.scrollLeft -= 200
  }

  const loadingArrayFeature = new Array(10).fill(null);
 
  return (
    <div><div className="px-10 md:pl-20">
    <div className="flex gap-2 items-center py-5">
      <div className="w-3 h-6 bg-[#d96846] rounded-sm"></div>
      <p className="text-[#d96846] font-semibold">Our Products</p>
    </div>
    <div className="flex justify-between items-center">
    <h3 className="text-2xl font-semibold">Explore Our Products</h3>
      <div className="">
      <div className="flex items-center gap-2 md:pr-12">
      <div className="bg-slate-100 p-2 rounded-full hover:bg-slate-200 cursor-pointer text-slate-900" onClick={prevCategory}><TiArrowLeft/></div>
        <div className="bg-slate-100 p-2 rounded-full hover:bg-slate-200 cursor-pointer text-slate-900" onClick={nextCategory}><TiArrowRight /></div>
      </div>
      </div>
    </div>
    <div className="flex pl-1 gap-7 overflow-scroll  scrollbar-none scroll-smooth transition-all py-12" ref={slideCategoryRef} >
      {
        productData[0] ? productData.map((el, i) =>{
          return(
          <CardFeature key={i}
          id={el._id}
          image={el.image}
          name={el.name}
          price={el.price}
          category={el.category}
         />
        )
      })
      :
            loadingArrayFeature.map((el, i) => <CardFeature  key={i} loading="Loading..."/>)
      }
     </div>
     </div>
     <div className="flex justify-center items-center">
     <Link to={"/shop"}>  <button className="bg-[#d96846] text-white text-sm px-6 py-2 rounded-sm mb-5 mt-5">View all Products</button></Link>
        </div>
    <hr className="text-slate-800 font-medium mt-5 mb-5 w-auto" />
  </div>
  )
}

export default AllProduct