"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useTranslations } from "next-intl";

/** --------------------------------------------------
 *  Partner interfaces
 * --------------------------------------------------*/
export interface PartnerImage {
  file_path: string; // "/public/Files/Nokia.svg"
  content_type: string;
  file_name: string;
}

export interface Partner {
  id: string;
  name: string;
  link: string;
  description_uz: string;
  description_ru: string;
  description_en: string;
  image: PartnerImage;
}

/** --------------------------------------------------
 *  Helpers
 * --------------------------------------------------*/
const API_URL = "https://source.nordicuniversity.org"; // bir xil domen bo'lsa shu
const ENDPOINT = "/api/core/partners?page=1&limit=100";

const fullImgSrc = (img: PartnerImage) => `${API_URL}${img.file_path}`;

/* 2 ta marquee qatoriga bo'lib berish (zigzag)
   [0,1,2,3,4,5,6,7,8] -> row1: 0,2,4,6,8  row2: 1,3,5,7
*/
const splitRows = (arr: Partner[]): [Partner[], Partner[]] => {
  const rowA: Partner[] = [];
  const rowB: Partner[] = [];
  arr.forEach((p, i) => (i % 2 === 0 ? rowA.push(p) : rowB.push(p)));
  return [rowA, rowB];
};

/** --------------------------------------------------
 *  Component
 * --------------------------------------------------*/
const Partners: React.FC = () => {
  const t = useTranslations("partners");
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_URL}${ENDPOINT}`);
        if (!res.ok) throw new Error("Partner ma'lumotlari olinmadi");
        const data = (await res.json()) as { data: Partner[] };
        setPartners(data.data ?? []);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Noma'lum xatolik");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading)
    return (
      <section className="py-20 text-center">
        <span className="animate-pulse text-lg">Loading…</span>
      </section>
    );

  if (error)
    return (
      <section className="py-20 text-center text-red-600">{error}</section>
    );

  const [row1, row2] = splitRows(partners);

  const renderRow = (row: Partner[], reverse = false) => (
    <Marquee
      className="overflow-hidden"
      speed={50}
      pauseOnHover
      gradient={true}
      direction={reverse ? "right" : "left"}
    >
      {row.map((partner) => (
        <a
          key={partner.id}
          href={partner.link}
          target="_blank"
          rel="noreferrer"
          className="flex  items-center justify-center w-[260px] h-[150px] max-sm:w-[150px] px-4"
        >
          <Image
            src={fullImgSrc(partner.image)}
            alt={partner.name}
            width={191}
            height={60}
            className="object-contain max-sm:w-[100px]"
            unoptimized={partner.image.content_type === "image/svg+xml"}
          />
        </a>
      ))}
    </Marquee>
  );

  return (
    <section
      id="partners"
      className="mt-[100px] max-sm:mt-[60px] overflow-x-hidden mx-auto px-4 py-8"
    >
      <article>
        <h2 className="container font-[500] text-[32px] leading-[48px] text-primary pb-16 max-sm:pb-10">
          {t("partner")}
        </h2>

        <div className="primary-rgb">
          <div className="container overflow-hidden space-y-8">
            {renderRow(row1)}
            {row2.length > 0 && renderRow(row2, true)}
          </div>
        </div>
      </article>
    </section>
  );
};

export default Partners;
