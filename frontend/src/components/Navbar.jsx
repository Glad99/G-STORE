import { useState } from "react";
import logo from "../assets/G-store logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { TbMenuDeep } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import {toast} from "react-hot-toast"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact us", path: "/contact" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate hook for programmatic navigation

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch(logoutRedux());
    toast("Logout successfully!");
  };

  const cartItemNumber = useSelector((state) => state.product.cartItem);

  const handleSelectChange = (event) => {
    const value = event.target.value;
    if (value !== "other") {
      navigate(`/${value}`);
    }
  };

  return (
    <header className="flex fixed w-full h-16 md:px-4 shadow-md items-center justify-center bg-white z-50 ">
      <div className="flex items-center h-full gap-12 w-full justify-between p-5">
        <div className="h-12 ">
          <img src={logo} alt="" className="h-full" />
        </div>
        <div className="hidden lg:flex">
          <label className="form-control">
            <select className="select border-none" onChange={handleSelectChange}>
              <option value={"other"}>Category</option>
              <option value={"women"}>Women's Fashion</option>
              <option value={"men"}>Men's Fashion</option>
              <option value={"electronics"}>Electronics</option>
              <option value={"homes"}>Homes & Lifestyle</option>
              <option value={"medicine"}>Medicine</option>
              <option value={"health"}>Health & Beauty</option>
              <option value={"kids"}>Babies, Kids & Toys</option>
              <option value={"groceries"}>Groceries & Pets</option>
            </select>
          </label>
        </div>
        <ul className="hidden items-center gap-4 md:gap-6 lg:gap-12 text-[gray] text-[15px] font-[500] lg:flex">
          {navItems.map((nav, idx) => (
            <li key={idx} className="hover:text-[#d96846]">
              <Link to={nav.path}>{nav.name}</Link>
            </li>
          ))}
          <li className="hover:text-[#d96846]">
            <Link to={"signup"}>Sign Up</Link>
          </li>
        </ul>
        <div className="relative md:flex hidden">
          <input
            type="text"
            placeholder="Search here"
            className="border-b border-2 p-1 rounded"
          />
          <IoSearchOutline className="absolute top-2 right-1" />
        </div>
        <div className="flex gap-10 justify-center items-center">
          <IoSearchOutline className="md:hidden size-5 flex items-center justify-center" />
          <div className="flex items-center gap-[45px] size-7 relative">
            <Link to={"cart"}>
              <img src={cart_icon} alt="" />
              <div className="size-[16px] bottom-4 left-4 flex justify-center items-center bg-red-500 rounded-3xl text-white absolute">
                {cartItemNumber.length}
              </div>
            </Link>
          </div>
          <div className="text-slate-600" onClick={handleShowMenu}>
            <div className="cursor-pointer w-10 h-10 rounded-full overflow-hidden drop-shadow-md">
              {userData.image ? (
                <img src={userData.image} className="h-full w-full" />
              ) : (
                <FaUserCircle className="size-8" />
              )}
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-white py-2 shadow drop-shadow-md flex flex-col min-w-[120px] text-center">
                {userData.email === import.meta.env.VITE_ADMIN_EMAIL && (
                  <Link to={"dashboard"} className="whitespace-nowrap cursor-pointer px-2">
                    Dashboard
                  </Link>
                )}
                {userData.image ? (
                  <p className="cursor-pointer text-white px-2 mb-2 bg-red-500 text-[15px] font-[500]" onClick={handleLogout}>
                    Logout [{userData.name}]
                  </p>
                ) : (
                  <Link to={"login"} className="whitespace-nowrap cursor-pointer px-2 text-[gray] text-[15px] font-[500]">
                    Login
                  </Link>
                )}
                <ul className="flex flex-col lg:hidden lg:gap-12 gap-2 mt-2 text-[gray] text-[15px] font-[500]">
                  {navItems.map((nav, idx) => (
                    <li key={idx}>
                      <Link className="px-2 py-1" to={nav.path}>
                        {nav.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

