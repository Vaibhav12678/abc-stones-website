import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import QuoteModal from "@/components/ui/QuoteModal";
import { QuoteProvider } from "@/components/ui/QuoteContext";
import { SITE_NAME } from "@/lib/constants";
import OrganizationJsonLd from "@/components/seo/JsonLd";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abcstonesindia.com"),
  title: {
    default: `${SITE_NAME} | Premium Imported Marble & Granite`,
    template: `%s | ${SITE_NAME}`,
  },
  description: `${SITE_NAME} — Premium imported marble, granite and natural stone for luxury homes, architects, interior designers, hospitality and commercial projects. Backed by 30+ years of stone expertise.`,
  openGraph: {
    title: `${SITE_NAME} | Premium Imported Marble & Granite`,
    description: `Discover premium imported marble, granite and natural stone from ${SITE_NAME}. Over 30 years of industry experience.`,
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans bg-[#FAF8F3] text-[#11100F] antialiased selection:bg-gold selection:text-cream min-h-screen flex flex-col">
        <OrganizationJsonLd />
        <QuoteProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <QuoteModal />
        </QuoteProvider>
      </body>
    </html>
  );
}
