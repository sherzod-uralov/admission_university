"use client";

import Hero from "@/components/Hero";
import About from "@/components/main/about";
import Why from "@/components/main/why";
import { useParams } from "next/navigation";

export default function Home() {
  const router = useParams();

  return (
    <>
      <Hero />
      <main>
        <About />
        <Why />
      </main>
    </>
  );
}
