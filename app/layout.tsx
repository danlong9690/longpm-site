import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Long Property Management | Performance Driven Property Management",
  description:
    "Long Property Management serves owners and residents in Charleston and surrounding areas with performance-driven property management, leasing resources, and resident support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}