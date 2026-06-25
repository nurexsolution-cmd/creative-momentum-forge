import { Mail, Phone, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const colMarketing = ["PPC Management", "SEO", "Social Media", "Content Marketing", "Email Marketing"];
const colDev = ["Web Design", "Web Development", "Mobile Apps", "UI/UX Design", "E-commerce"];
const colCompany = ["About", "Case Studies", "Blog", "Careers", "Contact"];

const partners = ["Google Partner", "Meta Business", "HubSpot", "Shopify Plus"];

export function Footer() {
  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a href="#home" className="flex items-center gap-2 font-display text-xl font-bold">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
                N
              </span>
              <span>Nurex Solutions</span>
            </a>
            <p className="mt-5 max-w-sm text-sm text-dark-foreground/70">
              We're a senior digital marketing and software development team helping ambitious
              brands scale revenue with measurable, accountable work.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a href="mailto:hello@nexus.agency" className="flex items-center gap-3 text-dark-foreground/80 hover:text-primary">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-dark-foreground/10">
                  <Mail className="h-4 w-4" />
                </span>
                hello@nexus.agency
              </a>
              <a href="tel:+15555550100" className="flex items-center gap-3 text-dark-foreground/80 hover:text-primary">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-dark-foreground/10">
                  <Phone className="h-4 w-4" />
                </span>
                +1 (555) 555-0100
              </a>
            </div>
          </div>

          <FooterCol title="Digital Marketing" items={colMarketing} />
          <FooterCol title="Design & Development" items={colDev} />
          <FooterCol
            title="Company"
            items={colCompany}
            badge={
              <span className="ml-2 inline-flex items-center rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                We're hiring 🔥
              </span>
            }
          />
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-dark-foreground/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            {partners.map((p) => (
              <span
                key={p}
                className="rounded-full border border-dark-foreground/15 px-3 py-1.5 text-xs font-medium text-dark-foreground/70"
              >
                {p}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-wider text-dark-foreground/60">
              Follow Us
            </span>
            {[Twitter, Linkedin, Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid h-9 w-9 place-items-center rounded-full bg-dark-foreground/10 text-dark-foreground hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-dark-foreground/10 pt-6 text-xs text-dark-foreground/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Nurex Solutions. All rights reserved.</p>
          <a href="#" className="hover:text-primary">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
  badge,
}: {
  title: string;
  items: string[];
  badge?: React.ReactNode;
}) {
  return (
    <div className="lg:col-span-2">
      <h4 className="flex items-center font-display text-sm font-bold uppercase tracking-wider">
        {title}
        {badge}
      </h4>
      <ul className="mt-5 space-y-3 text-sm">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="text-dark-foreground/70 hover:text-primary">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
