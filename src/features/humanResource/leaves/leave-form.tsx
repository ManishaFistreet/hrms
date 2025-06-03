import React, { useState } from 'react';
import {
  Table,
  Input,
  Button,
  DatePicker,
  Avatar,
  Tag,
  Space,
  Typography,
  Card,
} from 'antd';
import {
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import dayjs from 'dayjs';

const { Title } = Typography;
const { RangePicker } = DatePicker;

const leaveData = [
  {
    id: 'LA-0215',
    name: 'Darlene Robertson',
    avatar: 'https://i.pravatar.cc/40?img=1',
    type: 'Sick Leave',
    from: '2024-03-12',
    to: '2024-03-14',
    reason: 'Going to Hospital',
    status: 'Approved',
  },
  {
    id: 'LA-0215',
    name: 'Floyd Miles',
    avatar: 'https://i.pravatar.cc/40?img=2',
    type: 'Sick Leave',
    from: '2024-03-12',
    to: '2024-03-14',
    reason: 'Going to Hospital',
    status: 'Pending',
  },
  {
    id: 'LA-0215',
    name: 'Cody Fisher',
    avatar: 'https://i.pravatar.cc/40?img=3',
    type: 'Sick Leave',
    from: '2024-03-12',
    to: '2024-03-14',
    reason: 'Going to Hospital',
    status: 'Declined',
  },
];

const statusColorMap: Record<string, string> = {
  Approved: 'green',
  Pending: 'orange',
  Declined: 'red',
};

const LeaveForm: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = leaveData.filter((leave) =>
    leave.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    {
      title: 'Employee ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Employee Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: any) => (
        <Space>
          <Avatar src={record.avatar} />
          {text}
        </Space>
      ),
    },
    {
      title: 'Leave Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'From',
      dataIndex: 'from',
      key: 'from',
      render: (text: string) => dayjs(text).format('YYYY-MM-DD'),
    },
    {
      title: 'To',
      dataIndex: 'to',
      key: 'to',
      render: (text: string) => dayjs(text).format('YYYY-MM-DD'),
    },
    {
      title: 'Reason',
      dataIndex: 'reason',
      key: 'reason',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={statusColorMap[status]}>{status}</Tag>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space>
          <Button
            type="text"
            icon={<EditOutlined />}
            style={{ color: '#52c41a' }}
          />
          <Button
            type="text"
            icon={<DeleteOutlined />}
            danger
          />
        </Space>
      ),
    },
  ];

  return (
    <Card style={{ margin: 24, borderRadius: 12 }}>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <Title level={3}>Leave</Title>

        <Space
          direction="horizontal"
          size="middle"
          style={{ flexWrap: 'wrap' }}
        >
          <Input
            placeholder="Search Employee"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            allowClear
          />
          <RangePicker />
          <Button type="primary">Add Leave</Button>
        </Space>
      </div>

      <Table
        columns={columns}
        dataSource={filteredData}
        rowKey={(record, index) => `${record.id}-${index}`}
        pagination={{ pageSize: 5 }}
        bordered
      />
    </Card>
  );
};

export default LeaveForm;
