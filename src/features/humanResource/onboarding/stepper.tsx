// src/components/Stepper.tsx
import React from "react";
import { Steps, Card } from "antd";
import {
  CheckCircleOutlined,
  LoadingOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { onboardingSteps } from "../../../utils/types";

interface StepperProps {
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ currentStep }) => {
  return (
    <Card
      bordered={false}
      style={{
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        marginBottom: "24px",
      }}
    >
      <Steps
        current={currentStep}
        size="default"
        responsive
        labelPlacement="vertical"
        progressDot={(iconDot, { status, index }) => {
          if (status === "finish") {
            return <CheckCircleOutlined style={{ color: "#52c41a" }} />;
          } else if (status === "process") {
            return <LoadingOutlined style={{ color: "#722ed1" }} />;
          } else {
            return <ClockCircleOutlined style={{ color: "#d9d9d9" }} />;
          }
        }}
      >
        {onboardingSteps.map((step, index) => (
          <Steps.Step
            key={index}
            title={<span style={{ fontSize: "14px", fontWeight: 500 }}>{step.title}</span>}
          />
        ))}
      </Steps>
    </Card>
  );
};

export default Stepper;
