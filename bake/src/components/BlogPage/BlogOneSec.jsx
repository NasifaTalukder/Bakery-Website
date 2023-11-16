import React from 'react'
import BlogImgOne from "../../assets/BlogPageImg/BlogImg1.png"
const BlogOneSec = () => {
  return (
    <>
      <div className='w-[380px]'>
         <img src={BlogImgOne} alt="" className='w-[380px]'/>
         <h1 className='blogHeadH text-[18px] font-medium text-center mt-5 hover:text-[#BB9230]'>Chocolate Tulip Cupcake</h1>
         <p className='text-center text-[#878787] mt-6'>Typography is the work of typesetters,<br/>compositors, typographers, graphic designers,<br/>
         art directors, manga artists, comic book artists,<br/>graffiti artists, and now—anyone…</p>
         <h2 className='text-center mt-4 font-sans font-semibold'><a href="#"><u>Read More</u></a></h2>
        </div>
    </>
  )
}

export default BlogOneSec
