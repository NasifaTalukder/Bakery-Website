import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import {
    Link,
  } from "react-router-dom";

const CheckOutSec = () => {
  return (
    <>
     <div className='w-[900px] h-[50px] bg-black'>
        <h1 className='font-semibold text-[17px] text-white ml-5 pt-3'><ShoppingBagIcon fontSize='medium'/>Your cart is currently empty.</h1>
      </div>
      <div className='mt-10'>
        <button className='px-10 py-3 bg-[#222222] text-white rounded-sm hover:bg-[#BB9230] '><Link to="/shop">Return to shop</Link></button>
       </div>
    </>
  )
}

export default CheckOutSec
