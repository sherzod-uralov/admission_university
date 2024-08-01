import React from "react";
import Image from "next/image";
import { CaretUpOutlined } from "@ant-design/icons";

interface student {
  image: any;
  title: string;
  direction: "right" | "left";
  pdfLink: any;
}

const StudentLifeCard = ({ image, title, direction, pdfLink }: student) => {
  return (
    <a
      target="_blank"
      href={pdfLink}
      className={`flex gap-2 ${direction === "right" ? "flex-col-reverse" : "flex-col"}`}
    >
      <div className="flex justify-start flex-col gap-[10px] transition duration-300 ease-in-out hover:scale-110">
        <Image src={image} alt={title} />
      </div>
      <div
        className={`${direction === "left" ? "flex-col-reverse" : "flex-col"} flex items-start ml-3 flex-col gap-0`}
      >
        <h2 className="text-[25px] text-[#434446] text-left font-bold">
          {title}
        </h2>
        <CaretUpOutlined
          className={`text-primary ml-[20px] ${direction === "right" ? "rotate-180" : "rotate-0"}`}
        />
      </div>
    </a>
  );
};

export default StudentLifeCard;
