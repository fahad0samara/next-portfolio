import React from "react";

interface IProps {
  imageUrl: string;
  title: string;
  description?: string;
}

function ProjectCard({ imageUrl, title, description }: IProps) {
  return (
    <div className="rounded-[14px] px-[18px]">
      <div className="bg-[#b6f6a0] px-[27px]">
        <img src={imageUrl} alt="service icon" />
      </div>
      <p className="text-[19px] my-4 mt-8 text-green-500 ">{title}</p>
      <p className="text-[19px] font-semibold my-4">{description}</p>
    </div>
  );
}

export default ProjectCard;
