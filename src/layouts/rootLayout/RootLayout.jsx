import React from "react";
import { Link } from "react-router-dom";

// enabling client side routing
const RootLayout = () => {
  return (
    <div className="RootLayout">
      <header>
        <Link to="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>LAMA AI</span>
        </Link>
      </header>
      
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
