import React from 'react';
import CardFeature from '../components/CardFeature';
import { useSelector } from 'react-redux';
import { useRef } from "react";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
import Footer from "../components/Footer";

const Groceries = () => {
  const productData = useSelector((state) => state.product.productList);
  console.log("Product Data in Groceries Component:", productData); 

  productData.forEach(product => {
    console.log("Product Category:", product.category);
  });

 
  const groceries = productData.filter(el => el.category.toLowerCase() === "groceries and pets".toLowerCase());
  console.log("Filtered Groceries Products:", groceries); 

  const loadingArrayFeature = new Array(10).fill(null);

  const slideCategoryRef = useRef();
  const nextCategory = () => {
    slideCategoryRef.current.scrollLeft += 200;
  };
  const prevCategory = () => {
    slideCategoryRef.current.scrollLeft -= 200;
  };

  return (
    <div>
      <div className="px-10 md:pl-20 pt-20">
        <div className="flex gap-2 items-center py-5"></div>
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold">Groceries & Pets</h3>
          <div className="">
            <div className="flex md:hidden items-center gap-2 md:pr-12 ">
              <div className="bg-slate-100 p-2 rounded-full hover:bg-slate-200 cursor-pointer text-slate-900" onClick={prevCategory}>
                <TiArrowLeft />
              </div>
              <div className="bg-slate-100 p-2 rounded-full hover:bg-slate-200 cursor-pointer text-slate-900" onClick={nextCategory}>
                <TiArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="flex pl-1 md:flex-wrap gap-7 overflow-scroll scrollbar-none scroll-smooth transition-all py-12" ref={slideCategoryRef}>
          {
            groceries.length > 0 ? groceries.map((el) => {
              return (
                <CardFeature key={el._id}
                  name={el.name}
                  id={el._id}
                  category={el.category}
                  price={el.price}
                  image={el.image}
                />
              );
            })
              :
              loadingArrayFeature.map((el, i) => <CardFeature key={i} loading="Loading..." />)
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Groceries;
