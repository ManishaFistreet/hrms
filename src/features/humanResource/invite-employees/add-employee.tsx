import React, { Dispatch, SetStateAction} from "react";
import CardIcon1 from "@/assets/images/CardIcon1.svg";
import CardIcon2 from "@/assets/images/CardIcon2.svg";
import { NoData } from "./component/no-data";
import { cardIcon3 } from "../../../assets/assets/index";
import { EmployeeInfo } from "./component/employee-info";
import Employees from "./component/employee-form";


interface AddEmployeeFormProps {
  setShowAddBtn: () => void;
  initialValues?: any;
  isEdit?: boolean;
  isShowAddBtn?: boolean;
  setFormData: Dispatch<SetStateAction<null>>;
  fetchEmployeeStatus: () => void;
}

export const AddEmployee: React.FC<AddEmployeeFormProps> = ({
  setShowAddBtn,
  isEdit,
  isShowAddBtn,
  initialValues,
  setFormData,
  fetchEmployeeStatus,
}) => {

  return (
    <div className="flex flex-1 gap-3 overflow-hidden">
      <Employees
      />
      <div className="bg-white w-[40%] rounded-[20px] relative overflow-auto no-scrollbar">
        <img className="absolute right-0" src={CardIcon1} alt="" />
        <img className="absolute bottom-0" src={CardIcon2} alt="" />
        {isEdit ? (
          <EmployeeInfo initialValues={initialValues} />
        ) : (
          <NoData
            iconSrc={cardIcon3}
            message="Fill Employee Details"
           />
        )}
      </div>
    </div>
  );
};