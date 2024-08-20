import React from "react";
import Image from "next/image";
import about from "@/public/litsenziya.jpg";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("litsenziya");

  return (
    <section id="about" className="container text- mt-[150px] mb-20">
      <h2 className="text-primary pb-[80px] max-sm:pb-[30px] text-left max-sm:text-[20px] max-sm:leading-[36px] font-[500] leading-[48px] text-[32px]">
        {" "}
        {t("Litsenziya")}
      </h2>
      <div className="flex gap-12 items-start max-lg:flex-col-reverse">
        <div>
          <p className="font-[400] indent-10 text-justify text-[24px] max-sm:text-[16px]  leading-[32px] text-paragraph_color">
            {t("text")}
          </p>
        </div>
        <Image
          src={about}
          className="block h-[550px] max-lg:h-full max-lg:w-full rounded-md w-[600px]"
          alt="about image"
        />
      </div>
    </section>
  );
};

export default About;
