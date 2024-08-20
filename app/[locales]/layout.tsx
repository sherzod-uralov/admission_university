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
  metadataBase: new URL("https://qabul.nordicuniversity.org"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Nordik qabul",
    description: "Nordik universiteti qabul sahifasi.",
    images: [
      {
        url: "/Rectangle 31.png",
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
        url: "/Rectangle 31.png",
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
          <title>Nordik qabul</title>
          <meta
            property="og:url"
            content={`https://qabul.nordicuniversity.org/${params.locale}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '741300534414372');
                fbq('track', 'PageView');
              `,
            }}
          />
          <noscript>
            <img
              alt="facebook"
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=741300534414372&ev=PageView&noscript=1"
            />
          </noscript>
        </head>
        <body className={`${poppins.className} overflow-x-hidden`}>
          <NextIntlClientProvider locale={params.locale} messages={messages}>
            <Navbar />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
