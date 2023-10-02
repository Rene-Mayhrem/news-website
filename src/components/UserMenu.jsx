import React, { useState } from 'react'

export default function UserMenu() {

    const [isMenuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
      };

  return (
    <div className='usermenu-container' onMouseEnter={toggleMenu}>
      <div className='usermenu-username-container'>
        <p>René Cruz</p>
        <img id='usermenu-img' alt='user' src='https://avatarfiles.alphacoders.com/266/thumb-266629.jpg'></img>
      </div>
      {isMenuVisible && (
        <div className='usermenu-dropdown'>
          <a href='#'>Link 1</a>
          <hr />
          <a href='#'>Link 2</a>
          <a href='#'>Link 3</a>
          <hr />
          <a href='#'>Link 4</a>
        </div>
      )}
  </div>
  )
}
