import React, { useState } from "react";
import { Link } from "react-router-dom";
import {UserMenu} from "./UserMenu.jsx"



export default function Header() {
const [tipoUsuario, setTipoUsuario] = useState(3) 
if(tipoUsuario===0){
    return (
        <div className='header-navbar'>
            <div className='header-img-container'>
                <img src="https://avatarfiles.alphacoders.com/266/thumb-266629.jpg" alt="" />
            </div>
            <div className='header-search-bar'>
                <input type="text" placeholder='search...' />
                <button><span className="material-symbols-outlined">search</span></button>
            </div>
            <div className="header-login-register-container">
                <div><button className="header-button-unrounded">Iniciar Sesión</button></div>
                <div><button className="header-button-rounded">Crear Cuenta</button></div>
            </div>
            <div className="header-lightmode-container">
                <span className="material-symbols-outlined">light_mode</span>
            </div>
        </div>
    )
}else if(tipoUsuario===1){
    return (
        <div className='header-navbar'>
            <div className='header-img-container'>
                <img src="https://avatarfiles.alphacoders.com/266/thumb-266629.jpg" alt="" />
            </div>
            <div className='header-search-bar'>
                <input type="text" placeholder='search...' />
                <button><span className="material-symbols-outlined">search</span></button>
            </div>
            <UserMenu/>
            <div className="header-lightmode-container">
                <span className="material-symbols-outlined">light_mode</span>
            </div>
        </div>
    )
}else if(tipoUsuario===2){
    return (
        <div className='header-navbar'>
            <div className='header-img-container'>
                <img src="https://avatarfiles.alphacoders.com/266/thumb-266629.jpg" alt="" />
            </div>
            <div className='header-search-bar'>
                <input type="text" placeholder='search...' />
                <button><span className="material-symbols-outlined">search</span></button>
            </div>
            <div className="header-login-register-container">
                <button className="header-button-rounded">Crear Nota</button>
            </div>
            <UserMenu/>
            <div className="header-lightmode-container">
                <span className="material-symbols-outlined">light_mode</span>
            </div>
        </div>
    )
}else if(tipoUsuario===3){
    return (
        <div className='header-navbar'>
            <div className='header-img-container'>
                <img src="https://avatarfiles.alphacoders.com/266/thumb-266629.jpg" alt="" />
            </div>
            <div className='header-search-bar'>
                <input type="text" placeholder='search...' />
                <button><span className="material-symbols-outlined">search</span></button>
            </div>
            <div className="header-login-register-container">
                <button className="header-button-rounded">Crear Revista</button>
                <button className="header-button-rounded">Crear Nota</button>
            </div>
            <UserMenu/>
            <div className="header-lightmode-container">
                <span className="material-symbols-outlined">light_mode</span>
            </div>
        </div>
    )
}
 
} 
