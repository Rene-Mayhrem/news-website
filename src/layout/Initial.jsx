import React from "react";
import { Link } from "react-router-dom";
import InitialForm from "../components/InitialForm";

export default function Initial() {
  return (
    <div className="initial-container">
      {/* home button */}
      <Link className="initial-btn-home" to="/">
        <span className="material-symbols-outlined initial-btn-home-icon">
          home
        </span>
      </Link>
      {/* form section */}
      <InitialForm />
    </div>
  );
}
