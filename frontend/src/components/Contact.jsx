import React, { useRef, useState } from 'react'
import Footer from './Footer'
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from '@emailjs/browser'
import ScrollToTopButton from './ScrollToTopButton';

const Contact = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();

    // const formErrors = validateForm();
    // if (Object.keys(formErrors).length > 0) {
    //   setErrors(formErrors);
    //   return;
    // }

    emailjs
      .sendForm('service_tsqw1r2', 'template_vpd91nu', form.current, {
        publicKey: 'wp86Ig-qRQiPyjTJq',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
          setErrors({});
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className='pt-[5rem]'>
      <div className='md:flex gap-10 mx-[1rem] md:mx-[5rem] mt-10 mb-10'>
      <div className='shadow-lg rounded p-5 md:p-10 max-w-30 mb-5 md:mb-0'>
            <div className='*:py-2 mb-3'>
              <div className='flex gap-2'>
                <div className='p-1 bg-[#d96846] h-7 w-7 flex justify-center items-center text-white rounded-full hover:bg-[#df876d]'>
                <IoCallOutline />
                </div>
                <h3 className='flex justify-center items-center font-semibold'>Call To Us</h3>
                </div>
                <p>We are available 24/7, 7 days a week.</p>
                <p>Phone: +2348106972329</p>
            </div>
            <hr />
          <div className='*:py-2 mb-3 pt-3'>
            <div className='flex gap-2'>
                <div className='p-1 bg-[#d96846] h-7 w-7 flex justify-center items-center text-white rounded-full hover:bg-[#df876d]'>
                <MdOutlineEmail />
                </div>
                <h3 className='flex justify-center items-center font-semibold'>Write To Us</h3>
                </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: Customer@g-Store.com </p>
            <p>Emails: Support@g-Store.com </p>
        </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className='shadow-lg rounded p-5 md:p-10 '>
            <div className='flex flex-wrap gap-3 mb-7'>
            <input type="name" name="user_name" placeholder='Your Name' className='bg-slate-100 p-1 px-2 rounded w-full' />
            <input type="email" name="user_email" placeholder='Your Email' className='bg-slate-100 p-1 px-2 rounded w-full' />
            <input type="phone" name="user_phone" placeholder='Your Phone' className='bg-slate-100 p-1 px-2 rounded w-full' />
            </div>
            <div className='flex flex-col'>
              <textarea name="message" id="" cols="30" rows="10" placeholder='Your Message  ' className='bg-slate-100 p-2'></textarea>
              <div className='flex justify-end py-5'>
            <input type='submit' value="Send Message" className='bg-[#d96846] hover:bg-[#cf7d64] rounded py-1 px-4 text-white'/></div>
            </div>
        </form>
        </div>
        <div className="flex justify-end m-2 mr-10 ">
      <ScrollToTopButton/>
  </div>
        <Footer/>
    </div>
  )
}

export default Contact