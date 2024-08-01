"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import left_position from "@/public/hero_position_left.png";
import { Autoplay, EffectCards, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { useTranslations } from "next-intl";

const Hero = () => {
  const [isVertical, setIsVertical] = useState(false);
  const t = useTranslations("Header");
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1280px)");

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsVertical(event.matches);
    };
    setIsVertical(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <header className="container mt-36">
      <div className="flex items-center max-xl:justify-center max-xl:flex-col justify-between">
        <Image
          className="absolute max-sm:h-96 max-sm:-left-10 left-0 top-[113px]"
          src={left_position}
          alt=""
        />
        <div>
          <h1 className="font-[600] text-[50px] max-sm:text-[28px] max-sm:leading-[42px] text-[#656769] leading-[75px]">
            <span className="text-primary">{t("slogan.nordic")}</span>{" "}
            {t("slogan.nordic_text")} <br className="max-sm:hidden" />
            {t("slogan.nordic_bottom")}
          </h1>
          <p
            dangerouslySetInnerHTML={{ __html: t("achieve_goals") }}
            className="text-paragraph_color font-[400] text-[18px] max-sm:text-[16px] pt-2.5 leading-[32px]"
          ></p>
          <div className="flex items-center gap-8 max-sm:gap-5 max-sm:flex-col max-sm:items-start text-[20px] mt-14">
            <button
              onClick={() =>
                (window.location.href =
                  "https://admission.nordicuniversity.org/")
              }
              className="bg-primary z-10 cursor-pointer max-sm:px-7 max-sm:py-2 text-white py-[15px] rounded-[6px] px-10"
            >
              {t("slogan.button1")}
            </button>
            <button
              onClick={() =>
                (window.location.href =
                  "https://transfer.nordicuniversity.org/")
              }
              className="text-primary cursor-pointer z-10 py-3 max-sm:px-5 max-sm:py-[6px] border-primary rounded-[6px] border-[2.5px] shadow-none px-10"
            >
              {t("slogan.button2")}
            </button>
          </div>
        </div>
        <div className="w-[522px] max-sm:w-[335px] max-sm:h-[257px] max-xl:pt-20 h-[400px]">
          <Swiper
            effect={"cards"}
            direction={!isVertical ? "vertical" : "horizontal"}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 2000,
            }}
            modules={[EffectCards, Autoplay, Mousewheel]}
            mousewheel={true}
            className="w-[522px] h-[400px] max-sm:w-full max-sm:h-[257px]"
          >
            <SwiperSlide>
              <Image
                width={500}
                height={500}
                src={"https://sertificate.nordicuniversity.org/assets/8.JPG"}
                alt="image-1"
                className="w-auto object-cover rounded-[10px] h-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={"https://sertificate.nordicuniversity.org/assets/9.JPG"}
                alt="image-1"
                width={500}
                height={500}
                className="w-auto object-cover rounded-[10px] h-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={500}
                height={500}
                src={"https://sertificate.nordicuniversity.org/assets/10.JPG"}
                alt="image-1"
                className="w-auto object-cover rounded-[10px] h-full"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </header>
  );
};

export default Hero;
