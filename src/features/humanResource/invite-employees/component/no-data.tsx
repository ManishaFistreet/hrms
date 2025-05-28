import React from "react";

interface NoDataProps {
  iconSrc: string;
  message: string;
}

export const NoData: React.FC<NoDataProps> = ({ iconSrc, message }) => {
  return (
    <div className="flex h-full justify-center items-center">
      <div className="flex flex-col justify-center items-center w-[319px]">
        <img src={iconSrc} alt="No data icon" />
        <div className="text-h3 font-bold font-montserrat text-grayscale">
         "No Data"
        </div>
        <p className="text-h6 text-grayscale font-lato text-center">
          {message}
        </p>
      </div>
    </div>
  );
};
