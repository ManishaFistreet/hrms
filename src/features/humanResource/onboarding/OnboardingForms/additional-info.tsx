// src/components/OnboardingForms/additional-info-form.tsx
import React from "react";
import { Button, Card, Col, Form, Input, Row, Select } from "antd";

const { Option } = Select;

interface AdditionalInfoFormProps {
  form: any;
  onNext: () => void;
  onBack?: () => void;
}

const AdditionalInfoForm: React.FC<AdditionalInfoFormProps> = ({
  form,
  onNext,
  onBack,
}) => {
  const handleFinish = (values: any) => {
    console.log("Additional Information:", values);
    onNext();
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleFinish}>
      <Card title="Additional Information" style={{ marginBottom: 24 }}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item  name="work_authorization" id="work_authorization">
              <Input placeholder="Work Authorization" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="career_gap" id="career_gap">
              <Select placeholder="Any Career Gap?">
                <Option value="Yes">Yes</Option>
                <Option value="No">No</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="hobbies_interests" id="hobbies_interests">
              <Input.TextArea placeholder="Hobbies & Interests (optional)" rows={2} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="other_notes" id="other_notes">
              <Input.TextArea placeholder="Other Notes (optional)" rows={2} />
            </Form.Item>
          </Col>
        </Row>
      </Card>

      <div className="flex justify-between">
        {onBack && <Button onClick={onBack}>Back</Button>}
        <Button type="primary" htmlType="submit">
          Next
        </Button>
      </div>
    </Form>
  );
};

export default AdditionalInfoForm;
