import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-navbar">
      Header
      <Link to="/login">Login</Link>
    </div>
  );
}
