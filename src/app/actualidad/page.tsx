"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";

const articles = [
  {
    title: "El impacto de las tasas de interés globales en la renta fija",
    category: "Análisis de Mercado",
    date: "15 Jul, 2026",
    author: "Por Lic. Alejandro Varela",
    excerpt: "Analizamos cómo las recientes decisiones de la Reserva Federal modifican la curva de rendimientos y las oportunidades en bonos de grado de inversión.",
    readTime: "6 min de lectura",
  },
  {
    title: "Suiza vs. Liechtenstein: Comparativa de estructuras fiduciarias",
    category: "Gobernanza Patrimonial",
    date: "08 Jul, 2026",
    author: "Por Dra. Elena Rostova",
    excerpt: "Un estudio exhaustivo sobre las ventajas en confidencialidad, inembargabilidad e impuestos sucesorios que ofrecen ambas jurisdicciones europeas.",
    readTime: "8 min de lectura",
  },
  {
    title: "Inversiones inmobiliarias en Miami y Madrid: Tendencias 2026",
    category: "Real Estate",
    date: "28 Jun, 2026",
    author: "Por Ing. Fernando Soto",
    excerpt: "Evaluamos el comportamiento de las rentas comerciales y residenciales de lujo ante el incremento de flujos de capital latinoamericano.",
    readTime: "5 min de lectura",
  },
  {
    title: "La importancia del protocolo familiar en empresas familiares",
    category: "Gobernanza Familiar",
    date: "14 Jun, 2026",
    author: "Por Dr. Gabriel Ortiz",
    excerpt: "Guía práctica para estructurar los derechos de voto y sucesión antes de que surjan diferencias entre los herederos corporativos.",
    readTime: "7 min de lectura",
  },
];

export default function Actualidad() {
  return (
    <div className="flex flex-col min-h-screen bg-black-principal">
      {/* Hero Section */}
      <section className="relative h-[480px] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/10-hero-actualidad.png"
            alt="Actualidad Dinero Sabio"
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
              Actualidad Editorial
            </span>
            <h1 className="font-serif text-5xl md:text-52px font-medium text-white-warm mt-3 leading-tight">
              Análisis y <span className="text-gold-gradient">Perspectivas</span>
            </h1>
            <p className="font-sans text-lg text-grey-warm/80 mt-4 leading-relaxed font-light">
              Notas exclusivas redactadas por nuestro equipo y firmas asociadas sobre coyuntura global, finanzas y gobernanza.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="py-24 bg-gradient-principal">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 relative h-[450px] w-full overflow-hidden rounded-custom-image border border-gold-principal/20 shadow-2xl">
            <Image
              src="/10-actualidad.png"
              alt="Análisis global Dinero Sabio"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black-principal/80 via-transparent to-transparent" />
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="bg-gold-principal/10 border border-gold-principal/25 text-gold-principal px-3 py-1 rounded-full text-xs font-bold font-sans uppercase tracking-widest">
                Destacado del Mes
              </span>
              <span className="font-sans text-xs text-grey-warm/50 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> 18 Jul, 2026
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-42px font-medium text-white-warm leading-tight">
              ¿Hacia dónde va la inflación global? Estrategias de <span className="text-gold-gradient">preservación real</span>
            </h2>
            
            <p className="font-sans text-base text-grey-warm/85 leading-relaxed">
              En entornos inflacionarios persistentes, mantener saldos líquidos en moneda local resulta en una pérdida de poder adquisitivo acelerada. En este artículo explicamos por qué la renta variable premium, el oro y los fideicomisos inmobiliarios son los activos idóneos para blindar su patrimonio real durante los próximos 5 años.
            </p>

            <div className="flex items-center gap-3 mt-2">
              <div className="w-10 h-10 rounded-full bg-gold-principal/10 border border-gold-principal/20 flex items-center justify-center font-serif text-gold-principal font-bold text-sm">
                DS
              </div>
              <div>
                <h4 className="font-sans text-sm font-semibold text-gold-light">Comité de Análisis Económico</h4>
                <p className="font-sans text-xs text-grey-warm/50">Dinero Sabio Senior Desk</p>
              </div>
            </div>

            <div className="mt-4">
              <button
                onClick={() => alert("Simulando lectura del artículo completo...")}
                className="font-sans font-semibold text-sm tracking-wider text-black-principal bg-gold-principal px-8 py-4 rounded-custom-button hover:bg-gold-light transition-custom inline-flex items-center gap-2 cursor-pointer"
              >
                Leer Artículo Completo <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Grid of Articles */}
      <section className="py-24 bg-[#0F130F] border-t border-gold-principal/12">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="font-sans text-xs font-bold tracking-widest text-gold-principal uppercase">
              Archivo Editorial
            </span>
            <h2 className="font-serif text-3xl md:text-42px font-medium text-white-warm mt-3">
              Notas de análisis recientes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((art, index) => {
              return (
                <motion.div
                  key={art.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-green-deep border border-gold-principal/15 rounded-custom-card p-8 flex flex-col justify-between h-[320px] hover:border-gold-principal/30 transition-custom"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-xs font-semibold text-gold-principal uppercase tracking-wider">
                        {art.category}
                      </span>
                      <span className="font-sans text-xs text-grey-warm/50 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {art.date}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl md:text-2xl text-gold-light font-medium leading-tight">
                      {art.title}
                    </h3>
                    
                    <p className="font-sans text-sm text-grey-warm/75 line-clamp-2 leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-gold-principal/10 pt-4 mt-4">
                    <span className="font-sans text-xs text-grey-warm/55 italic">
                      {art.author}
                    </span>
                    <button
                      onClick={() => alert(`Simulando lectura del artículo: ${art.title}`)}
                      className="font-sans font-semibold text-xs tracking-wider text-gold-principal hover:text-gold-light flex items-center gap-1.5 focus:outline-none cursor-pointer"
                    >
                      Leer más <ArrowRight className="w-3.5 h-3.5" />
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
