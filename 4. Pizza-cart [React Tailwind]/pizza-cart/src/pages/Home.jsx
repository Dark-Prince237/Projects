import React from 'react'
import Products from '../components/Products'

const Home = () => {
  return (
    <>
    <div className='hero py-16 '>
      <div className='container mx-auto flex items-center'>
        <div className='w-1/2'>
            <h6><em>Are you hungry?</em></h6>
            <h1 className='text-3xl md:text-6xl font-bold'>Don't wait !</h1>
            <button className='px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600'>Order Now</button>

        </div>

        <div className="w-1/2">
          <img src="/images/pizza.png" alt="pizza" className='w-4/5' />
        </div>

      </div>
      <div className="pb-24">
        <Products />
      </div>
    </div>
    
    </>
  )
}

export default Home