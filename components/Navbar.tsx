"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { Select } from "antd";
import { useRouter, usePathname } from "next/navigation";
import Cookies from "js-cookie";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [defaultLang, setDefaultLang] = useState("uz");

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

  return (
    <nav className="py-6">
      <div className="container">
        <div className="flex items-center justify-between">
          <Image src={logo} className="max-sm:h-9" alt="universitet logosi" />
          <div className="flex gap-10">
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
