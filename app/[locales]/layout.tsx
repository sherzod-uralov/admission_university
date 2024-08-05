import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "@/components/Navbar";
import "@/app/globals.css";
import { StoreProvider } from "@/lib/provider/storeProvider";
import { Poppins } from "next/font/google";
import React from "react";
import { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Nordik qabul",
  viewport:
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
  icons: {
    icon: "/favicon.ico",
  },
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
        <body className={`${poppins.className} overflow-x-hidden`}>
          <NextIntlClientProvider locale={params.locale} messages={messages}>
            <SpeedInsights />
            <Navbar />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
