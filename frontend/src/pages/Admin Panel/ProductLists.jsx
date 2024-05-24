import { useSelector } from "react-redux"
import { RiDeleteBin6Line } from "react-icons/ri";
import Footer from "../../components/Footer";



const ProductLists = () => {
    const getProduct = useSelector((state) =>state.product.productList)
    
  return (
    <div className="pt-16">
        <div className="mx-6">
        <div>All Products</div>
        <div className="flex gap-[14.2rem] px-6 font-semibold">
            <p>Name</p>
            <p>Category</p>
            <p>Price</p>
            <p>Action</p>
        </div>
        <hr />
        <div className="p-6">
        {
        getProduct[0] && getProduct.map((el, i) =>{
          return(
            <div key={i} className="flex gap-[15rem] whitespace-nowrap py-3">
                <p className="max-w-10 font-semibold">{el.name}</p>
                <p className="max-w-10">{el.category}</p>
                <p className="max-w-10"><span>₦</span>{el.price}</p>
                <div><RiDeleteBin6Line /></div>
            </div>
        )
      })
      }
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ProductLists