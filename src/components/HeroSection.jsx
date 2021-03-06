import React from 'react'
import Header from './Header'

const HeroSection = () => {
  return (
    <div className='hero text-center overflow-hidden'>
      <svg
        className='hero-svg'
        viewBox='0 0 2104 2231'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M1756.52 1499.5L1461.17 2230.5L731.698 1935.77L989.581 1297.49C1010.27 1246.28 1068.55 1221.54 1119.76 1242.23L1756.52 1499.5ZM541.933 1007.51C743.373 1088.9 840.695 1318.18 759.308 1519.61L758.692 1521.14C677.305 1722.58 448.029 1819.9 246.589 1738.51C45.1494 1657.13 -52.1714 1427.85 29.2149 1226.41L29.8311 1224.89C111.218 1023.45 340.494 926.125 541.933 1007.51ZM1252.63 295.477L994.745 933.76C974.056 984.968 915.774 1009.71 864.566 989.018L227.808 731.751L523.152 0.749542L1252.63 295.477ZM2104 639.454L1808.66 1370.45L1171.9 1113.19C1120.69 1092.5 1095.95 1034.22 1116.64 983.008L1374.52 344.726L2104 639.454Z'
          fill='url(#paint0_linear)'
        />
        <defs>
          <linearGradient
            id='paint0_linear'
            x1='541.314'
            y1='117.832'
            x2='1473.38'
            y2='2333.43'
            gradientUnits='userSpaceOnUse'
          >
            <stop stop-color='#FF8F71' />
            <stop offset='1' stop-color='#FF3E55' />
          </linearGradient>
        </defs>
      </svg>

      <div className='relative z-10'>
        <Header />
        <div className='mt-16 md:mt-24 pb-36 px-4 md:pb-48 flex flex-col items-center'>
          <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold mb-4'>
            A Modern Publishing Platform
          </h1>
          <p className='text-md md:text-xl text-gray-100'>
            Grow your audience and build your online brand
          </p>
          <div className='mt-8 flex'>
            <button className='btn-primary mr-4 md:mr-6 font-bold'>
              Start for free
            </button>
            <button className='btn-outline font-bold'>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
