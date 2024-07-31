"use client";

import React, { useEffect } from "react";
import StudentLifeCard from "@/app/helpers/studentLife_card";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import student_life1 from "@/public/Rectangle 46.png";
import student_life2 from "@/public/Rectangle 47.png";
import student_life3 from "@/public/Rectangle 48.png";
import student_life4 from "@/public/Rectangle 49.png";
import student_life5 from "@/public/Rectangle 50.png";

gsap.registerPlugin(ScrollTrigger);

const StudentLife = () => {
  const t = useTranslations("student");

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".student-life-card",
        start: "top 60%",
        end: "bottom 60%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      ".student-life-card-1, .student-life-card-5",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.2,
      },
    )
      .fromTo(
        ".student-life-card-2, .student-life-card-4",
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power4.out",
          stagger: 0.2,
        },
        "-=1.1",
      )
      .fromTo(
        ".student-life-card-3",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power4.out",
        },
        "-=1.1",
      );
  }, []);

  return (
    <section className="container mt-20 mb-40 max-sm:mt-10 max-sm:mb-20">
      <h2 className="font-[500] text-[32px] text-primary pb-[60px]">
        {t("student_life")}
      </h2>
      <article>
        <div className="grid grid-cols-5 max-xl:grid-cols-3 gap-y-10 gap-x-7 max-sm:justify-center max-lg:grid-cols-2">
          <div className="student-life-card student-life-card-1">
            <StudentLifeCard
              image={student_life1}
              title={t("number_1")}
              direction="left"
              pdfLink={"/pdfs/birinchi son.pdf"}
            />
          </div>
          <div className="student-life-card student-life-card-2">
            <StudentLifeCard
              image={student_life2}
              title={t("number_2")}
              direction="right"
              pdfLink={"/pdfs/ikkinchi son.pdf"}
            />
          </div>
          <div className="student-life-card student-life-card-3">
            <StudentLifeCard
              image={student_life3}
              title={t("number_3")}
              direction="left"
              pdfLink={"/pdfs/uchinchi son.pdf"}
            />
          </div>
          <div className="student-life-card student-life-card-4">
            <StudentLifeCard
              image={student_life4}
              title={t("number_4")}
              direction="right"
              pdfLink={"/pdfs/to'rtinchi son.pdf"}
            />
          </div>
          <div className="student-life-card student-life-card-5">
            <StudentLifeCard
              image={student_life5}
              title={t("number_5")}
              direction="left"
              pdfLink={"/pdfs/beshinchi son.pdf"}
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default StudentLife;
