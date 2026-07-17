"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Coins, Scale, Building2, Briefcase, FileCheck } from "lucide-react";

const solutions = [
  {
    title: "Estrategias Fiscales",
    image: "/09-estrategias-fiscales.png",
    description: "Planificación fiscal nacional e internacional para eficientar el pago de impuestos sobre herencias, dividendos y ganancias de capital.",
    icon: Coins,
  },
  {
    title: "Inversiones Inmobiliarias",
    image: "/09-inversiones.inmobiliarias.png",
    description: "Acceso y estructuración de portafolios en bienes raíces comerciales y de lujo en las principales capitales mundiales.",
    icon: Building2,
  },
  {
    title: "Seguros Patrimoniales y de Vida",
    image: "/09-seguros-patrimoniales-vida.png",
    description: "Coberturas y pólizas de vida estructuradas internacionalmente para proveer liquidez sucesoria inmediata e inembargable.",
    icon: ShieldCheck,
  },
  {
    title: "Servicios Legales Fiduciarios",
    image: "/09-servicios-legales-fiduciarios.png",
    description: "Redacción de contratos fiduciarios complejos, protocolización y representación legal en jurisdicciones premium.",
    icon: Scale,
  },
  {
    title: "Soluciones Corporativas",
    image: "/09-soluciones-corporativas.png",
    description: "Asesoramiento en fusiones y adquisiciones (M&A), valuación de empresas y financiamiento corporativo estructurado.",
    icon: Briefcase,
  },
  {
    title: "Sucesión Patrimonial",
    image: "/09-sucesion-patrimonial.png",
    description: "Protocolos ordenados para garantizar la continuidad del control empresarial y la distribución equitativa de capital heredado.",
    icon: FileCheck,
  },
];

export default function SolucionesComplementarias() {
  return (
    <div className="flex flex-col min-h-screen bg-black-principal">
      {/* Hero Section */}
      <section className="relative h-[480px] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/09-hero-soluciones-complementarias.png"
            alt="Soluciones Complementarias de Dinero Sabio"
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
              Servicios Avanzados
            </span>
            <h1 className="font-serif text-5xl md:text-52px font-medium text-white-warm mt-3 leading-tight">
              Soluciones <span className="text-gold-gradient">Complementarias</span>
            </h1>
            <p className="font-sans text-lg text-grey-warm/80 mt-4 leading-relaxed font-light">
              Nuestra gama de servicios de asesoramiento especializados que potencian y blindan el bienestar patrimonial global de su familia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section: Holistic Wealth */}
      <section className="py-24 bg-gradient-principal">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="font-sans text-xs font-bold tracking-widest text-gold-principal uppercase">
              Asesoría Multidisciplinaria
            </span>
            <h2 className="font-serif text-3xl md:text-42px font-medium text-white-warm">
              Un enfoque integral que cubre cada necesidad patrimonial
            </h2>
            <p className="font-sans text-base text-grey-warm/80 leading-relaxed">
              La riqueza sofisticada no se gestiona de forma aislada. Requiere la integración de expertos fiscales, legales, de seguros y asesores financieros. En Dinero Sabio actuamos como su Family Office, coordinando todas estas disciplinas bajo un mismo techo.
            </p>
            <p className="font-sans text-base text-grey-warm/80 leading-relaxed">
              Este enfoque coordinado previene costosos vacíos de información o incongruencias entre su planeación tributaria y la estructuración de su testamento o portafolio líquido.
            </p>
          </div>

          <div className="lg:col-span-5 relative h-[450px] w-full overflow-hidden rounded-custom-image border border-gold-principal/20 shadow-2xl">
            <Image
              src="/09-soluciones-complementarias.png"
              alt="Servicios complementarios Dinero Sabio"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black-principal/80 via-transparent to-transparent" />
          </div>

        </div>
      </section>

      {/* Grid of Solutions */}
      <section className="py-24 bg-[#0F130F] border-t border-gold-principal/12">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="font-sans text-xs font-bold tracking-widest text-gold-principal uppercase">
              Catálogo Completo
            </span>
            <h2 className="font-serif text-3xl md:text-42px font-medium text-white-warm mt-3">
              Servicios complementarios especializados
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((sol, index) => {
              const Icon = sol.icon;
              return (
                <motion.div
                  key={sol.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="bg-green-deep border border-gold-principal/18 rounded-custom-card overflow-hidden card-shadow flex flex-col h-[520px] hover:border-gold-principal/30 transition-custom"
                >
                  <div className="relative h-[210px] w-full overflow-hidden">
                    <Image
                      src={sol.image}
                      alt={sol.title}
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
                          Servicio Especializado
                        </span>
                      </div>
                      <h3 className="font-serif text-xl text-gold-light font-medium tracking-wide">
                        {sol.title}
                      </h3>
                      <p className="font-sans text-sm text-grey-warm/80 mt-3 leading-relaxed">
                        {sol.description}
                      </p>
                    </div>

                    <Link
                      href="/contacto"
                      className="inline-flex items-center justify-center font-sans font-semibold text-xs tracking-wider text-black-principal bg-gold-principal px-5 py-3 rounded-custom-button hover:bg-gold-light transition-custom mt-4 min-h-[40px] w-full"
                    >
                      Consultar Servicio
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
