import React, { useState } from "react";
import { Form, Input, Select, DatePicker, Typography, Row, Col, Button, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const { Option } = Select;
const { Title } = Typography;

const EmployeeForm: React.FC = ({ onSuccess }: { onSuccess?: () => void }) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
    const navigate = useNavigate();

  const handleSubmit = async (values: any) => {
    setLoading(true);

    try {
      const response = await axios.post(
        'http://18.60.181.218:8180/app-melbac-zp0/apiv1/employee/saveorupdate/createemployee',
        values
      );

      if (response.status === 200) {
        message.success('Employee added successfully!');
        form.resetFields();
        onSuccess?.(); // Close modal or refresh list if needed
      } else {
        message.error('Something went wrong!');
      }
    } catch (error) {
      console.error(error);
      message.error('Failed to add employee');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form layout="vertical" form={form}
      onFinish={handleSubmit} name="employee_entry_form" autoComplete="off">
      <Button onClick={() => navigate('/hr')} style={{ marginBottom: 16 }}>
        ← Back to Dashboard
      </Button>
      <Title level={3}>Personal Info</Title>

      <Form.Item label="Employee ID" name="employeeid" rules={[{ required: true }]}>
        <Input placeholder="Enter Employee ID" />
      </Form.Item>

      <Form.Item label="Record ID" name="id" rules={[{ required: true }]}>
        <Input placeholder="Enter Record ID" />
      </Form.Item>

      <Form.Item label="Full Name" name="employeename" rules={[{ required: true }]}>
        <Input placeholder="Enter Full Name" />
      </Form.Item>

      <Form.Item label="Employment Type" name="employmenttype" rules={[{ required: true }]}>
        <Select placeholder="Choose Employment Type">
          <Option value="Full-Time Employment">Full-Time Employment</Option>
          <Option value="Part-Time Employment">Part-Time Employment</Option>
          <Option value="Temporary Employment">Temporary Employment</Option>
          <Option value="Contract Employment">Contract Employment</Option>
          <Option value="Internship/Apprenticeship Employment">Internship/Apprenticeship</Option>
          <Option value="Seasonal Employment">Seasonal Employment</Option>
          <Option value="Casual Employment">Casual Employment</Option>
          <Option value="Self-Employment">Self-Employment</Option>
          <Option value="Gig Work">Gig Work</Option>
          <Option value="Remote Employment">Remote Employment</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Employment Type Code" name="employmenttypecode">
        <Input readOnly />
      </Form.Item>

      <Form.Item label="Phone Number" name="phonenumber" rules={[{ required: true }]}>
        <Input placeholder="Enter Phone Number" />
      </Form.Item>

      <Form.Item label="Date of Birth" name="dob" rules={[{ required: true }]}>
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label="Gender" name="gender" rules={[{ required: true }]}>
        <Select placeholder="Choose Gender">
          <Option value="Male">Male</Option>
          <Option value="Female">Female</Option>
          <Option value="Other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Email" name="personalemail">
        <Input type="email" />
      </Form.Item>

      <Form.Item label="Father Name" name="fathername" rules={[{ required: true }]}>
        <Input placeholder="Enter Father Name" />
      </Form.Item>

      <Form.Item label="Mother Name" name="mothername" rules={[{ required: true }]}>
        <Input placeholder="Enter Mother Name" />
      </Form.Item>

      <Form.Item label="Spouse Name" name="spousename" rules={[{ required: true }]}>
        <Input placeholder="Enter Spouse Name" />
      </Form.Item>

      <Form.Item label="Nationality" name="nationality" rules={[{ required: true }]}>
        <Input placeholder="Enter Nationality" />
      </Form.Item>

      <Form.Item label="Current Address" name="currentaddress" rules={[{ required: true }]}>
        <Input.TextArea rows={2} placeholder="Enter Current Address" />
      </Form.Item>

      <Form.Item label="Permanent Address" name="permanentaddress" rules={[{ required: true }]}>
        <Input.TextArea rows={2} placeholder="Enter Permanent Address" />
      </Form.Item>

      <Title level={3}>Proof of Identity</Title>
      {/* Additional Proof of Identity fields go here */}

      <Title level={3}>Emergency Contact</Title>
      <Form.Item label="Emergency Name" name="emergencyname" rules={[{ required: true }]}>
        <Input placeholder="Enter Emergency Contact Name" />
      </Form.Item>

      <Form.Item label="Relation" name="emergency_relation">
        <Input placeholder="Enter Relation" />
      </Form.Item>

      <Form.Item label="Emergency Contact" name="emergencycontact" rules={[{ required: true }]}>
        <Input placeholder="Enter Emergency Contact" />
      </Form.Item>

      <Title level={3}>Other Information</Title>
      <Form.Item label="Religion" name="religion" rules={[{ required: true }]}>
        <Input placeholder="Enter Religion" />
      </Form.Item>

      <Form.Item label="Caste" name="caste">
        <Input placeholder="Enter Caste" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EmployeeForm;