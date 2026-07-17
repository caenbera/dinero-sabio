"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Scale, FileSignature, Landmark, HeartHandshake, EyeOff } from "lucide-react";

const pillars = [
  {
    title: "Estructuración Patrimonial",
    image: "/04-estructuracion patrimonial.png",
    description: "Diseñamos la arquitectura legal y societaria óptima para organizar sus activos en múltiples jurisdicciones.",
    icon: Landmark,
  },
  {
    title: "Gobernanza Familiar",
    image: "/04-gobernanza-familiar.png",
    description: "Creamos protocolos y consejos familiares para profesionalizar la toma de decisiones y evitar fricciones familiares.",
    icon: HeartHandshake,
  },
  {
    title: "Sucesión y Testamento",
    image: "/04-sucesion-testamento.png",
    description: "Planificamos la transferencia ordenada de su legado material y valores familiares a las siguientes generaciones.",
    icon: FileSignature,
  },
  {
    title: "Vehículos y Fideicomisos",
    image: "/04-vehiculo-fidecomiso.png",
    description: "Establecemos fideicomisos (trusts) y fundaciones de interés privado para resguardar la privacidad e inembargabilidad.",
    icon: ShieldCheck,
  },
];

export default function PlaneacionPatrimonial() {
  return (
    <div className="flex flex-col min-h-screen bg-black-principal">
      {/* Hero Section */}
      <section className="relative h-[480px] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/04-hero-planeacion-patrimonial-familiar.png"
            alt="Planeación Patrimonial Familiar"
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
              Legado Familiar
            </span>
            <h1 className="font-serif text-5xl md:text-52px font-medium text-white-warm mt-3 leading-tight">
              Planeación Patrimonial <span className="text-gold-gradient">Familiar</span>
            </h1>
            <p className="font-sans text-lg text-grey-warm/80 mt-4 leading-relaxed font-light">
              Protegemos la cohesión familiar y aseguramos la continuidad transgeneracional de su patrimonio con vehículos jurídicos de alta sofisticación.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section: Privacy & Protection */}
      <section className="py-24 bg-gradient-principal">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="font-sans text-xs font-bold tracking-widest text-gold-principal uppercase">
              Seguridad Jurídica Absoluta
            </span>
            <h2 className="font-serif text-3xl md:text-42px font-medium text-white-warm">
              Protección contra litigios y contingencias externas
            </h2>
            <p className="font-sans text-base text-grey-warm/80 leading-relaxed">
              Un patrimonio exitoso atrae riesgos comerciales, regulatorios e incluso familiares. La correcta planeación patrimonial separa los activos familiares de las responsabilidades operativas comerciales mediante fideicomisos y holdings fiduciarios específicos.
            </p>
            <p className="font-sans text-base text-grey-warm/80 leading-relaxed">
              Bajo la máxima confidencialidad, redactamos los reglamentos y diseñamos las estructuras que blindan sus propiedades, cuentas líquidas e inversiones inmobiliarias globales de forma definitiva.
            </p>

            <div className="flex gap-4 mt-2">
              <Link
                href="/planeacion-patrimonial-soluciones"
                className="font-sans font-semibold text-sm tracking-wider text-black-principal bg-gold-principal px-8 py-4 rounded-custom-button hover:bg-gold-light transition-custom"
              >
                Conocer Soluciones de Legado
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[450px] w-full overflow-hidden rounded-custom-image border border-gold-principal/20 shadow-2xl">
            <Image
              src="/04-planeacion-patrimonial-familiar.png"
              alt="Blinda tu patrimonio familiar"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black-principal/80 via-transparent to-transparent" />
          </div>

        </div>
      </section>

      {/* The 4 pillars grid */}
      <section className="py-24 bg-[#0F130F] border-t border-gold-principal/12">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="font-sans text-xs font-bold tracking-widest text-gold-principal uppercase">
              Nuestros Pilares
            </span>
            <h2 className="font-serif text-3xl md:text-42px font-medium text-white-warm mt-3">
              Soluciones estructuradas de sucesión y protección
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-green-deep border border-gold-principal/18 rounded-custom-card overflow-hidden card-shadow grid grid-cols-1 sm:grid-cols-12 h-auto sm:h-[280px]"
                >
                  {/* Left Column: Image (40% width in desktop, cover on mobile) */}
                  <div className="relative h-[200px] sm:h-full sm:col-span-5 overflow-hidden">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 250px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-green-deep opacity-60 hidden sm:block" />
                  </div>

                  {/* Right Column: Content (60% width) */}
                  <div className="p-7 flex flex-col justify-between sm:col-span-7">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-gold-principal">
                        <Icon className="w-5 h-5 stroke-[2px]" />
                        <span className="font-sans text-xs font-bold uppercase tracking-wider">
                          Estructura Patrimonial
                        </span>
                      </div>
                      <h3 className="font-serif text-xl text-gold-light font-medium tracking-wide">
                        {pillar.title}
                      </h3>
                      <p className="font-sans text-sm text-grey-warm/85 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Privacy Guarantee section */}
      <section className="py-20 bg-green-deep border-y border-gold-principal/12">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-gold-principal/10 border border-gold-principal/25 rounded-2xl flex items-center justify-center text-gold-principal flex-shrink-0">
              <EyeOff className="w-7 h-7 stroke-[1.5px]" />
            </div>
            <div>
              <h3 className="font-serif text-2xl text-gold-light font-medium">Confidencialidad Rigurosa</h3>
              <p className="font-sans text-sm text-grey-warm/70 mt-1 max-w-[550px]">
                Ninguna información sobre su planeación patrimonial es compartida a bases de datos comerciales o entidades ajenas a su estructura fiduciaria.
              </p>
            </div>
          </div>
          <Link
            href="/contacto"
            className="font-sans font-semibold text-sm tracking-wider text-black-principal bg-gold-principal px-8 py-4 rounded-custom-button hover:bg-gold-light transition-custom whitespace-nowrap min-h-[48px] flex items-center justify-center"
          >
            Agendar Reunión Confidencial
          </Link>
        </div>
      </section>
    </div>
  );
}
