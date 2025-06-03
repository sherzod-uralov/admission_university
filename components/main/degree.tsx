"use client";

import React, { useState } from "react";
import { Tabs, Collapse, Spin, Alert } from "antd";
import { useTranslations } from "next-intl";
import { EnumEduDegree, EnumEduType, TabItem } from "@/types/degree.types";
import LabelComponent from "@/app/helpers/labelComponent";
import ChildrenComponent from "@/app/helpers/childrenComponent";
import { useEducationDirections } from "@/components/hooks/useDegree.hook";

/* ---------- LOCAL HELPERS ---------- */
const translateEduType = (
  t: ReturnType<typeof useTranslations>,
  type: EnumEduType,
) => {
  switch (type) {
    case EnumEduType.FULL_TIME:
      return t("bachelor.full_time");
    case EnumEduType.PART_TIME:
      return t("bachelor.part_time");
    case EnumEduType.SPECIAL_PART_TIME:
      return t("bachelor.special");
    case EnumEduType.EVENING:
      return t("bachelor.evening");
    case EnumEduType.DISTANCE:
      return t("bachelor.distance");
    default:
      return type;
  }
};

const formatPrice = (p: number) => (p / 1_000_000).toString();

/* ---------- MAIN COMPONENT ---------- */
interface Props {
  language?: string;
}

const DynamicDegree: React.FC<Props> = ({ language = "uz" }) => {
  const t = useTranslations("degree");

  const [degree, setDegree] = useState<EnumEduDegree>(EnumEduDegree.BACHELOR);

  const {
    loading,
    tabLoading,
    error,
    availableTabs,
    activeTab,
    currentTabData,
    changeTab,
  } = useEducationDirections({ eduDegree: degree, language });

  /* ------ Loading / Error ------ */
  if (loading)
    return (
      <section className="text-center py-20">
        <Spin size="large" />
        <div className="mt-3 text-lg">Ma'lumotlar yuklanmoqda…</div>
      </section>
    );

  if (error)
    return (
      <Alert
        message="Xatolik"
        description={error}
        type="error"
        showIcon
        className="my-8"
      />
    );

  /* ------ Collapse creator ------ */
  const buildCollapseItems = (currentTabData as any[]).map((prog, idx) => {
    const quotaInfo: Record<string, string> = {};
    if (prog?.quota) {
      const { total, uz, ru, en } = prog?.quota;
      if (total)
        quotaInfo.total_quota = t("bachelor.total_quota", {
          total_quota: total,
        });
      if (uz)
        quotaInfo.uzbek_quota = t("bachelor.uzbek_quota", { uzbek_quota: uz });
      if (ru)
        quotaInfo.russian_quota = t("bachelor.russian_quota", {
          russian_quota: ru,
        });
      if (en)
        quotaInfo.english_quota = t("bachelor.english_quota", {
          english_quota: en,
        });
    }

    return {
      key: String(idx),
      label: (
        <LabelComponent
          title={prog.name_uz || prog.name_ru || prog.name_en || prog.name}
          itemKey={String(idx)}
          isActive={false}
          code={prog.field_code}
        />
      ),
      children: (
        <ChildrenComponent
          //@ts-ignore
          quota_info={Object.keys(quotaInfo).length ? quotaInfo : undefined}
          day={activeTab ? translateEduType(t, activeTab) : ""}
          period={t("bachelor.study_period", { study_period: prog.duration })}
          price={t("bachelor.price_part_time", {
            price_part_time: formatPrice(prog.price),
          })}
          day1=""
          period1=""
          price1=""
        />
      ),
    };
  });

  /* ------ Tabs.items ------ */
  const items = availableTabs.map<TabItem>((tab) => ({
    ...tab,
    label: translateEduType(t, tab.key),
  }));

  /* ------ JSX ------ */
  return (
    <div className="degree-section mt-8">
      <div className="container mx-auto max-w-7xl px-4">
        {/* ---- Degree switch ---- */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-6">{t("bachelor.direction")}</h2>
          {[EnumEduDegree.BACHELOR, EnumEduDegree.MASTER].map((d) => (
            <button
              key={d}
              onClick={() => setDegree(d)}
              className={`mx-3 px-6 py-3 rounded-lg font-bold text-lg transition ${
                degree === d
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {d === EnumEduDegree.BACHELOR
                ? t("bachelor.title") || "Bakalavr"
                : t("master.title") || "Magistratura"}
            </button>
          ))}
        </div>

        {/* ---- Tabs ---- */}
        {items.length ? (
          <Tabs
            type="card"
            items={items.map((tab) => ({
              key: tab.key,
              label: tab.label,
              children:
                tabLoading && activeTab === tab.key ? (
                  <div className="text-center py-10">
                    <Spin />
                  </div>
                ) : (
                  <Collapse accordion items={buildCollapseItems} />
                ),
            }))}
            activeKey={activeTab ?? undefined}
            onChange={(k) => changeTab(k as EnumEduType)}
          />
        ) : (
          <Alert
            className="mt-12"
            message="Ma'lumot topilmadi"
            description={`$${degree === EnumEduDegree.BACHELOR ? "Bakalavr" : "Magistratura"} darajasida yo'nalishlar mavjud emas.`}
            type="info"
            showIcon
          />
        )}
      </div>
    </div>
  );
};

export default DynamicDegree;
