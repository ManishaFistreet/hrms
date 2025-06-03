import { Card, Radio, Button, message } from 'antd';
import { useState } from 'react';

interface CallStatusStepProps {
  onNext: () => void;
}

const CallStatusStep: React.FC<CallStatusStepProps> = ({ onNext }) => {
  const [status, setStatus] = useState('');

  const handleNext = () => {
    if (!status) return message.error("Select status");
    // Save to DB...
    onNext();
  };

  return (
    <Card title="Candidate Call Status">
      <Radio.Group
        onChange={(e) => setStatus(e.target.value)}
        value={status}
      >
        <Radio value="interested">Interested</Radio>
        <Radio value="not_interested">Not Interested</Radio>
      </Radio.Group>
      <Button type="primary" className="mt-4" onClick={handleNext}>
        Save & Continue
      </Button>
    </Card>
  );
};

export default CallStatusStep;
