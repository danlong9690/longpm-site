"use client";

import React, { useMemo, useState } from "react";
import { Search, Star, Menu, X, Home } from "lucide-react";
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

const sampleProperties = [
  {
    name: "Park Circle Townhome",
    city: "Charleston Area, SC",
    type: "Single Family Rental",
    beds: 3,
    baths: 2,
    rent: "$2,195/mo",
    status: "Available",
  },
  {
    name: "Ashley Terrace Apartment",
    city: "Charleston Area, SC",
    type: "Apartment",
    beds: 2,
    baths: 1,
    rent: "$1,550/mo",
    status: "Available",
  },
  {
    name: "Charleston Area Retail Suite",
    city: "Charleston Area, SC",
    type: "Commercial Space",
    beds: "Lease",
    baths: "N/A",
    rent: "Contact for rate",
    status: "Coming Soon",
  },
];

export default function ResidentsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredProperties = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return sampleProperties;
    return sampleProperties.filter((p) =>
      [p.name, p.city, p.type, p.status].join(" ").toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-slate-175 text-slate-900 flex flex-col">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/longpm-logo.png"
              alt="Long Property Management logo"
              className="h-14 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <div className="text-sm font-semibold tracking-[0.05em] text-slate-900">
                Long Property Management
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
                className="text-sm font-medium text-slate-700 transition hover:text-[#1f4a6e]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              asChild
              className="rounded-full px-6 bg-[#1f4a6e] text-white hover:bg-[#173c59]"
            >
              <a href="/contact">Contact</a>
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
                  className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#1f4a6e]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                asChild
                className="mt-2 rounded-full bg-[#1f4a6e] text-white hover:bg-[#173c59]"
              >
                <a href="/contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
              </Button>
            </div>
          </div>
        ) : null}
      </header>

      <main className="mx-auto max-w-7xl flex-grow px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Badge
            variant="outline"
            className="rounded-full border-[#b9c9d8] px-4 py-1 text-xs uppercase tracking-[0.18em] text-[#1f4a6e]"
          >
            Resident Resources
          </Badge>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
            Find Your Next Home
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Browse available properties managed by LongPM and submit rental
            applications online.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative max-w-md flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by location, asset type, or status"
              className="h-12 rounded-full border-slate-300 pl-11"
            />
          </div>

          <Button
            variant="outline"
            className="rounded-full border-[#b9c9d8] px-6 text-[#1f4a6e] hover:bg-blue-50"
          >
            Resident Review Portal
          </Button>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {filteredProperties.map((property) => (
            <Card
              key={property.name}
              className="overflow-hidden rounded-[2rem] border-[#d7e0e8] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-blue-50 via-slate-50 to-white">
                <Home className="h-10 w-10 text-[#1f4a6e]" />
              </div>

              <CardContent className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xl font-semibold text-slate-900">
                      {property.name}
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                      {property.city}
                    </div>
                  </div>

                  <Badge className="rounded-full bg-[#1f4a6e] text-white hover:bg-[#1f4a6e]">
                    {property.status}
                  </Badge>
                </div>

                <div className="mt-5 text-sm font-medium text-slate-900">
                  {property.type}
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3 text-sm text-slate-600">
                  <div>
                    <div className="text-xs uppercase tracking-wide text-slate-400">
                      Beds
                    </div>
                    <div className="mt-1 font-medium text-slate-900">
                      {property.beds}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-wide text-slate-400">
                      Baths
                    </div>
                    <div className="mt-1 font-medium text-slate-900">
                      {property.baths}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-wide text-slate-400">
                      Rate
                    </div>
                    <div className="mt-1 font-medium text-slate-900">
                      {property.rent}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <Button className="rounded-full bg-[#1f4a6e] text-white hover:bg-[#173c59]">
                    Apply Now
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full border-[#b9c9d8] text-[#1f4a6e] hover:bg-blue-50"
                  >
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Card className="rounded-[2rem] border-[#d7e0e8] bg-white shadow-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-3">
                <Star className="h-5 w-5 text-[#1f4a6e]" />
                <h3 className="text-xl font-semibold text-slate-900">
                  Resident review submission
                </h3>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Share your experience as a current or prior resident.
              </p>

              <div className="mt-6 grid gap-4">
                <Input className="rounded-2xl" placeholder="Resident name" />
                <Input className="rounded-2xl" placeholder="Property address" />
                <Input className="rounded-2xl" placeholder="Star rating (1-5)" />
                <Textarea
                  className="min-h-[120px] rounded-2xl"
                  placeholder="Share your experience"
                />
                <Button
                  type="submit"
                  className="w-fit rounded-full px-6 bg-[#1f4a6e] text-white hover:bg-[#173c59]"
                >
                  Submit Review
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border-[#d7e0e8] bg-white shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-slate-900">
                Resident tools
              </h3>

              <div className="mt-6 grid gap-4 text-sm leading-6 text-slate-600">
                <div className="rounded-2xl bg-slate-50 p-4">
                  Available property search
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  Online rental applications
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  Resident review submission
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  Future maintenance request portal
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  Future resident login integration
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-10 sm:px-6 lg:flex-row lg:px-8">
          <div className="flex items-center gap-3">
            <img
              src="/longpm-logo.png"
              alt="Long Property Management logo"
              className="h-12 w-auto object-contain"
            />
            <div>
              <div className="text-sm font-semibold tracking-[0.05em] text-slate-900">
                Long Property Management
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