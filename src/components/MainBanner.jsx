import React from 'react'
import banner from '../assets/img/banner.jpg'

const MainBanner = () => {
  return (
    <div className='banner-container'>
        <img src={banner} alt="" />
        <h1>Location Finder</h1>
    </div>
  )
}

export default MainBanner