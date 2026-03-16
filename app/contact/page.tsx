import { Mail, Building2, Home, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-200 text-slate-900 flex flex-col">
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-3">
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
          </a>

          <div className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a href="/" className="transition hover:text-[#1f4a6e]">
              Home
            </a>
            <a href="/owners" className="transition hover:text-[#1f4a6e]">
              Owners
            </a>
            <a href="/residents" className="transition hover:text-[#1f4a6e]">
              Residents
            </a>
            <a href="/contact" className="transition hover:text-[#1f4a6e]">
              Contact
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl flex-grow px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="inline-flex rounded-full border border-[#b9c9d8] px-4 py-1 text-xs uppercase tracking-[0.18em] text-[#1f4a6e]">
              Contact LongPM
            </div>

            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
              Start the conversation.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Reach out for management inquiries, property-related questions,
              leasing interest, or general follow-up.
            </p>

            <div className="mt-10 grid gap-4">
              <Card className="rounded-[2rem] border-[#d7e0e8] bg-white shadow-sm">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="rounded-2xl bg-blue-50 p-3">
                    <Building2 className="h-5 w-5 text-[#1f4a6e]" />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-slate-900">
                      Property Owners
                    </div>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Interested in management services or submitting a property
                      for review? We’d be glad to hear more.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[2rem] border-[#d7e0e8] bg-white shadow-sm">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="rounded-2xl bg-blue-50 p-3">
                    <Home className="h-5 w-5 text-[#1f4a6e]" />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-slate-900">
                      Residents & Prospective Residents
                    </div>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Questions about available properties, applications, or
                      general resident resources? Send us a message below.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[2rem] border-[#d7e0e8] bg-white shadow-sm">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="rounded-2xl bg-blue-50 p-3">
                    <Mail className="h-5 w-5 text-[#1f4a6e]" />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-slate-900">
                      Contact Form Preferred
                    </div>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      The best way to reach LongPM is through the contact form
                      so your message gets routed correctly.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="rounded-[2rem] border-[#d7e0e8] bg-white shadow-sm">
            <CardContent className="p-8 sm:p-10">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-slate-900">
                  Send a Message
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Complete the form below and someone from LongPM will follow up.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Input className="h-12 rounded-2xl" placeholder="Name" />
                <Input className="h-12 rounded-2xl" placeholder="Email" />
                <Input
                  className="h-12 rounded-2xl sm:col-span-2"
                  placeholder="Subject"
                />
                <Textarea
                  className="min-h-[180px] rounded-2xl sm:col-span-2"
                  placeholder="How can we help?"
                />
              </div>

              <Button
                type="submit"
                className="mt-6 rounded-full px-7 bg-[#1f4a6e] text-white hover:bg-[#173c59]"
              >
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
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