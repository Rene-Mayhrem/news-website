import React, { useState } from 'react'

export function UserMenu() {

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
          <a href='#'>René Cruz</a>
          <hr />
          <a href='#'>Dashboard</a>
          <a href='#'>Guardados</a>
          <hr />
          <a href='#'>Cerrar Sesión</a>
        </div>
      )}
  </div>
  )
}
