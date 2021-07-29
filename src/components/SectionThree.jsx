import React from 'react'
import PhoneSvg from './PhoneSvg'

const SectionThree = () => {
  return (
    <div className='sec3 lg:py-16 h-auto px-8 mt-60 lg:mt-28 pb-28'>
      <div className='sec3-con mx-auto flex flex-col items-center justify-center lg:flex-row lg:justify-between lg:items-center'>
        <div>
          <PhoneSvg />
        </div>
        <div className='lg:w-1/2 text-center lg:text-left'>
          <h1 className='text-white text-3xl md:text-4xl h-full mb-3'>
            State of the Art Infrastructure
          </h1>
          <p className='text-sm text-gray-200'>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SectionThree
