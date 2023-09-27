import React from "react";
import { Link } from "react-router-dom";

export default function Initial() {
  return (
    <>
      <h2>Hola</h2>

      <Link className="btn_home">
        <span class="material-symbols-outlined">home</span>
      </Link>
    </>
  );
}
