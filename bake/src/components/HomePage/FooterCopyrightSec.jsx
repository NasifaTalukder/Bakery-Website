import React from 'react'

const FooterCopyrightSec = () => {
  return (
    <>
      <div className='flex flex-wrap justify-between pt-5'>
      <div>
    <p className='text-slate-300 font-sans'>All Rights Reserved © 2023 Bakery store - Developed by Woostify</p>
     </div>
     <div>
      <ul className='flex flex-wrap space-x-5 text-slate-300 '>
        <li className='hover:text-[#BB9230]'>Shop</li>
        <li className='hover:text-[#BB9230]'>About Us</li>
        <li className='hover:text-[#BB9230]'>Contact Us</li>
        <li className='hover:text-[#BB9230]'>Blog</li>
      </ul>
     </div>
      </div>
    </>
  )
}

export default FooterCopyrightSec
