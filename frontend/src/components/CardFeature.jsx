import {  Link, useNavigate } from "react-router-dom"
import { addCartItem } from "../redux/productSlice";
import { useDispatch } from "react-redux";


const CardFeature = ({image,name,price, loading,category, id}) => {
  const dispatch = useDispatch()
  const handleAddToCartProduct = (e)=>{
    dispatch(addCartItem({
      _id : id,
      name : name,
      price : price,
      category : category,
      image : image

    }))
  }
  return (
    <div className="w-full min-w-[200px] max-w-[200px] bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col mb-5">
      {
        image ? <>
        <Link to={`product/${id}`} onClick={()=>window.scrollTo({top:"0", behavior: "smooth"})}> 
        <div className='flex flex-col justify-center item-center w-full'>
            <img src={image} className='h-[11rem]'/>
        </div>
        <h3 className=" font-semiblod text-slate-600 capitalize text-lg mt-4 whitespace-nowrap overflow-hidden ">{name}</h3>
        <p className=" font-bold text-slate-500"><span>₦</span>{price}</p>
        </Link>
        <button className="bg-slate-950 text-white py-1 mt-3 w-full mb-3 rounded hover:bg-slate-800" onClick={handleAddToCartProduct}>Add To Cart</button></> 
        :
        <div className="min-h-[150px] flex justify-center items-center">
          <p>{loading}</p>
        </div>
      }
        
    </div>
  )
}

export default CardFeature