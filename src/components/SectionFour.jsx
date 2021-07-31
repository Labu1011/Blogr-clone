import React from 'react'
import LaptopSvgDesk from './LaptopSvgDesk'
import LaptopMobile from '../images/Laptop-mobile.jpg'

const SectionFour = () => {
  return (
    <div className='w-full flex py-8 flex-col items-center lg:flex-row lg:items-center'>
      <div className='w-1/2 hidden lg:block lg:pointer-events-auto pointer-events-none'>
        <LaptopSvgDesk />
      </div>
      <div className='block lg:hidden lg:pointer-events-none mb-6'>
        <img src={LaptopMobile} alt='Laptop illustration for mobile device' />
      </div>
      <div className='md:w-full h-auto px-4 lg:pl-8 text-center lg:text-left order-2 lg:order-1 lg:mb-20 mb-4'>
        <h1 className='text-xl md:text-2xl font-semibold'>
          Free, open, simple
        </h1>
        <p className='text-sm md:text-md text-gray-600 mt-4 mb-10'>
          Blogr is a free and open source application backed by a large
          community and helpful developers. It supports features such as syntax
          highlighting, RSS feeds, social media integration, third party
          commenting tool and works seamlessly with Google Analytics. The
          architecture is clean and is relatively easy to learn.
        </p>
        <h1 className='text-xl md:text-2xl font-semibold'>Powering tool</h1>
        <p className='text-sm md:text-md text-gray-600 mt-4'>
          Batteries included. We built a simple and straightforward CLI tool
          that makes customization and deployment a breeze, but capable of
          producing even the most complicated sites.
        </p>
      </div>
    </div>
  )
}

export default SectionFour
