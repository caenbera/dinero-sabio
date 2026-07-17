"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Calculator, FileCheck, Target, ShieldCheck } from "lucide-react";

const steps = [
  {
    title: "Auditoría Patrimonial Completa",
    description: "Evaluamos sus activos, pasivos y flujos globales bajo total confidencialidad.",
    icon: Calculator,
  },
  {
    title: "Definición de Metas Financieras",
    description: "Trazamos objetivos claros de preservación, rentabilidad y legados de vida.",
    icon: Target,
  },
  {
    title: "Estructuración del Plan Maestro",
    description: "Diseño y modelado de carteras, vehículos tributarios y protección de activos.",
    icon: FileCheck,
  },
  {
    title: "Monitoreo y Ajuste Continuo",
    description: "Revisiones trimestrales y rebalanceo dinámico ante cambios macroeconómicos.",
    icon: ShieldCheck,
  },
];

export default function PlaneacionFinanciera() {
  return (
    <div className="flex flex-col min-h-screen bg-black-principal">
      {/* Hero Section */}
      <section className="relative h-[480px] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/02-hero-planeacion-financiera.png"
            alt="Planeación Financiera Personalizada"
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
              Asesoría Senior
            </span>
            <h1 className="font-serif text-5xl md:text-52px font-medium text-white-warm mt-3 leading-tight">
              Planeación Financiera <span className="text-gold-gradient">a su Medida</span>
            </h1>
            <p className="font-sans text-lg text-grey-warm/80 mt-4 leading-relaxed font-light">
              Desarrollamos estrategias integrales diseñadas para encajar con su estilo de vida y proteger su patrimonio ante coyunturas globales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section 1: Methodology */}
      <section className="py-24 bg-gradient-principal">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="font-sans text-xs font-bold tracking-widest text-gold-principal uppercase">
              Metodología Dinero Sabio
            </span>
            <h2 className="font-serif text-3xl md:text-42px font-medium text-white-warm">
              Un enfoque estructurado para la <span className="text-gold-gradient">preservación y crecimiento</span>
            </h2>
            <p className="font-sans text-base text-grey-warm/80 leading-relaxed">
              La planeación financiera premium no consiste únicamente en comprar acciones o bonos. Implica coordinar sus inversiones con su régimen fiscal, sus necesidades de liquidez y su planeación de sucesión hereditaria.
            </p>
            <p className="font-sans text-base text-grey-warm/80 leading-relaxed">
              En Dinero Sabio, elaboramos un diagnóstico exhaustivo de su balance patrimonial antes de recomendar cualquier tipo de asignación de capital. Este método garantiza un portafolio verdaderamente cohesionado y resistente.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-principal flex-shrink-0" />
                <span className="font-sans text-sm text-grey-warm/95 font-medium">Asignación táctica de activos</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-principal flex-shrink-0" />
                <span className="font-sans text-sm text-grey-warm/95 font-medium">Optimización fiscal internacional</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-principal flex-shrink-0" />
                <span className="font-sans text-sm text-grey-warm/95 font-medium">Protección contra inflación</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-principal flex-shrink-0" />
                <span className="font-sans text-sm text-grey-warm/95 font-medium">Arquitectura fiduciaria privada</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[450px] w-full overflow-hidden rounded-custom-image border border-gold-principal/20 shadow-2xl">
            <Image
              src="/02-planeacion-financiera.png"
              alt="Metodología de planeación Dinero Sabio"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black-principal/80 via-transparent to-transparent" />
          </div>

        </div>
      </section>

      {/* Steps Grid */}
      <section className="py-20 bg-green-deep border-y border-gold-principal/12">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-[600px] mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-42px font-medium text-gold-light">
              Las 4 Fases de Asesoría
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="bg-black-principal border border-gold-principal/15 p-8 rounded-custom-card flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-principal/10 border border-gold-principal/20 flex items-center justify-center text-gold-principal">
                    <Icon className="w-6 h-6 stroke-[2px]" />
                  </div>
                  <span className="font-sans text-xs font-bold text-gold-principal/50 tracking-wider">
                    FASE 0{index + 1}
                  </span>
                  <h3 className="font-serif text-xl text-gold-light font-medium">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm text-grey-warm/75 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study: Familia Ramírez */}
      <section className="py-24 bg-[#0E120D]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 relative h-[500px] w-full overflow-hidden rounded-custom-image border border-gold-principal/20 shadow-2xl order-last lg:order-first">
            <Image
              src="/06-familia-ramirez.png"
              alt="Caso de estudio Familia Ramírez"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black-principal/80 via-transparent to-transparent" />
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="font-sans text-xs font-bold tracking-widest text-gold-principal uppercase">
              Caso de Estudio Realizado
            </span>
            <h2 className="font-serif text-4xl font-medium text-white-warm">
              Planeación Patrimonial <span className="text-gold-gradient">Familia Ramírez</span>
            </h2>
            <p className="font-sans text-base text-grey-warm/80 leading-relaxed">
              El Grupo Familiar Ramírez poseía una exitosa cadena comercial e inversiones inmobiliarias dispersas en tres países. La falta de una estructura legal centralizada ponía en riesgo el negocio operativo ante contingencias de sucesión familiar.
            </p>
            
            <div className="bg-[#182116] border border-gold-principal/15 rounded-custom-card p-6 flex flex-col gap-4">
              <h4 className="font-serif text-lg text-gold-light font-medium">Solución Desarrollada:</h4>
              <ul className="flex flex-col gap-2.5">
                <li className="font-sans text-sm text-grey-warm/80 flex items-start gap-2">
                  <span className="text-gold-principal font-bold">•</span>
                  Estructuración de una Sociedad Holding Fiduciaria en Suiza para unificar el control de las inversiones globales.
                </li>
                <li className="font-sans text-sm text-grey-warm/80 flex items-start gap-2">
                  <span className="text-gold-principal font-bold">•</span>
                  Redacción de un Protocolo Familiar vinculante de gobernanza comercial.
                </li>
                <li className="font-sans text-sm text-grey-warm/80 flex items-start gap-2">
                  <span className="text-gold-principal font-bold">•</span>
                  Creación de un portafolio de liquidez diversificado para contingencias operativas.
                </li>
              </ul>
            </div>

            <p className="font-sans text-sm text-grey-warm/60 italic leading-relaxed">
              Resultado: Mitigación del riesgo de partición hereditaria desordenada y optimización fiscal del 18.5% en la distribución de dividendos corporativos.
            </p>

            <div className="mt-2">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 font-sans font-semibold text-sm tracking-wider text-black-principal bg-gold-principal px-8 py-4 rounded-custom-button hover:bg-gold-light transition-custom"
              >
                Diseñar mi Propio Plan <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
