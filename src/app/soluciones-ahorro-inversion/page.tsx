"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Landmark, BadgePercent, Coins, BarChart4 } from "lucide-react";

const solutions = [
  {
    title: "Fondos de Liquidez e Interés Compuesto",
    description: "Maximice el rendimiento de sus excedentes de efectivo con instrumentos de bajísimo riesgo y disponibilidad inmediata.",
    icon: Coins,
    features: [
      "Rendimientos competitivos en USD y EUR",
      "Disponibilidad diaria o semanal",
      "Diversificación en bonos soberanos AAA",
    ],
  },
  {
    title: "Portafolios Indexados de Bajo Costo",
    description: "Acceso diversificado a la economía global mediante fondos cotizados (ETFs) líderes, optimizados fiscalmente.",
    icon: BarChart4,
    features: [
      "Gastos de administración inferiores al 0.15% anual",
      "Rebalanceo automatizado o táctico",
      "Estructuración multi-divisa",
    ],
  },
  {
    title: "Estructuras de Co-Inversión en Real Estate",
    description: "Participación en desarrollos inmobiliarios residenciales y comerciales premium en mercados desarrollados.",
    icon: Landmark,
    features: [
      "Flujos de efectivo estables por rentas",
      "Estructuras fiduciarias seguras",
      "Ubicaciones triple A (EE.UU. y Europa)",
    ],
  },
];

export default function SolucionesAhorroInversion() {
  return (
    <div className="flex flex-col min-h-screen bg-black-principal">
      {/* Hero Section */}
      <section className="relative h-[480px] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/07-hero-soluciones-ahorro-inversion.png"
            alt="Soluciones de Ahorro e Inversión"
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
              Catálogo Exclusivo
            </span>
            <h1 className="font-serif text-5xl md:text-52px font-medium text-white-warm mt-3 leading-tight">
              Soluciones de <span className="text-gold-gradient">Ahorro e Inversión</span>
            </h1>
            <p className="font-sans text-lg text-grey-warm/80 mt-4 leading-relaxed font-light">
              Nuestra gama de vehículos de inversión estructurados para optimizar rendimientos y resguardar el patrimonio familiar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Detail */}
      <section className="py-24 bg-gradient-principal">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 flex flex-col gap-8">
            <span className="font-sans text-xs font-bold tracking-widest text-gold-principal uppercase">
              Opciones de Inversión Premium
            </span>
            <h2 className="font-serif text-3xl md:text-42px font-medium text-white-warm">
              Vehículos de inversión adaptados a sus objetivos
            </h2>
            
            <div className="flex flex-col gap-6">
              {solutions.map((sol, index) => {
                const Icon = sol.icon;
                return (
                  <div key={sol.title} className="bg-green-deep/50 border border-gold-principal/15 rounded-custom-card p-6 flex flex-col md:flex-row gap-6 hover:border-gold-principal/30 transition-custom">
                    <div className="w-12 h-12 rounded-xl bg-gold-principal/10 border border-gold-principal/20 flex items-center justify-center text-gold-principal flex-shrink-0">
                      <Icon className="w-6 h-6 stroke-[2px]" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="font-serif text-xl text-gold-light font-medium">
                        {sol.title}
                      </h3>
                      <p className="font-sans text-sm text-grey-warm/80 leading-relaxed">
                        {sol.description}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                        {sol.features.map((feat) => (
                          <li key={feat} className="font-sans text-xs text-grey-warm/90 flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold-principal flex-shrink-0" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[500px] w-full overflow-hidden rounded-custom-image border border-gold-principal/20 shadow-2xl">
            <Image
              src="/07-soluciones-ahorro.inversion.png"
              alt="Detalles de soluciones financieras"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black-principal/80 via-transparent to-transparent" />
          </div>

        </div>
      </section>

      {/* CTA Box */}
      <section className="py-24 bg-[#0E120D] border-t border-gold-principal/12">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="bg-[#182116] border border-gold-principal/20 rounded-custom-card p-12 text-center flex flex-col items-center gap-6 shadow-2xl">
            <span className="font-sans text-xs font-bold tracking-widest text-gold-principal uppercase">
              Asesoría de Portafolio
            </span>
            <h2 className="font-serif text-3xl md:text-42px font-medium text-white-warm max-w-[650px] leading-tight">
              ¿Desea evaluar el rendimiento de su cartera actual?
            </h2>
            <p className="font-sans text-base text-grey-warm/85 max-w-[550px] font-light leading-relaxed">
              Realizamos una auditoría sin costo de sus inversiones vigentes para identificar cobros excesivos de comisiones y áreas de mejora en diversificación.
            </p>
            <div className="mt-2">
              <Link
                href="/contacto"
                className="font-sans font-semibold text-sm tracking-wider text-black-principal bg-gold-principal px-8 py-4.5 rounded-custom-button hover:bg-gold-light transition-custom inline-flex items-center gap-2"
              >
                Solicitar Auditoría de Cartera <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
