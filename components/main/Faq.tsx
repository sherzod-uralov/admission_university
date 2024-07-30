"use client";

import React from "react";
import Image from "next/image";
import left from "@/public/faq_left.png";
import image_right from "@/public/faqt_right.png";
import { Collapse, CollapseProps } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useTranslations } from "next-intl";

const Faq = () => {
  const t = useTranslations("questions");
  const heading = useTranslations();

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: (
        <h2 className="font-[500] max-sm:text-[18px] text-[20px] text-heading_color">
          {t("0.question")}
        </h2>
      ),
      children: (
        <p className="font-[400] max-sm:text-[16px] text-[20px] leading-[30px] text-[#5A5B5E]">
          {t("0.answer")}
        </p>
      ),
    },
    {
      key: "2",
      label: (
        <h2 className="font-[500] max-sm:text-[18px] text-[20px] text-heading_color">
          {t("1.question")}
        </h2>
      ),
      children: (
        <p className="font-[400] max-sm:text-[16px] text-[20px] text-[#5A5B5E]">
          {t("1.answer")}
        </p>
      ),
    },
    {
      key: "3",
      label: (
        <h2 className="font-[500] max-sm:text-[18px] text-[20px] text-heading_color">
          {t("2.question")}
        </h2>
      ),
      children: (
        <p className="font-[400] max-sm:text-[16px] text-[20px] text-[#5A5B5E]">
          {t("2.answer")}
        </p>
      ),
    },
    {
      key: "4",
      label: (
        <h2 className="font-[500] max-sm:text-[18px] text-[20px] text-heading_color">
          {t("3.question")}
        </h2>
      ),
      children: (
        <p className="font-[400] max-sm:text-[16px] text-[20px] text-[#5A5B5E]">
          {t("3.answer")}
        </p>
      ),
    },
    {
      key: "5",
      label: (
        <h2 className="font-[500] max-sm:text-[18px] text-[20px] text-heading_color">
          {t("4.question")}
        </h2>
      ),
      children: (
        <p className="font-[400] max-sm:text-[16px] text-[20px] text-[#5A5B5E]">
          {t("4.answer")}
        </p>
      ),
    },
    {
      key: "6",
      label: (
        <h2 className="font-[500] max-sm:text-[18px] text-[20px] text-heading_color">
          {t("5.question")}
        </h2>
      ),
      children: (
        <p className="font-[400] max-sm:text-[16px] text-[20px] text-[#5A5B5E]">
          {t("5.answer")}
        </p>
      ),
    },
    {
      key: "7",
      label: (
        <h2 className="font-[500] max-sm:text-[18px] text-[20px] text-heading_color">
          {t("6.question")}
        </h2>
      ),
      children: (
        <p className="font-[400] max-sm:text-[16px] text-[20px] text-[#5A5B5E]">
          {t("6.answer")}
        </p>
      ),
    },
    {
      key: "8",
      label: (
        <h2 className="font-[500] max-sm:text-[18px] text-[20px] text-heading_color">
          {t("7.question")}
        </h2>
      ),
      children: (
        <p className="font-[400] max-sm:text-[16px] text-[20px] text-[#5A5B5E]">
          {t("7.answer")}
        </p>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-primary_bg overflow-y-hidden overflow-x-hidden pb-[80px] w-full">
      <Image
        className="absolute -top-96 right-0"
        src={image_right}
        alt="position image left"
      />
      <Image
        className="absolute -bottom-40 left-0"
        src={left}
        alt="position image left"
      />
      <article className="container">
        <h2 className="text-primary pb-[80px] text-center max-sm:text-[20px] max-sm:leading-[36px] font-[500] pt-8 leading-[48px] text-[32px]">
          {heading("frequently_asked_questions")}
        </h2>
        <div className="w-full">
          <Collapse
            rootClassName="faqCollapse"
            expandIcon={({ isActive }) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.3s",
                }}
              >
                {isActive ? (
                  <MinusOutlined className="rounded-full bg-primary mt-3 max-sm:mt-2 text-white p-1.5" />
                ) : (
                  <PlusOutlined className="max-sm:mt-2 rounded-full border-primary border-[2px] mt-3 text-primary p-1" />
                )}
              </div>
            )}
            expandIconPosition="right"
            items={items}
            defaultActiveKey={"1"}
            accordion={true}
            className="bg-transparent rounded-none border-x-0"
          />
        </div>
      </article>
    </section>
  );
};

export default Faq;
