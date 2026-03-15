"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Home,
  Hotel,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Owners", href: "/owners" },
  { label: "Residents", href: "/residents" },
  { label: "Contact", href: "/contact" },
];

const managedAssets = [
  {
    icon: Home,
    title: "Single Family Portfolio Management",
    text: "Full-service management for investors with rental home portfolios who expect disciplined oversight, responsive execution, and strong operational consistency.",
  },
  {
    icon: Building2,
    title: "Multifamily Property Management",
    text: "Management built around occupancy, resident retention, maintenance execution, and the daily details that protect long-term asset performance.",
  },
  {
    icon: Briefcase,
    title: "Commercial Property Management",
    text: "Professional oversight for commercial owners who need stronger communication, cleaner operations, and better accountability from their management team.",
  },
  {
    icon: Hotel,
    title: "Short-Term Rental Management",
    text: "Structured management focused on guest experience, turnover coordination, listing quality, and revenue-minded execution.",
  },
];

const services = [
  "Leasing and tenant placement",
  "Rent collection and owner reporting",
  "Maintenance coordination and vendor management",
  "Resident communication and retention support",
  "Property inspections and turnover oversight",
  "Commercial tenant coordination",
  "Short-term rental operations and guest management",
  "Performance-focused operational oversight",
];

const fitPoints = [
  "Owners with single-family portfolios",
  "Commercial property owners seeking stronger management",
  "Investors frustrated by poor communication or reactive service",
  "Owners who value resident experience and long-term property condition",
];

const notFitPoints = [
  "Owners unwilling to make necessary repairs",
  "Properties allowed to deteriorate over time",
  "Clients seeking the cheapest option instead of disciplined management",
  "Ownership groups that are not aligned with quality operations",
];

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-3xl space-y-3">
      <Badge
        variant="outline"
        className="rounded-full border-slate-300 px-4 py-1 text-xs uppercase tracking-[0.18em] text-slate-700"
      >
        {eyebrow}
      </Badge>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {text ? (
        <p className="text-base leading-7 text-slate-600 sm:text-lg">{text}</p>
      ) : null}
    </div>
  );
}

export default function OwnersPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/longpm-logo.png"
              alt="Long Property Management logo"
              className="h-14 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-900">
                LongPM
              </div>
              <div className="text-xs text-slate-600">
                Performance Driven Property Management
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 transition hover:text-slate-950"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild className="rounded-full px-5">
              <a href="#apply">Request Consideration</a>
            </Button>
          </div>

          <button
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 p-2 lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen ? (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6 lg:px-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <main className="flex-grow">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(15,23,42,0.06),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.08),_transparent_30%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative space-y-8"
            >
              <Badge
                variant="outline"
                className="rounded-full border-slate-300 px-4 py-1 text-xs uppercase tracking-[0.18em] text-slate-700"
              >
                Owner Services
              </Badge>

              <div className="space-y-5">
                <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                  Performance-driven property management for serious investors.
                </h1>
                <p className="max-w-xl text-lg leading-8 text-slate-600">
                  LongPM helps owners protect occupancy, reduce turnover,
                  improve resident satisfaction, and drive stronger long-term
                  asset performance.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full px-7">
                  <a href="#apply">
                    Submit Property for Review
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-7">
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </motion.div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-7 shadow-2xl">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-8 text-white">
                <div className="grid gap-4 sm:grid-cols-2">
                  {managedAssets.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-white/10 bg-white/5 p-5"
                      >
                        <Icon className="h-6 w-6" />
                        <div className="mt-4 text-base font-semibold">{item.title}</div>
                        <div className="mt-2 text-sm leading-6 text-slate-300">
                          {item.text}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-slate-950">
              Investor-Led Property Management
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              LongPM was built by an active real estate investor who understands
              exactly what makes an investment succeed or fail.
            </p>

            <div className="mt-8 max-w-3xl space-y-5 text-slate-600">
              <p>Our experience includes:</p>

              <ul className="list-inside list-disc space-y-2">
                <li>Apartment communities</li>
                <li>Single-family rental portfolios</li>
                <li>Commercial retail property</li>
                <li>Short-term vacation rentals</li>
              </ul>

              <p>
                This perspective allows LongPM to approach management decisions
                with an owner&apos;s mindset instead of a traditional property
                manager mindset.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-slate-50/70">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="About LongPM"
              title="A higher standard of property management for owners who expect performance."
              text="LongPM was created after firsthand experience with property management companies that fell short where it mattered most: communication, accountability, responsiveness, and disciplined execution."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <Card className="rounded-[2rem] border-slate-200 shadow-sm">
                <CardContent className="p-8 sm:p-10">
                  <div className="space-y-5 leading-7 text-slate-600">
                    <p>
                      We built LongPM to manage properties the way owners
                      actually need them managed — with strong operational
                      oversight, close attention to financial performance, and a
                      resident experience that supports retention and protects
                      asset value.
                    </p>
                    <p>
                      LongPM is intentionally selective. We partner with owners
                      who care about the long-term health of their assets and
                      who understand that better property management requires
                      standards, responsiveness, and alignment.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6">
                {[
                  [
                    "Approachable but elite",
                    "Professional, responsive, and relationship-driven without sacrificing standards.",
                  ],
                  [
                    "Broad operator experience",
                    "Grounded in real-world ownership and practical property operations.",
                  ],
                  [
                    "Performance mindset",
                    "Focused on occupancy, retention, maintenance execution, and financial discipline.",
                  ],
                ].map(([title, text]) => (
                  <Card key={title} className="rounded-[2rem] border-slate-200 shadow-sm">
                    <CardContent className="p-7">
                      <div className="text-lg font-semibold text-slate-950">{title}</div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Services"
              title="Full-service management across key asset types."
              text="LongPM offers comprehensive, performance-focused property management services for owners who want cleaner operations and better oversight."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {managedAssets.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="rounded-[2rem] border-slate-200 shadow-sm">
                    <CardContent className="p-7">
                      <div className="inline-flex rounded-2xl bg-slate-100 p-3">
                        <Icon className="h-6 w-6 text-slate-900" />
                      </div>
                      <h3 className="mt-5 text-xl font-semibold text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <Card className="rounded-[2rem] border-slate-200 shadow-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-slate-950">
                    Core Management Services
                  </h3>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {services.map((service) => (
                      <div key={service} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-900" />
                        <span className="text-sm leading-6 text-slate-600">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[2rem] border-slate-200 shadow-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-slate-950">
                    Who we work with
                  </h3>
                  <div className="mt-6 space-y-4">
                    {fitPoints.map((point) => (
                      <div key={point} className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-900" />
                        <p className="text-sm leading-6 text-slate-600">{point}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12">
              <Card className="rounded-[2rem] border-slate-200 shadow-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-slate-950">
                    Not the right fit
                  </h3>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {notFitPoints.map((point) => (
                      <div key={point} className="flex gap-3">
                        <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-slate-900" />
                        <p className="text-sm leading-6 text-slate-600">{point}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="apply" className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Apply for Management"
              title="Request management consideration."
              text="Because LongPM is selective, prospective clients should submit their property for review."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <Card className="rounded-[2rem] border-white/10 bg-white/5 text-white shadow-none">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold">What we look for</h3>
                  <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
                    <p>Well-positioned properties with ownership willing to maintain standards.</p>
                    <p>Alignment on repairs, upkeep, and resident experience.</p>
                    <p>Owners seeking stronger accountability, not just cheaper management.</p>
                    <p>Properties in Charleston and surrounding areas that fit our operating model.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[2rem] border-white/10 bg-white text-slate-900 shadow-none">
                <CardContent className="p-8">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input className="h-12 rounded-2xl" placeholder="Name" />
                    <Input className="h-12 rounded-2xl" placeholder="Email" />
                    <Input className="h-12 rounded-2xl" placeholder="Property address" />
                    <Input className="h-12 rounded-2xl" placeholder="Property type" />
                    <Input className="h-12 rounded-2xl" placeholder="Number of units" />
                    <Input className="h-12 rounded-2xl" placeholder="Current occupancy" />
                    <Input className="h-12 rounded-2xl" placeholder="Current rent levels" />
                    <Input className="h-12 rounded-2xl" placeholder="Year built" />
                  </div>
                  <Textarea
                    className="mt-4 min-h-[140px] rounded-2xl"
                    placeholder="Brief description of the property, current challenges, and why you are exploring a new management partner"
                  />
                  <Button type="submit" className="mt-6 rounded-full px-7">
                    Submit Property for Review
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-10 sm:px-6 lg:flex-row lg:px-8">
          <div className="flex items-center gap-3">
            <img
              src="/longpm-logo.png"
              alt="LongPM logo"
              className="h-12 w-auto object-contain"
            />
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-900">
                LongPM
              </div>
              <div className="text-xs text-slate-500">
                Performance Driven Property Management
              </div>
            </div>
          </div>

          <div className="flex gap-6 text-sm text-slate-600">
            <a href="/">Home</a>
            <a href="/owners">Owners</a>
            <a href="/residents">Residents</a>
            <a href="/contact">Contact</a>
          </div>
        </div>

        <div className="pb-6 text-center text-xs text-slate-400">
          © Long Property Management
        </div>
      </footer>
    </div>
  );
}