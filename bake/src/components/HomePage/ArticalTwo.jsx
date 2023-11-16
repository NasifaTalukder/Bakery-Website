import React from 'react'
import ArticalImgTwo from "../../assets/HomepageImg/ArticalImg2.png"

const ArticalTwo = () => {
  return (
    <>
    <div className='w-[380px]'>
      <div>
        <img src={ArticalImgTwo } alt="" className='w-[370px] h-[370px]'/>
      </div>
      <div>
        <p className='mt-5'>JJuly 7, 2023  woostify</p>
        <h1 className='ArticalH text-[22px] font-semibold mt-3'> Brownie Bread & Cookie</h1>
        <p className='text-slate-600 mt-3'>Typography is the work of typesetters, compositors,<br/>
           typographers, graphic designers, art directors,<br/> manga artists, comic book…</p>
      </div>
     </div>
    </>
  )
}

export default ArticalTwo
