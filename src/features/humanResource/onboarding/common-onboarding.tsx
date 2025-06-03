// src/components/OnboardingForm.tsx
import React, { useState } from "react";
import { Form, message } from "antd";
import { onboardingSteps } from "../../../utils/types";
import Stepper from "./stepper";
import BasicInfoForm from "./OnboardingForms/basic-info";
import JobInfoForm from "./OnboardingForms/job-info";
import EducationForm from "./OnboardingForms/educational-info";
import CertificationAndSkillsForm from "./OnboardingForms/certifications-skills-info";
import LanguagesForm from "./OnboardingForms/languages-info";
import AdditionalInfoForm from "./OnboardingForms/additional-info";
import ResumeDocumentsForm from "./OnboardingForms/resume-docsinfo";
import axios from "axios";

const OnboardingForm = () => {
    const [currentStep, setCurrentStep] = useState(0);

    // Antd Form instances for each step
    const [basicForm] = Form.useForm();
    const [jobForm] = Form.useForm();
    const [educationalForm] = Form.useForm();
    const [certForm] = Form.useForm();
    const [langForm] = Form.useForm();
    const [additionalForm] = Form.useForm();
    const [resumeForm] = Form.useForm();

    const nextStep = () => {
        setCurrentStep((prev) => prev + 1);
    };

    const prevStep = () => {
        setCurrentStep((prev) => prev - 1);
    };

const handleFinalSubmit = async () => {
  try {
    // First validate all forms
    await basicForm.validateFields();
    await jobForm.validateFields();
    await educationalForm.validateFields();
    await certForm.validateFields();
    await langForm.validateFields();
    await additionalForm.validateFields();
    const resumeData = await resumeForm.validateFields();

    const basicInfo = basicForm.getFieldsValue(true);
    const jobInfo = jobForm.getFieldsValue(true);
    const education = educationalForm.getFieldsValue(true);
    const certs = certForm.getFieldsValue(true);
    const languages = langForm.getFieldsValue(true);
    const additional = additionalForm.getFieldsValue(true);

    const combinedPayload = {
      ...basicInfo,
      ...jobInfo,
      ...education,
      ...certs,
      ...languages,
      ...additional,
    };

    console.log("Combined flattened payload:", combinedPayload);

    const formData = new FormData();
    formData.append("payload", JSON.stringify(combinedPayload));

    // Resume file
    if (resumeData.resume?.[0]?.originFileObj) {
      formData.append("resume", resumeData.resume[0].originFileObj);
    }

    // Additional documents
    if (resumeData.documents?.length > 0) {
      resumeData.documents.forEach((doc: any) => {
        if (doc.originFileObj) {
          formData.append("documents", doc.originFileObj);
        }
      });
    }

    await axios.post(
      "http://18.60.181.218:8180/app-melbac-zp0/apiv1/employee/saveorupdate/createemployee",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    alert("Employee created successfully!");
  } catch (error) {
    console.error("Form submit error:", error);
    alert("Something went wrong.");
  }
};



    const renderForm = () => {
        const stepKey = onboardingSteps[currentStep].key;

        switch (stepKey) {
            case "basicInfo":
                return (
                    <BasicInfoForm form={basicForm} onNext={nextStep} />
                );
            case "jobPreferences":
                return (
                    <JobInfoForm form={jobForm} onNext={nextStep} onBack={prevStep} />
                );
            case "education":
                return (
                    <EducationForm form={educationalForm} onNext={nextStep} onBack={prevStep} />
                );
            case "certifications":
                return (
                    <CertificationAndSkillsForm
                        form={certForm}
                        onNext={nextStep}
                        onBack={prevStep}
                    />
                );
            case "languages":
                return (<LanguagesForm form={langForm} onNext={nextStep} onBack={prevStep} />);

            case "additionalInfo":
                return (<AdditionalInfoForm form={additionalForm} onNext={nextStep} onBack={prevStep} />);

            case "documents":
                return (<ResumeDocumentsForm form={resumeForm} onNext={handleFinalSubmit} onBack={prevStep} />);
            default:
                return <div>Form not found</div>;
        }
    };

    return (
        <div className="space-y-6">
            <Stepper currentStep={currentStep} />
            <div className="border p-4 rounded bg-white shadow">{renderForm()}</div>

            {/* Optional buttons if form steps don't handle their own navigation */}
            {["basicInfo", "jobPreferences"].includes(onboardingSteps[currentStep].key) ? null : (
                <div className="flex justify-between">
                    <button
                        disabled={currentStep === 0}
                        onClick={prevStep}
                        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                    >
                        Back
                    </button>
                    <button
                        disabled={currentStep === onboardingSteps.length - 1}
                        onClick={nextStep}
                        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default OnboardingForm;
