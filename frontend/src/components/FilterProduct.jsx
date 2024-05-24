import { IoWomanOutline } from "react-icons/io5";
import { IoManOutline } from "react-icons/io5";
import { MdOutlineElectricalServices } from "react-icons/md";
import { HiOutlineHome } from "react-icons/hi2";
import { MdOutlineMedicalServices } from "react-icons/md";
import { GiPencilBrush } from "react-icons/gi";
import { LuBaby } from "react-icons/lu";
import { PiBowlFoodLight } from "react-icons/pi";
import { RiProductHuntLine } from "react-icons/ri";


const FilterProduct = ({category, onClick, isActive}) => {
  return (
    <div onClick={onClick}>
        <div className="flex gap-5 ">
        <div className={`flex flex-col p-5 bg-white text-slate-700 hover:shadow-lg border border-slate-300 rounded cursor-pointer justify-center items-center gap-2 hover:bg-[rgb(238,151,124)] hover:text-white min-w-[130px] whitespace-nowrap overflow-hidden ${isActive ? "bg-[rgb(217,104,70)] text-white" : "bg-white"}`}>
        <RiProductHuntLine className=" text-3xl" />
        <p className="text-sm font-semibold w-[5rem] flex items-center justify-center capitalize">{category}</p>
        </div>
        {/* <div className=" flex flex-col p-5 bg-white text-slate-700 hover:shadow-lg border border-slate-300 rounded cursor-pointer justify-center items-center gap-2 hover:bg-[#d96846] hover:text-white min-w-[130px] whitespace-nowrap overflow-hidden ">
        <IoManOutline className=" text-3xl" />
        <p className="text-sm font-semibold ">Men's wear</p>
        </div>
        <div className=" flex flex-col p-5 bg-white text-slate-700 hover:shadow-lg border border-slate-300 rounded cursor-pointer justify-center items-center gap-2 hover:bg-[#d96846] hover:text-white min-w-[130px] whitespace-nowrap overflow-hidden ">
        <MdOutlineElectricalServices className=" text-3xl" />
        <p className="text-sm font-semibold ">Electronics</p>
        </div>
        <div className=" flex flex-col p-5 bg-white text-slate-700 hover:shadow-lg border border-slate-300 rounded cursor-pointer justify-center items-center gap-2 hover:bg-[#d96846] hover:text-white min-w-[130px] whitespace-nowrap overflow-hidden ">
        <HiOutlineHome className=" text-3xl" />
        <p className="text-sm font-semibold ">Homes</p>
        </div>
        <div className=" flex flex-col p-5 bg-white text-slate-700 hover:shadow-lg border border-slate-300 rounded cursor-pointer justify-center items-center gap-2 hover:bg-[#d96846] hover:text-white min-w-[130px] whitespace-nowrap overflow-hidden ">
        <MdOutlineMedicalServices className=" text-3xl" />
        <p className="text-sm font-semibold ">Medicine</p>
        </div>
        <div className=" flex flex-col p-5 bg-white text-slate-700 hover:shadow-lg border border-slate-300 rounded cursor-pointer justify-center items-center gap-2 hover:bg-[#d96846] hover:text-white min-w-[130px] whitespace-nowrap overflow-hidden">
        <GiPencilBrush className=" text-3xl" />
        <p className="text-sm font-semibold ">Beauty</p>
        </div>
        <div className=" flex flex-col p-5 bg-white text-slate-700 hover:shadow-lg border border-slate-300 rounded cursor-pointer justify-center items-center gap-2 hover:bg-[#d96846] hover:text-white min-w-[130px] whitespace-nowrap overflow-hidden">
        <LuBaby className=" text-3xl" />
        <p className="text-sm font-semibold ">Babies</p>
        </div>
        <div className=" flex flex-col p-5 bg-white hover:shadow-lg border border-slate-300 rounded cursor-pointer justify-center items-center gap-2 text-slate-700 hover:bg-[#d96846] hover:text-white min-w-[130px] whitespace-nowrap overflow-hidden">
        <PiBowlFoodLight className=" text-3xl" />
        <p className="text-sm font-semibold ">Groceries</p>
  </div>*/}
        </div>
    </div>
  )
}

export default FilterProduct