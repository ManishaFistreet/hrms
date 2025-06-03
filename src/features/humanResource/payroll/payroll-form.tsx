import React from "react";
import {
  Table,
  Input,
  Button,
  DatePicker,
  Space,
  Typography,
  Card,
  Tag,
  Popconfirm,
} from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  FileTextOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { RangePicker } = DatePicker;

const employees = [
  {
    key: "1",
    name: "Darlene Robertson",
    id: "345321231",
    email: "bernard@example.com",
    designation: "UI/UX Designer",
    salary: 38400,
  },
  // Add more data as needed
];

const PayrollPage: React.FC = () => {
  const columns = [
    {
      title: "Employee Name",
      dataIndex: "name",
      key: "name",
      render: (text: string) => <Text strong>{text}</Text>,
    },
    {
      title: "Employee ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
      render: (text: string) => <Tag color="blue">{text}</Tag>,
    },
    {
      title: "Salary",
      dataIndex: "salary",
      key: "salary",
      render: (salary: number) => `₹${salary.toLocaleString()}`,
    },
    {
      title: "Payslip",
      key: "payslip",
      render: () => (
        <Button type="default" icon={<FileTextOutlined />} size="small">
          Generate
        </Button>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <Button icon={<EditOutlined />} type="link">
            Edit
          </Button>
          <Popconfirm title="Are you sure to delete?">
            <Button icon={<DeleteOutlined />} type="link" danger />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Card style={{ margin: 24, borderRadius: 12 }}>
      <Title level={3}>Payroll</Title>
      <Text type="secondary">Employee Salary</Text>

      {/* Filter Toolbar */}
      <Space style={{ marginTop: 24, marginBottom: 24, marginLeft: 20 }} wrap>
        <Input placeholder="Search Employee" style={{ width: 200 }} />
        <RangePicker />
        <Button type="primary" icon={<PlusOutlined />}>
          Add Salary
        </Button>
      </Space>

      {/* Salary Table */}
      <Table
        columns={columns}
        dataSource={employees}
        pagination={{ pageSize: 5 }}
        bordered
        rowKey="id"
      />
    </Card>
  );
};

export default PayrollPage;
