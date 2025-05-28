// src/pages/employee-onboarding/profile-sidebar-value.tsx

interface ProfileSidebarValueProps {
  label: string;
  value: string;
}

const ProfileSidebarValue = ({ label, value }: ProfileSidebarValueProps) => {
  return (
    <div className="mb-2">
      <strong>{label}:</strong> <span>{value || "N/A"}</span>
    </div>
  );
};

export default ProfileSidebarValue;
