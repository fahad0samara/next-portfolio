import React from "react";
import Header from "../common/Header";
import ServiceCard from "../cards/ServiceCard";

function ServicesSection() {
  const data = [
    {
      title: "UI/UX Design",
      description: "We focus on understanding the user’s needs and wants.",
      
    },
    {
      title: "Web Design",
      description: "We design websites that are user-friendly and easy to navigate.",
    },
    {
      title: " development",
      description: "We design mobile applications that are user-friendly and easy to navigate.",
    },
    {
      title: "effectively",
      description: "We design graphics that are visually appealing and communicate effectively.",
    },
  ];
  return (
    <section>
      <Header title="Services" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[31px] mt-[59px]">
        {data.map((service, index) => (
          <ServiceCard {...service} key={index} />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
