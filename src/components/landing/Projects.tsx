import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

interface Project {
  client: string;
  blurb: string;
  tags: string[];
  image: string;
  span: string;
}

const projects: Project[] = [
  {
    client: "Lumen Analytics",
    blurb: "+218% qualified leads in 6 months via paid + lifecycle.",
    tags: ["#ppc", "#seo", "#analytics"],
    image: p1,
    span: "sm:col-span-2 lg:col-span-3 lg:row-span-2",
  },
  {
    client: "Atelier Fashion",
    blurb: "Rebuilt store, doubled conversion rate.",
    tags: ["#shopify", "#design"],
    image: p2,
    span: "sm:col-span-2 lg:col-span-2",
  },
  {
    client: "Pulse Fitness",
    blurb: "Launched iOS & Android — 50K MAU in year one.",
    tags: ["#mobile", "#product"],
    image: p3,
    span: "sm:col-span-2 lg:col-span-2",
  },
  {
    client: "Northstar Bank",
    blurb: "Redesigned site, cut bounce rate by 38%.",
    tags: ["#fintech", "#webflow"],
    image: p4,
    span: "sm:col-span-2 lg:col-span-3",
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-primary-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Projects"
          title={
            <>
              Work that ships, scales, and <span className="text-primary">sells</span>.
            </>
          }
          subtitle="A snapshot of recent engagements across SaaS, retail, fintech, and consumer apps."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-4 lg:grid-cols-5">
          {projects.map((p, i) => (
            <motion.article
              key={p.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className={`group flex flex-col rounded-3xl bg-background p-6 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1 ${p.span}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-display text-lg font-bold text-foreground">
                    {p.client}
                  </div>
                  <p className="mt-2 max-w-xs text-sm text-muted-foreground">{p.blurb}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  aria-label={`Open ${p.client} case study`}
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-light text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-6 overflow-hidden rounded-2xl bg-muted">
                <img
                  src={p.image}
                  alt={`${p.client} project mockup`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
