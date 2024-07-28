import './rootLayout.css'
import { Link } from "react-router-dom";
import { Outlet } from 'react-router-dom';

// enabling client side routing
const RootLayout = () => {
  return (
    <div className="rootLayout">
      <header>
        <Link to="/">
          <img src="/logo.png" alt="" />
          <span>LAMA AI</span>
        </Link>
        <div className="user">User</div>

      </header>  
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
