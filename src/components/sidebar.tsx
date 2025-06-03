import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  UserAddOutlined,
  TeamOutlined,
  CalendarOutlined,
  FileTextOutlined,
  DollarOutlined,
  FormOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => setCollapsed(!collapsed);

  const menuItems = [
    { key: "/hr", icon: <DashboardOutlined />, label: "Dashboard" },
    { key: "/hr/onboarded-process", icon: <FormOutlined />, label: "Onboarding" },
    { key: "/hr/onboarding/add-candidate", icon: <UserAddOutlined />, label: "Add Candidate Details", parent: "/hr/onboarded-process" },
    { key: "/hr/onboarding/process", icon: <CheckCircleOutlined />, label: "Process Onboarding", parent: "/hr/onboarded-process" },
    { key: "/hr/employees", icon: <TeamOutlined />, label: "Employees" },
    { key: "/hr/attendance", icon: <CalendarOutlined />, label: "Attendance" },
    { key: "/hr/leaves", icon: <FileTextOutlined />, label: "Leaves" },
    { key: "/hr/payroll", icon: <DollarOutlined />, label: "Payroll" },
  ];

  // Group children under their parent
  const groupedMenu = menuItems.reduce((acc: any, item) => {
    if (item.parent) {
      acc[item.parent] = acc[item.parent] || [];
      acc[item.parent].push(item);
    }
    return acc;
  }, {});

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      trigger={null}
      width={220}
      style={{
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        background: "#001529",
        overflow: "auto",
        boxShadow: "2px 0 8px rgba(0, 0, 0, 0.15)",
      }}
    >
      {/* Logo / Title */}
      <div
        style={{
          color: "white",
          padding: "16px",
          fontSize: collapsed ? "18px" : "20px",
          textAlign: "center",
          fontWeight: 600,
          borderBottom: "1px solid #333",
        }}
      >
        {collapsed ? "HR" : "HR System"}
      </div>

      {/* Collapse Toggle Button */}
      <div
        style={{
          textAlign: "center",
          padding: "12px",
          cursor: "pointer",
          color: "#ccc",
          fontSize: "16px",
          borderBottom: "1px solid #333",
        }}
        onClick={toggleCollapse}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>

      {/* Navigation */}
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        defaultOpenKeys={[location.pathname]}
        style={{ marginTop: 10 }}
      >
        {menuItems.map((item) => {
          if (item.parent) return null; // children handled in group
          const children = groupedMenu[item.key];
          return children ? (
            <>
              <Menu.Item key={item.key} icon={item.icon}>
                <Link to={item.key}>{item.label}</Link>
              </Menu.Item>
              {children.map((child:any) => (
                <Menu.Item key={child.key} icon={child.icon} style={{ paddingLeft: 40 }}>
                  <Link to={child.key}>{child.label}</Link>
                </Menu.Item>
              ))}
            </>
          ) : (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.key}>{item.label}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
