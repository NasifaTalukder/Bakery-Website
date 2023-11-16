import React from 'react'

const FooterCategorySec = () => {
  return (
   <>
    <div className='mt-5'>
              <h1 className='footerSecHead  text-white text-xl font-semibold'>Categories</h1>
              <span className='w-14 h-1 bg-white mt-4 block rounded'></span>
              <div className='mt-5'>
                <ul className='text-slate-300 leading-8'>
                  <li><a href="#" className='font-sans'>Man</a></li>
                  <li><a href="#" className='font-sans'>Women</a></li>
                  <li><a href="#" className='font-sans'>Decor</a></li>
                  <li><a href="#" className='font-sans'>Dress</a></li>
                  <li><a href="#" className='font-sans'>Denim</a></li>
                  <li><a href="#" className='font-sans'>Wedding Decor</a></li>

                </ul>
              </div>
       </div>
   </>
  )
}

export default FooterCategorySec
