import React from 'react'
import { Link } from 'react-router-dom'

export default function User() {
  return (
    <div className='user-container'>
        <div className='user-img-container'>
            <img src="https://avatarfiles.alphacoders.com/266/thumb-266629.jpg" alt="Profile" />
        </div>
        <div className='user-name-container'>
            <p>René Cruz</p>
        </div>
        <div className='user-button-container'>
            <button>Ver Perfil</button>
        </div>
        <div className='user-tags-title-container'>
            <p>Etiquetas</p>
        </div>
        <div className='user-tags-container'>
            <p>#javascript</p>
            <p>#poo</p>
            <p>beginners</p>
        </div>
    </div>
  )
}
