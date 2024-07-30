import React from "react";
import Image from "next/image";
import about from "@/public/about.png";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("about");

  return (
    <section className="container text- mt-[150px] mb-20">
      <div className="flex gap-15 items-center">
        <Image
          src={about}
          className="block h-[350px] max-xl:hidden"
          alt="about image"
        />
        <div className="ml-10 max-xl:ml-0">
          <h2 className="text-primary font-semibold text-[32px] max-sm:text-[24px] text-start border-l-primary border-y-0 border-r-0 border-l-4 pl-4 border">
            {t("about")}
          </h2>
          <p className="font-[400] text-[24px] max-sm:pt-8 max-sm:text-[16px] pt-10 leading-[32px] text-heading_color">
            {t("paragraph1")}
          </p>
          <p className="font-[400] text-[24px] max-sm:pt-5 max-sm:text-[16px] pt-10 leading-[32px] text-paragraph_color">
            {t("paragraph2")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
