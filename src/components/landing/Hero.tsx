import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-team.jpg";

const featured = ["Forbes", "TechCrunch", "Wired", "Inc.", "Fast Company", "Bloomberg"];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16 pb-20 sm:pt-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(ellipse_at_top,var(--color-primary-light),transparent_60%)]"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block rounded-full bg-primary-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
        >
          Digital Marketing & Software Studio
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          We grow ambitious brands <span className="text-primary">2x, 3x</span>
          <br className="hidden sm:block" /> with marketing that actually performs.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          From paid acquisition to pixel-perfect product builds — Nurex Solutions is the partner
          founders trust to scale revenue, sharpen brand, and ship software that wins.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button variant="hero" size="xl" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="#contact">
              Schedule Call <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>

        <div className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Featured on
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
            {featured.map((f) => (
              <span
                key={f}
                className="font-display text-lg font-bold tracking-tight text-muted-foreground grayscale"
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto mt-16 max-w-6xl"
        >
          <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
            <img
              src={heroImg}
              alt="Nurex Solutions marketing and engineering team collaborating"
              width={1600}
              height={1024}
              className="h-auto w-full object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -bottom-6 left-4 w-[260px] rounded-2xl bg-primary p-5 text-primary-foreground shadow-[var(--shadow-card)] sm:-left-6 sm:bottom-8 sm:w-[280px]"
          >
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider opacity-80">
              <TrendingUp className="h-4 w-4" /> Avg. Client ROAS
            </div>
            <div className="mt-2 font-display text-4xl font-bold">412%</div>
            <div className="mt-4 flex items-end gap-1.5 h-14">
              {[35, 50, 42, 65, 58, 78, 92].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className="flex-1 rounded-sm bg-primary-foreground/70"
                />
              ))}
            </div>
            <div className="mt-2 text-xs opacity-80">Last 12 months</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
