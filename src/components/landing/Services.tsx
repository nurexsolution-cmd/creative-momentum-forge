import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Search,
  Monitor,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const items: Service[] = [
  {
    icon: BarChart3,
    title: "PPC Management",
    description:
      "Performance-driven paid campaigns across Google, Meta, and LinkedIn — engineered to lower CAC and scale revenue predictably.",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Technical, on-page, and content SEO programs that compound traffic month over month and own your category.",
  },
  {
    icon: Monitor,
    title: "Website Design & Development",
    description:
      "Conversion-focused websites built on modern stacks. Brand-led design, blazing performance, measurable outcomes.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps with polished UX, robust architecture, and ship-ready release pipelines.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              Services built to <span className="text-primary">move metrics</span>.
            </>
          }
          subtitle="A focused suite of marketing and engineering capabilities — combined, they compound results."
        />

        <div className="mx-auto mt-16 max-w-5xl">
          {items.map((s, i) => (
            <motion.a
              key={s.title}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group flex items-center gap-6 border-t border-border py-8 last:border-b sm:gap-10"
            >
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary-light text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground sm:text-base">
                  {s.description}
                </p>
              </div>
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary-light text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground sm:h-14 sm:w-14">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
