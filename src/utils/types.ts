export interface EmployeeSelf {
  id: string;
  name: string;
  checkInTime?: string;
  checkOutTime?: string;
}


export interface StepItem {
  key: string;
  title: string;
}

export const onboardingSteps: StepItem[] = [
  {
    key: "basicInfo",
    title: "Basic Information",
  },
  {
    key: "jobPreferences",
    title: "Job Preferences",
  },
  {
    key: "education",
    title: "Educational Background",
  },
  {
    key: "certifications",
    title: "Certifications & Skills",
  },
  {
    key: "languages",
    title: "Languages Known",
  },
  {
    key: "additionalInfo",
    title: "Additional Information",
  },
  {
    key: "documents",
    title: "Resume & Documents",
  },
];
