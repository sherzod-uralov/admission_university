"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import Image from "next/image";
import logo from "@/public/logo.svg";
import hamburger from "@/public/menu.svg";
import { Select } from "antd";

const Navbar = () => {
  const isOpen = useSelector((state: RootState) => state.navbar.isOpen);
  const dispatch = useDispatch();

  return (
    <nav className="py-4">
      <div className="container">
        <div className="flex items-center justify-between">
          <Image src={logo} alt="universitet logosi" />
          <div className="flex gap-10">
            <Select
              className="w-[70px]"
              defaultValue="uz"
              options={[
                { value: "uz", label: "uzb" },
                { value: "ru", label: "rus" },
                { value: "en", label: "eng" },
              ]}
            />
            <Image src={hamburger} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
