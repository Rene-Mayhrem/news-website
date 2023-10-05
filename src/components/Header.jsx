import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className='header-navbar'>
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
