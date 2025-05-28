import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">MELBAC</div>
      <ul className="nav-links">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/planning">Planning</Link></li>
        <li><Link to="/store">Store</Link></li>
        <li><Link to="/accounts">Accounts</Link></li>
        <li><Link to="/plant-machinery">Plant & Machinery</Link></li>
        <li><Link to="/hr">Human Resource</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
