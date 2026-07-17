"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Briefcase, Landmark, Shield, Milestone, Compass } from "lucide-react";

const team = [
  {
    name: "Dr. Carlos Albeiro",
    role: "Socio Fundador & Director Patrimonial",
    background: "Ex-Director de Banca Privada en Suiza con 25+ años de trayectoria en estructuración de fideicomisos.",
  },
  {
    name: "Lic. Elena Rostova",
    role: "Directora de Soluciones Fiduciarias",
    background: "Especialista en derecho comparado y protección de sucesiones internacionales (STEP Member).",
  },
  {
    name: "Mtr. Fernando Soto",
    role: "Director de Estrategia Fiscal Global",
    background: "Econónomo senior enfocado en la estructuración corporativa y holding transfronterizos.",
  },
  {
    name: "Dra. Sofía Ramírez",
    role: "Asesora Senior de Portafolios Multi-Activos",
    background: "Ex-analista senior de fondos cotizados y mercados privados en Nueva York y Londres.",
  },
];

const milestones = [
  {
    year: "2010",
    title: "Fundación de la Firma",
    description: "Nace Dinero Sabio como una boutique privada de asesoría en CDMX.",
  },
  {
    year: "2015",
    title: "Alianza Internacional Suiza",
    description: "Establecemos acuerdos corresponsales con los principales bancos fiduciarios en Zúrich.",
  },
  {
    year: "2020",
    title: "$1,000M AUM",
    description: "Consolidamos más de mil millones de dólares bajo gestión y asesoría senior.",
  },
  {
    year: "2026",
    title: "Lanzamiento PWA",
    description: "Evolución digital de nuestras herramientas exclusivas de consulta interna y portal privado.",
  },
];

export default function Nosotros() {
  return (
    <div className="flex flex-col min-h-screen bg-black-principal">
      {/* Hero Section */}
      <section className="relative h-[480px] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/11-hero-nosotros.png"
            alt="Nosotros Dinero Sabio"
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
              Nuestra Historia
            </span>
            <h1 className="font-serif text-5xl md:text-52px font-medium text-white-warm mt-3 leading-tight">
              Una Firma Privada de <span className="text-gold-gradient">Alto Nivel</span>
            </h1>
            <p className="font-sans text-lg text-grey-warm/80 mt-4 leading-relaxed font-light">
              Nacimos con el objetivo de proveer un servicio fiduciario elegante, riguroso y alejado de los estándares de la banca masiva.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Origin Section: Mission & Values */}
      <section className="py-24 bg-gradient-principal">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="font-sans text-xs font-bold tracking-widest text-gold-principal uppercase">
              Legado y Trayectoria
            </span>
            <h2 className="font-serif text-3xl md:text-42px font-medium text-white-warm">
              Protegiendo el esfuerzo de generaciones
            </h2>
            <p className="font-sans text-base text-grey-warm/80 leading-relaxed">
              En Dinero Sabio no asesoramos en base a algoritmos predeterminados. Comprendemos que cada familia empresaria posee una cultura, una tolerancia al riesgo y un conjunto de metas únicas.
            </p>
            <p className="font-sans text-base text-grey-warm/80 leading-relaxed">
              Nuestra firma se fundó para resguardar el patrimonio familiar mediante la combinación de un riguroso análisis macroeconómico global y una sólida estructura jurídica. No buscamos transacciones rápidas; buscamos relaciones sólidas que perduren por décadas.
            </p>
          </div>

          <div className="lg:col-span-5 relative h-[450px] w-full overflow-hidden rounded-custom-image border border-gold-principal/20 shadow-2xl">
            <Image
              src="/11-nosotros.png"
              alt="Reunión directiva Dinero Sabio"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black-principal/80 via-transparent to-transparent" />
          </div>

        </div>
      </section>

      {/* Milestones / Timeline */}
      <section className="py-24 bg-[#0F130F] border-t border-gold-principal/12">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="font-sans text-xs font-bold tracking-widest text-gold-principal uppercase">
              Evolución
            </span>
            <h2 className="font-serif text-3xl md:text-42px font-medium text-white-warm mt-3">
              Hitos que marcan nuestra solidez
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((ms, index) => (
              <div key={ms.year} className="bg-green-deep border border-gold-principal/15 p-8 rounded-custom-card flex flex-col gap-4 relative">
                <span className="font-serif text-4xl font-bold text-gold-principal">
                  {ms.year}
                </span>
                <h3 className="font-serif text-lg text-gold-light font-medium">
                  {ms.title}
                </h3>
                <p className="font-sans text-sm text-grey-warm/75 leading-relaxed">
                  {ms.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-black-principal">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="font-sans text-xs font-bold tracking-widest text-gold-principal uppercase">
              Asesores Senior
            </span>
            <h2 className="font-serif text-3xl md:text-42px font-medium text-white-warm mt-3">
              El equipo al cuidado de su legado
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-green-deep/30 border border-gold-principal/15 rounded-custom-card p-6 flex flex-col gap-4 shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-gold-principal/10 border border-gold-principal/20 flex items-center justify-center text-gold-principal">
                  <Briefcase className="w-6 h-6 stroke-[1.5px]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-gold-light font-medium">
                    {member.name}
                  </h3>
                  <span className="font-sans text-xs text-gold-principal/80 block mt-1 uppercase tracking-wider font-semibold">
                    {member.role}
                  </span>
                </div>
                <p className="font-sans text-sm text-grey-warm/75 leading-relaxed border-t border-gold-principal/10 pt-4 mt-2">
                  {member.background}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
