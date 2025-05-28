// src/components/custom/profile-avatar.tsx

import React from "react";
import { profilePicFemale, profilePicMale } from "../../../../assets/assets/index";

interface ProfileAvatarProps {
  gender?: string;
  className?: string;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ gender, className }) => {
  const imageSrc = gender === "Female" ? profilePicFemale : profilePicMale;

  return (
    <figure className={`image is-96x96 ${className || ""}`}>
      <img
        className="is-rounded"
        src={imageSrc}
        alt="Profile Avatar"
      />
    </figure>
  );
};

export default ProfileAvatar;
