import React from 'react'

const LaptopSvgMobile = () => {
  return (
    <svg
      width='498'
      height='359'
      xmlns='http://www.w3.org/2000/svg'
      xmlnXlink='http://www.w3.org/1999/xlink'
    >
      <defs>
        <linearGradient x1='0%' y1='27.795%' x2='100%' y2='72.205%' id='c'>
          <stop stop-color='#FF8F71' offset='0%' />
          <stop stop-color='#FF3E55' offset='100%' />
        </linearGradient>
        <filter
          x='-35.1%'
          y='-60.8%'
          width='170.1%'
          height='221.7%'
          filterUnits='objectBoundingBox'
          id='a'
        >
          <feOffset dy='20' in='SourceAlpha' result='shadowOffsetOuter1' />
          <feGaussianBlur
            stdDeviation='20'
            in='shadowOffsetOuter1'
            result='shadowBlurOuter1'
          />
          <feColorMatrix
            values='0 0 0 0 0.421821759 0 0 0 0 0.554338424 0 0 0 0 0.893710371 0 0 0 0.243444056 0'
            in='shadowBlurOuter1'
            result='shadowMatrixOuter1'
          />
          <feMerge>
            <feMergeNode in='shadowMatrixOuter1' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
        <rect id='b' x='0' y='0' width='237' height='157.94' rx='3' />
        <path d='M3 0h321.953a3 3 0 013 3v4.602H0V3a3 3 0 013-3z' id='e' />
      </defs>
      <g fill='none' fill-rule='evenodd'>
        <g transform='translate(86 17)'>
          <rect
            fill='#2D2E40'
            opacity='.08'
            transform='matrix(1 0 0 -1 0 329)'
            x='52'
            y='53'
            width='223'
            height='223'
            rx='111.5'
          />
          <rect
            stroke='#2D2E40'
            opacity='.5'
            transform='matrix(1 0 0 -1 0 326)'
            x='37.5'
            y='37.5'
            width='251'
            height='251'
            rx='125.5'
          />
          <rect
            stroke='#2D2E40'
            opacity='.25'
            transform='matrix(1 0 0 -1 0 326)'
            x='.5'
            y='.5'
            width='325'
            height='325'
            rx='162.5'
          />
        </g>
        <g filter='url(#a)' transform='translate(85 85)'>
          <rect
            fill='#535353'
            fill-rule='nonzero'
            x='39'
            y='7'
            width='252'
            height='173'
            rx='12'
          />
          <rect
            fill='#1D1D25'
            fill-rule='nonzero'
            x='40'
            y='9'
            width='250'
            height='170'
            rx='10'
          />
          <g transform='translate(47 15)'>
            <mask id='d' fill='#fff'>
              <use xlinkHref='#b' />
            </mask>
            <use fill='url(#c)' fill-rule='nonzero' xlinkHref='#b' />
            <rect
              fill='#F9F6F6'
              fill-rule='nonzero'
              mask='url(#d)'
              x='-.152'
              y='28.352'
              width='237'
              height='129.709'
              rx='3'
            />
            <g mask='url(#d)' fill-rule='nonzero'>
              <g transform='translate(33.478 17.615)'>
                <rect fill='#FFF' width='49.951' height='120.635' rx='3' />
                <rect
                  fill='#FFF'
                  x='58.453'
                  width='111.592'
                  height='120.635'
                  rx='3'
                />
                <rect
                  fill='#E7E7E7'
                  x='63.235'
                  y='6.405'
                  width='102.027'
                  height='28.291'
                  rx='3'
                />
                <rect
                  fill='#E7E7E7'
                  x='63.235'
                  y='40.568'
                  width='30.289'
                  height='28.291'
                  rx='3'
                />
                <rect
                  fill='#E7E7E7'
                  x='100.964'
                  y='40.568'
                  width='64.298'
                  height='28.291'
                  rx='3'
                />
              </g>
            </g>
          </g>
          <g
            transform='translate(164)'
            fill='#4A5166'
            fill-rule='nonzero'
            opacity='.098'
          >
            <rect width='6.12' height='1' rx='.5' />
            <rect x='7.56' width='1.44' height='1' rx='.5' />
          </g>
          <g transform='translate(0 178)'>
            <mask id='f' fill='#fff'>
              <use xlinkHref='#e' />
            </mask>
            <use fill='#52526F' fill-rule='nonzero' xlinkHref='#e' />
            <rect
              fill='#2F2F47'
              fill-rule='nonzero'
              mask='url(#f)'
              x='137.193'
              y='-18.626'
              width='53.567'
              height='23.187'
              rx='10'
            />
          </g>
          <path
            d='M0 186h328a3 3 0 01-3 3H3a3 3 0 01-3-3z'
            fill='#393A56'
            fill-rule='nonzero'
          />
        </g>
      </g>
    </svg>
  )
}

export default LaptopSvgMobile
