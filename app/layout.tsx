import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Halland: The Nordic Blue Zone",
  description: "Sweden's unofficial Blue Zone with the highest life expectancy and highest density of Michelin restaurants per capita. World-class healthcare innovation meets exceptional food culture, art, and coastal nature.",
  keywords: ["Halland", "Blue Zone", "longevity", "Sweden", "Michelin", "ÄNG", "Knystaforsen", "healthcare", "CAISR", "food culture"],
  icons: {
    icon: "/browser-tabe-image.png",
    apple: "/browser-tabe-image.png",
  },
  openGraph: {
    title: "Halland: The Nordic Blue Zone",
    description: "Sweden's unofficial Blue Zone. Highest life expectancy. Highest Michelin restaurant density per capita. Where science meets the sea.",
    type: "website",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Longevity Halland",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-stone-50 text-stone-800`}
      >
        {children}
      </body>
    </html>
  );
}
