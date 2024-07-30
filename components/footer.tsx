import React from "react";
import footer_logo from "@/public/footer_logo.svg";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { RiTelegramLine } from "react-icons/ri";
import { FiYoutube } from "react-icons/fi";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="container">
        <div className="flex items-start max-sm:flex-col py-[40px] justify-between">
          <div className="w-full max-sm:flex items-center justify-between">
            <Image src={footer_logo} alt="footer_logo" />
            <div className="flex items-center max-sm:gap-[10px] max-sm:mt-0 mt-[56px] gap-[22px]">
              <FiYoutube className="text-white text-2xl" />
              <FaInstagram className="text-white text-2xl" />
              <TiSocialFacebookCircular className="text-white text-3xl" />
              <RiTelegramLine className="text-white text-2xl" />
            </div>
            <p className="text-[16px] max-sm:hidden font-[400] text-white pt-[20px]">
              © 2024 Nordik Universiteti{" "}
            </p>
          </div>
          <div className="flex gap-[91px] max-sm:gap-[40px] max-md:flex-col max-sm:mt-[40px]">
            <div className="flex items-start max-sm:justify-between max-sm:gap-0 gap-[110px]">
              <ul className="flex flex-col gap-4  text-white">
                <li className="font-[400] text-[16px]">Biz haqimizda</li>
                <li className="font-[400] text-[16px]">Yo‘nalishlar</li>
                <li className="font-[400] text-[16px]">Hamkorlarimiz</li>
              </ul>
              <ul className="flex flex-col gap-4 text-white">
                <li className="font-[400] text-nowrap text-[16px]">
                  Nima uchun biz?
                </li>
                <li className="font-[400] text-[16px]">Talabalar hayoti</li>
              </ul>
            </div>
            <div>
              <h2 className="text-[20px] font-[500] text-white pb-2.5">
                Aloqa
              </h2>
              <Link
                href={
                  "https://www.google.com/maps/place/Nordic+International+University/@41.2874756,69.2191391,16z/data=!4m6!3m5!1s0x38ae8b359ab47501:0x618cedae4747d331!8m2!3d41.287268!4d69.2188643!16s%2Fg%2F11t9lr425_?entry=ttu"
                }
              >
                <address className="text-[#FBFBFB] pb-2.5 text-[16px] font-[500]">
                  Toshkent shahar, Chilonzor tumani,{" "}
                  <br className="max-sm:hidden" /> Bunyodkor ko‘chasi, 8/2
                </address>
              </Link>
              <Link
                href={"mailto:info@nordicuniversity.org"}
                className="text-white py-2.5"
              >
                info@nordicuniversity.org
              </Link>
              <Link
                className="block pt-2.5 text-white"
                href={"tel:+99895 505 33 00"}
              >
                +99895 505 33 00
              </Link>
              <p className="text-[16px] max-sm:block hidden font-[400] text-white pt-[60px]">
                © 2024 Nordik Universiteti{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;