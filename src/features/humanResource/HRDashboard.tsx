// src/components/HRDashboard.tsx
import React, { useState } from 'react';
import {
  Layout,
  Row,
  Col,
  Card,
  Statistic,
  Table,
  Avatar,
  Tag,
  Button,
  List,
  Typography,
  Space,
  Tooltip,
  Progress,
  Modal,
} from 'antd';
import {
  UserAddOutlined,
  TeamOutlined,
  ClockCircleOutlined,
  FileTextOutlined,
  DollarOutlined,
  FormOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  RiseOutlined,
  FallOutlined,
  TrophyOutlined,
  CheckCircleOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
import { Line } from '@ant-design/charts';
import EmployeeForm from './invite-employees/component/employee-form';
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const HRDashboard: React.FC = () => {
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [showManageEmployee, setShowManageEmployee] = useState(false);
  const navigate = useNavigate();

  const leaveRequests = [
    {
      id: 'EMP-00001',
      name: 'Ahmad Butt',
      avatar: 'https://i.pravatar.cc/30?img=1',
      type: 'Casual Leave',
      from: '12/03/2024',
      to: '14/03/2024',
      reason: 'Going to Hospital',
    },
    {
      id: 'EMP-00002',
      name: 'Ali Raza',
      avatar: 'https://i.pravatar.cc/30?img=2',
      type: 'Sick Leave',
      from: '12/03/2024',
      to: '14/03/2024',
      reason: 'Fever',
    },
  ];

  const dailyStats = {
    earlyRisers: ['Ahmad Butt', 'Usman', 'Bilal'],
    lateArrivals: ['Khizar', 'Moiz', 'Usama'],
    missingPunch: [
      { name: 'Khalifa', type: 'Check-In' },
      { name: 'Saad', type: 'Check-Out' },
      { name: 'Yonus', type: 'Check-In' },
    ],
    birthdays: ['Ahmad Butt', 'Ali', 'Rameez'],
  };

  const metrics = [
    {
      label: 'Attendance',
      value: 57,
      change: '▲ 2.5%',
      positive: true,
      icon: <RiseOutlined />,
    },
    {
      label: 'Late Arrivals',
      value: 23,
      change: '▼ 1.5%',
      positive: false,
      icon: <FallOutlined />,
    },
    {
      label: 'Absent',
      value: 3,
      change: '▲ 2.5%',
      positive: true,
      icon: <RiseOutlined />,
    },
    {
      label: 'Leave Apply',
      value: 6,
      change: '▼ 1.5%',
      positive: false,
      icon: <FallOutlined />,
    },
  ];

  const leaveColumns = [
    {
      title: 'EMPLOYEE ID',
      dataIndex: 'id',
      key: 'id',
      width: 100,
      ellipsis: true,
    },
    {
      title: 'EMPLOYEE NAME',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: any) => (
        <Space size="small">
          <Avatar size={24} src={record.avatar} />
          <span style={{ fontSize: 12 }}>{text}</span>
        </Space>
      ),
      width: 140,
    },
    {
      title: 'LEAVE TYPE',
      dataIndex: 'type',
      key: 'type',
      width: 120,
      render: (text: string) => <span style={{ fontSize: 12 }}>{text}</span>,
    },
    {
      title: 'FROM',
      dataIndex: 'from',
      key: 'from',
      width: 100,
      render: (text: string) => <span style={{ fontSize: 12 }}>{text}</span>,
    },
    {
      title: 'TO',
      dataIndex: 'to',
      key: 'to',
      width: 100,
      render: (text: string) => <span style={{ fontSize: 12 }}>{text}</span>,
    },
    {
      title: 'REASON',
      dataIndex: 'reason',
      key: 'reason',
      render: (text: string) => <span style={{ fontSize: 12 }}>{text}</span>,
    },
    {
      title: 'ACTION',
      key: 'action',
      width: 110,
      render: () => (
        <Space size="small">
          <Tooltip title="View">
            <Button type="link" icon={<EyeOutlined />} size="small" />
          </Tooltip>
          <Tooltip title="Edit">
            <Button type="link" icon={<EditOutlined />} size="small" />
          </Tooltip>
          <Tooltip title="Delete">
            <Button type="link" icon={<DeleteOutlined />} danger size="small" />
          </Tooltip>
        </Space>
      ),
    },
  ];

  const attendanceTrendData = [
    { date: '2024-05-24', attendance: 50 },
    { date: '2024-05-25', attendance: 52 },
    { date: '2024-05-26', attendance: 48 },
    { date: '2024-05-27', attendance: 55 },
    { date: '2024-05-28', attendance: 53 },
    { date: '2024-05-29', attendance: 57 },
    { date: '2024-05-30', attendance: 54 },
  ];

  const upcomingHolidays = [
    { date: '2024-06-05', name: 'Eid-ul-Fitr' },
    { date: '2024-08-14', name: 'Independence Day' },
  ];

  const topPerformers = [
    { name: 'Sara Ali', avatar: 'https://i.pravatar.cc/40?img=3', score: 98 },
    { name: 'Bilal Khan', avatar: 'https://i.pravatar.cc/40?img=4', score: 95 },
    { name: 'Zainab', avatar: 'https://i.pravatar.cc/40?img=5', score: 93 },
  ];

  const hrTasks = [
    { task: 'Employee Onboarding', progress: 80 },
    { task: 'Policy Review', progress: 45 },
    { task: 'Payroll Setup', progress: 65 },
  ];

  const attendanceTrendConfig = {
    data: attendanceTrendData,
    padding: 'auto',
    xField: 'date',
    yField: 'attendance',
    smooth: true,
    yAxis: {
      min: 40,
      max: 60,
    },
    point: {
      size: 5,
      shape: 'circle',
      style: {
        fill: '#1890ff',
        stroke: 'white',
        lineWidth: 2,
      },
    },
    tooltip: {
      formatter: (datum: any) => ({ name: 'Attendance', value: datum.attendance }),
    },
    color: '#1890ff',
  };

  return (
    <Layout style={{ padding: 24, background: '#f5f7fa' }}>
      <Content>
        <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
          <Col>
            <Title level={4} style={{ marginBottom: 4 }}>
              👋 Good Morning, <span style={{ color: '#1890ff' }}>Waleed</span>
            </Title>
            <Paragraph type="secondary" style={{ margin: 0, fontSize: 12 }}>
              Here’s what’s happening with your team today
            </Paragraph>
          </Col>
          <Col>
            <Space size="small">
                <Button
            type="primary"
            icon={<UserAddOutlined />}
            size="small"
            onClick={() => navigate('/hr/employees/add')}
          >
            Add Employee
          </Button>
              <Modal
                title="Add Employee"
                open={showAddEmployee}
                onCancel={() => setShowAddEmployee(false)}
                footer={null}
                width={800}
              >
                <EmployeeForm />
              </Modal>
              <Button
                icon={<TeamOutlined />}
                size="small"
                onClick={() => setShowManageEmployee(true)}
              >
                Manage Employees
              </Button>
            </Space>
          </Col>
        </Row>

        {/* Top Metrics */}
        <Row gutter={[16, 16]}>
          {metrics.map((metric, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <Card
                hoverable
                style={{
                  borderRadius: 8,
                  boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                  transition: 'box-shadow 0.3s ease',
                }}
                bodyStyle={{ padding: 12 }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.05)')
                }
              >
                <Space direction="vertical" size={0}>
                  <Statistic
                    title={
                      <span style={{ fontSize: 12, fontWeight: 600, color: '#555' }}>
                        {metric.label}
                      </span>
                    }
                    value={metric.value}
                    valueStyle={{ fontSize: 20, fontWeight: 'bold' }}
                    prefix={
                      <span
                        style={{
                          color: metric.positive ? '#3f8600' : '#cf1322',
                          fontSize: 16,
                          marginRight: 6,
                        }}
                      >
                        {metric.icon}
                      </span>
                    }
                  />
                  <span
                    style={{
                      color: metric.positive ? '#3f8600' : '#cf1322',
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  >
                    {metric.change}
                  </span>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>

        <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
          {/* Attendance Trend */}
          <Col xs={22} md={12}>
            <Card
              title={<span style={{ fontWeight: 600, fontSize: 14 }}>Attendance Trend (Last 7 Days)</span>}
              style={{ borderRadius: 8 }}
              bodyStyle={{ padding: 12 }}
            >
              <Line {...attendanceTrendConfig} />
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card
              title={<span style={{ fontWeight: 600, fontSize: 14 }}>Daily Attendance Status</span>}
              style={{ borderRadius: 8 }}
              bodyStyle={{ padding: 12 }}
            >
              <Row gutter={8}>
                <Col span={12}>
                  <Card
                    size="small"
                    style={{ marginBottom: 8, borderRadius: 6 }}
                    bodyStyle={{ padding: 8 }}
                  >
                    <Space size="small" align="center">
                      <ClockCircleOutlined style={{ color: '#52c41a' }} />
                      <span style={{ fontWeight: 600, fontSize: 12 }}>Early Risers</span>
                    </Space>
                    <Paragraph
                      ellipsis={{ rows: 2 }}
                      style={{ fontSize: 12, marginTop: 4 }}
                      type="secondary"
                    >
                      {dailyStats.earlyRisers.join(', ')}
                    </Paragraph>
                  </Card>
                  <Card
                    size="small"
                    style={{ borderRadius: 6 }}
                    bodyStyle={{ padding: 8 }}
                  >
                    <Space size="small" align="center">
                      <ClockCircleOutlined style={{ color: '#f5222d' }} />
                      <span style={{ fontWeight: 600, fontSize: 12 }}>Late Arrivals</span>
                    </Space>
                    <Paragraph
                      ellipsis={{ rows: 2 }}
                      style={{ fontSize: 12, marginTop: 4 }}
                      type="secondary"
                    >
                      {dailyStats.lateArrivals.join(', ')}
                    </Paragraph>
                  </Card>
                </Col>

                <Col span={12}>
                  <Card
                    size="small"
                    style={{ marginBottom: 8, borderRadius: 6 }}
                    bodyStyle={{ padding: 8 }}
                  >
                    <Space size="small" align="center">
                      <FormOutlined style={{ color: '#faad14' }} />
                      <span style={{ fontWeight: 600, fontSize: 12 }}>Missing Punch</span>
                    </Space>
                    <List
                      size="small"
                      dataSource={dailyStats.missingPunch}
                      renderItem={(item) => (
                        <List.Item style={{ padding: '2px 8px' }}>
                          <span style={{ fontSize: 12 }}>
                            {item.name} - <Tag color="orange">{item.type}</Tag>
                          </span>
                        </List.Item>
                      )}
                      style={{ marginTop: 4 }}
                    />
                  </Card>
                  <Card
                    size="small"
                    style={{ borderRadius: 6 }}
                    bodyStyle={{ padding: 8 }}
                  >
                    <Space size="small" align="center">
                      <TrophyOutlined style={{ color: '#1890ff' }} />
                      <span style={{ fontWeight: 600, fontSize: 12 }}>Birthdays</span>
                    </Space>
                    <Paragraph
                      ellipsis={{ rows: 2 }}
                      style={{ fontSize: 12, marginTop: 4 }}
                      type="secondary"
                    >
                      {dailyStats.birthdays.join(', ')}
                    </Paragraph>
                  </Card>
                </Col>
              </Row>
              <Card
                title={<span style={{ fontWeight: 600, fontSize: 14 }}>Top Performers</span>}
                style={{ borderRadius: 8, marginTop: 16 }}
                bodyStyle={{ padding: 12 }}
              >
                <List
                  grid={{ gutter: 16, column: 4 }}
                  dataSource={topPerformers}
                  renderItem={(item) => (
                    <List.Item style={{ textAlign: 'center' }}>
                      <Avatar src={item.avatar} size={48} />
                      <div style={{ fontWeight: 600, fontSize: 12, marginTop: 6 }}>{item.name}</div>
                      <Tag color="purple" style={{ fontSize: 10 }}>{item.score} pts</Tag>
                    </List.Item>
                  )}
                />
              </Card>
            </Card>
          </Col>
        </Row>
        {/* Leave Requests */}
        <Row style={{ marginTop: 16 }}>
          <Card
            title={<span style={{ fontWeight: 600, fontSize: 14 }}>Leave Requests</span>}
            style={{ borderRadius: 8 }}
            bodyStyle={{ padding: 12 }}
            extra={<a href="#">View All</a>}
          >
            <Table
              columns={leaveColumns}
              dataSource={leaveRequests}
              pagination={false}
              rowKey="id"
              scroll={{ y: 180 }}
              style={{ fontSize: 14 }}
            />
          </Card>
        </Row>
        <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
          {/* Upcoming Holidays */}
          <Col xs={24} md={12}>
            <Card
              title={<span style={{ fontWeight: 600, fontSize: 14 }}>Upcoming Holidays</span>}
              style={{ borderRadius: 8 }}
              bodyStyle={{ padding: 12 }}
            >
              <List
                size="small"
                dataSource={upcomingHolidays}
                renderItem={(item) => (
                  <List.Item style={{ padding: '4px 8px' }}>
                    <CalendarOutlined style={{ marginRight: 8, color: '#1890ff' }} />
                    <span style={{ fontSize: 12 }}>{item.date} - {item.name}</span>
                  </List.Item>
                )}
              />
            </Card>
          </Col>

          {/* HR Tasks */}
          <Col xs={24} md={12}>
            <Card
              title={<span style={{ fontWeight: 600, fontSize: 14 }}>HR Tasks</span>}
              style={{ borderRadius: 8 }}
              bodyStyle={{ padding: 12 }}
            >
              <List
                size="small"
                dataSource={hrTasks}
                renderItem={(item) => (
                  <List.Item style={{ padding: '4px 8px' }}>
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <span style={{ fontSize: 12, fontWeight: 600 }}>{item.task}</span>
                      <Progress percent={item.progress} size="small" />
                    </Space>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default HRDashboard;
