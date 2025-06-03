// src/components/OnboardingForms/certification-skills-form.tsx
import React from "react";
import { Button, Card, Col, Form, Input, Row, Select, Space, Tooltip } from "antd";
import {
  MinusCircleOutlined,
  PlusOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

const { Option } = Select;

interface CertificationAndSkillsFormProps {
  form: any;
  onNext: () => void;
  onBack?: () => void;
}

const skillOptions = [
  "JavaScript", "React", "Node.js", "Python", "Django", "Java", "SQL", "AWS", "Docker",
];
const softSkillOptions = [
  "Communication", "Teamwork", "Leadership", "Problem Solving", "Time Management",
];
const toolOptions = [
  "VS Code", "JIRA", "Figma", "Excel", "Slack", "Trello", "Git",
];

const CertificationAndSkillsForm: React.FC<CertificationAndSkillsFormProps> = ({
  form,
  onNext,
  onBack,
}) => {
  const handleFinish = (values: any) => {
    console.log("Certifications & Skills form data:", values);
    onNext();
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleFinish}>
      {/* Certifications */}
      <Card title="Certifications & Training" style={{ marginBottom: 24 }}>
      <Form.List name="certifications">
  {(fields, { add, remove }) => (
    <>
      {fields.map(({ key, name, ...restField }, index) => (
        <Space key={key} style={{ display: "flex", marginBottom: 8 }} align="baseline">
          <Form.Item
            {...restField}
            name={[name, "certification_name"]}
            rules={[{ required: true, message: "Enter certification name" }]}
          >
            <Input
              placeholder="Enter certification name"
              className="form-control form-control-sm rounded-1"
              name="certification_name[]"
              id={`certification_name_${index + 1}`}
            />
          </Form.Item>

          <Form.Item
            {...restField}
            name={[name, "issuing_organization"]}
            rules={[{ required: true, message: "Enter issuing organization" }]}
          >
            <Input
              placeholder="Enter issuing organization"
              className="form-control form-control-sm rounded-1"
              name="issuing_organization[]"
              id={`issuing_organization${index + 1}`}
            />
          </Form.Item>

          <Form.Item
            {...restField}
            name={[name, "year_of_completion"]}
            rules={[{ required: true, message: "Enter year of completion" }]}
          >
            <Input
              placeholder="Enter year of completion"
              className="form-control form-control-sm rounded-1"
              name="year_of_completion[]"
              id={`year_of_completion${index + 1}`}
            />
          </Form.Item>

          <Form.Item
            {...restField}
            name={[name, "certificate_link"]}
            rules={[{ type: "url", message: "Enter a valid URL" }]}
          >
            <Input
              placeholder="Enter certificate link"
              className="form-control form-control-sm rounded-1"
              name="certificate_link[]"
              id={`certificate_link${index + 1}`}
            />
          </Form.Item>

          <MinusCircleOutlined onClick={() => remove(name)} />
        </Space>
      ))}
      <Form.Item>
        <Button type="dashed" onClick={() => add()} icon={<PlusOutlined />}>
          Add Certification
        </Button>
      </Form.Item>
    </>
  )}
</Form.List>

      </Card>

      {/* Skills */}
      <Card title="Technical & Soft Skills" style={{ marginBottom: 24 }}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item
              name="primary_technical_skills"
              id="primary_technical_skills"
              label={
                <span>
                  Primary Technical Skills&nbsp;
                  <Tooltip title="Key technical skills like programming languages, frameworks, etc.">
                    <InfoCircleOutlined />
                  </Tooltip>
                </span>
              }
              rules={[{ required: true, message: "Please select at least one primary skill" }]}
            >
              <Select
                mode="tags"
                placeholder="Select or type primary technical skills"
                options={skillOptions.map((skill) => ({ value: skill, label: skill }))}
              />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
               name="secondary_technical_skills"
              id="secondary_technical_skills placeholder"
              label={
                <span>
                  Secondary Technical Skills&nbsp;
                  <Tooltip title="Additional tools, libraries, or services you are familiar with">
                    <InfoCircleOutlined />
                  </Tooltip>
                </span>
              }
            >
              <Select
                mode="tags"
                placeholder="Select or type secondary skills"
                options={skillOptions.map((skill) => ({ value: skill, label: skill }))}
              />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              name="soft_skills"
              id="soft_skills"
              label={
                <span>
                  Soft Skills&nbsp;
                  <Tooltip title="Personal and interpersonal skills like communication, leadership, etc.">
                    <InfoCircleOutlined />
                  </Tooltip>
                </span>
              }
              rules={[{ required: true, message: "Please select soft skills" }]}
            >
              <Select
                mode="tags"
                placeholder="Select or type soft skills"
                options={softSkillOptions.map((skill) => ({ value: skill, label: skill }))}
              />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              name="tools_and_software"
              id="tools_and_software"
              label={
                <span>
                  Tools & Software Known&nbsp;
                  <Tooltip title="E.g. VS Code, JIRA, Figma, Excel, etc.">
                    <InfoCircleOutlined />
                  </Tooltip>
                </span>
              }
              rules={[{ required: true, message: "Please select tools you are familiar with" }]}
            >
              <Select
                mode="tags"
                placeholder="Select or type tools and software"
                options={toolOptions.map((tool) => ({ value: tool, label: tool }))}
              />
            </Form.Item>
          </Col>
        </Row>
      </Card>

      <div className="flex justify-between">
        {onBack && (
          <Button onClick={onBack} className="bg-gray-200">
            Back
          </Button>
        )}
        <Button type="primary" htmlType="submit">
          Next
        </Button>
      </div>
    </Form>
  );
};

export default CertificationAndSkillsForm;
