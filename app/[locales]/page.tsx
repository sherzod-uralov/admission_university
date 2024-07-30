import Hero from "@/components/Hero";
import About from "@/components/main/about";
import Why from "@/components/main/why";
import Degree from "@/components/main/degree";
import Partners from "@/components/main/Partners";
import StudentLife from "@/components/main/StudentLife";
import Faq from "@/components/main/Faq";
import Footer from "@/components/footer";

export default function Home({ params }: { params: string }) {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Why />
        <Degree />
        <Partners />
        <StudentLife />
        <Faq />
        <Footer />
      </main>
    </>
  );
}
