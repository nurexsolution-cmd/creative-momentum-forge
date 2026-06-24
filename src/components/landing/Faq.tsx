import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  {
    q: "What kinds of companies do you typically work with?",
    a: "We partner with venture-backed startups, mid-market brands, and established enterprises across SaaS, e-commerce, fintech, and consumer apps. If you've found product-market fit and are ready to scale, we're a fit.",
  },
  {
    q: "How quickly can we get started?",
    a: "Kickoff usually happens 5–10 business days after contracts are signed. For paid media engagements we can often have new campaigns live in week two.",
  },
  {
    q: "Do you offer one-off projects or only retainers?",
    a: "Both. Web and mobile builds run as fixed-scope projects; marketing engagements are typically monthly retainers tied to outcomes, not hours.",
  },
  {
    q: "How do you measure success?",
    a: "Every engagement begins with a north-star metric tied to revenue — CAC, LTV, ROAS, qualified pipeline. We report transparently every two weeks.",
  },
  {
    q: "Where is your team based?",
    a: "We're a fully distributed team with hubs in New York, London, Lisbon, and Singapore — coverage across every major time zone.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before reaching out."
        />
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="rounded-2xl border border-border bg-secondary/60 transition-colors"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold text-foreground sm:text-lg">
                    {f.q}
                  </span>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-light text-primary">
                    {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-6 text-sm text-muted-foreground sm:px-7 sm:text-base">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
