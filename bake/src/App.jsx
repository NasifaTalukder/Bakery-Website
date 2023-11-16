import React from 'react'
import './App.css'
import MenuSec from './components/HomePage/MenuSec'
import HeroSec from './components/HomePage/HeroSec'
import ReviewSecOne from './components/HomePage/ReviewSecOne'
import ReviewSecTwo from './components/HomePage/ReviewSecTwo'
import FeatureProdOne from './components/HomePage/FeatureProdOne'
import FeatureProdTwo from './components/HomePage/FeatureProdTwo'
import FeatureProdThree from './components/HomePage/FeatureProdThree'
import FeatureProdFour from './components/HomePage/FeatureProdFour'
import FeatureProdFive from './components/HomePage/FeatureProdFive'
import FeatureProdSix from './components/HomePage/FeatureProdSix'
import FeatureProdSeven from './components/HomePage/FeatureProdSeven'
import FeatureProdEight from './components/HomePage/FeatureProdEight'
import PinBack from './components/HomePage/PinBack'
import ArticalOne from './components/HomePage/ArticalOne'
import ArticalTwo from './components/HomePage/ArticalTwo'
import ArticalThree from './components/HomePage/ArticalThree'
import channelBack from "./assets/HomepageImg/Brandlist-background.png"
import ChannelShow from './components/HomePage/ChannelShow'
import FooterAddressSec from './components/HomePage/FooterAddressSec'
import FooterCategorySec from './components/HomePage/FooterCategorySec'
import FooterInfoSec from './components/HomePage/FooterInfoSec'
import FooterQuickLinkSec from './components/HomePage/FooterQuickLinkSec'
import FooterSignUpSec from './components/HomePage/FooterSignUpSec'
import FooterCopyrightSec from './components/HomePage/FooterCopyrightSec'


const App = () => {
  return (
    <>
    <div className='w-full h-[2000px] p-0 m-0'>
    <div className='BackgroundImg'>
    <div className='w-[1200px] m-auto'>
       {/* ----------Menu Section-------- */}
         <MenuSec/>
       {/* ------------Hero Section---------- */}
       <HeroSec/>
      </div>      
     </div>
     <div>
    {/* ------------Review Section One--------- */}
    <ReviewSecOne/>
     </div>

     <div className='w-full h-[650px] bg-white'>
      <div className='w-[1200px] m-auto'>
      <div className='flex flex-wrap space-x-10 mt-20'>
    {/* -------------Review Section Two--------- */}
        <ReviewSecTwo/>
      </div>     
      </div>
     </div>

   <div className='FeatureProdBack'>
    <div className='w-[1200px] m-auto'>
    <h1 className='featureH font-bold text-[34px] text-center pt-[60px]'>Featured Products</h1>
    <div className='flex flex-wrap space-x-3 mt-5'>
{/* ---------------Feature Product One-(Olive Ciabatta )*/}
     <FeatureProdOne/>

{/* --------------Feature Product Two-(Cherry Cupcakes)---------- */}
    <FeatureProdTwo/>

{/* -----------------Feature Product Three -(Pane Di Altamura)---------- */}
    <FeatureProdThree/>
 
{/* ------------Feature Product Four-(Pistachio Financiers)---------- */}
    <FeatureProdFour/>
 </div>

  <div className='flex flex-wrap space-x-3 mt-5'>
{/* -----------------Feature Product Five------(Cereal Bagel)-------------- */}
      <FeatureProdFive/>

{/* ---------------Feature Product Six -(Sourdough)------------- */}
     <FeatureProdSix/>

{/* -----------------Feature Product Seven -(Double Choco Cookie)------------------- */}
     <FeatureProdSeven/>

{/* ----------------------Feature Product Eight--(Sesame De Outlets Breads)----------- */}
     <FeatureProdEight/>

    </div> 
    </div>
   </div>

   <div>
{/* -------------------Pin BackGround------------- */}
   <PinBack/>
  </div>

  <div className='w-full h-[750px]'>
    <div className='w-[1200px] m-auto'>
    <h1 className='articalH font-bold text-[34px] text-center mt-16'>Bakehouse Articals</h1>
     <div className='flex flex-wrap space-x-7 mt-6'>
  {/* ------------------Artical One Section------------------- */}
    <ArticalOne/>

    {/* ------------------Artical Two Section------------------- */}
     <ArticalTwo/>

    {/* ------------------Artical Three Section------------------- */}
     <ArticalThree/>

     </div>
    </div>
  </div>
  
  <div className=''>
    <img src={channelBack} alt="" className='relative'/>   
  <div className='w-[1200px] m-auto'>
   {/* ----------------Show Channel Section-------------- */}
   <ChannelShow/>  
   </div>  
  </div>

  <div className='footerBack'>
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

export default App
