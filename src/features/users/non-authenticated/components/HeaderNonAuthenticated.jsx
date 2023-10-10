import React from "react";
import "./HeaderNonAuthenticated.css";
import { Link } from "react-router-dom";

export default function HeaderNonAuthenticated() {
  return (
    <div className="header-non-authenticated">
      <div className="img-logo">
        <Link className="header-link-login" to="/login">JS</Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="search..." />
        <div className="search-logo-container">
          <span className="material-symbols-outlined">search</span>
        </div>
      </div>
      <div className="button-container">
        <button className="btn-header btn-login">Iniciar sesión</button>
        <button className="btn-header btn-signin">Crear cuenta</button>
        <span class="material-symbols-outlined">wb_sunny</span>
      </div>
    </div>
  );
}
