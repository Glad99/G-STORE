import {useSelector} from 'react-redux'
import CartProduct from './CartProduct';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import PayPalPayment from '../components/PayPalPayment';
import Footer from '../components/Footer';


const Cart = () => {
    const productCartItem = useSelector((state)=>state.product.cartItem)
    console.log(productCartItem);

    const totalPrice = productCartItem.reduce((acc,curr)=>acc + parseInt(curr.total), 0)
    const totalQty = productCartItem.reduce((acc,curr)=>acc + parseInt(curr.qty), 0)
  return (
    <>
    <div className='pt-20 px-2 md:px-4'>
        <h2 className='text-lg md:text-xl font-bold text-slate-600'>Your Cart Items</h2>
        {productCartItem[0] ?
        <div className='my-4'>
            <div className='md:flex justify-between my-7 px-[7rem] font-semibold hidden'>
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
            <p>Action</p>
        </div>
        {/* display cart items */}
            <div className='w-full'>
                {
                    productCartItem.map((el)=>{
                        return(
                            <CartProduct key={el._id}
                            id={el._id}
                            name={el.name}
                            image={el.image}
                            category={el.category}
                            qty={el.qty}
                            total={el.total}
                            price={el.price}/>
                        )
                    })
                }
            </div>

            {/* total cart item */}
            <div className='w-full flex flex-col m-10 gap-3'>
                <div className='md:flex md:justify-between gap-2 md:mr-[10rem]'>
            <div className='flex gap-2 h-[3rem] mb-5 mr-[5rem] md:mr-0'>
                <input type="text" placeholder='Coupon Code' className='border rounded p-2' />
                <button className='bg-[#d96846] text-white py-2 px-2 md:px-5 w-full hover:bg-[rgb(238,151,124)] rounded'>Apply Coupon</button>
            </div>
            <div className='w-full max-w-md border p-5 rounded '>
                <h2 className='font-bold'>Summary</h2>
                <div className='flex w-full py-2 text-lg border-b '>
                    <p>Total Qty:</p>
                    <p className='ml-auto w-32 font-semibold'>{totalQty}</p>
                </div>
                <div className='flex  w-full py-2 text-lg border-b'>
                    <p>Subtotal:</p>
                    <p className='ml-auto w-32 font-semibold'><span>₦</span>{totalPrice}</p>
                </div>
                <div className='flex  w-full py-2 text-lg border-b'>
                    <p>Shipping:</p>
                    <p className='ml-auto w-32 font-semibold'>Free</p>
                </div>
                <div className='flex  w-full py-2 text-lg border-b'>
                    <p>Total Price:</p>
                    <p className='ml-auto w-32 font-semibold'><span>₦</span>{totalPrice}</p>
                </div>
                <button className='bg-[#d96846] text-white py-2 rounded w-full hover:bg-[rgb(238,151,124)]'>Process to checkout</button>
            </div>
            </div>
            <PayPalPayment/>
            </div>
            </div>
        :
        <div className='flex justify-center items-center flex-col'>
            <img src={"Animation - 1713885971677.gif"} alt="" className='w-full max-w-sm'/>
            <p className='text-slate-500 text-3xl font-bold'>Empty Cart</p>
        </div>
        }
    </div>
    <Footer/>
    </>
  )
}

export default Cart