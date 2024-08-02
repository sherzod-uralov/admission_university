"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { useRouter, usePathname } from "next/navigation";
import Cookies from "js-cookie";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoIosArrowDown } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger);

const languages = [
  { value: "uz", label: "O‘zbek" },
  { value: "ru", label: "Русский" },
  { value: "en", label: "English" },
];

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [defaultLang, setDefaultLang] = useState("uz");
  const navRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

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
                borderBottom: "1.5px solid #dcdada",
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectRef]);

  return (
    <nav className="navbar py-5">
      <div className="container">
        <div className="flex items-center justify-between">
          <Image
            src={logo}
            className="fill-white text-white  max-sm:h-9"
            alt="universitet logosi"
          />
          <div className="flex gap-10 max-sm:gap-5 items-center">
            <div className="relative" ref={selectRef}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-[#F1F8FF] h-10 w-28 px-4 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:border-[#3D9386] transition duration-300 ease-in-out transform hover:scale-105 flex justify-between items-center"
              >
                {languages.find((lang) => lang.value === defaultLang)?.label}
                <IoIosArrowDown />
              </button>
              {isOpen && (
                <div className="absolute z-[2000] mt-1 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.value}
                        onClick={() => changeLanguage(lang.value)}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
