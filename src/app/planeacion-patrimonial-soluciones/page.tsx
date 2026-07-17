"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Scale, FileText, ChevronRight } from "lucide-react";

const solutions = [
  {
    title: "Fideicomisos Revocables e Irrevocables",
    description: "Establecimiento de fideicomisos locales e internacionales (offshore) para proteger activos líquidos y propiedades físicas bajo legislaciones de máxima certeza jurídica.",
    features: [
      "Separación legal de bienes personales y societarios",
      "Protección total ante contingencias de divorcio o litigio",
      "Estructuras flexibles de control patrimonial",
    ],
  },
  {
    title: "Sociedades Holding y Fundaciones de Interés Privado",
    description: "Creación de holdings familiares para concentrar las participaciones de múltiples negocios y fundaciones para garantizar la asignación ordenada de capital sin testamentos públicos.",
    features: [
      "Consolidación de control de empresas filiales",
      "Distribución eficiente de dividendos",
      "Sucesión empresarial automatizada",
    ],
  },
  {
    title: "Protocolo de Gobernanza Multigeneracional",
    description: "Diseño y mediación de acuerdos familiares formales que detallan las reglas de sucesión en el negocio familiar, la contratación de parientes y la toma de decisiones clave.",
    features: [
      "Resolución pacífica de desacuerdos familiares",
      "Preparación de la siguiente generación de líderes",
      "Preservación de los valores fundacionales de la familia",
    ],
  },
];

export default function PlaneacionPatrimonialSoluciones() {
  return (
    <div className="flex flex-col min-h-screen bg-black-principal">
      {/* Hero Section */}
      <section className="relative h-[480px] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/08-hero-planeacion-patrimonial-familiar.png"
            alt="Soluciones Patrimoniales de Dinero Sabio"
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
              Servicios Fiduciarios
            </span>
            <h1 className="font-serif text-5xl md:text-52px font-medium text-white-warm mt-3 leading-tight">
              Estructuras de <span className="text-gold-gradient">Sucesión y Resguardo</span>
            </h1>
            <p className="font-sans text-lg text-grey-warm/80 mt-4 leading-relaxed font-light">
              Nuestra gama de soluciones de gobernanza y protección patrimonial diseñadas bajo estándares legales internacionales de primer nivel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Detail */}
      <section className="py-24 bg-gradient-principal">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 flex flex-col gap-8">
            <span className="font-sans text-xs font-bold tracking-widest text-gold-principal uppercase">
              Seguridad y Control
            </span>
            <h2 className="font-serif text-3xl md:text-42px font-medium text-white-warm">
              Vehículos jurídicos diseñados para durar siglos
            </h2>
            
            <div className="flex flex-col gap-6">
              {solutions.map((sol, index) => {
                return (
                  <div key={sol.title} className="bg-green-deep/50 border border-gold-principal/15 rounded-custom-card p-6 flex flex-col gap-3 hover:border-gold-principal/30 transition-custom">
                    <h3 className="font-serif text-xl text-gold-light font-medium flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-gold-principal flex-shrink-0" />
                      {sol.title}
                    </h3>
                    <p className="font-sans text-sm text-grey-warm/80 leading-relaxed">
                      {sol.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2">
                      {sol.features.map((feat) => (
                        <li key={feat} className="font-sans text-xs text-grey-warm/90 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-principal flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[500px] w-full overflow-hidden rounded-custom-image border border-gold-principal/20 shadow-2xl">
            <Image
              src="/08-planeacion-patrimonial-familiar.png"
              alt="Vehículos jurídicos Dinero Sabio"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black-principal/80 via-transparent to-transparent" />
          </div>

        </div>
      </section>

      {/* Trust Callout */}
      <section className="py-24 bg-[#0E120D] border-t border-gold-principal/12">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="bg-[#182116] border border-gold-principal/20 rounded-custom-card p-12 text-center flex flex-col items-center gap-6 shadow-2xl">
            <span className="font-sans text-xs font-bold tracking-widest text-gold-principal uppercase">
              Asesoría Legal Patrimonial
            </span>
            <h2 className="font-serif text-3xl md:text-42px font-medium text-white-warm max-w-[650px] leading-tight">
              ¿Listo para estructurar su legado fiduciario?
            </h2>
            <p className="font-sans text-base text-grey-warm/85 max-w-[550px] font-light leading-relaxed">
              Consulte de forma completamente privada a nuestros asesores legales y estructuradores patrimoniales senior sin compromiso.
            </p>
            <div className="mt-2">
              <Link
                href="/contacto"
                className="font-sans font-semibold text-sm tracking-wider text-black-principal bg-gold-principal px-8 py-4.5 rounded-custom-button hover:bg-gold-light transition-custom inline-flex items-center gap-2"
              >
                Programar Sesión Legal Privada <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
