import React from 'react'
import bio from "../../assets/HomepageImg/Bio.png";
import eco from "../../assets/HomepageImg/eco.png";
import organic from "../../assets/HomepageImg/organic.png";
import gluten from "../../assets/HomepageImg/gluten.png";
import allNatural from "../../assets/HomepageImg/all natural.png";
const ChannelShow = () => {
  return (
   <>
     <div className='absolute flex flex-wrap space-x-32 mt-[-130px]'>
    <img src={bio} alt="" />
    <img src={eco} alt="" />
    <img src={organic} alt="" />
    <img src={gluten} alt="" />
    <img src={allNatural} alt="" />
   </div>
   </>
  )
}

export default ChannelShow
