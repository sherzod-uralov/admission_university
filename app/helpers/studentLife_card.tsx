import React from "react";
import Image from "next/image";
import { CaretUpOutlined } from "@ant-design/icons";

interface student {
  image: any;
  title: string;
  direction: "right" | "left";
}

const StudentLifeCard = ({ image, title, direction }: student) => {
  return (
    <div
      className={`flex gap-2 ${direction === "right" ? "flex-col-reverse" : "flex-col"}`}
    >
      <div className="flex justify-start flex-col gap-[10px]">
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
    </div>
  );
};

export default StudentLifeCard;
