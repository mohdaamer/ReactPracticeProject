import React from 'react'
import StarRating from './StarRating'

const Card = () => {
  return (
    <div className='bg-white drop-shadow-md overflow-hidden rounded-lg mr-2'>
      <img src="./images/blog-1.png" alt="" className='h-40 w-full object-cover' />

      <div className='p-5 border border-b'>
        <h1>Python Programming</h1>

        {/* Stars  */}
        <div>
           <StarRating />
        </div>
      </div>

      {/* Price  */}
      <h3 className='p-5 text-xl'>$500</h3>

      <div className='absolute top-0 m-3 bg-white p-2 rounded'>
        <p className='font-semibold'>HTML</p>
      </div>
    </div>
  )
}

export default Card
