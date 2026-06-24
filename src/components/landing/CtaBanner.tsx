import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section id="contact" className="px-4 pb-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground sm:px-16 sm:py-20"
      >
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary-foreground/10 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-primary-foreground/10 blur-3xl"
          aria-hidden
        />
        <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
          Ready to scale faster than your competitors?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base opacity-90 sm:text-lg">
          Book a free 30-minute call. We'll map a growth plan tailored to your business.
        </p>
        <div className="mt-8 flex justify-center">
          <Button variant="onDark" size="xl" asChild>
            <a href="#contact">
              Schedule Call <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
