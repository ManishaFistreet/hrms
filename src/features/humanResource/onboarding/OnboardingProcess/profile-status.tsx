import React, { useState } from 'react';
import { Card, Descriptions, Select, Button, message } from 'antd';

const { Option } = Select;

interface ProfileStatusCardProps {
  onNext: () => void;
}

const ProfileStatusCard: React.FC<ProfileStatusCardProps> = ({ onNext }) => {
  // Dummy profile data
  const profile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 9876543210',
    position: 'Frontend Developer',
    resumeLink: '#',
  };

  const [status, setStatus] = useState<string>('profile_created');

  const statusOptions = [
    { value: 'profile_created', label: 'Profile Created' },
    { value: 'pending_for_call', label: 'Pending for Call' },
    { value: 'called', label: 'Called' },
  ];

  const handleNext = () => {
    if (!status) {
      message.error('Please select a status');
      return;
    }

    // Here you can call an API to save the status
    console.log('Profile status saved:', status);
    message.success('Status updated successfully');
    onNext();
  };

  return (
    <Card title="Candidate Profile" className="w-full max-w-2xl mx-auto">
      <Descriptions column={1} bordered>
        <Descriptions.Item label="Name">{profile.name}</Descriptions.Item>
        <Descriptions.Item label="Email">{profile.email}</Descriptions.Item>
        <Descriptions.Item label="Phone">{profile.phone}</Descriptions.Item>
        <Descriptions.Item label="Position">{profile.position}</Descriptions.Item>
        <Descriptions.Item label="Resume">
          <a href={profile.resumeLink} target="_blank" rel="noreferrer">View Resume</a>
        </Descriptions.Item>
        <Descriptions.Item label="Profile Status">
          <Select
            value={status}
            onChange={(value) => setStatus(value)}
            style={{ width: 200 }}
          >
            {statusOptions.map((opt) => (
              <Option key={opt.value} value={opt.value}>
                {opt.label}
              </Option>
            ))}
          </Select>
        </Descriptions.Item>
      </Descriptions>

      <div className="flex justify-end mt-6">
        <Button type="primary" onClick={handleNext}>
          Save & Continue
        </Button>
      </div>
    </Card>
  );
};

export default ProfileStatusCard;
