"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { Select } from "antd";
import { useRouter, usePathname } from "next/navigation";
import Cookies from "js-cookie";
import { ArrowDownOutlined } from "@ant-design/icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [defaultLang, setDefaultLang] = useState("uz");
  const navRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const lang = Cookies.get("lang") || "uz";
    setDefaultLang(lang);
  }, []);

  useEffect(() => {
    const pathSegments = pathname.split("/");
    const langInPath = pathSegments[1];

    if (["uz", "ru", "en"].includes(langInPath)) {
      setDefaultLang(langInPath);
      Cookies.set("lang", langInPath, { expires: 365 });
    }
  }, [pathname]);

  const changeLanguage = async (lang: string) => {
    router.push(`/${lang}`);
    Cookies.set("lang", lang, { expires: 365 });
  };

  useEffect(() => {
    const nav = navRef.current;
    const icon = iconRef.current;

    gsap.fromTo(
      nav,
      { backgroundColor: "transparent" },
      {
        backgroundColor: "transparent",
        top: 0,
        transition: 1,
        width: "100%",
        duration: 0.4,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: nav,
          start: "top+=400 top",
          toggleActions: "play none none reverse",
          onUpdate: (self) => {
            if (self.direction === 1) {
              gsap.to(nav, {
                zIndex: 1000,
                backgroundColor: "#fff",
                borderBottom: "1px solid #3D9386",
                position: "fixed",
                top: 0,
                transition: 0.1,
              });
              gsap.to(icon, { opacity: 1, duration: 0.1 });
            } else {
              gsap.to(nav, {
                backgroundColor: "transparent",
                borderBottom: "none",
                position: "relative",
                top: 0,
              });
              gsap.to(icon, { opacity: 0, duration: 0.3 });
            }
          },
        },
      },
    );
  }, []);

  return (
    <nav ref={navRef} className="navbar py-5">
      <div className="container">
        <div className="flex items-center justify-between">
          <Image
            src={logo}
            className="fill-white text-white  max-sm:h-9"
            alt="universitet logosi"
          />
          <div className="flex gap-10 items-center">
            <button
              ref={iconRef}
              onClick={() => window.scroll({ top: 0, behavior: "auto" })}
              className="arrow-icon rotate-180 transition-all duration-500"
            >
              <ArrowDownOutlined />
            </button>
            <Select
              className="bg-[#F1F8FF] h-8 focus:outline-none"
              value={defaultLang}
              onChange={(e) => changeLanguage(e)}
              options={[
                { value: "uz", label: "O‘zbek" },
                { value: "ru", label: "Русский" },
                { value: "en", label: "English" },
              ]}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
