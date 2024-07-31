import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "@/components/Navbar";
import "@/app/globals.css";
import { StoreProvider } from "@/lib/provider/storeProvider";
import { Poppins } from "next/font/google";
import React from "react";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

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
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <link rel="icon" ref="/favicon.ico" />
          <title>admission</title>
        </Head>
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
