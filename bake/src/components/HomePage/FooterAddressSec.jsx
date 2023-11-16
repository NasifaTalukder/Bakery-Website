import React from 'react'
import FooterLogo from "../../assets/HomepageImg/footerLogo.png"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RssFeedIcon from '@mui/icons-material/RssFeed';
const FooterAddressSec = () => {
  return (
  <>
  <div className=''>
      <img src={FooterLogo} alt="" />
      <div className=''>
                <ul className='flex flex-wrap'>
                <span className='text-slate-200 mt-10'><LocationOnOutlinedIcon sx={{ fontSize:30 }}/></span>
                  <li className='text-slate-200 mt-11 w-72 list-outside ml-4 font-sans font-normal '>184 Main Rd E, St Albans VIC 3021, Australia</li>
                </ul>
                <ul className='flex flex-wrap'>
                <span className='text-slate-200 mt-4'><PhoneInTalkOutlinedIcon sx={{ fontSize:30 }}/></span>
                  <li className='text-slate-200 mt-5 w-72 list-outside ml-4 font-sans font-normal cursor-pointer'>+001 2233 456</li>
                </ul>
                <ul className='flex flex-wrap'>
                <span className='text-slate-200 mt-4'><MailOutlineOutlinedIcon sx={{ fontSize:30 }}/></span>
                  <li className='text-slate-200 mt-5 w-72 list-outside ml-4 font-sans font-normal cursor-pointer'>contact@company.com</li>
                </ul>
              </div>   
              <div>
              <ul className='text-slate-300 flex flex-wrap space-x-4 mt-4'>
                <li><a href="#"><FacebookOutlinedIcon/></a></li>
                <li><a href="#"><TwitterIcon/></a></li>
                <li><a href="#"><LinkedInIcon/></a></li>
                <li><a href="#"><YouTubeIcon/></a></li>
                <li><a href="#"><PinterestIcon/></a></li>
                <li><a href="#"><RssFeedIcon/></a></li>
              </ul>
            </div>
      </div>
  </>
  )
}

export default FooterAddressSec
