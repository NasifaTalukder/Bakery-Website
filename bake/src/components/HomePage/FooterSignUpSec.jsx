import React from 'react'
import PaymentImg from "../../assets/HomepageImg/payment-images.png"
const FooterSignUpSec = () => {
  return (
   <>
   <div className='mt-5'>
              <h1 className='footerSecHead   text-white text-xl font-semibold'>Newsletter Signup</h1>
              <span className='w-14 h-1 bg-white mt-4 block rounded'></span>
              <p className='text-slate-200 mt-7'>Subscribe to our newsletter and get<br/> 10% off your first purchase</p>
              <div>
              <input type="email" placeholder='Your Email Here' className='px-4 py-2 border border-[#BB9230] outline-none bg-opacity-70 mt-4'/>
              <button className='px-6 py-2 bg-[#BB9230] text-white rounded-sm '>Subscribe</button>
              </div>
              <div>
                <img src={PaymentImg} alt="" className='mt-7' />
              </div>
            
              </div>
   </>
  )
}

export default FooterSignUpSec
