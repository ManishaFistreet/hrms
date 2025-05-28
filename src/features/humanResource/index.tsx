import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Employees from "./employees";
import Leaves from "./leaves";
import Sidebar from "../../components/sidebar";
import "./HumanResource.css";
import AttendancePage from "./attendance";
import HRDashboard from "./HRDashboard";
import AllEmployees from "./employees/all-employees";

// Type-safe functional component
const HumanResource: React.FC = () => {
  return (
    <div className="hr-container">
      {/* Sidebar */}
      <div className="hr-sidebar">
        <Sidebar />
      </div>

      {/* Content Area */}
      <div className="hr-content">
        <Routes>
          <Route path="/" element={<HRDashboard />} />
          <Route path="employees" element={<AllEmployees />} />
          <Route path="attendance" element={<AttendancePage currentUserId="123" currentUserRole="HR" />} />
          <Route path="leaves" element={<Leaves />} />
          <Route path="*" element={<Navigate to="/hr" replace />} />
        </Routes>
      </div>
    </div>
  );
};


const Welcome: React.FC = () => {
  return (
    <div className="welcome-card">
      <h2>Welcome to the HR Dashboard</h2>
      <p>Please select an option from the sidebar to get started.</p>
    </div>
  );
};

export default HumanResource;