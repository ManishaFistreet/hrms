import { Steps, Card } from 'antd';
import { useState } from 'react';
import ProfileStatusCard from './OnboardingProcess/profile-status';
import CallStatusStep from './OnboardingProcess/call-status-step';
import InterviewScheduler from './OnboardingProcess/interview-schedule';
import OfferLetterGenerator from './OnboardingProcess/offer-letter';
import AppLinkSender from './OnboardingProcess/app-link';

const OnboardingDashboard = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    'Profile Created',
    'Call Status',
    'Interview Schedule',
    'Offer Letter',
    'App Link'
  ];

  return (
    <>
      <Card>
        <Steps current={currentStep}>
          {steps.map((s, i) => (
            <Steps.Step title={s} key={i} />
          ))}
        </Steps>
      </Card>

      <div className="mt-4">
        {currentStep === 0 && <ProfileStatusCard onNext={() => setCurrentStep(1)} />}
        {currentStep === 1 && <CallStatusStep onNext={() => setCurrentStep(2)} />}
        {currentStep === 2 && <InterviewScheduler onNext={() => setCurrentStep(3)} />}
        {currentStep === 3 && <OfferLetterGenerator onNext={() => setCurrentStep(4)} />}
        {currentStep === 4 && <AppLinkSender />}
      </div>
    </>
  );
};

export default OnboardingDashboard;