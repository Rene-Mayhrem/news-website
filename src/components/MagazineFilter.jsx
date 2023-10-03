import React from "react";
import { Link } from "react-router-dom";

export default function MagazineFilter() {
  return (
    <div id="magazine-filter-container">
      <span class="material-symbols-outlined">menu</span>
      <nav className="magazine-filter-option">
        <Link className="magazine-filter-link">Agregados recientemente</Link>
      </nav>
      <nav className="magazine-filter-option">
        <Link className="magazine-filter-link">Tendencia</Link>
      </nav>
    </div>
  );
}
