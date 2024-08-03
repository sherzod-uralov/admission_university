"use client";

import Hero from "@/components/Hero";
import About from "@/components/main/about";
import Why from "@/components/main/why";
import Degree from "@/components/main/degree";
import Partners from "@/components/main/Partners";
import StudentLife from "@/components/main/StudentLife";
import Faq from "@/components/main/Faq";
import Footer from "@/components/footer";
import React from "react";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";

export default function Home({ params }: { params: string }) {
  const store = useSelector((state: RootState) => state);

  const t = useTranslations("Header");
  return (
    <>
      <Hero />
      <main>
        <About />
        <Why />
        <Degree />
        <Partners />
        <StudentLife />
        <Faq />
        <Footer />
        <button
          onClick={() =>
            (window.location.href = "https://admission.nordicuniversity.org/")
          }
          className="bg-primary fixed w-full bottom-0 max-sm:block hidden z-10 cursor-pointer max-sm:px-7 max-sm:py-4 border-t-black border-white border-1 text-white py-[15px] px-10"
        >
          {t("slogan.button1")}
        </button>
      </main>
    </>
  );
}
