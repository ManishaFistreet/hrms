import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./HumanResource.css";
import HRDashboard from "./HRDashboard";
import AllEmployees from "./employees/all-employees";
import AttendanceForm from "./attendance/attendance-form";
import PayrollPage from "./payroll/payroll-form";
import LeaveForm from "./leaves/leave-form";
import Sidebar from "../../components/sidebar";
import OnboardingForm from "./onboarding/common-onboarding";
import OnboardingDashboard from "./onboarding";
import EmployeeForm from "./invite-employees/component/employee-form";

// Type-safe functional component
const HumanResource: React.FC = () => {
  return (
    <div className="hr-grid-layout">
      <Sidebar />

      <div className="hr-grid-content">
        <Routes>
          <Route path="/" element={<HRDashboard />} />
          <Route path="employees/add" element={<EmployeeForm />} />
          <Route path="employees" element={<AllEmployees />} />
          <Route path="attendance" element={<AttendanceForm />} />
          <Route path="payroll" element={<PayrollPage />} />
          <Route path="leaves" element={<LeaveForm />} />
          <Route path="onboarded-process" element={<OnboardingDashboard />} />
          <Route path="onboarding/add-candidate" element={<OnboardingForm />} />
          <Route path="*" element={<Navigate to="/hr" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default HumanResource;