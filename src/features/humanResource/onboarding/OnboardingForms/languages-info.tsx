// src/components/OnboardingForms/languages-form.tsx
import React from "react";
import { Button, Card, Col, Form, Input, Row } from "antd";

interface LanguagesFormProps {
  form: any;
  onNext: () => void;
  onBack?: () => void;
}

const LanguagesForm: React.FC<LanguagesFormProps> = ({ form, onNext, onBack }) => {
  const handleFinish = (values: any) => {
    console.log("Languages Known:", values);
    onNext();
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleFinish}>
      <Card title="Languages Known" style={{ marginBottom: 24 }}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item
             name="language1"
              id="language1"
              rules={[{ required: true, message: "Please enter at least one language" }]}
            >
              <Input placeholder="Language 1 (e.g., English - Fluent)" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="language2" id="language2">
              <Input placeholder="Language 2 (optional)" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="language3" id="language3">
              <Input placeholder="Language 3 (optional)" />
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

export default LanguagesForm;
