import React, { useState } from 'react'
import { FaChevronDown, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const modalHandler = () => {
    const modal = document.querySelector('.nav-modal')
    modal.classList.toggle('show')
  }

  return (
    <div className='py-8 md:py-10 w-full'>
      <div className='header-con mx-auto flex justify-between items-center'>
        <div className='ml-6 md:ml-8 flex items-center'>
          <svg
            height='30'
            width='80'
            viewBox='0 0 101 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0 30.803V1.486H10.653C12.635 1.486 14.348 1.796 15.793 2.416C17.239 3.035 18.353 3.916 19.138 5.058C19.923 6.2 20.315 7.542 20.315 9.084C20.315 10.488 20.012 11.72 19.406 12.779C18.8039 13.8354 17.9168 14.701 16.846 15.277C18.333 15.855 19.489 16.771 20.315 18.023C21.141 19.276 21.554 20.755 21.554 22.462C21.554 24.169 21.114 25.642 20.232 26.88C19.352 28.119 18.112 29.082 16.516 29.77C14.92 30.458 13.034 30.803 10.859 30.803H0ZM5.946 6.565V13.295H9.992C11.342 13.295 12.38 13.013 13.11 12.449C13.84 11.885 14.204 11.052 14.204 9.951C14.204 8.85 13.839 8.011 13.11 7.432C12.38 6.854 11.341 6.565 9.992 6.565H5.946ZM5.946 25.724H10.57C12.112 25.724 13.302 25.394 14.142 24.733C14.982 24.073 15.402 23.123 15.402 21.883C15.402 20.645 14.982 19.695 14.142 19.035C13.302 18.375 12.112 18.044 10.57 18.044H5.946V25.724ZM25.228 30.803V0H31.009V30.803H25.229H25.228ZM46.121 31.422C44.497 31.422 42.997 31.132 41.621 30.555C40.2743 29.9971 39.0528 29.1757 38.028 28.139C37.0001 27.0922 36.1928 25.8496 35.654 24.485C35.09 23.081 34.808 21.554 34.808 19.902C34.808 18.25 35.097 16.729 35.675 15.339C36.2352 13.9758 37.0555 12.7347 38.09 11.685C39.1253 10.637 40.3613 9.80853 41.724 9.249C43.114 8.671 44.634 8.382 46.286 8.382C47.911 8.382 49.411 8.671 50.787 9.249C52.1333 9.80704 53.3545 10.6285 54.379 11.665C55.4039 12.7064 56.2112 13.9414 56.754 15.298C57.318 16.688 57.6 18.209 57.6 19.861C57.6 21.512 57.311 23.04 56.733 24.444C56.1762 25.8154 55.3553 27.0641 54.317 28.119C53.282 29.1669 52.0464 29.9954 50.684 30.555C49.294 31.133 47.773 31.422 46.121 31.422V31.422ZM46.204 26.219C47.25 26.219 48.186 25.944 49.012 25.394C49.837 24.843 50.492 24.093 50.972 23.144C51.455 22.194 51.695 21.114 51.695 19.902C51.695 18.691 51.455 17.61 50.973 16.661C50.491 15.711 49.837 14.961 49.012 14.411C48.186 13.86 47.25 13.585 46.204 13.585C45.158 13.585 44.222 13.86 43.396 14.41C42.57 14.96 41.916 15.711 41.435 16.66C40.953 17.61 40.712 18.69 40.712 19.902C40.712 21.113 40.953 22.194 41.435 23.143C41.917 24.093 42.57 24.843 43.396 25.393C44.222 25.944 45.158 26.219 46.204 26.219ZM70.359 30.183C69.0275 30.1924 67.71 29.9105 66.499 29.357C65.3134 28.8155 64.252 28.0356 63.381 27.066C62.5 26.089 61.811 24.946 61.316 23.639C60.821 22.331 60.573 20.92 60.573 19.406C60.573 17.837 60.828 16.386 61.337 15.05C61.8193 13.7586 62.5486 12.5735 63.484 11.561C64.3934 10.5791 65.4877 9.78631 66.704 9.228C67.929 8.664 69.258 8.382 70.689 8.382C72.093 8.382 73.359 8.664 74.488 9.228C75.6181 9.79393 76.5844 10.6398 77.295 11.685L77.419 9.001H82.746V28.201C82.746 29.881 82.477 31.408 81.941 32.785C81.404 34.161 80.64 35.345 79.649 36.335C78.6439 37.3354 77.4418 38.1159 76.119 38.627C74.756 39.164 73.249 39.432 71.597 39.432C69.973 39.432 68.514 39.178 67.221 38.668C65.9662 38.1835 64.8166 37.4616 63.835 36.542C62.8769 35.6411 62.1053 34.5606 61.564 33.362L67.097 32C67.5703 32.7767 68.2303 33.4226 69.017 33.879C69.801 34.333 70.689 34.56 71.68 34.56C72.754 34.56 73.683 34.32 74.467 33.837C75.252 33.356 75.864 32.681 76.305 31.814C76.745 30.947 76.965 29.935 76.965 28.779V27.004C76.2213 27.9955 75.2518 28.7953 74.137 29.337C72.994 29.901 71.735 30.183 70.359 30.183V30.183ZM71.763 25.063C72.781 25.063 73.683 24.809 74.467 24.299C75.2588 23.7821 75.9055 23.0717 76.346 22.235C76.814 21.368 77.048 20.384 77.048 19.283C77.048 18.181 76.814 17.197 76.346 16.33C75.9055 15.4933 75.2588 14.7829 74.467 14.266C73.683 13.756 72.781 13.502 71.763 13.502C70.744 13.502 69.843 13.757 69.058 14.266C68.2662 14.7829 67.6195 15.4933 67.179 16.33C66.711 17.197 66.477 18.181 66.477 19.283C66.477 20.383 66.711 21.368 67.179 22.235C67.6198 23.0718 68.2669 23.7822 69.059 24.299C69.843 24.809 70.744 25.063 71.763 25.063V25.063ZM87.37 30.803V9H92.697L92.903 12.304C93.453 11.147 94.197 10.26 95.133 9.64C96.069 9.02 97.17 8.711 98.436 8.711C98.822 8.711 99.206 8.746 99.592 8.814C99.978 8.884 100.322 8.973 100.625 9.083L100.005 14.781C99.7046 14.6715 99.393 14.5954 99.076 14.554C98.7543 14.5124 98.4303 14.4917 98.106 14.492C96.509 14.492 95.284 14.981 94.431 15.958C93.578 16.935 93.151 18.318 93.151 20.108V30.802H87.371L87.37 30.803Z'
              fill='white'
            />
          </svg>
          <div className='lg:flex lg:pointer-events-auto text-gray-100 text-sm font-semibold ml-16 hidden pointer-events-none'>
            <a href='#' className='mx-3 flex items-center'>
              Product{' '}
              <span className='ml-1'>
                <FaChevronDown className='text-xs' />
              </span>
            </a>
            <a href='#' className='mx-3 flex items-center'>
              Company
              <span className='ml-1'>
                <FaChevronDown className='text-xs' />
              </span>
            </a>
            <a href='#' className='mx-3 flex items-center'>
              Connect
              <span className='ml-1'>
                <FaChevronDown className='text-xs' />
              </span>
            </a>
          </div>
        </div>
        <div>
          <div className='lg:flex lg:pointer-events-auto hidden pointer-events-none mr-8'>
            <button className='text-md text-white hover:text-gray-200 font-bold mr-6'>
              Login
            </button>
            <button className='btn-primary font-bold'>Sign up</button>
          </div>
        </div>
        {/* hamburger icon or close icon*/}

        {isMenuOpen ? (
          <FaTimes
            className='text-2xl text-white pointer-events-auto cursor-pointer lg:hidden lg:pointer-events-none mr-6'
            onClick={() => {
              setIsMenuOpen(!isMenuOpen)
              modalHandler()
            }}
          />
        ) : (
          <div className='block pointer-events-auto cursor-pointer lg:hidden lg:pointer-events-none mr-6'>
            <svg
              width='32'
              height='18'
              xmlns='http://www.w3.org/2000/svg'
              onClick={() => {
                setIsMenuOpen(!isMenuOpen)
                modalHandler()
              }}
            >
              <g fill='#FFF' fill-rule='evenodd'>
                <path d='M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z' />
              </g>
            </svg>
          </div>
        )}
      </div>

      <div className='nav-modal h-80 p-6 rounded-2xl shadow-lg mt-28 z-50 lg:hidden'>
        <div className='flex flex-col items-center'>
          <div>
            <a
              href='#'
              className='my-2 text-lg text-gray-700 flex items-center'
            >
              Product{' '}
              <span className='ml-1'>
                <FaChevronDown className='text-xs' />
              </span>
            </a>
          </div>
          <div>
            <a
              href='#'
              className='my-2 text-lg text-gray-700 flex items-center'
            >
              Company
              <span className='ml-1'>
                <FaChevronDown className='text-xs' />
              </span>
            </a>
          </div>
          <div>
            <a
              href='#'
              className='my-2 text-lg text-gray-700 flex items-center'
            >
              Connect
              <span className='ml-1'>
                <FaChevronDown className='text-xs' />
              </span>
            </a>
          </div>
          <div className='flex flex-col items-center my-2'>
            <button className='text-md text-gray-600 hover:text-gray-200 font-bold mb-3'>
              Login
            </button>
            <button className='btn-primary-mobile font-bold'>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
