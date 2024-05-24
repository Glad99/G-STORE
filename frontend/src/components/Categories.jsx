import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux"
import FilterProduct from "./FilterProduct";
import CardFeature from "./CardFeature";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { TiArrowLeft } from "react-icons/ti";
import { TiArrowRight } from "react-icons/ti";


const Categories = () => {
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

  const scrollElement = useRef()
  const scrollRight = ()=>{
    scrollElement.current.scrollLeft += 200
  }
  const scrollLeft = ()=>{
    scrollElement.current.scrollLeft -= 200
  }

   useEffect(()=>{
     setDataFilter(productData)
   }, [productData])
 
   const handleFilterProduct = (category)=>{
    setFilterby(category)
     const filter = productData.filter(el=> el.category.toLowerCase() === category.toLowerCase())
     setDataFilter(()=>{
       return[...filter]
     })
   }

   const loadingArrayFeature = new Array(10).fill(null);
   
  return (
    <div><div className="px-10 md:px-20">
    <div className="flex gap-2 items-center py-5">
      <div className="w-3 h-6 bg-[#d96846] rounded-sm"></div>
      <p className="text-[#d96846] font-semibold">Categories</p>
    </div>
    <div className="flex justify-between items-center">
    <h3 className="text-2xl font-semibold">Browse By Category</h3>
      <div className="">
      <div className="flex items-center gap-2 lg:hidden ">
      <div className="bg-slate-100 p-2 rounded-full hover:bg-slate-200 cursor-pointer text-slate-900" onClick={prevCategory}><TiArrowLeft/></div>
        <div className="bg-slate-100 p-2 rounded-full hover:bg-slate-200 cursor-pointer text-slate-900" onClick={nextCategory}><TiArrowRight /></div>
      </div>
      </div>
    </div>
    <div className="flex gap-7 overflow-scroll  scrollbar-none scroll-smooth transition-all py-12" ref={slideCategoryRef} >
      {
        categoryList[0] ? categoryList.map((el, i) =>{
          return(
            <FilterProduct key={i} category={el} 
            isActive={el.toLowerCase() == filterby.toLowerCase()} 
            onClick={()=>handleFilterProduct(el)}/>
          )
        })
        :
        <div className="min-h-[100px] flex  justify-center items-center">
        <p>Loading...</p>
      </div>
      }
     </div>
     <div className="relative">
     <div className="flex justify-center gap-7 overflow-scroll  scrollbar-none scroll-smooth transition-all" ref={scrollElement}>
     <div className="flex items-center gap-2 justify-between ">
      <div className="bg-slate-300 p-2 rounded-full hover:bg-slate-200 cursor-pointer text-slate-900 absolute left-0 top-28 z-10 md:block" onClick={scrollLeft}><FaChevronLeft /></div>
        <div className="bg-slate-300 p-2 rounded-full hover:bg-slate-200 cursor-pointer text-slate-900 absolute right-0 top-28 z-10 md:block  " onClick={scrollRight}><FaChevronRight /></div>
      </div>
     
      {
      dataFilter[0] ? dataFilter.map(el => {
        return(
          <CardFeature key={el._id}
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
    <hr className="text-slate-800 font-medium mt-5 mb-5 w-auto" />
  </div>
  </div>
  )
}

export default Categories