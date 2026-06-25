import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Quote {
  quote: string;
  name: string;
  role: string;
}

const quotes: Quote[] = [
  {
    quote:
      "Nurex Solutions rebuilt our funnel from the ground up. Six months in, paid CAC is down 41% and revenue is up 2.6x. They feel like an in-house team — only sharper.",
    name: "Amelia Chen",
    role: "VP Growth, Lumen Analytics",
  },
  {
    quote:
      "The site they shipped looks unreal and converts even better. Our lead-to-demo rate doubled overnight. They actually understand product, not just pixels.",
    name: "Marcus Boateng",
    role: "Founder & CEO, Northstar Bank",
  },
  {
    quote:
      "From SEO architecture to creative testing, every quarter we get measurable lift. Best agency partnership we've had in ten years of building companies.",
    name: "Priya Raman",
    role: "CMO, Atelier Fashion",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const go = (dir: number) => setI((p) => (p + dir + quotes.length) % quotes.length);
  const q = quotes[i];

  return (
    <section className="bg-dark py-24 text-dark-foreground sm:py-32">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-block rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80">
          Testimonials
        </span>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Loved by founders and operators.
        </h2>

        <div className="relative mt-12 min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="mx-auto mt-6 max-w-3xl text-balance font-display text-xl font-medium leading-relaxed sm:text-2xl">
                "{q.quote}"
              </blockquote>
              <figcaption className="mt-8">
                <div className="font-bold">{q.name}</div>
                <div className="text-sm text-dark-foreground/60">{q.role}</div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            aria-label="Previous testimonial"
            onClick={() => go(-1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-dark-foreground/20 transition-colors hover:bg-dark-foreground/10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            {quotes.map((_, d) => (
              <button
                key={d}
                aria-label={`Go to testimonial ${d + 1}`}
                onClick={() => setI(d)}
                className={`h-2 rounded-full transition-all ${
                  d === i ? "w-8 bg-primary" : "w-2 bg-dark-foreground/30"
                }`}
              />
            ))}
          </div>
          <button
            aria-label="Next testimonial"
            onClick={() => go(1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-dark-foreground/20 transition-colors hover:bg-dark-foreground/10"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
