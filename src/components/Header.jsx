import React from 'react'

export default function Header() {
  return (
    <div className='header-container'>
        <div className='header-img-container'>
            <img src="https://avatarfiles.alphacoders.com/266/thumb-266629.jpg" alt="" />
        </div>
        <div className='header-search-bar'>
            <input type="text" placeholder='search...' />
            <button><span className="material-symbols-outlined" id='favorite'>search</span></button>
        </div>
    </div>
  )
} 
