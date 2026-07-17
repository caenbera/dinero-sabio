"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Landmark, TrendingUp, Users, Award, Shield, Key, Compass } from "lucide-react";

const services = [
  {
    title: "Planeación Financiera",
    image: "/01-planeacion-financiera.png",
    description: "Diseño de un plan maestro de vida adaptado a sus metas y flujos familiares.",
    href: "/planeacion-financiera",
    icon: Landmark,
  },
  {
    title: "Ahorro e Inversión",
    image: "/01-ahorro-inversion.png",
    description: "Portafolios optimizados con acceso a mercados internacionales y fondos selectos.",
    href: "/ahorro-inversion",
    icon: TrendingUp,
  },
  {
    title: "Planeación Patrimonial",
    image: "/01-planeacion-patrimonial-familiar.png",
    description: "Protección legal, sucesiones y gobernanza familiar para las próximas generaciones.",
    href: "/planeacion-patrimonial",
    icon: Users,
  },
  {
    title: "Educación Financiera",
    image: "/01-educacion-financiera.png",
    description: "Talleres exclusivos y análisis del mercado global para clientes Dinero Sabio.",
    href: "/educacion-financiera",
    icon: Award,
  },
];

const pillars = [
  {
    title: "Exclusividad",
    description: "Tratamiento personalizado y acceso a oportunidades de inversión reservadas.",
    icon: Key,
  },
  {
    title: "Seguridad",
    description: "Estructuras fiduciarias e instrumentos sólidos para la tranquilidad de su familia.",
    icon: Shield,
  },
  {
    title: "Crecimiento",
    description: "Estrategias de inversión global enfocadas en el incremento real de su patrimonio.",
    icon: Compass,
  },
];

const stats = [
  { value: "$1.4B USD", label: "Activos Bajo Gestión" },
  { value: "99.2%", label: "Tasa de Retención de Clientes" },
  { value: "20+ Años", label: "Experiencia de Asesoría Senior" },
  { value: "4", label: "Áreas Especializadas de Asesoría" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black-principal">
      {/* 1. HERO SECTION */}
      <section className="relative h-[820px] w-full overflow-hidden flex items-center">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/01-hero-homepage.png"
            alt="Firma privada de asesoría patrimonial premium"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105 select-none"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 lg:px-12 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-[620px] flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-principal/10 border border-gold-principal/30 rounded-full">
              <span className="w-2 h-2 rounded-full bg-gold-principal animate-pulse" />
              <span className="font-sans text-xs font-semibold tracking-widest text-gold-light uppercase">
                Firma Patrimonial Privada
              </span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-64px font-medium leading-[1.1] text-white-warm">
              Tu patrimonio,<br />
              <span className="text-gold-gradient">nuestra estrategia</span>,<br />
              tu libertad.
            </h1>

            <p className="font-sans text-lg md:text-xl text-grey-warm/90 font-light leading-relaxed">
              Asesoría financiera de alto nivel orientada a proteger, estructurar y potenciar el patrimonio familiar y corporativo.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <Link
                href="/contacto"
                className="font-sans font-semibold text-sm tracking-wider text-black-principal bg-gold-principal px-8 py-4.5 rounded-custom-button transition-all duration-300 hover:bg-gold-light hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-gold-principal/20 hover:shadow-gold-light/35 min-h-[48px]"
              >
                Agendar Asesoría
              </Link>
              <Link
                href="#servicios"
                className="font-sans font-semibold text-sm tracking-wider text-gold-principal border border-gold-principal px-8 py-4.5 rounded-custom-button transition-all duration-300 hover:bg-gold-principal hover:text-black-principal hover:-translate-y-0.5 active:translate-y-0 min-h-[48px]"
              >
                Explorar Servicios
              </Link>
            </div>
          </motion.div>

          {/* Floating Feature Card (Hero card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute right-6 lg:right-12 bottom-12 hidden lg:block bg-green-deep/90 backdrop-blur border border-gold-principal/25 p-6 rounded-custom-hero-card max-w-[320px] shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-gold-principal/10 flex items-center justify-center border border-gold-principal/30">
                <Landmark className="w-5 h-5 text-gold-principal" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-gold-light font-medium">Asesoría Familiar</h4>
                <p className="font-sans text-xs text-grey-warm/60">Gobernanza multigeneracional</p>
              </div>
            </div>
            <p className="font-sans text-sm text-grey-warm/80 leading-relaxed italic">
              &ldquo;Consolidamos el patrimonio familiar con estructuras robustas que garantizan estabilidad a largo plazo.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. PILLARS / ADN SECTION */}
      <section className="py-24 bg-gradient-principal border-t border-gold-principal/5">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="bg-green-deep/40 border border-gold-principal/10 rounded-custom-card p-8 flex flex-col gap-4 hover:border-gold-principal/25 transition-custom"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-principal/10 border border-gold-principal/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gold-principal stroke-[2px]" />
                  </div>
                  <h3 className="font-serif text-2xl text-gold-light font-medium tracking-wide">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-base text-grey-warm/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="servicios" className="py-24 bg-[#0F130F]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          
          {/* Section Header */}
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="font-sans text-xs font-bold tracking-widest text-gold-principal uppercase">
              Soluciones Patrimoniales
            </span>
            <h2 className="font-serif text-4xl md:text-52px font-medium text-white-warm mt-3 leading-tight">
              Estrategias exclusivas para<br />
              <span className="text-gold-gradient">asegurar su legado</span>
            </h2>
            <p className="font-sans text-base text-grey-warm/75 mt-4">
              Cada portafolio es estructurado de manera única, combinando optimización fiscal, diversificación global y resguardo legal.
            </p>
          </div>

          {/* Grid de Servicios (4 Columnas en Desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-green-deep border border-gold-principal/18 rounded-custom-card overflow-hidden card-shadow flex flex-col h-[520px] transition-all duration-350 hover:-translate-y-2 hover:scale-[1.02] hover:bg-green-secondary"
                >
                  {/* Thumbnail Image (40% de altura aprox.) */}
                  <div className="relative h-[210px] w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-custom"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-deep to-transparent opacity-60" />
                  </div>

                  {/* Content (60% de altura aprox.) */}
                  <div className="p-7 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="font-serif text-2xl text-gold-light font-medium tracking-wide">
                        {service.title}
                      </h3>
                      <p className="font-sans text-sm text-grey-warm/85 mt-3 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 font-sans font-semibold text-sm tracking-wider text-gold-principal hover:text-gold-light mt-4 focus:outline-none w-fit"
                    >
                      Ver más <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. STATISTICS SECTION */}
      <section className="py-20 bg-green-deep border-y border-gold-principal/12 relative">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center flex flex-col gap-2">
                <span className="font-serif text-4xl md:text-52px font-semibold text-gold-principal">
                  {stat.value}
                </span>
                <span className="font-sans text-sm tracking-wider text-grey-warm/75">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECCIÓN DESTACADA (Filosofía & Trayectoria) */}
      <section className="py-24 bg-[#0E120D] relative">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="font-sans text-xs font-bold tracking-widest text-gold-principal uppercase">
              Nuestra Filosofía
            </span>
            <h2 className="font-serif text-4xl md:text-52px font-medium text-white-warm leading-tight">
              Tranquilidad patrimonial basada en la <span className="text-gold-gradient">experiencia y sofisticación</span>
            </h2>
            <p className="font-sans text-base text-grey-warm/80 leading-relaxed">
              No operamos como un banco minorista o una plataforma tecnológica automatizada. Creemos en la relación a largo plazo, el análisis profundo y el diseño de vehículos legales robustos para consolidar su patrimonio familiar.
            </p>
            <p className="font-sans text-base text-grey-warm/80 leading-relaxed">
              Cada cliente cuenta con el respaldo de un equipo de asesores senior que coordinan soluciones integrales de inversión global, estructuración legal y optimización tributaria internacional.
            </p>
            
            <div className="mt-4">
              <Link
                href="/nosotros"
                className="inline-flex items-center gap-2 font-sans font-semibold text-sm tracking-wider text-black-principal bg-gold-principal px-8 py-4 rounded-custom-button hover:bg-gold-light transition-custom"
              >
                Conocer Más Sobre la Firma
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[450px] w-full overflow-hidden rounded-custom-image border border-gold-principal/20">
            <Image
              src="/extra.png"
              alt="Asesoría patrimonial exclusiva"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black-principal/80 via-transparent to-transparent" />
          </div>

        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="py-24 bg-[#182116] border-t border-gold-principal/10">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="font-sans text-xs font-bold tracking-widest text-gold-principal uppercase">
              Testimonios de Socios
            </span>
            <h2 className="font-serif text-3xl md:text-42px font-medium text-white-warm mt-3">
              Lo que opinan nuestros clientes premium
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0E120D] border border-gold-principal/15 rounded-custom-card p-8 shadow-lg">
              <p className="font-sans text-base text-grey-warm/90 leading-relaxed italic">
                &ldquo;El equipo de Dinero Sabio no solo estructuró el patrimonio de nuestra familia de forma segura mediante un fideicomiso eficiente, sino que nos brindó la paz mental que buscábamos para las siguientes generaciones. Su trato personalizado es inigualable.&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-11 h-11 bg-gold-principal/10 border border-gold-principal/20 rounded-full flex items-center justify-center font-serif text-gold-principal text-lg font-semibold">
                  M.A.
                </div>
                <div>
                  <h4 className="font-sans text-sm font-semibold text-gold-light">Dr. Mauricio Alveiro</h4>
                  <p className="font-sans text-xs text-grey-warm/50">Socio de Ahorro y Sucesión Familiar</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0E120D] border border-gold-principal/15 rounded-custom-card p-8 shadow-lg">
              <p className="font-sans text-base text-grey-warm/90 leading-relaxed italic">
                &ldquo;Como empresario, la optimización fiscal de mis inversiones globales era una constante preocupación. Con Dinero Sabio obtuve estrategias sofisticadas e integradas que se adaptan a la volatilidad de los mercados.&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-11 h-11 bg-gold-principal/10 border border-gold-principal/20 rounded-full flex items-center justify-center font-serif text-gold-principal text-lg font-semibold">
                  S.R.
                </div>
                <div>
                  <h4 className="font-sans text-sm font-semibold text-gold-light">Ing. Sofía Ramírez</h4>
                  <p className="font-sans text-xs text-grey-warm/50">Fundadora y CEO de Grupo Ramírez</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA BANNER */}
      <section className="py-24 bg-black-principal flex items-center justify-center">
        <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="bg-gradient-principal border border-gold-principal/20 rounded-custom-hero-card p-12 lg:p-20 text-center flex flex-col items-center gap-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-cta" />
            
            <span className="font-sans text-xs font-bold tracking-widest text-gold-principal uppercase">
              Comience Hoy
            </span>
            
            <h2 className="font-serif text-4xl md:text-52px font-medium text-white-warm max-w-[700px] leading-tight">
              ¿Listo para estructurar su <span className="text-gold-gradient">estrategia patrimonial</span>?
            </h2>
            
            <p className="font-sans text-base md:text-lg text-grey-warm/85 max-w-[580px] font-light leading-relaxed">
              Agende una llamada introductoria privada con uno de nuestros consultores patrimoniales senior sin compromiso.
            </p>
            
            <div className="mt-4 flex flex-wrap gap-4 justify-center">
              <Link
                href="/contacto"
                className="font-sans font-semibold text-sm tracking-wider text-black-principal bg-gold-principal px-8 py-4.5 rounded-custom-button hover:bg-gold-light transition-custom min-h-[48px]"
              >
                Agendar Sesión Privada
              </Link>
              <Link
                href="/nosotros"
                className="font-sans font-semibold text-sm tracking-wider text-gold-principal border border-gold-principal/30 px-8 py-4.5 rounded-custom-button hover:bg-gold-principal hover:text-black-principal transition-custom min-h-[48px]"
              >
                Ver Nuestra Historia
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
