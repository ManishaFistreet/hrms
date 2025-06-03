import React, { useState } from 'react';
import {
  Table,
  Button,
  Input,
  Space,
  DatePicker,
  Tag,
  Avatar,
  Row,
  Col,
  Typography,
  Card,
} from 'antd';
import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

import { SearchOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { Employee } from '../../../types/employee';
import { employees } from '../../../utils/mockData';

const { Title } = Typography;
const { RangePicker } = DatePicker;

const statusColor: Record<Employee['status'], string> = {
  Permanent: 'green',
  Probation: 'blue',
  Internship: 'red',
};

const AllEmployees: React.FC = () => {
  const [search, setSearch] = useState('');

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  const columns: ColumnsType<Employee> = [
    {
      title: 'Employee Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <Space>
          <Avatar src={record.avatar} />
          {record.name}
        </Space>
      ),
    },
    {
      title: 'Employee ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Department',
      dataIndex: 'dept',
      key: 'dept',
    },
    {
      title: 'Designation',
      dataIndex: 'designation',
      key: 'designation',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: Employee['status']) => (
        <Tag color={statusColor[status]}>{status}</Tag>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space>
          <EyeOutlined style={{ color: '#595959' }} />
          <EditOutlined style={{ color: '#52c41a' }} />
          <DeleteOutlined style={{ color: '#ff4d4f' }} />
        </Space>

      ),
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
        <Col>
          <Title level={3}>All Employees</Title>
        </Col>
        <Col>
          <Space>
            <Button type="primary">Add New Employee</Button>
            <Button>Filter</Button>
          </Space>
        </Col>
      </Row>
      <Card style={{ marginTop: 16 }}>
        <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
          <Col xs={24} sm={12} md={8}>
            <Input
              placeholder="Search Employee"
              prefix={<SearchOutlined />}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <RangePicker style={{ width: '100%' }} />
          </Col>
        </Row>

        <Table
          rowKey="id"
          dataSource={filteredEmployees}
          columns={columns}
          pagination={{ pageSize: 5 }}
        />
      </Card>
    </div>
  );
};

export default AllEmployees;
