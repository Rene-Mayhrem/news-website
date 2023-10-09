import React from "react";
import "./HeaderNonAuthenticated.css";

export default function HeaderNonAuthenticated() {
  return (
    <div className="header-non-authenticated">
      <div className="img-user">
        <img
          src="https://avatarfiles.alphacoders.com/266/thumb-266629.jpg"
          alt=""
        />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="search..." />
        <button>
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
      <div className="button-container">
        <div>
          <button className="btn-unrounded">Iniciar Sesión</button>
        </div>
        <div>
          <button className="btn-rounded">Crear Cuenta</button>
        </div>
        <div className="header-lightmode-container">
          <span className="material-symbols-outlined">light_mode</span>
        </div>
      </div>
    </div>
  );
}
