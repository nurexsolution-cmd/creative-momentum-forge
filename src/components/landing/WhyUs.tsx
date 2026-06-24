import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto h-[440px] w-full max-w-md lg:h-[520px]"
        >
          <div className="absolute left-0 top-0 h-56 w-44 overflow-hidden rounded-3xl shadow-[var(--shadow-card)] sm:h-72 sm:w-56">
            <img src={t1} alt="Team member" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="absolute right-0 top-16 h-60 w-48 overflow-hidden rounded-3xl border-4 border-background shadow-[var(--shadow-card)] sm:h-80 sm:w-64">
            <img src={t2} alt="Team member" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="absolute bottom-0 left-12 h-52 w-44 overflow-hidden rounded-3xl border-4 border-background shadow-[var(--shadow-card)] sm:h-64 sm:w-56">
            <img src={t3} alt="Team member" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-2 right-4 rounded-2xl bg-primary px-5 py-4 text-primary-foreground shadow-[var(--shadow-card)]">
            <div className="font-display text-2xl font-bold">50+</div>
            <div className="text-xs opacity-80">Experts on the team</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block rounded-full bg-primary-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Why Us
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            A senior team obsessed with your outcomes.
          </h2>
          <p className="mt-5 text-lg font-semibold text-primary">
            Strategy, creative, and engineering under one roof — accountable to one number: growth.
          </p>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            We don't hand you off to juniors. Every engagement is led by operators who've built and
            scaled brands you know — combining sharp analytics, world-class design, and modern
            engineering to ship work that compounds.
          </p>
          <div className="mt-8">
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">About Us</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
