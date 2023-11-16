import React from 'react'

const ShopHead = () => {
  return (
   
    <>
    <h1>Showing all 12 results</h1>
                 <div>
                    <select name="" id="" className='border border-slate-400 px-1 py-1 outline-none rounded-sm text-slate-600'>
                        <option value="">Default Shorting</option>
                        <option value="">Short by Popularity</option>
                        <option value="">Short by Average Rating</option>
                        <option value="">Short by Latest</option>
                        <option value="">Short by Price : Low to High</option>
                        <option value="">Short by Price : High to Low</option>
                    </select>
                 </div>
    </>
  )
}

export default ShopHead
