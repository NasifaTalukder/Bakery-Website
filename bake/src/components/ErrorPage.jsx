import React from 'react'
import MenuSec from "./HomePage/MenuSec";
import ErrorSec from './ErrorPage/ErrorSec';
import FooterAddressSec from "../components/HomePage/FooterAddressSec";
import FooterCategorySec from "../components/HomePage/FooterCategorySec";
import FooterInfoSec from "../components/HomePage/FooterInfoSec";
import FooterQuickLinkSec from "../components/HomePage/FooterQuickLinkSec";
import FooterSignUpSec from "../components/HomePage/FooterSignUpSec";
import FooterCopyrightSec from "../components/HomePage/FooterCopyrightSec";
const ErrorPage = () => {
  return (
    <>
   <div className='w-full font-[Josefin Sans, sans-serif] p-0 m-0 bg-white '>
    <div className='w-[1200px] m-auto'>
          <div className="w-full h-[160px]">
            {/* ----------Menu Section-------- */}
            <MenuSec />
          </div>
          </div>
          <div>
        {/* ---------------Error Section--------------- */}
        <ErrorSec/>
          </div>
       
          <div className="footerBack">
          <div className="w-[1200px] m-auto">
            <div className="flex flex-wrap pt-20 space-x-[40px]">
              {/* -----------------Footer Address Setion------------------------------------ */}
              <FooterAddressSec />
              {/* -----------------Footer Categories Section-------------------  */}
              <FooterCategorySec />
              {/* -----------------Footer Information Section----------------- */}
              <FooterInfoSec />
              {/* -------------------Footer Quick Links Section----------------------- */}
              <FooterQuickLinkSec />
              {/* ---------------------Footer Newsletter Signup Section-------------------- */}
              <FooterSignUpSec />
            </div>
          </div>
        </div>

        <div className="w-full h-16 bg-[#222222] ">
          <div className="w-[1200px] m-auto">
            {/* ------------------------Footer CopyRight Section-------------- */}
            <FooterCopyrightSec />
          </div>
        </div>











   </div>
    </>
  )
}

export default ErrorPage
