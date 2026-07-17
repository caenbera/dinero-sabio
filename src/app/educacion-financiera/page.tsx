"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, PlayCircle, Download, Landmark, Compass } from "lucide-react";

const modules = [
  {
    title: "Fundamentos Financieros",
    image: "/05-fundamentos-financieros.png",
    description: "Conceptos clave de inflación, tasas de interés real e interés compuesto para cimentar su patrimonio.",
    duration: "4 Módulos",
    type: "Curso Gratuito",
    icon: GraduationCap,
  },
  {
    title: "Ahorro Inteligente",
    image: "/05-ahorro-inteligente.png",
    description: "Estrategias avanzadas de presupuesto y optimización de flujos de efectivo personales y corporativos.",
    duration: "3 Módulos",
    type: "Guía Descargable",
    icon: BookOpen,
  },
  {
    title: "Finanzas Familiares",
    image: "/05-finanzas-familiares.png",
    description: "Cómo integrar la educación financiera familiar y formar a las siguientes generaciones en la toma de decisiones.",
    duration: "5 Módulos",
    type: "Taller en Línea",
    icon: Compass,
  },
  {
    title: "Inversión para Todos",
    image: "/05-inversion-todos.png",
    description: "Introducción práctica al funcionamiento de los mercados bursátiles, corretaje y corretaje de divisas.",
    duration: "6 Módulos",
    type: "Curso en Video",
    icon: PlayCircle,
  },
  {
    title: "Camino a la Libertad Financiera",
    image: "/05-libertad-financiera.png",
    description: "Modelos cuantitativos para calcular su tasa de retiro ideal y estructurar ingresos pasivos consistentes.",
    duration: "4 Módulos",
    type: "Plantilla Excel",
    icon: Download,
  },
  {
    title: "Planeación Financiera Básica",
    image: "/05-planeacion-financiera.png",
    description: "Guía de planeación financiera básica e inicial para jóvenes profesionales y familias en fase de acumulación.",
    duration: "2 Módulos",
    type: "Manual PDF",
    icon: Landmark,
  },
];

export default function EducacionFinanciera() {
  return (
    <div className="flex flex-col min-h-screen bg-black-principal">
      {/* Hero Section */}
      <section className="relative h-[480px] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/05-hero-educacion-financiera.png"
            alt="Educación Financiera Dinero Sabio"
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
              Cultura Financiera
            </span>
            <h1 className="font-serif text-5xl md:text-52px font-medium text-white-warm mt-3 leading-tight">
              Educación Financiera <span className="text-gold-gradient">Premium</span>
            </h1>
            <p className="font-sans text-lg text-grey-warm/80 mt-4 leading-relaxed font-light">
              Compartimos nuestro conocimiento mediante recursos educativos exclusivos, diseñados para empoderar sus decisiones económicas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section: Philosophy */}
      <section className="py-24 bg-gradient-principal">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="font-sans text-xs font-bold tracking-widest text-gold-principal uppercase">
              El Conocimiento es Preservación
            </span>
            <h2 className="font-serif text-3xl md:text-42px font-medium text-white-warm">
              Un cliente educado es un cliente seguro
            </h2>
            <p className="font-sans text-base text-grey-warm/80 leading-relaxed">
              En Dinero Sabio, creemos que la mejor manera de asegurar el patrimonio familiar es capacitando a sus miembros. Un entendimiento profundo del riesgo cambiario, los ciclos de mercado y las implicaciones fiscales previene decisiones precipitadas.
            </p>
            <p className="font-sans text-base text-grey-warm/80 leading-relaxed">
              Ofrecemos acceso gratuito a guías prácticas, manuales y hojas de cálculo de modelado financiero exclusivamente diseñados por nuestro equipo de economistas senior.
            </p>
          </div>

          <div className="lg:col-span-5 relative h-[450px] w-full overflow-hidden rounded-custom-image border border-gold-principal/20 shadow-2xl">
            <Image
              src="/05-educacion-finaciera.png"
              alt="Educación Financiera en Dinero Sabio"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black-principal/80 via-transparent to-transparent" />
          </div>

        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-24 bg-[#0F130F] border-t border-gold-principal/12">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="font-sans text-xs font-bold tracking-widest text-gold-principal uppercase">
              Recursos de Aprendizaje
            </span>
            <h2 className="font-serif text-3xl md:text-42px font-medium text-white-warm mt-3">
              Módulos y Herramientas Exclusivas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((mod, index) => {
              const Icon = mod.icon;
              return (
                <motion.div
                  key={mod.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="bg-green-deep border border-gold-principal/18 rounded-custom-card overflow-hidden card-shadow flex flex-col h-[520px] hover:border-gold-principal/30 transition-custom"
                >
                  <div className="relative h-[210px] w-full overflow-hidden">
                    <Image
                      src={mod.image}
                      alt={mod.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-deep to-transparent opacity-60" />
                  </div>

                  <div className="p-7 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-gold-principal mb-2">
                        <Icon className="w-4 h-4 stroke-[2px]" />
                        <span className="font-sans text-xs font-semibold uppercase tracking-wider">
                          {mod.type} • {mod.duration}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl text-gold-light font-medium tracking-wide">
                        {mod.title}
                      </h3>
                      <p className="font-sans text-sm text-grey-warm/80 mt-3 leading-relaxed">
                        {mod.description}
                      </p>
                    </div>

                    <button
                      onClick={() => alert(`Simulando descarga/acceso al recurso: ${mod.title}`)}
                      className="inline-flex items-center gap-2 font-sans font-semibold text-xs tracking-wider text-black-principal bg-gold-principal px-5 py-3.5 rounded-custom-button hover:bg-gold-light transition-custom mt-4 w-full justify-center cursor-pointer min-h-[44px]"
                    >
                      Descargar Recurso <Download className="w-3.5 h-3.5" />
                    </button>
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
