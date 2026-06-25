import { useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "About us", href: "#why-us" },
  { label: "Contact us", href: "#contact" },
];

const services = [
  "PPC Management",
  "SEO",
  "Website Design & Development",
  "Mobile App Development",
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2 font-display text-xl font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
            N
          </span>
          <span>Nurex Solutions</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) =>
            l.hasDropdown ? (
              <div
                key={l.label}
                className="relative"
                onMouseEnter={() => setSvcOpen(true)}
                onMouseLeave={() => setSvcOpen(false)}
              >
                <button className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground">
                  {l.label} <ChevronDown className="h-4 w-4" />
                </button>
                <div
                  className={cn(
                    "absolute left-1/2 top-full w-64 -translate-x-1/2 pt-2 transition-all",
                    svcOpen
                      ? "pointer-events-auto opacity-100"
                      : "pointer-events-none -translate-y-2 opacity-0",
                  )}
                >
                  <div className="rounded-2xl border border-border bg-popover p-2 shadow-[var(--shadow-soft)]">
                    {services.map((s) => (
                      <a
                        key={s}
                        href="#services"
                        className="block rounded-xl px-4 py-2.5 text-sm font-medium text-foreground/80 hover:bg-primary-light hover:text-primary"
                      >
                        {s}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={l.label}
                href={l.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground"
              >
                {l.label}
              </a>
            ),
          )}
        </nav>

        <div className="hidden md:block">
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">
              Start Your Project <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-xl border border-border md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="space-y-1 px-4 py-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-foreground/80 hover:bg-primary-light"
              >
                {l.label}
              </a>
            ))}
            <Button variant="hero" size="lg" className="mt-2 w-full" asChild>
              <a href="#contact" onClick={() => setOpen(false)}>
                Start Your Project <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
