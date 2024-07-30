"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Apportunetes = ({
  id,
  title,
  description,
  index,
}: {
  index: number;
  id: number;
  title: string;
  description: string;
}) => {
  const cardRef = useRef(null);
  const numberRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: false,
        toggleActions: "play none none none",
      },
    });

    timeline.fromTo(
      cardRef.current,
      {
        x: index % 2 === 0 ? -200 : 200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
      },
    );

    timeline.fromTo(
      numberRef.current,
      { scale: 0 },
      { scale: 1, duration: 0.5 },
      "-=0.5",
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`flex-col flex items-start ${index % 2 !== 0 ? "lg:mt-36" : ""}`}
    >
      <div className="gap-5 flex items-center">
        <div className="flex items-baseline gap-4">
          <p
            ref={numberRef}
            className={`${index === 0 ? "px-2" : ""} text-[90px] max-sm:text-[40px] text-primary leading-[100px] font-[500]`}
          >
            {index + 1}
          </p>
          <p className="text-heading_color text-[90px] max-sm:text-[40px]">.</p>
        </div>
        <div>
          <h2 className="text-[32px] text-primary font-[600] max-sm:text-[18px] mb-2">
            {title}
          </h2>
          <p className="font-[400] text-[20px] max-sm:text-[12px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Apportunetes;
