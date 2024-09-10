"use client";

import React, { useState } from "react";
import Image from "next/image";
import image from "@/public/Universitet.jpg";
import { Collapse, Tabs, TabsProps } from "antd";
import LabelComponent from "@/app/helpers/labelComponent";
import ChildrenComponent from "@/app/helpers/childrenComponent";
import { useTranslations } from "next-intl";

const Degree = () => {
  const [activeKey, setActiveKey] = useState<string | string[]>("1");
  const t = useTranslations("degree");

  const handleCollapseChange = (key: string | string[]) => {
    setActiveKey(key);
  };

  const bakalavr = [
    {
      key: "1",
      label: (
        <LabelComponent
          title={t("bachelor.majors.01")}
          isActive={activeKey[0] === "1"}
          itemKey="1"
          code={"60310100"}
        />
      ),
      children: (
        <ChildrenComponent
          quota_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 40 }),
            uzbek_quota: t("bachelor.uzbek_quota", { uzbek_quota: 20 }),
            russian_quota: t("bachelor.russian_quota", { russian_quota: 20 }),
          }}
          day={t("bachelor.full_time")}
          period={t("bachelor.study_period", { study_period: 4 })}
          price={t("bachelor.price_part_time", { price_part_time: 18 })}
          day1={t("bachelor.part_time")}
          period1={t("bachelor.study_period", { study_period: 5 })}
          price1={t("bachelor.price_part_time", { price_part_time: 12 })}
          quota2_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 75 }),
            uzbek_quota: t("bachelor.uzbek_quota", { uzbek_quota: 50 }),
            russian_quota: t("bachelor.russian_quota", { russian_quota: 25 }),
          }}
        />
      ),
      extra: (
        <span
          className={`font-bold text-[20px] extra-left float-left text-primary`}
        >
          01
        </span>
      ),
    },
    {
      key: "2",
      label: (
        <LabelComponent
          title={t("bachelor.majors.02")}
          isActive={activeKey[0] === "2"}
          itemKey="2"
          code="60410400"
        />
      ),
      children: (
        <ChildrenComponent
          quota_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 20 }),
            uzbek_quota: t("bachelor.uzbek_quota", { uzbek_quota: 20 }),
          }}
          day={t("bachelor.full_time")}
          period={t("bachelor.study_period", { study_period: 4 })}
          price={t("bachelor.price_part_time", { price_part_time: 18 })}
          day1={t("bachelor.part_time")}
          period1={t("bachelor.study_period", { study_period: 5 })}
          price1={t("bachelor.price_part_time", { price_part_time: 12 })}
          quota2_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 50 }),
            uzbek_quota: t("bachelor.uzbek_quota", { uzbek_quota: 50 }),
          }}
        />
      ),
      extra: (
        <span
          className={`font-bold text-[20px] extra-left float-left text-primary`}
        >
          02
        </span>
      ),
    },
    {
      key: "3",
      label: (
        <LabelComponent
          title={t("bachelor.majors.03")}
          isActive={activeKey[0] === "3"}
          itemKey="3"
          code="60411900"
        />
      ),
      children: (
        <ChildrenComponent
          quota_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 40 }),
            uzbek_quota: t("bachelor.uzbek_quota", { uzbek_quota: 20 }),
            russian_quota: t("bachelor.russian_quota", { russian_quota: 20 }),
          }}
          day={t("bachelor.full_time")}
          period={t("bachelor.study_period", { study_period: 4 })}
          price={t("bachelor.price_part_time", { price_part_time: 18 })}
          day1={t("bachelor.part_time")}
          period1={t("bachelor.study_period", { study_period: 4 })}
          price1={t("bachelor.price_part_time", { price_part_time: 12 })}
        />
      ),
      extra: (
        <span
          className={`font-bold text-[20px] extra-left float-left text-primary`}
        >
          03
        </span>
      ),
    },
    {
      key: "4",
      label: (
        <LabelComponent
          title={t("bachelor.majors.04")}
          isActive={activeKey[0] === "4"}
          itemKey="4"
          code="60110500"
        />
      ),
      children: (
        <ChildrenComponent
          quota_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 20 }),
            uzbek_quota: t("bachelor.uzbek_quota", { uzbek_quota: 20 }),
          }}
          day={t("bachelor.full_time")}
          period={t("bachelor.study_period", { study_period: 4 })}
          price={t("bachelor.price_part_time", { price_part_time: 14 })}
          day1={t("bachelor.special")}
          period1={t("bachelor.study_period", { study_period: 5 })}
          price1={t("bachelor.price_part_time", { price_part_time: 11 })}
          quota2_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 100 }),
          }}
        />
      ),
      extra: (
        <span
          className={`font-bold text-[20px] extra-left float-left text-primary`}
        >
          04
        </span>
      ),
    },
    {
      key: "5",
      label: (
        <LabelComponent
          title={t("bachelor.majors.05")}
          isActive={activeKey[0] === "5"}
          itemKey="5"
          code="60110200"
        />
      ),
      children: (
        <ChildrenComponent
          quota_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 20 }),
            uzbek_quota: t("bachelor.uzbek_quota", { uzbek_quota: 20 }),
          }}
          day={t("bachelor.full_time")}
          period={t("bachelor.study_period", { study_period: 3 })}
          price={t("bachelor.price_part_time", { price_part_time: 14 })}
          day1={t("bachelor.special")}
          period1={t("bachelor.study_period", { study_period: 4 })}
          price1={t("bachelor.price_part_time", { price_part_time: 11 })}
          quota2_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 100 }),
          }}
        />
      ),
      extra: (
        <span
          className={`font-bold text-[20px] extra-left float-left text-primary`}
        >
          05
        </span>
      ),
    },
    {
      key: "6",
      label: (
        <LabelComponent
          title={t("bachelor.majors.06")}
          isActive={activeKey[0] === "6"}
          itemKey="6"
          code="60112700"
        />
      ),
      children: (
        <ChildrenComponent
          quota_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 40 }),
            uzbek_quota: t("bachelor.uzbek_quota", { uzbek_quota: 20 }),
            russian_quota: t("bachelor.russian_quota", { russian_quota: 20 }),
          }}
          day={t("bachelor.full_time")}
          period={t("bachelor.study_period", { study_period: 4 })}
          price={t("bachelor.price_part_time", { price_part_time: 14 })}
          day1={t("bachelor.part_time")}
          period1={t("bachelor.study_period", { study_period: 4 })}
          price1={t("bachelor.price_part_time", { price_part_time: 12 })}
        />
      ),
      extra: (
        <span
          className={`font-bold text-[20px] extra-left float-left text-primary`}
        >
          06
        </span>
      ),
    },
    {
      key: "7",
      label: (
        <LabelComponent
          title={t("bachelor.majors.07")}
          isActive={activeKey[0] === "7"}
          itemKey="7"
          code="60310900"
        />
      ),
      children: (
        <ChildrenComponent
          quota_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 40 }),
            uzbek_quota: t("bachelor.uzbek_quota", { uzbek_quota: 20 }),
            russian_quota: t("bachelor.russian_quota", { russian_quota: 20 }),
          }}
          day={t("bachelor.full_time")}
          period={t("bachelor.study_period", { study_period: 4 })}
          price={t("bachelor.price_part_time", { price_part_time: 17 })}
          day1={t("bachelor.part_time")}
          period1={t("bachelor.study_period", { study_period: 5 })}
          price1={t("bachelor.price_part_time", { price_part_time: 11 })}
          quota2_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 75 }),
            uzbek_quota: t("bachelor.uzbek_quota", { uzbek_quota: 50 }),
            russian_quota: t("bachelor.russian_quota", { russian_quota: 25 }),
          }}
        />
      ),
      extra: (
        <span
          className={`font-bold text-[20px] extra-left float-left text-primary`}
        >
          07
        </span>
      ),
    },
    {
      key: "8",
      label: (
        <LabelComponent
          title={t("bachelor.majors.08")}
          isActive={activeKey[0] === "8"}
          itemKey="8"
          code="60111800"
        />
      ),
      children: (
        <ChildrenComponent
          quota_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 40 }),
            uzbek_quota: t("bachelor.uzbek_quota", { uzbek_quota: 20 }),
            russian_quota: t("bachelor.russian_quota", { russian_quota: 20 }),
          }}
          day={t("bachelor.full_time")}
          period={t("bachelor.study_period", { study_period: 4 })}
          price={t("bachelor.price_part_time", { price_part_time: 18 })}
          day1={t("bachelor.part_time")}
          period1={t("bachelor.study_period", { study_period: 4 })}
          price1={t("bachelor.price_part_time", { price_part_time: 12 })}
        />
      ),
      extra: (
        <span
          className={`font-bold text-[20px] extra-left float-left text-primary`}
        >
          08
        </span>
      ),
    },
    {
      key: "9",
      label: (
        <LabelComponent
          title={t("bachelor.majors.09")}
          isActive={activeKey[0] === "9"}
          itemKey="9"
          code="60610500"
        />
      ),
      children: (
        <ChildrenComponent
          quota_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 50 }),
            uzbek_quota: t("bachelor.uzbek_quota", { uzbek_quota: 20 }),
            english_quota: t("bachelor.english_quota", { english_quota: 30 }),
          }}
          day={t("bachelor.full_time")}
          period={t("bachelor.study_period", { study_period: 4 })}
          price={t("bachelor.price_part_time", { price_part_time: 22 })}
          day1={t("bachelor.part_time")}
          period1={t("bachelor.study_period", { study_period: 5 })}
          price1={t("bachelor.price_part_time", { price_part_time: 12 })}
          quota2_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 50 }),
            uzbek_quota: t("bachelor.uzbek_quota", { uzbek_quota: 50 }),
          }}
        />
      ),
      extra: (
        <span
          className={`font-bold text-[20px] extra-left float-left text-primary`}
        >
          09
        </span>
      ),
    },
    {
      key: "10",
      label: (
        <LabelComponent
          title={t("bachelor.majors.10")}
          isActive={activeKey[0] === "10"}
          itemKey="10"
          code="60320100"
        />
      ),
      children: (
        <ChildrenComponent
          quota_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 60 }),
            uzbek_quota: t("bachelor.uzbek_quota", { uzbek_quota: 60 }),
          }}
          day={t("bachelor.full_time")}
          period={t("bachelor.study_period", { study_period: 4 })}
          price={t("bachelor.grand")}
          day1={t("bachelor.part_time")}
          period1={t("bachelor.study_period", { study_period: 5 })}
          price1={t("bachelor.grand")}
          quota2_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 60 }),
            uzbek_quota: t("bachelor.uzbek_quota", { uzbek_quota: 60 }),
          }}
        />
      ),
      extra: (
        <span
          className={`font-bold text-[20px] extra-left float-left text-primary`}
        >
          10
        </span>
      ),
    },
    {
      key: "11",
      label: (
        <LabelComponent
          title={t("bachelor.majors.11")}
          isActive={activeKey[0] === "11"}
          itemKey="10"
          code="60411300"
        />
      ),
      children: (
        <ChildrenComponent
          quota_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 30 }),
            uzbek_quota: t("bachelor.uzbek_quota", { uzbek_quota: 0 }),
            english_quota: t("bachelor.english_quota", { english_quota: 30 }),
          }}
          day={t("bachelor.full_time")}
          period={t("bachelor.study_period", { study_period: 4 })}
          price={t("bachelor.price_part_time", { price_part_time: 22 })}
          day1={t("bachelor.part_time")}
          period1={t("bachelor.study_period", { study_period: 5 })}
          price1={t("bachelor.price_part_time", { price_part_time: 16 })}
        />
      ),
      extra: (
        <span
          className={`font-bold text-[20px] extra-left float-left text-primary`}
        >
          11
        </span>
      ),
    },
    {
      key: "12",
      label: (
        <LabelComponent
          title={t("bachelor.majors.12")}
          isActive={activeKey[0] === "12"}
          itemKey="12"
          code="60111300"
        />
      ),
      children: (
        <ChildrenComponent
          quota_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 20 }),
            uzbek_quota: t("bachelor.uzbek_quota", { uzbek_quota: 20 }),
          }}
          day={t("bachelor.full_time")}
          period={t("bachelor.study_period", { study_period: 4 })}
          price={t("bachelor.price_part_time", { price_part_time: 14 })}
          day1={t("bachelor.special")}
          period1={t("bachelor.study_period", { study_period: 4 })}
          price1={t("bachelor.price_part_time", { price_part_time: 14 })}
          quota2_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 100 }),
          }}
        />
      ),
      extra: (
        <span
          className={`font-bold text-[20px] extra-left float-left text-primary`}
        >
          12
        </span>
      ),
    },
    {
      key: "13",
      label: (
        <LabelComponent
          title={t("bachelor.majors.13")}
          isActive={activeKey[0] === "13"}
          itemKey="13"
          code="60411200"
        />
      ),
      children: (
        <ChildrenComponent
          quota_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 30 }),
            uzbek_quota: t("bachelor.uzbek_quota", { uzbek_quota: 0 }),
            english_quota: t("bachelor.english_quota", { english_quota: 30 }),
          }}
          day={t("bachelor.full_time")}
          period={t("bachelor.study_period", { study_period: 4 })}
          price={t("bachelor.price_part_time", { price_part_time: 22 })}
          day1={t("bachelor.part_time")}
          period1={t("bachelor.study_period", { study_period: 5 })}
          price1={t("bachelor.price_part_time", { price_part_time: 16 })}
        />
      ),
      extra: (
        <span
          className={`font-bold text-[20px] extra-left float-left text-primary`}
        >
          13
        </span>
      ),
    },
    {
      key: "14",
      label: (
        <LabelComponent
          title={t("bachelor.majors.14")}
          isActive={activeKey[0] === "14"}
          itemKey="14"
          code="60540200"
        />
      ),
      children: (
        <ChildrenComponent
          quota_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 20 }),
            uzbek_quota: t("bachelor.uzbek_quota", { uzbek_quota: 20 }),
          }}
          day={t("bachelor.full_time")}
          period={t("bachelor.study_period", { study_period: 4 })}
          price={t("bachelor.price_part_time", { price_part_time: 16 })}
          day1={t("bachelor.part_time")}
          period1={t("bachelor.study_period", { study_period: 5 })}
          price1={t("bachelor.price_part_time", { price_part_time: 16 })}
        />
      ),
      extra: (
        <span
          className={`font-bold text-[20px] extra-left float-left text-primary`}
        >
          14
        </span>
      ),
    },
    {
      key: "15",
      label: (
        <LabelComponent
          title={t("bachelor.majors.15")}
          isActive={activeKey[0] === "15"}
          itemKey="15"
          code="61010100"
        />
      ),
      children: (
        <ChildrenComponent
          quota_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 20 }),
            uzbek_quota: t("bachelor.uzbek_quota", { uzbek_quota: 20 }),
          }}
          day={t("bachelor.full_time")}
          period={t("bachelor.study_period", { study_period: 4 })}
          price={t("bachelor.price_part_time", { price_part_time: 17 })}
          day1={t("bachelor.part_time")}
          period1={t("bachelor.study_period", { study_period: 5 })}
          price1={t("bachelor.price_part_time", { price_part_time: 16 })}
        />
      ),
      extra: (
        <span
          className={`font-bold text-[20px] extra-left float-left text-primary`}
        >
          15
        </span>
      ),
    },
    {
      key: "16",
      label: (
        <LabelComponent
          title={t("bachelor.majors.16")}
          isActive={activeKey[0] === "16"}
          itemKey="16"
          code="60220300"
        />
      ),
      children: (
        <ChildrenComponent
          quota_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 40 }),
            uzbek_quota: t("bachelor.uzbek_quota", { uzbek_quota: 20 }),
            russian_quota: t("bachelor.russian_quota", { russian_quota: 20 }),
          }}
          day={t("bachelor.full_time")}
          period={t("bachelor.study_period", { study_period: 4 })}
          price={t("bachelor.price_part_time", { price_part_time: 16 })}
          day1={t("bachelor.part_time")}
          period1={t("bachelor.study_period", { study_period: 5 })}
          price1={t("bachelor.price_part_time", { price_part_time: 12 })}
          quota2_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 50 }),
            uzbek_quota: t("bachelor.uzbek_quota", { uzbek_quota: 50 }),
          }}
        />
      ),
      extra: (
        <span
          className={`font-bold text-[20px] extra-left float-left text-primary`}
        >
          16
        </span>
      ),
    },
  ];
  const master = [
    {
      key: "1",
      label: (
        <LabelComponent
          title={t("master.majors.01")}
          isActive={activeKey[0] === "1"}
          itemKey="1"
          code={"70110102"}
        />
      ),
      children: (
        <ChildrenComponent
          quota_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 20 }),
            uzbek_quota: t("bachelor.uzbek_quota", { uzbek_quota: 20 }),
          }}
          day={t("bachelor.full_time")}
          period={t("bachelor.study_period", { study_period: 2 })}
          price={t("bachelor.price_part_time", { price_part_time: 20 })}
          day1={t("bachelor.part_time")}
          period1={t("bachelor.study_period", { study_period: 4 })}
          price1={t("bachelor.price_part_time", { price_part_time: 12 })}
        />
      ),
      extra: (
        <span
          className={`font-bold text-[20px] extra-left float-left text-primary`}
        >
          01
        </span>
      ),
    },
    {
      key: "2",
      label: (
        <LabelComponent
          title={t("master.majors.02")}
          isActive={activeKey[0] === "2"}
          itemKey="2"
          code="70320101"
        />
      ),
      children: (
        <ChildrenComponent
          quota_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 30 }),
            uzbek_quota: t("bachelor.uzbek_quota", { uzbek_quota: 30 }),
          }}
          day={t("bachelor.full_time")}
          period={t("bachelor.study_period", { study_period: 2 })}
          price={t("bachelor.grand")}
          day1={t("bachelor.part_time")}
          period1={t("bachelor.study_period", { study_period: 4 })}
          price1={t("bachelor.price_part_time", { price_part_time: 12 })}
        />
      ),
      extra: (
        <span
          className={`font-bold text-[20px] extra-left float-left text-primary`}
        >
          02
        </span>
      ),
    },
    {
      key: "3",
      label: (
        <LabelComponent
          title={t("master.majors.03")}
          isActive={activeKey[0] === "3"}
          itemKey="3"
          code="70110901"
        />
      ),
      children: (
        <ChildrenComponent
          quota_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 20 }),
            uzbek_quota: t("bachelor.uzbek_quota", { uzbek_quota: 20 }),
          }}
          day={t("bachelor.full_time")}
          period={t("bachelor.study_period", { study_period: 2 })}
          price={t("bachelor.price_part_time", { price_part_time: 22 })}
          day1={t("bachelor.part_time")}
          period1={t("bachelor.study_period", { study_period: 4 })}
          price1={t("bachelor.price_part_time", { price_part_time: 12 })}
        />
      ),
      extra: (
        <span
          className={`font-bold text-[20px] extra-left float-left text-primary`}
        >
          03
        </span>
      ),
    },
    {
      key: "4",
      label: (
        <LabelComponent
          title={t("master.majors.04")}
          isActive={activeKey[0] === "4"}
          itemKey="4"
          code="70110501"
        />
      ),
      children: (
        <ChildrenComponent
          quota_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 20 }),
            uzbek_quota: t("bachelor.uzbek_quota", { uzbek_quota: 20 }),
          }}
          day={t("bachelor.full_time")}
          period={t("bachelor.study_period", { study_period: 2 })}
          price={t("bachelor.price_part_time", { price_part_time: 18 })}
          day1={t("bachelor.part_time")}
          period1={t("bachelor.study_period", { study_period: 4 })}
          price1={t("bachelor.price_part_time", { price_part_time: 12 })}
        />
      ),
      extra: (
        <span
          className={`font-bold text-[20px] extra-left float-left text-primary`}
        >
          04
        </span>
      ),
    },
    {
      key: "5",
      label: (
        <LabelComponent
          title={t("master.majors.05")}
          isActive={activeKey[0] === "5"}
          itemKey="5"
          code="70110201"
        />
      ),
      children: (
        <ChildrenComponent
          quota_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 20 }),
            uzbek_quota: t("bachelor.uzbek_quota", { uzbek_quota: 20 }),
          }}
          day={t("bachelor.full_time")}
          period={t("bachelor.study_period", { study_period: 2 })}
          price={t("bachelor.price_part_time", { price_part_time: 18 })}
          day1={t("bachelor.part_time")}
          period1={t("bachelor.study_period", { study_period: 4 })}
          price1={t("bachelor.price_part_time", { price_part_time: 12 })}
        />
      ),
      extra: (
        <span
          className={`font-bold text-[20px] extra-left float-left text-primary`}
        >
          05
        </span>
      ),
    },
    {
      key: "6",
      label: (
        <LabelComponent
          title={t("master.majors.06")}
          isActive={activeKey[0] === "6"}
          itemKey="6"
          code="70411901"
        />
      ),
      children: (
        <ChildrenComponent
          quota_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 20 }),
            uzbek_quota: t("bachelor.uzbek_quota", { uzbek_quota: 20 }),
          }}
          day={t("bachelor.full_time")}
          period={t("bachelor.study_period", { study_period: 2 })}
          price={t("bachelor.price_part_time", { price_part_time: 22 })}
          day1={t("bachelor.part_time")}
          period1={t("bachelor.study_period", { study_period: 4 })}
          price1={t("bachelor.price_part_time", { price_part_time: 12 })}
        />
      ),
      extra: (
        <span
          className={`font-bold text-[20px] extra-left float-left text-primary`}
        >
          06
        </span>
      ),
    },
    {
      key: "7",
      label: (
        <LabelComponent
          title={t("master.majors.07")}
          isActive={activeKey[0] === "7"}
          itemKey="7"
          code="70310102"
        />
      ),
      children: (
        <ChildrenComponent
          quota_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 20 }),
            uzbek_quota: t("bachelor.uzbek_quota", { uzbek_quota: 20 }),
          }}
          day={t("bachelor.full_time")}
          period={t("bachelor.study_period", { study_period: 2 })}
          price={t("bachelor.price_part_time", { price_part_time: 20 })}
          day1={t("bachelor.part_time")}
          period1={t("bachelor.study_period", { study_period: 4 })}
          price1={t("bachelor.price_part_time", { price_part_time: 11 })}
        />
      ),
      extra: (
        <span
          className={`font-bold text-[20px] extra-left float-left text-primary`}
        >
          07
        </span>
      ),
    },
    {
      key: "8",
      label: (
        <LabelComponent
          title={t("master.majors.08")}
          isActive={activeKey[0] === "8"}
          itemKey="8"
          code="71010101"
        />
      ),
      children: (
        <ChildrenComponent
          quota_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 20 }),
            uzbek_quota: t("bachelor.uzbek_quota", { uzbek_quota: 20 }),
          }}
          day={t("bachelor.full_time")}
          period={t("bachelor.study_period", { study_period: 2 })}
          price={t("bachelor.price_part_time", { price_part_time: 20 })}
          day1={t("bachelor.part_time")}
          period1={t("bachelor.study_period", { study_period: 4 })}
          price1={t("bachelor.price_part_time", { price_part_time: 12 })}
        />
      ),
      extra: (
        <span
          className={`font-bold text-[20px] extra-left float-left text-primary`}
        >
          08
        </span>
      ),
    },
    {
      key: "9",
      label: (
        <LabelComponent
          title={t("master.majors.09")}
          isActive={activeKey[0] === "9"}
          itemKey="9"
          code="70110601"
        />
      ),
      children: (
        <ChildrenComponent
          quota_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 20 }),
            uzbek_quota: t("bachelor.uzbek_quota", { uzbek_quota: 20 }),
          }}
          day={t("bachelor.full_time")}
          period={t("bachelor.study_period", { study_period: 2 })}
          price={t("bachelor.price_part_time", { price_part_time: 20 })}
          day1={t("bachelor.part_time")}
          period1={t("bachelor.study_period", { study_period: 4 })}
          price1={t("bachelor.price_part_time", { price_part_time: 12 })}
        />
      ),
      extra: (
        <span
          className={`font-bold text-[20px] extra-left float-left text-primary`}
        >
          09
        </span>
      ),
    },
    {
      key: "10",
      label: (
        <LabelComponent
          title={t("master.majors.10")}
          isActive={activeKey[0] === "10"}
          itemKey="10"
          code="70540201"
        />
      ),
      children: (
        <ChildrenComponent
          quota_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 20 }),
            uzbek_quota: t("bachelor.uzbek_quota", { uzbek_quota: 20 }),
          }}
          day={t("bachelor.full_time")}
          period={t("bachelor.study_period", { study_period: 2 })}
          price={t("bachelor.price_part_time", { price_part_time: 20 })}
          day1={t("bachelor.part_time")}
          period1={t("bachelor.study_period", { study_period: 5 })}
          price1={t("bachelor.price_part_time", { price_part_time: 16 })}
        />
      ),
      extra: (
        <span
          className={`font-bold text-[20px] extra-left float-left text-primary`}
        >
          10
        </span>
      ),
    },
    {
      key: "11",
      label: (
        <LabelComponent
          title={t("master.majors.11")}
          isActive={activeKey[0] === "11"}
          itemKey="10"
          code="70610301"
        />
      ),
      children: (
        <ChildrenComponent
          quota_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 20 }),
            uzbek_quota: t("bachelor.uzbek_quota", { uzbek_quota: 20 }),
          }}
          day={t("bachelor.full_time")}
          period={t("bachelor.study_period", { study_period: 2 })}
          price={t("bachelor.price_part_time", { price_part_time: 20 })}
          day1={t("bachelor.part_time")}
          period1={t("bachelor.study_period", { study_period: 5 })}
          price1={t("bachelor.price_part_time", { price_part_time: 16 })}
        />
      ),
      extra: (
        <span
          className={`font-bold text-[20px] extra-left float-left text-primary`}
        >
          11
        </span>
      ),
    },
    {
      key: "12",
      label: (
        <LabelComponent
          title={t("master.majors.12")}
          isActive={activeKey[0] === "12"}
          itemKey="12"
          code="70610304"
        />
      ),
      children: (
        <ChildrenComponent
          quota_info={{
            total_quota: t("bachelor.total_quota", { total_quota: 20 }),
            uzbek_quota: t("bachelor.uzbek_quota", { uzbek_quota: 20 }),
          }}
          day={t("bachelor.full_time")}
          period={t("bachelor.study_period", { study_period: 2 })}
          price={t("bachelor.price_part_time", { price_part_time: 20 })}
          day1={t("bachelor.part_time")}
          period1={t("bachelor.study_period", { study_period: 5 })}
          price1={t("bachelor.price_part_time", { price_part_time: 16 })}
        />
      ),
      extra: (
        <span
          className={`font-bold text-[20px] extra-left float-left text-primary`}
        >
          12
        </span>
      ),
    },
  ];

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: t("bachelor.title"),
      children: (
        <Collapse
          activeKey={activeKey}
          onChange={handleCollapseChange}
          accordion
          rootClassName="border-x-0 bg-transparent rounded-none"
          items={bakalavr.map((item, index) => ({
            ...item,
          }))}
          expandIcon={() => null}
          className="custom-collapse"
        />
      ),
    },
    {
      key: "2",
      label: t("master.title"),
      children: (
        <Collapse
          activeKey={activeKey}
          onChange={handleCollapseChange}
          accordion
          rootClassName="border-x-0 bg-transparent rounded-none"
          items={master.map((item, index) => ({
            ...item,
          }))}
          expandIcon={() => null}
          className="custom-collapse"
        />
      ),
    },
  ];

  return (
    <section id="program" className="container mt-20 max-sm:mt-0">
      <article>
        <h2 className="text-primary font-[500] text-[32px] leading-[48px]">
          {t("bachelor.direction")}
        </h2>
        <div className="mt-[60px] gap-[80px] flex items-start w-full">
          <div className="w-full">
            <Tabs
              defaultActiveKey="1"
              type="line"
              items={items}
              className="custom-tabs"
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Degree;
