// src/components/OnboardingForms/education-form.tsx
import React from "react";
import { Button, Card, Form, Input, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

interface EducationFormProps {
  form: any;
  onNext: () => void;
  onBack?: () => void;
}

const EducationForm: React.FC<EducationFormProps> = ({ form, onNext, onBack }) => {
  const handleFinish = (values: any) => {
    console.log("Education form data:", values);
    onNext();
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleFinish}>
      <Card title="Educational Background" style={{ marginBottom: 24 }}>
        <Form.List name="education">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }, index) => (
                <Space key={key} align="baseline" style={{ display: "flex", marginBottom: 8 }}>
                  <Form.Item
                    {...restField}
                    name={[name, "highest_qualification"]}
                    rules={[{ required: true, message: "Missing qualification" }]}
                  >
                    <Input
                      id={`highest_qualification${index + 1}`}
                      name="highest_qualification[]"
                      placeholder="Enter your highest qualification"
                    />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    name={[name, "field_of_study"]}
                    rules={[{ required: true, message: "Missing field of study" }]}
                  >
                    <Input
                      id={`field_of_study${index + 1}`}
                      name="field_of_study[]"
                      placeholder="Enter your field of study"
                    />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    name={[name, "university"]}
                    rules={[{ required: true, message: "Missing university" }]}
                  >
                    <Input
                      id={`university${index + 1}`}
                      name="university[]"
                      placeholder="Enter your university/college name"
                    />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    name={[name, "year_of_passing"]}
                    rules={[{ required: true, message: "Missing year of passing" }]}
                  >
                    <Input
                      id={`year_of_passing${index + 1}`}
                      name="year_of_passing[]"
                      placeholder="Enter year of passing"
                    />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    name={[name, "percentage_cgpa"]}
                    rules={[{ required: true, message: "Missing percentage/CGPA" }]}
                  >
                    <Input
                      id={`percentage_cgpa${index + 1}`}
                      name="percentage_cgpa[]"
                      placeholder="Enter your percentage/CGPA"
                    />
                  </Form.Item>

                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} icon={<PlusOutlined />}>
                  Add Education
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
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

export default EducationForm;
