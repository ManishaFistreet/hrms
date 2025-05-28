import React from "react";
import ProfileSidebarValue from "./profile-sidebar-values";
import ProfileAvatar from "./profile-avatar";

interface EmployeeInfoProps {
  initialValues: any;
}

export const EmployeeInfo: React.FC<EmployeeInfoProps> = ({ initialValues }) => {
  const formattedJoiningDate = initialValues?.joiningDate
    ? new Date(initialValues.joiningDate).toLocaleDateString()
    : "";

  return (
    <div className="box p-5">
      {/* Profile Section */}
      <div className="media mb-5">
        <div className="media-left">
          <ProfileAvatar
            gender={initialValues?.gender}
            className="image is-96"
          />
        </div>
        <div className="media-content">
          <p className="title is-4">{initialValues?.fullName}</p>
          <p className="subtitle is-6">{initialValues?.designation}</p>
        </div>
      </div>

      {/* Employee Info Section */}
      <div className="content">
        <div className="columns is-multiline">
          <div className="column is-half">
            <ProfileSidebarValue label="Employee Name" value={initialValues?.fullName} />
          </div>
          <div className="column is-half">
            <ProfileSidebarValue label="Employee ID" value={initialValues?.empId} />
          </div>
          <div className="column is-half">
            <ProfileSidebarValue label="Date of Joining" value={formattedJoiningDate || "NA"} />
          </div>
          <div className="column is-half">
            <ProfileSidebarValue label="Reporting Manager" value={initialValues?.manager} />
          </div>
        </div>

        <hr />

        <div className="columns is-multiline">
          <div className="column is-half">
            <ProfileSidebarValue label="Email ID" value={initialValues?.email} />
          </div>
          <div className="column is-half">
            <ProfileSidebarValue label="Location" value={initialValues?.location} />
          </div>
          <div className="column is-half">
            <ProfileSidebarValue label="Department" value={initialValues?.department} />
          </div>
          <div className="column is-half">
            <ProfileSidebarValue label="Designation" value={initialValues?.designation} />
          </div>
        </div>

        <hr />

        <div className="columns is-multiline">
          <div className="column is-half">
            <ProfileSidebarValue label="Gender" value={initialValues?.gender} />
          </div>
          <div className="column is-half">
            <ProfileSidebarValue label="Work Shift" value={initialValues?.workShift} />
          </div>
        </div>
      </div>
    </div>
  );
};
