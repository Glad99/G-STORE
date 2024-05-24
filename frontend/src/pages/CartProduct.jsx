import { FaChevronDown, FaChevronRight, FaChevronUp } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteCartItem, increaseQty, decreaseQty } from "../redux/productSlice";
import Footer from "../components/Footer";

const CartProduct = ({id,name,image,category,qty,total, price}) => {
  const dispatch = useDispatch()
  return (
    <div className='p-2 flex gap-4 rounded border border-slate-300 md:justify-between md:px-[2rem] items-center md:mr-20 md:ml-10 mb-3'>
      <div className="flex justify-center items-center gap-2">
      <div className='bg-white py-3 rounded overflow-hidden '>
        <img src={image} alt={name} className='h-28 w-24 object-cover '/>
      </div>
      <h3 className=" font-semiblod text-slate-600 capitalize text-md md:text-xl w-28 overflow-hidden">{name}</h3></div>
      <div className="md:w-[55rem] flex md:justify-between items-center pl-[5rem]">
        <p className=" font-bold text-slate-500 -ml-36 "><span>₦</span>{price}</p>
        <div className="flex border border-black p-2 gap-5 -ml-20 rounded">
        <p className="font-semibold ">{qty}</p>
        <div className="flex flex-col gap-1">
        <button className=" hover:text-red-300 text-sm"onClick={()=>dispatch(increaseQty(id))}><FaChevronUp /></button>
        <button onClick={()=>dispatch(decreaseQty(id))} className="hover:text-red-300 text-sm"><FaChevronDown /></button>
          </div>
        </div>
          
          <div className="flex items-center gap-2 font-bold -ml-20">
            <p><span>₦</span>{total}</p>
          </div>
          <div className="cursor-pointer text-slate-500 hover:text-red-500 " onClick={()=>dispatch(deleteCartItem(id))}>
        <AiFillDelete /></div>
    </div>
    </div>
  )
}

export default CartProduct