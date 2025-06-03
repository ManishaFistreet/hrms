import React, { useState } from 'react';
import {
  Card,
  Table,
  Input,
  DatePicker,
  Button,
  Avatar,
  Typography,
  Space,
  Row,
  Col,
} from 'antd';
import { SearchOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import dayjs, { Dayjs } from 'dayjs';

const { RangePicker } = DatePicker;

const employeeData = [
  {
    id: 'EMP001',
    name: 'Darlene Robertson',
    email: 'bernardogalaviz@example.com',
    avatar: 'https://i.pravatar.cc/150?img=1',
    status: 'Present',
  },
  {
    id: 'EMP002',
    name: 'Floyd Miles',
    email: 'jefferylalor@example.com',
    avatar: 'https://i.pravatar.cc/150?img=2',
    status: 'Absent',
  },
  // Add more records as needed
];

const AttendanceForm: React.FC = () => {
  const [fromDate, setFromDate] = useState<Dayjs | null>(dayjs());
  const [toDate, setToDate] = useState<Dayjs | null>(dayjs());
  const [search, setSearch] = useState('');

  const filteredEmployees = employeeData.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    {
      title: 'Employee',
      dataIndex: 'name',
      key: 'name',
      render: (_: any, record: any) => (
        <Space>
          <Avatar src={record.avatar} />
          <Typography.Text>{record.name}</Typography.Text>
        </Space>
      ),
    },
    {
      title: 'Employee ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Typography.Text style={{ color: status === 'Present' ? 'green' : 'red', fontWeight: 500 }}>
          {status}
        </Typography.Text>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space>
          <Button icon={<EditOutlined />} type="link" />
          <Button icon={<DeleteOutlined />} type="link" danger />
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <Typography.Title level={5}>Attendance</Typography.Title>
      <Typography.Text type="secondary" style={{ marginBottom: 24, display: 'inline-block' }}>
        Employee Attendance Records
      </Typography.Text>

      <Card style={{ marginTop: 16 }}>
        <Row gutter={[16, 16]} align="middle" wrap>
          <Col xs={24} sm={12} md={6}>
            <Input
              placeholder="Search Employee"
              prefix={<SearchOutlined />}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <DatePicker
              style={{ width: '100%' }}
              value={fromDate}
              onChange={(date) => setFromDate(date)}
              placeholder="From"
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <DatePicker
              style={{ width: '100%' }}
              value={toDate}
              onChange={(date) => setToDate(date)}
              placeholder="To"
            />
          </Col>
          <Col xs={24} sm={6} md={4} style={{ marginLeft: 'auto', textAlign: 'right' }}>
            <Button type="primary">Add Attendance</Button>
          </Col>
        </Row>

        <Table
          style={{ marginTop: 24 }}
          dataSource={filteredEmployees}
          columns={columns}
          rowKey="id"
          pagination={false}
        />
      </Card>
    </div>
  );
};

export default AttendanceForm;