import React from "react";

interface IProps {
  title: string;
  description?: string;
}

function ServiceCard({
  
  title,
  description
}: IProps) {
  return (
    <div className="rounded-[14px] bg-[#6bed7f] px-[18px] py-[57px]">
     
    
      <p className="text-[32px] font-semibold my-4">{title}</p>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
