"use client";

import React from "react";
import image_right from "@/public/right_image.svg";
import left from "@/public/why_left.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Apportunetes from "@/components/apportunetes";

const Why = () => {
  const t = useTranslations("why");

  return (
    <section
      id="why"
      className="relative bg-primary_bg overflow-y-hidden overflow-x-hidden pb-[80px] w-full"
    >
      <Image
        className="absolute -top-[120px] right-0"
        src={image_right}
        alt="position image left"
      />
      <Image
        className="absolute -bottom-[300px] left-0"
        src={left}
        alt="position image left"
      />
      <article className="container">
        <h2 className="text-primary text-center max-sm:text-[24px] max-sm:leading-[36px] font-[600] pt-8 leading-[48px] text-[32px]">
          {t("why_nordic")}
        </h2>
        <div className="grid grid-cols-2 max-lg:grid-cols-1 max-sm:gap-9 gap-4 mt-[60px]">
          {Array.from(Array(6).keys()).map((i) => (
            <Apportunetes
              key={i}
              index={i}
              id={i + 1}
              title={t(`opportunities.${i}.title`)}
              description={t(`opportunities.${i}.description`)}
            />
          ))}
        </div>
      </article>
    </section>
  );
};

export default Why;
