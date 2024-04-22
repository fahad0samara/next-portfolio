import Link from "next/link";
import React from "react";

function FooterSection() {
  const links = [
    "Home",
    "About Me",
    "Services",
    "Projects",
    "Testimonials",
    "Contact",
  ];
  return (
    <section className="w-full flex flex-col gap-8 items-center bg-[#F8F8F8] pt-[60px]">
      <div>
        <img 
          className="w-[7rem]"
        src="/images/logo.png" alt="logo" />
      </div>
      <div className="px-8">
        <div className="flex flex-wrap gap-[26px] md:text-[21px]">
          {links.map((link, index) => (
            <Link href="/" key={index}>
              {link}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex gap-[25.03px] my-16">
        <img src="/images/facebook.png" alt="facebook icon" />
        <img src="/images/twitter.png" alt="twitter icon" />
        <img src="/images/instagram.png" alt="instagram icon" />
        <img src="/images/linkedin.png" alt="linkedin icon" />
      </div>

      <div className="bg-[#545454] md:text-[21px] text-white w-full flex justify-center py-[26px]">
        © 2024 <span className="text-green-500  px-2">fahd</span>
        All Rights Reserved
      </div>
    </section>
  );
}

export default FooterSection;
