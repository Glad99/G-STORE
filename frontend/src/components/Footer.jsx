import { Link } from "react-router-dom"
import { TiSocialFacebook } from "react-icons/ti";
import { LuTwitter } from "react-icons/lu";
import { FaInstagram ,FaLinkedinIn } from "react-icons/fa6";
import logo from "../assets/G-store logo.png";


const Footer = () => {
  return (
    <div className="bg-black text-white pt-10">
        <div className="flex flex-wrap justify-between px-5 md:px-28 *:text-sm *:text-slate-300 ">
        <div className="*:py-1">
            <h3 className="text-slate-100 size-14 -mb-5"><img src={logo} alt="" /></h3>
            <p>Subscribe</p>
            <p className="text-[12px]">Get 10% off your first order</p>
            <div className="relative">
                <input type="text" placeholder="Enter your email" className="bg-black border rounded p-1 " />
                <div className="absolute top-2 right-2"><img src="Vector (3).svg" alt="" /></div>
            </div>
        </div>
        <div className="*:py-1">
            <h3 className="text-slate-100 text-lg">Support</h3>
            <p>1001, Arepo, Ogun State</p>
            <p>gladysalu1@gmail.com</p>
            <p>+2347033726760</p>
        </div>
        <div className="*:py-1">
            <h3 className="text-slate-100 text-lg">Account</h3>
            <p>My Account</p>
            <p><Link to={"signup"}>Login / Register</Link></p>
            <p><Link to={"cart"}>Cart</Link></p>
            <p>Shop</p>
        </div>
        <div className="*:py-1">
            <h3 className="text-slate-100 text-lg">Quick Link</h3>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
        </div>
        <div className="*:py-1">
            <h3 className="text-slate-100 text-lg">Download App</h3>
            <p>Save 3 with App New User Only</p>
            <div className="flex gap-2">
                <img src="Qrcode 1.svg" alt="" />
                <div className="flex flex-col gap-2">
                    <img src="png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.svg" alt="" />
                    <img src="download-appstore.svg" alt="" />
                </div>
            </div>
            <div className="flex gap-5 my-1">
            <TiSocialFacebook />
            <LuTwitter />
            <FaInstagram />
            <FaLinkedinIn />
            </div>
        </div>
        </div>
        <div className="border-t-2 border-slate-600 flex justify-center items-center text-slate-600 gap-2 py-5">
           <div className="p-1 border rounded-full border-slate-600"> <img src="Vector (4).svg" alt="" className="size-2 text-slate-600" /></div>
        <p className="text-center   ">Copyright G-Store 2024. All right researved</p>
        </div>
        
    </div>
  )
}

export default Footer