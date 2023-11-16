import React from 'react'
import MenuSec from '../components/HomePage/MenuSec'
import FooterAddressSec from '../components/HomePage/FooterAddressSec'
import FooterCategorySec from '../components/HomePage/FooterCategorySec'
import FooterInfoSec from '../components/HomePage/FooterInfoSec'
import FooterQuickLinkSec from '../components/HomePage/FooterQuickLinkSec'
import FooterSignUpSec from '../components/HomePage/FooterSignUpSec'
import FooterCopyrightSec from '../components/HomePage/FooterCopyrightSec'
import CartSection from './CartPage/CartSection';

const CartPage = () => {
  return (
    <>
    <div className='w-full'>
        <div className='w-[1200px] m-auto'>
          <div className='h-[200px]'>
      {/* ----------Menu Section-------- */}
           <MenuSec/>
      </div>
      <div className='w-[950px] m-auto'>
    {/* ---------------Cart Section---------------- */}
            <CartSection/>
      </div>
        </div>

        <div className='footerBack mt-[80px]'>
   <div className='w-[1200px] m-auto'>
    <div className='flex flex-wrap pt-20 space-x-[40px]'>
{/* -----------------Footer Address Setion------------------------------------ */}
    <FooterAddressSec/>
 {/* -----------------Footer Categories Section-------------------  */}
    <FooterCategorySec/>
  {/* -----------------Footer Information Section----------------- */}
    <FooterInfoSec/>
{/* -------------------Footer Quick Links Section----------------------- */}
    <FooterQuickLinkSec/>
{/* ---------------------Footer Newsletter Signup Section-------------------- */}
    <FooterSignUpSec/>

    </div>
    </div>
   </div>
   
   <div className='w-full h-16 bg-[#222222] '>
    <div className='w-[1200px] m-auto'>
    {/* ------------------------Footer CopyRight Section-------------- */}
    <FooterCopyrightSec/>    
    </div>
   </div>



    </div>
    
    </>
  )
}

export default CartPage
