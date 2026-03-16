"use client";

import { Home, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (

    <div
      className="min-h-screen bg-cover bg-center bg-fixed text-slate-900"
      style={{ backgroundImage: "url('/charleston-bg.jpg')" }}
    >

      {/* Soft overlay for readability */}

      <div className="min-h-screen bg-white/75 backdrop-blur-[2px]">

        {/* HEADER */}

        <header className="border-b border-slate-200 bg-white/95">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

            <div className="flex items-center gap-3">

              <img
                src="/longpm-logo.png"
                alt="Long Property Management logo"
                className="h-14 w-auto object-contain"
              />

              <div>
                <div className="text-sm font-semibold tracking-[0.05em] text-slate-900">
                  Long Property Management
                </div>

                <div className="text-xs text-slate-600">
                  Performance Driven Property Management
                </div>
              </div>

            </div>

            <div className="hidden sm:block">
              <Button
                asChild
                className="rounded-full px-6 bg-[#1f4a6e] hover:bg-[#173c59] text-white"
              >
                <a href="/contact">Contact</a>
              </Button>
            </div>

          </div>
        </header>

        {/* MAIN CONTENT */}

        <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">

          {/* HERO */}

          <div className="mx-auto max-w-3xl text-center">

            <div className="inline-flex rounded-full border border-[#1f4a6e] px-4 py-1 text-xs uppercase tracking-[0.18em] text-[#1f4a6e]">
              Charleston & Surrounding Areas
            </div>

            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
              Property management for owners. Resources for residents.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Long Property Management serves both property owners and residents,
              but each has different needs. Choose your path below.
            </p>

          </div>

          {/* CARDS */}

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2">

            {/* OWNER CARD */}

            <Card className="rounded-[2rem] border border-slate-200 bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition duration-300">

              <CardContent className="p-10">

                <div className="inline-flex rounded-2xl bg-blue-50 p-3">
                  <Building2 className="h-6 w-6 text-[#1f4a6e]" />
                </div>

                <h2 className="mt-6 text-2xl font-semibold text-slate-900">
                  I’m an Owner
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Learn how LongPM helps investors protect occupancy,
                  improve operations, reduce turnover, and drive
                  stronger property performance.
                </p>

                <Button
                  asChild
                  className="mt-8 rounded-full px-6 bg-[#1f4a6e] hover:bg-[#173c59] text-white"
                >
                  <a href="/owners">
                    Go to Owner Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>

              </CardContent>

            </Card>

            {/* RESIDENT CARD */}

            <Card className="rounded-[2rem] border border-slate-200 bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition duration-300">

              <CardContent className="p-10">

                <div className="inline-flex rounded-2xl bg-blue-50 p-3">
                  <Home className="h-6 w-6 text-[#1f4a6e]" />
                </div>

                <h2 className="mt-6 text-2xl font-semibold text-slate-900">
                  I’m a Resident / Prospective Resident
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Browse available properties, apply online,
                  and access resident resources designed
                  for current and future tenants.
                </p>

                <Button
                  asChild
                  className="mt-8 rounded-full px-6 bg-[#1f4a6e] hover:bg-[#173c59] text-white"
                >
                  <a href="/residents">
                    Go to Resident Resources
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>

              </CardContent>

            </Card>

          </div>

        </main>

      </div>

    </div>
  );
}