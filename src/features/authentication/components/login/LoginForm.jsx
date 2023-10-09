import React from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <div className="container">
      <div className="logo">
        <Link to="/">
          <span>TOLUCA JS</span>
        </Link>
      </div>
      <form action="" className="login">
        <p>¡Únete a la comunidad de programación de Toluca JS!</p>
        <label className="authentication">Correo electrónico *</label>
        <input
          type="text"
          required
          placeholder="Correo electrónico"
          id="email"
          className='text'
        />
        <span className="material-symbols-outlined">mail</span>
        <label className="authentication">Contraseña *</label>
        <input type="password" className='text' required placeholder="Contraseña" id="email" />
        <span className="material-symbols-outlined text-icon">key</span>
        <button>
          <span className="material-symbols-outlined text-icon visible">visibility</span>
        </button><br />
        <Link className="forgot-password">Olvidé mi contraseña</Link>
        <input className="btn-login-submit" type="submit" value='Crear cuenta' />
      </form>
    </div>
  );
}
