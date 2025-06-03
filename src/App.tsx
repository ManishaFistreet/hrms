import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Login from './features/auth/login';
import Dashboard from './features/dashboard/dashboard';
import Navbar from './components/navbar';
import HumanResource from './features/humanResource';
import React from 'react';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Routes that include the Navbar */}
        <Route element={<WithNavbar />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="/hr/*" element={<HumanResource />} />
      </Routes>
    </Router>
  );
};

export default App;

const WithNavbar: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
