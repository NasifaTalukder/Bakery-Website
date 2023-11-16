import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import memberTre from "../../assets/AboutUspageImg/mem-03.png"
const MemberThreeSec = () => {
  return (
    <>
     <div className='w-[370px]'>
          <img src={memberTre} alt="" className='w-[370px]'/>
          <h1 className='memH text-xl font-semibold text-center mt-4'>Cartherin Forres</h1>
           <p className='text-[#878787] font-medium text-center mt-1'>Marketing Director</p>
           <div className='space-x-4 text-center mt-1'>
            <FacebookOutlinedIcon fontSize='medium' className='text-[#878787]'/>
            <TwitterIcon fontSize='medium' className='text-[#878787]'/>
            <InstagramIcon fontSize='medium' className='text-[#878787]'/>
            <SportsBasketballIcon fontSize='medium' className='text-[#878787]'/>
           </div>
         </div>
    </>
  )
}

export default MemberThreeSec
