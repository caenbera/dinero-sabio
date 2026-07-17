"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Globe2, BarChart3, LineChart, TrendingUp, ShieldCheck } from "lucide-react";

const portfolios = [
  {
    title: "Inversión de Corto Plazo",
    image: "/03-inversion-corto-plazo.png",
    description: "Preservación del capital y alta liquidez. Ideal para contingencias y flujos comerciales a menos de un año.",
    horizon: "0 - 12 Meses",
    asset: "Fondos Monetarios y Deuda Soberana de Corto Plazo",
    icon: Calendar,
  },
  {
    title: "Mediano y Largo Plazo",
    image: "/03-inversion-mediano-largo-plazo.png",
    description: "Crecimiento compuesto mediante portafolios diversificados de renta fija y renta variable global.",
    horizon: "3 - 7+ Años",
    asset: "Acciones Globales, Bonos Corporativos, Real Estate",
    icon: LineChart,
  },
  {
    title: "Inversión Global Premium",
    image: "/03-inversion-global.png",
    description: "Acceso exclusivo a mercados privados, capital de riesgo y fondos internacionales selectos.",
    horizon: "5+ Años (Estratégico)",
    asset: "Private Equity, Venture Capital, Alternativos",
    icon: Globe2,
  },
];

export default function AhorroInversion() {
  return (
    <div className="flex flex-col min-h-screen bg-black-principal">
      {/* Hero Section */}
      <section className="relative h-[480px] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/03-hero-ahorro-inversion.png"
            alt="Estrategias de Ahorro e Inversión"
            fill
            priority
            className="object-cover scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[620px]"
          >
            <span className="font-sans text-xs font-bold tracking-widest text-gold-principal uppercase">
              Patrimonio Inteligente
            </span>
            <h1 className="font-serif text-5xl md:text-52px font-medium text-white-warm mt-3 leading-tight">
              Estrategias de <span className="text-gold-gradient">Ahorro e Inversión</span>
            </h1>
            <p className="font-sans text-lg text-grey-warm/80 mt-4 leading-relaxed font-light">
              Portafolios estructurados internacionalmente para multiplicar su capital con la gestión de riesgos más sofisticada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section: Philosophy */}
      <section className="py-24 bg-gradient-principal">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="font-sans text-xs font-bold tracking-widest text-gold-principal uppercase">
              Asignación Global Táctica
            </span>
            <h2 className="font-serif text-3xl md:text-42px font-medium text-white-warm">
              Diversificación real sin fronteras geográficas
            </h2>
            <p className="font-sans text-base text-grey-warm/80 leading-relaxed">
              Mantener el patrimonio concentrado en una única divisa o país expone su capital a riesgos innecesarios. En Dinero Sabio diseñamos portafolios multiactivos distribuidos globalmente para amortiguar la volatilidad cambiaria y geopolítica.
            </p>
            <p className="font-sans text-base text-grey-warm/80 leading-relaxed">
              Nuestros portafolios emplean instrumentos de bajo costo, alta eficiencia fiscal y liquidez optimizada para asegurar que sus fondos trabajen eficientemente según el horizonte planteado.
            </p>

            <div className="mt-4 flex gap-4">
              <Link
                href="/soluciones-ahorro-inversion"
                className="font-sans font-semibold text-sm tracking-wider text-black-principal bg-gold-principal px-8 py-4 rounded-custom-button hover:bg-gold-light transition-custom"
              >
                Ver Soluciones Detalladas
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[450px] w-full overflow-hidden rounded-custom-image border border-gold-principal/20 shadow-2xl">
            <Image
              src="/03-ahorro-inversion.png"
              alt="Estrategias de inversión global"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black-principal/80 via-transparent to-transparent" />
          </div>

        </div>
      </section>

      {/* Portfolios Section */}
      <section className="py-24 bg-[#0F130F] border-t border-gold-principal/12">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="font-sans text-xs font-bold tracking-widest text-gold-principal uppercase">
              Modelos de Portafolio
            </span>
            <h2 className="font-serif text-3xl md:text-42px font-medium text-white-warm mt-3">
              Soluciones estructuradas por horizonte temporal
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {portfolios.map((portfolio, index) => {
              const Icon = portfolio.icon;
              return (
                <motion.div
                  key={portfolio.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-green-deep border border-gold-principal/18 rounded-custom-card overflow-hidden card-shadow flex flex-col h-[560px]"
                >
                  <div className="relative h-[210px] w-full overflow-hidden">
                    <Image
                      src={portfolio.image}
                      alt={portfolio.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-deep to-transparent opacity-60" />
                  </div>

                  <div className="p-7 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-gold-principal mb-2">
                        <Icon className="w-5 h-5 stroke-[2px]" />
                        <span className="font-sans text-xs font-bold uppercase tracking-wider">
                          Horizonte: {portfolio.horizon}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl text-gold-light font-medium tracking-wide">
                        {portfolio.title}
                      </h3>
                      <p className="font-sans text-sm text-grey-warm/80 mt-3 leading-relaxed">
                        {portfolio.description}
                      </p>
                    </div>

                    <div className="border-t border-gold-principal/10 pt-4 mt-4">
                      <span className="font-sans text-xs text-grey-warm/50 block mb-1">
                        Clase de Activo Principal:
                      </span>
                      <span className="font-sans text-xs font-semibold text-gold-light">
                        {portfolio.asset}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategies callout */}
      <section className="py-24 bg-green-deep border-y border-gold-principal/12">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 relative h-[450px] w-full overflow-hidden rounded-custom-image border border-gold-principal/20 shadow-2xl order-last lg:order-first">
            <Image
              src="/03-estrategias de ahorro.png"
              alt="Estrategias de Ahorro"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black-principal/80 via-transparent to-transparent" />
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="font-sans text-xs font-bold tracking-widest text-gold-principal uppercase">
              Ahorro Sistemático
            </span>
            <h2 className="font-serif text-4xl font-medium text-white-warm">
              Estrategias de Capitalización <span className="text-gold-gradient">Sistemática</span>
            </h2>
            <p className="font-sans text-base text-grey-warm/80 leading-relaxed">
              El ahorro efectivo no depende de la especulación de mercados de corto plazo. Diseñamos planes de ahorro sistemático (DCA) que permiten automatizar la compra de activos de alta calidad a precios promedio optimizados.
            </p>
            <p className="font-sans text-base text-grey-warm/80 leading-relaxed">
              Esta metodología reduce sustancialmente el impacto de la volatilidad emocional de los mercados y permite que el interés compuesto potencie su riqueza con constancia.
            </p>
            
            <div className="flex gap-4 mt-2">
              <Link
                href="/contacto"
                className="font-sans font-semibold text-sm tracking-wider text-black-principal bg-gold-principal px-8 py-4 rounded-custom-button hover:bg-gold-light transition-custom"
              >
                Agendar Consulta de Inversión
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
