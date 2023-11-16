import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SourdoughImg from "../../assets/HomepageImg/Sourdough.png"

const ShopProdEight = () => {
  return (
<>
<div className='w-[290px] h-[470px] bg-slate-100 rounded-sm'>
     <div className='' >
      <img src={SourdoughImg } alt="" className='' />
      </div>
      <div className='ml-20 mt-[-25px]'>
      <h1 className='FP1 text-base font-semibold tracking-wider'>Sourdough</h1>
      <div className='flex flex-wrap space-x-3 font-semibold '>
        <p className='text-[#BB9230]'><del>$25.00</del></p>
        <p className=''>$21.90</p>
      </div>
      </div>
      <div>
            <button className='pl-16 pr-16 pt-3 pb-3 mt-4 ml-[50px] bg-[#BB9230] text-white rounded text-xs font-bold font-sans hover:bg-[#222222]'>QUICK VIEW</button>
            </div>
      
      <div className='space-x-1 mt-3 ml-2'>
                <button className='p-2 bg-[#222222] text-white rounded hover:opacity-70'><FavoriteBorderIcon/></button>
                <button className='pl-14 pr-14 pt-3 pb-3 bg-[#222222] text-white rounded text-xs font-bold font-sans hover:opacity-70'>ADD TO CART</button>
                <button className='p-2 bg-[#222222] text-white rounded hover:opacity-70'><SearchIcon/></button>                               
            </div>    
     </div>
</>
  )
}

export default ShopProdEight
