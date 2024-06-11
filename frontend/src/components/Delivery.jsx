import { TbTruckDelivery } from "react-icons/tb";
import { TbHeadset } from "react-icons/tb";
import { SiAdguard } from "react-icons/si";

const Delivery = () => {
  return (
    <div className="py-2">
    <div className='flex justify-center lg:gap-[5rem]'>
    <div className="flex flex-col justify-center items-center gap-1">
        <div className="flex justify-center items-center p-2 bg-slate-300 mx-8 md:mx-32 rounded-full">
            <div className="p-2 bg-black text-slate-200 flex justify-center items-center md:max-w-10 h-7 w-7 md:h-10 md:w-10 rounded-full">
        <TbTruckDelivery className="size-6"/>
        </div>
        </div>
      <h3 className=" font-bold mt-2 text-[7px] md:text-sm">FREE AND FAST DELIVERY</h3>
      <p className="text-[6px] md:text-[10px] font-semibold">Free delivery for all orders over 140</p>
    </div>
        <div className="flex flex-col justify-center items-center gap-1">
        <div className="flex justify-center items-center p-2 bg-slate-300 mx-8 lg:mx-32 rounded-full">
            <div className="p-2 bg-black text-slate-200 flex justify-center items-center md:max-w-10 h-7 w-7 md:h-10 md:w-10 rounded-full">
        <TbHeadset className="size-6"/>
        </div>
        </div>
      <h3 className="font-bold mt-2 text-[7px] md:text-sm">24/7 CUSTOMER SERVICE</h3>
      <p className="text-[6px] md:text-[10px]font-semibold">Friendly 24/7 customer support</p>
    </div>
    <div className="flex flex-col justify-center items-center gap-1">
    <div className="flex justify-center items-center p-2 bg-slate-300 mx-8 md:mx-32 rounded-full">
            <div className="p-2 bg-black text-slate-200 flex justify-center items-center md:max-w-10 h-7 w-7 md:h-10 md:w-10 rounded-full ">
        <SiAdguard className="size-6"/>
        </div>
        </div>
      <h3 className=" font-bold mt-2 text-[7px] md:text-sm">MONEY BACK GUARANTEE</h3>
      <p className="text-[6px] md:text-[10px]font-semibold">We return money within 30 days</p>
    </div>
  </div>
  </div>
  )
}

export default Delivery