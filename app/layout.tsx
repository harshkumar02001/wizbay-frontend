import type { Metadata } from "next";
import { Geist, Geist_Mono, Tenor_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tenorSans = Tenor_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wizbay | Product details",
  description: "List your product on Wizbay",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${tenorSans.className} min-h-full flex flex-col [zoom:0.875] [&_button]:cursor-pointer`}>{children}</body>
    </html>
  );
}
