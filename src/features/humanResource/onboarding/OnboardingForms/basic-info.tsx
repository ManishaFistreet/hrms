// src/components/steps/BasicInfoForm.tsx
import { Form, Input, Select, DatePicker, Card, Row, Col, Button } from "antd";
import { Rule } from "antd/lib/form";

const { Option } = Select;
const { TextArea } = Input;

type Props = {
  onNext: () => void;
  form: any;
};

export default function BasicInfoForm({ onNext, form }: Props) {
  const handleFinish = (values: any) => {
    console.log("Basic Info Values:", values);
    onNext();
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleFinish}>
      {/* Basic Information */}
      <Card title="Basic Information" style={{ marginBottom: 24 }}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item id="c_name" name="c_name" label="Candidate Name" rules={[{ required: true }] as Rule[]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item id="c_dateofbirth" name="c_dateofbirth" label="Date of Birth" rules={[{ required: true }]}>
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item  id="c_gender" name="c_gender" label="Gender" rules={[{ required: true }]}>
              <Select placeholder="Select Gender">
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
                <Option value="Other">Other</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="c_maratialstatus" id="c_maratialstatus" label="Marital Status" rules={[{ required: true }]}>
              <Select placeholder="Select Marital Status">
                <Option value="Single">Single</Option>
                <Option value="Married">Married</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Card>

      {/* Address Details */}
      <Card title="Address Details" style={{ marginBottom: 24 }}>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item id="current_address" name="current_address" label="Current Address" rules={[{ required: true }]}>
              <TextArea rows={2} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item id="permanent_address" name="permanent_address" label="Permanent Address" rules={[{ required: true }]}>
              <TextArea rows={2} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item id="c_city" name="c_city" label="City" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item id="c_state" name="c_state" label="State" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item id="c_country" name="c_country" label="Country" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item id="c_pincode" name="c_pincode" label="Pincode" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Card>

      {/* Contact Details */}
      <Card title="Contact Details" style={{ marginBottom: 24 }}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item id="mobile_number" name="mobile_number" label="Mobile Number" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item id="alternate_mobile_number" name="alternate_mobile_number" label="Alternate Contact Number">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item id="email" name="email" label="Email ID" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item id="linkedin" name="linkedin" label="LinkedIn Profile">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item id="portfolio" name="portfolio" label="Facebook Profile">
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Card>

      {/* Submit Button */}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Next
        </Button>
      </Form.Item>
    </Form>
  );
}
