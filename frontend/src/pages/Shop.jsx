import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux"
import { TiArrowLeft } from "react-icons/ti";
import { TiArrowRight } from "react-icons/ti";
import CardFeature from "../components/CardFeature";
import Footer from "../components/Footer";


const Shop = () => {
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
    <div><div className="px-10 md:pl-20 pt-20">
    <div className="flex gap-2 items-center py-5">
    </div>
    <div className="flex justify-between items-center">
    <h3 className="text-2xl font-semibold">All Products</h3>
      <div className="">
      <div className="flex md:hidden items-center gap-2 md:pr-12 ">
      <div className="bg-slate-100 p-2 rounded-full hover:bg-slate-200 cursor-pointer text-slate-900" onClick={prevCategory}><TiArrowLeft/></div>
        <div className="bg-slate-100 p-2 rounded-full hover:bg-slate-200 cursor-pointer text-slate-900" onClick={nextCategory}><TiArrowRight /></div>
      </div>
      </div>
    </div>
    <div className="flex pl-1 md:flex-wrap gap-7 overflow-scroll  scrollbar-none scroll-smooth transition-all py-12" ref={slideCategoryRef} >
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
    <Footer/>
  </div>
  )
}

export default Shop