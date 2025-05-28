import React from "react";
import { useForm, SubmitHandler, useWatch } from "react-hook-form";

type FormValues = {
  firstname: string;
  lastname: string;
  dob: string;
  gender: string;
  degree: string;
  specialization: string;
  university: string;
  yearofpassing: number;
  religion: string;
  caste: string;
  languagespoken: string;
  martialstatus: string;
  annual_income: string;
  source: string;
  resumeflag: string;
  offerletterflag: string;
  skills: string;
  bankname: string;
  ifsc: string;
  bankholdername: string;
  bankacnumber: string;
  resumeFile?: FileList;
  offerLetterFile?: FileList;
};

const EmployeeDetails: React.FC = () => {
    const {
    register,
    handleSubmit,
    control
  } = useForm<FormValues>();

  const resumeflag = useWatch({ control, name: "resumeflag" });
  const offerletterflag = useWatch({ control, name: "offerletterflag" });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const formData = new FormData();
    formData.append("resumeFile", data.resumeFile?.[0] || "");
    formData.append("offerLetterFile", data.offerLetterFile?.[0] || "");
    console.log("Form data --", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container mt-6">
      {/* Personal Information */}
      <div className="box">
        <h2 className="title is-4 has-text-primary">Personal Information</h2>
        <div className="columns is-multiline">
          <div className="column is-half">
            <label className="label">First Name</label>
            <input className="input" {...register("firstname")} placeholder="Enter First Name" />
          </div>
          <div className="column is-half">
            <label className="label">Last Name</label>
            <input className="input" {...register("lastname")} placeholder="Enter Last Name" />
          </div>
          <div className="column is-half">
            <label className="label">Date of Birth</label>
            <input type="date" className="input" {...register("dob")} />
          </div>
          <div className="column is-half">
            <label className="label">Gender</label>
            <div className="select is-fullwidth">
              <select {...register("gender")}>
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Information */}
      <div className="box">
        <h2 className="title is-5">Academic Information</h2>
        <div className="columns is-multiline">
          <div className="column is-half">
            <label className="label">Degree</label>
            <input className="input" {...register("degree")} placeholder="Enter Degree" />
          </div>
          <div className="column is-half">
            <label className="label">Specialization</label>
            <input className="input" {...register("specialization")} placeholder="Enter Specialization" />
          </div>
          <div className="column is-half">
            <label className="label">University</label>
            <input className="input" {...register("university")} placeholder="Enter University Name" />
          </div>
          <div className="column is-half">
            <label className="label">Year of Passing</label>
            <input type="number" className="input" {...register("yearofpassing")} placeholder="Enter Year" />
          </div>
        </div>
      </div>

      {/* Other Information */}
      <div className="box">
        <h2 className="title is-5">Other Information</h2>
        <div className="columns is-multiline">
          <div className="column is-half">
            <label className="label">Religion</label>
            <input className="input" {...register("religion")} placeholder="Enter Religion" />
          </div>
          <div className="column is-half">
            <label className="label">Caste</label>
            <input className="input" {...register("caste")} placeholder="Enter Caste" />
          </div>
          <div className="column is-half">
            <label className="label">Language</label>
            <input className="input" {...register("languagespoken")} placeholder="Enter Language" />
          </div>
          <div className="column is-half">
            <label className="label">Marital Status</label>
            <div className="select is-fullwidth">
              <select {...register("martialstatus")}>
                <option value="">Select</option>
                <option>Single</option>
                <option>Married</option>
                <option>Divorced</option>
                <option>Widowed</option>
              </select>
            </div>
          </div>
          <div className="column is-half">
            <label className="label">Annual Income</label>
            <input className="input" {...register("annual_income")} placeholder="Enter Annual Income" />
          </div>
          <div className="column is-half">
            <label className="label">Source</label>
            <input className="input" {...register("source")} placeholder="Enter Source" />
          </div>
          <div className="column is-half">
            <label className="label">Resume / CV</label>
            <div className="select is-fullwidth mb-2">
              <select {...register("resumeflag")}>
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            {resumeflag === "Yes" && (
              <div>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  {...register("resumeFile")}
                  className="input"
                />
              </div>
            )}
          </div>

          <div className="column is-half">
            <label className="label">Offer Letter</label>
            <div className="select is-fullwidth mb-2">
              <select {...register("offerletterflag")}>
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            {offerletterflag === "Yes" && (
              <div>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  {...register("offerLetterFile")}
                  className="input"
                />
              </div>
            )}
          </div>

          <div className="column is-full">
            <label className="label">Skills & Certifications</label>
            <textarea className="textarea" {...register("skills")} placeholder="Enter Skills & Certifications" />
          </div>
        </div>
      </div>

      {/* Bank Account Details */}
      <div className="box">
        <h2 className="title is-5">Bank Account Details</h2>
        <div className="columns is-multiline">
          <div className="column is-half">
            <label className="label">Bank Name</label>
            <input className="input" {...register("bankname")} placeholder="Enter Bank Name" />
          </div>
          <div className="column is-half">
            <label className="label">IFSC Code</label>
            <input className="input" {...register("ifsc")} placeholder="Enter IFSC Code" />
          </div>
          <div className="column is-half">
            <label className="label">Account Holder Name</label>
            <input className="input" {...register("bankholdername")} placeholder="Enter Account Holder Name" />
          </div>
          <div className="column is-half">
            <label className="label">Account Number</label>
            <input className="input" {...register("bankacnumber")} placeholder="Enter Account Number" />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="field mt-5">
        <div className="control">
          <button type="submit" className="button is-primary">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default EmployeeDetails;
