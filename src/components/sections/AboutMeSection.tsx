import React from "react";
import { Progress } from "@/components/ui/progress";

function ProgressBar({ title, percent }: { title: string; percent: number }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-[20px] font-semibold">{title}</p>
      <Progress value={percent} className="w-[60%] bg-[#5c5858] h-[12px]" />
    </div>
  );
}

function AboutMeSection() {
  return (
    <section className="flex flex-col gap-8 md:flex-row justify-between items-center">
      <div className="md:w-[50%]">
        <img src="/images/about_me_image.png" alt="profile" />
      </div>
      <div className="md:w-[50%]">
        <p className="text-2xl md:text-[63px] font-bold leading-[3.5rem]  text-green-500">About me</p>
        <p className="text-[21px] my-8">
          My design approach is focused on understanding 
          the user’s needs and creating a seamless experience
          that is both intuitive and visually appealing and
          visually appealing.so that the user can easily navigate
          through the product.
        </p>
        <div className="flex gap-4 flex-col">
          <ProgressBar title="UI/UX Design" percent={80} />
          <ProgressBar title="Web Development" percent={90} />
          <ProgressBar title="Mobile Development" percent={70} />
          <ProgressBar title="Branding" percent={60} />


     

        </div>
      </div>
    </section>
  );
}

export default AboutMeSection;
