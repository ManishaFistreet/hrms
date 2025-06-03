import { Card, DatePicker, TimePicker, Input, Button, message } from 'antd';
import { useState } from 'react';
import type { Dayjs } from 'dayjs'; // Make sure dayjs is installed and imported

interface InterviewSchedulerProps {
  onNext: () => void;
}

const InterviewScheduler: React.FC<InterviewSchedulerProps> = ({ onNext }) => {
  const [date, setDate] = useState<Dayjs | null>(null);
  const [time, setTime] = useState<Dayjs | null>(null);
  const [email, setEmail] = useState('');

  const schedule = () => {
    if (!date || !time || !email) {
      return message.error('All fields required');
    }

    // Combine date and time (optional)
    const interviewDateTime = date.set('hour', time.hour()).set('minute', time.minute());

    console.log('Scheduled Interview:', {
      email,
      interviewDateTime: interviewDateTime.format('YYYY-MM-DD HH:mm'),
    });

    // Save interview + send email + schedule reminders via backend
    onNext();
  };

  return (
    <Card title="Schedule Interview">
      <Input
        placeholder="Candidate Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <DatePicker className="mt-2 w-full" onChange={(value) => setDate(value)} />
      <TimePicker className="mt-2 w-full" onChange={(value) => setTime(value)} />
      <Button type="primary" className="mt-4" onClick={schedule}>
        Schedule & Notify
      </Button>
    </Card>
  );
};

export default InterviewScheduler;
