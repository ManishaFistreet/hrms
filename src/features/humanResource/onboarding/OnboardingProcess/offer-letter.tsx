import React from "react";
import { Button, Card } from "antd";

interface OfferLetterGeneratorProps {
  onNext: () => void;
}

const OfferLetterGenerator: React.FC<OfferLetterGeneratorProps> = ({ onNext }) => {
  return (
    <Card title="Generate Offer Letter">
      <Button
        type="primary"
        onClick={() => {
          // create offer letter PDF
          // send to HR for review
          onNext();
        }}
      >
        Generate & Send to HR
      </Button>
    </Card>
  );
};

export default OfferLetterGenerator;
