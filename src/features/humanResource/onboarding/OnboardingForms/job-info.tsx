// src/components/steps/JobInfoForm.tsx
import { Form, Input, Select, Card, Row, Col, Button } from "antd";

const { Option } = Select;

type Props = {
  onNext: () => void;
  onBack: () => void;
  form: any;
};

export default function JobInfoForm({ onNext, onBack, form }: Props) {
  const handleFinish = (values: any) => {
    console.log("Job Info Values:", values);
    onNext();
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleFinish}>
      {/* Job Preferences */}
      <Card title="Job Preferences" style={{ marginBottom: 24 }}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="desired_job_role"
              id="desired_job_role"
              label="Desired Job Role"
              rules={[{ required: true, message: "Please enter job role" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item id="preferred_location" name="preferred_location" label="Preferred Job Location(s)">
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="applied_employment_type"
              id="applied_employment_type" 
              label="Applied Employment Type"
              rules={[{ required: true, message: "Please select employment type" }]}
            >
              <Select placeholder="Select type">
                <Option value="Full-time">Full-time</Option>
                <Option value="Part-time">Part-time</Option>
                <Option value="Contract">Contract</Option>
                <Option value="Internship">Internship</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="expected_salary"
              id="expected_salary"
              label="Expected Salary"
              rules={[{ required: true, message: "Please enter expected salary" }]}
            >
              <Input type="number" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="current_salary"
              id="current_salary"
              label="Current Salary"
              rules={[{ required: true, message: "Please enter current salary" }]}
            >
              <Input type="number" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="notice_period" id="notice_period"
              label="Notice Period"
              rules={[{ required: true, message: "Please select notice period" }]}
            >
              <Select placeholder="Select notice period">
                <Option value="Days">Days</Option>
                <Option value="Weeks">Weeks</Option>
                <Option value="Months">Months</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
               name="willing_to_relocate" id="willing_to_relocate"
              label="Willing to Relocate?"
              rules={[{ required: true, message: "Please select an option" }]}
            >
              <Select placeholder="Select option">
                <Option value="Yes">Yes</Option>
                <Option value="No">No</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Card>

      {/* Navigation Buttons */}
      <Form.Item>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button onClick={onBack}>Back</Button>
          <Button type="primary" htmlType="submit">
            Next
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
}
