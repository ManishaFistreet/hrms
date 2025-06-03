// src/components/OnboardingForms/resume-documents-form.tsx
import React from "react";
import { Button, Card, Col, Form, Row, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

interface ResumeDocumentsFormProps {
  form: any;
  onNext: () => void;
  onBack?: () => void;
}

const ResumeDocumentsForm: React.FC<ResumeDocumentsFormProps> = ({
  form,
  onNext,
  onBack,
}) => {
  const handleFinish = (values: any) => {
    console.log("Resume & Documents:", values);
    onNext();
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleFinish}>
      <Card title="Resume & Documents" style={{ marginBottom: 24 }}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item name="resume" valuePropName="fileList" getValueFromEvent={(e) => e?.fileList}>
              <Upload beforeUpload={() => false}>
                <Button icon={<UploadOutlined />}>Upload Resume</Button>
              </Upload>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="documents" valuePropName="fileList" getValueFromEvent={(e) => e?.fileList}>
              <Upload multiple beforeUpload={() => false}>
                <Button icon={<UploadOutlined />}>Upload Additional Documents</Button>
              </Upload>
            </Form.Item>
          </Col>
        </Row>
      </Card>

      <div className="flex justify-between">
        {onBack && <Button onClick={onBack}>Back</Button>}
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default ResumeDocumentsForm;
