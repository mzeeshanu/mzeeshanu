import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], weight: ["300", "400"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL("https://mzeeshanu.com"),
  title: "Zeeshan Umar — Technical Lead, Backend & Data Integration",
  description:
    "Fourteen years building event-driven platforms, data pipelines and the backend infrastructure that makes everything else fast.",
  openGraph: {
    title: "Zeeshan Umar",
    description: "Technical Lead · Backend & Data Integration",
    url: "https://mzeeshanu.com",
    siteName: "Zeeshan Umar",
    type: "profile",
  },
};

export const viewport: Viewport = { themeColor: "#0b0b0c" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
