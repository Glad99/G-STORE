import { BsCloudUpload } from "react-icons/bs";
import { ImagetoBase64 } from "../../utility/ImagetoBase64";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const NewProduct = () => {
  const [data, setData]= useState({
    name : "",
    category : "",
    image : "",
    price : "",
    description : "",
  })

  const handleOnChange = (e)=>{
    const {name, value} = e.target

    setData((prev)=>{
        return{
          ...prev,
          [name] : value
        }
    })

  }

  const uploadImage = async(e)=>{
    const data = await ImagetoBase64((e.target.files[0]))
    // console.log(data);

    setData((prev)=>{
      return{
        ...prev,
        image : data
      }
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    console.log(data);

    const {name, image, category, price} = data

    if(name && image && category && price){
      const fetchData = await fetch(`${import.meta.env.VITE_SERVER_DOMIN}/uploadProduct`, {
        method : "POST",
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify(data)
      })
      const fetchRes = await fetchData.json()
      console.log(fetchRes);
      toast(fetchRes.message)

      setData(()=>{
        return {
          name : "",
          category : "",
          image : "",
          price : "",
          description : "",
        }
      })
    }
    else(
      toast("Enter required Fields")
    )
  }
  return (
    <div className='pt-[5rem] P-4'>
      <form className='m-auto w-full max-w-md shadow flex flex-col p-3 bg-white' onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' className="bg-slate-200 p-1 my-1" onChange={handleOnChange} value={data.name} />
        <label htmlFor="category">Category</label>
        <select className="bg-slate-200 p-1 my-1" id="category" name="category" onChange={handleOnChange} value={data.category}>
              <option value={"other"}>select category</option>
              <option value={"women"}>Women's Fashion</option>
              <option value={"men"}>Men's Fashion</option>
              <option value={"electronics"}>Electronics</option>
              <option value={"homes"}>Homes & Lifestyle</option>
              <option value={"Medicine"}>Medicine</option>
              <option value={"health and beauty"}>Health & Beauty</option>
              <option value={"kids and toys"}>Babies, Kids & Toys</option>
              <option value={"groceries and pets"}>Groceries & Pets</option>
            </select>

            <label htmlFor="image">Image
            <div className='h-40 w-full bg-slate-200 rounded flex items-center justify-center cursor-pointer'>
              {
                data.image ? <img src={data.image} className="h-full" /> :<span className="text-5xl "><BsCloudUpload /></span>
              }
              
              <input type={"file"} accept="image/*" id="image" name="name" onChange={uploadImage} className="hidden"/>
            </div>
            </label>

            <label htmlFor="price" className="my-1">Price</label>
            <input type="text" className="bg-slate-200 p-1 my-1" name="price" onChange={handleOnChange} value={data.price} />

            <label htmlFor="description">Description</label>
            <textarea rows={2} className="bg-slate-200 p-1 my-1 resize-none" name="description" onChange={handleOnChange} value={data.description}></textarea>

            <button className="bg-[#d96846] hover:bg-[#ec4b1a] text-white text-lg font-medium my-2 drop-shadow">Save</button>
            <Link to={"/dashboard"} className=" hover:bg-[#ec4b1a] hover:text-white text-red-500  text-lg font-medium my-2 drop-shadow text-center">Exit</Link>
      </form>
      <Footer/>
    </div>
  )
}

export default NewProduct