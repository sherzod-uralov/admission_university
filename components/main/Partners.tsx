import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import partner1 from "@/public/Partners/800_63bc4e5edaea6 1.png";
import partner3 from "@/public/Partners/800_63bc4d65e1e99 1.png";
import partner4 from "@/public/Partners/800_63bc53c46749b 1.png";
import partner5 from "@/public/Partners/800_63bc5385d4449 1.png";
import partner6 from "@/public/Partners/asfg 1.png";
import partner7 from "@/public/Partners/EduEffectFinland_logo-e1575038915364.png";
import partner8 from "@/public/Partners/800_63bc4d4857402.png";
import partner9 from "@/public/Partners/UNICEF_Logo 1.png";
import partner10 from "@/public/Partners/rowan_logo_stacked_old 1.png";
import partner11 from "@/public/Partners/qweqwcx 1.png";
import partner12 from "@/public/Partners/Group 19.png";
import Marquee from "react-fast-marquee";

const partners = [
  partner1,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
  partner9,
  partner10,
  partner11,
  partner12,
];

const Partners = () => {
  const t = useTranslations("partners");

  return (
    <section className="mt-[100px] max-sm:mt-[60px] overflow-x-hidden mx-auto px-4 py-8">
      <article>
        <h2 className="container font-[500] text-[32px] leading-[48px] text-primary pb-16 max-sm:pb-10">
          {t("partner")}
        </h2>
        <div className="primary-rgb">
          <div className="container">
            <Marquee speed={50} pauseOnHover={true} className="">
              {partners.slice(0, 6).map((partner, index) => (
                <div className="flex items-center max-sm:w-[150px] h-[150px] w-[305px] justify-center rounded-md">
                  <Image
                    src={partner}
                    width={191}
                    height={60}
                    alt={`Partner ${index + 1}`}
                    className="max-sm:w-[100px] mx-auto"
                  />
                </div>
              ))}
            </Marquee>
            <Marquee direction="right" speed={50} pauseOnHover={true}>
              {partners.slice(6, 12).map((partner, index) => (
                <div className="flex  items-center h-[150px] max-sm:w-[150px] justify-center rounded-md">
                  <Image
                    src={partner}
                    width={191}
                    height={60}
                    alt={`Partner ${index + 1}`}
                    className="max-sm:w-[100px] mx-auto"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Partners;
