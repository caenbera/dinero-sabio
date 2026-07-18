import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"
  ),
  title: "Dinero Sabio | Asesoría Financiera y Patrimonial Premium",
  description: "Firma privada de asesoría patrimonial de alto nivel. Estrategias sofisticadas para proteger, estructurar y hacer crecer su patrimonio con total tranquilidad y exclusividad.",
  manifest: "/manifest.json",
  icons: {
    icon: "/AppIcons/playstore.png",
    apple: "/AppIcons/playstore.png",
  },
  openGraph: {
    title: "Dinero Sabio | Asesoría Financiera y Patrimonial Premium",
    description: "Firma privada de asesoría patrimonial de alto nivel. Estrategias sofisticadas para proteger, estructurar y hacer crecer su patrimonio con total tranquilidad y exclusividad.",
    url: "/",
    siteName: "Dinero Sabio",
    images: [
      {
        url: "/AppIcons/playstore-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Dinero Sabio",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinero Sabio | Asesoría Financiera y Patrimonial Premium",
    description: "Firma privada de asesoría patrimonial de alto nivel. Estrategias sofisticadas para proteger, estructurar y hacer crecer su patrimonio con total tranquilidad y exclusividad.",
    images: ["/AppIcons/playstore-banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black-principal text-white-warm selection:bg-gold-principal selection:text-black-principal">
        <Navbar />
        <main className="flex-grow pt-[92px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
