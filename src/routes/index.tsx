import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { Projects } from "@/components/landing/Projects";
import { Testimonials } from "@/components/landing/Testimonials";
import { WhyUs } from "@/components/landing/WhyUs";
import { CtaBanner } from "@/components/landing/CtaBanner";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexus — Digital Marketing & Software Development Agency" },
      {
        name: "description",
        content:
          "Premium digital marketing and software development agency. Scale your brand 2x and 3x with PPC, SEO, web design, and mobile app development.",
      },
      { property: "og:title", content: "Nexus — Digital Marketing & Software Development Agency" },
      {
        property: "og:description",
        content:
          "Premium digital marketing and software development agency. Scale your brand 2x and 3x with PPC, SEO, web design, and mobile app development.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <WhyUs />
        <CtaBanner />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
