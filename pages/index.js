import React from 'react'

const index = () => {
  return (
    <div className="container min-h-screen bg-[url('/assets/image.png')] bg-center bg-cover px-28 py-5 relative">
        <nav className='flex items-center'>
          <img src="/assets/logo.png" className='w-40 cursor-pointer ' />
          <ul className='flex-1 text-center'>
            <li className=' list-none inline-block px-5'><a className='no-underline text-white px-2' href="#">Home</a></li>
            <li className=' list-none inline-block px-5'><a className='no-underline text-white px-2' href="#">About</a></li>
            <li className=' list-none inline-block px-5'><a className='no-underline text-white px-2' href="#">Feature</a></li>
            <li className=' list-none inline-block px-5'><a className='no-underline text-white px-2' href="#">Contact</a></li>
          </ul>
        <img src="/assets/cart.png" className='w-8 cursor-pointer' />
        </nav>

        <div className='text-white mt-48 max-w-xl'>
            <h1 className='text-6xl font-semibold leading-normal'>Groceries<br/>delivery in <span className='font-light'>15 mins</span></h1>
            <p className='tracking-wide'>Grocify offer a wide range of products,including fresh products,meats,dairy,baked goods and non-preshible items.</p>
         <div className='mt-10'>
          <a href="#" className=' bg-yellow-300 rounded-3xl px-8 py-3 font-medium inline-block mr-4 hover:bg-transparent hover:border-yellow-300  hover:text-white  hover:border border border-transparent '>Order Now</a>
          <a href="#" className=''>Download App <span className='text-lg inline-block rotate-90'>&#10148;</span></a>
          </div>   
        </div>
        <img src="/assets/grocery-image.png" className='w-full xl:w-2/5 xl:absolute bottom-0 right-20'  />
    </div>
  )
}

export default index
