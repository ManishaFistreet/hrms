import { useForm } from "react-hook-form";
import "./EmployeeForm.css";

const Employees = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form data --", data);
  };

  return (
  <></>
  );
};

export default Employees;