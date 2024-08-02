import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "@/components/Navbar";
import "@/app/globals.css";
import { StoreProvider } from "@/lib/provider/storeProvider";
import { Poppins } from "next/font/google";
import React from "react";
import { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ogImage from "@/public/Rectangle 31.png";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Nordik qabul",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Nordik qabul",
    description: "Nordik universiteti qabul sahifasi.",
    images: [
      {
        url: `${ogImage}`,
        width: 800,
        height: 600,
        alt: "Nordik universiteti",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nordik qabul",
    description: "Nordik universiteti qabul jarayoni haqida ma'lumotlar.",
    images: [
      {
        url: `${ogImage}`,
        width: 800,
        height: 600,
        alt: "Nordik universiteti",
      },
    ],
  },
  description: "Nordik universiteti qabul jarayoni haqida ma'lumotlar.",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  return (
    <StoreProvider>
      <html lang={params.locale}>
        <head>
          <meta
            property="og:url"
            content={`https://qabul.nordicuniversity.org/${params.locale}`}
          />
        </head>
        <body className={`${poppins.className} overflow-x-hidden`}>
          <NextIntlClientProvider locale={params.locale} messages={messages}>
            <SpeedInsights />
            <Navbar />
            {children}
          </NextIntlClientProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
