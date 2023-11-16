import React from 'react'
import Logo from "../../assets/HomepageImg/cropped-logo.png"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  Link,
} from "react-router-dom";
const MenuSec = () => {
  return (
    <>
    <div className='h-[130px] bg-white mt-[20px] rounded-sm absolute'>
        <div className='flex flex-wrap justify-around'>
        <div>
          <img src={Logo} alt=""  className='w-[100px] h-auto pt-[15px] '/>
        </div>
        <div>
          <ul className=' flex flex-wrap space-x-4 mt-[45px] ml-[60px] font-semibold'>
            <li className='hover:text-[#BB9230]'><Link to="/">Home <KeyboardArrowDownIcon fontSize='small'/></Link></li>
            <li className='hover:text-[#BB9230]'><Link to="/aboutUs">About Us <KeyboardArrowDownIcon fontSize='small'/></Link></li>
            <li className='hover:text-[#BB9230]'><Link to="/shop">Shop <KeyboardArrowDownIcon fontSize='small'/></Link></li>
            <li className='hover:text-[#BB9230]'><Link to="/cart">Cart <KeyboardArrowDownIcon fontSize='small'/></Link></li>
            <li className='hover:text-[#BB9230]'><Link to="/checkOut">Checkout <KeyboardArrowDownIcon fontSize='small'/></Link></li>
            <li className='hover:text-[#BB9230]'><Link to="/myAccount">My Account <KeyboardArrowDownIcon fontSize='small'/></Link></li>
            <li className='hover:text-[#BB9230]'><Link to="/blog">Blog</Link></li>
            <li className='text-[#BB9230]'><Link to="/contactUs">Contact Us</Link></li>  
          </ul>
        </div>
        <div className='flex flex-wrap space-x-2 ml-28 font-sans cursor-pointer mt-[45px] '>
            <SearchIcon fontSize='large'/>
            <PersonOutlineIcon fontSize='large'/>
            <FavoriteBorderIcon fontSize='large'/>            
            <ShoppingCartIcon fontSize='large'/>
            <p className='text-xl mt-2 font-sans'>$0</p>
            </div>
        </div>          
       </div>
    </>
  )
}

export default MenuSec;
