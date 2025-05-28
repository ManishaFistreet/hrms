import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import "../features/humanResource/HumanResource.css";

const Sidebar: FC = () => {
  const location = useLocation();

  const isActive = (path: string): string =>
    location.pathname === path ? "sidebar-link active" : "sidebar-link";

  return (
    <div>
      <h2 className="sidebar-title">HR System</h2>
      <nav className="sidebar-nav">
        <Link to="/hr" className={isActive("/hr")}>Dashboard</Link>
        <Link to="/hr/pre-onboarding" className={isActive("/hr/pre-onboarding")}>Pre-Onboarding</Link>
        <Link to="/hr/employees" className={isActive("/hr/employees")}>Employees</Link>
        <Link to="/hr/attendance" className={isActive("/hr/attendance")}>Attendance</Link>
        <Link to="/hr/leaves" className={isActive("/hr/leaves")}>Leaves</Link>
      </nav>
    </div>
  );
}

export default Sidebar;
