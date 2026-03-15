import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/longpm-logo.png"
              alt="Long Property Management logo"
              className="h-14 w-auto object-contain"
            />
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-900">
                LongPM
              </div>
              <div className="text-xs text-slate-600">
                Performance Driven Property Management
              </div>
            </div>
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
          Contact LongPM
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Use the form below for general questions or property-related follow-up.
        </p>

        <Card className="mt-10 rounded-[2rem] border-slate-200 shadow-sm">
          <CardContent className="p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input className="h-12 rounded-2xl" placeholder="Name" />
              <Input className="h-12 rounded-2xl" placeholder="Email" />
              <Input className="h-12 rounded-2xl sm:col-span-2" placeholder="Subject" />
              <Textarea
                className="min-h-[180px] rounded-2xl sm:col-span-2"
                placeholder="How can we help?"
              />
            </div>
            <Button className="mt-6 rounded-full px-7">Send Message</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}