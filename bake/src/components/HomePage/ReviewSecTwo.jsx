import React from 'react'
import patternImg from "../../assets/HomepageImg/pattenr.png"
import reviewImg from "../../assets/HomepageImg/About-Image.png"
const ReviewSecTwo = () => {
  return (
  <>
  <div className='mt-[150px]'>
       <h1 className='reviewTwoleftH text-[30px] leading-[34px]'>Welcome to Kalles<br/>
         Baked Fresh for You!</h1>
        <img src={patternImg} alt="" className='ml-[160px] mt-5'/>
        <p className='w-[380px] leading-6 mt-8'>
        High-quality French bread is the specialty of Eric Kayser.
         We also produce viennoiseries, pastries and other 
         food around which bread is a centerpiece.
        </p>
       <div className='mt-6'>
        <button className='px-10 py-3 bg-[#222222] text-white rounded-sm hover:bg-[#BB9230] '>START TO SHOP</button>
       </div>
       </div>

       <div>
        <img src={reviewImg} alt="" />
       </div>
  </>
  )
}

export default ReviewSecTwo
