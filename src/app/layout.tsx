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
  title: "Dinero Sabio | Asesoría Financiera y Patrimonial Premium",
  description: "Firma privada de asesoría patrimonial de alto nivel. Estrategias sofisticadas para proteger, estructurar y hacer crecer su patrimonio con total tranquilidad y exclusividad.",
  manifest: "/manifest.json",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
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
