"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ChevronDown, Landmark, TrendingUp, Users, ShieldAlert, Award, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const servicesList = [
  {
    title: "Planeación Financiera",
    href: "/planeacion-financiera",
    description: "Estrategia integral y personalizada para la Familia Ramírez y perfiles privados.",
    icon: Landmark,
  },
  {
    title: "Ahorro e Inversión",
    href: "/ahorro-inversion",
    description: "Multiplique su capital con fondos premium a corto, mediano y largo plazo.",
    icon: TrendingUp,
  },
  {
    title: "Planeación Patrimonial",
    href: "/planeacion-patrimonial",
    description: "Gobernanza familiar, fideicomisos y protección de sucesiones.",
    icon: Users,
  },
  {
    title: "Soluciones Complementarias",
    href: "/soluciones-complementarias",
    description: "Seguros de vida, estrategias fiscales y servicios legales fiduciarios.",
    icon: ShieldAlert,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll to add slight backdrop styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const isServiceActive = servicesList.some((service) => pathname === service.href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[92px] flex items-center justify-between px-6 lg:px-12 transition-all duration-300 ${
        scrolled ? "bg-black-principal/95 backdrop-blur-md border-b border-gold-principal/10" : "bg-black-principal"
      }`}
    >
      <div className="w-full max-w-[1320px] mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="relative h-[72px] w-[280px] focus:outline-none block">
          <Image
            src="/logo-dinero-sabio.png"
            alt="Dinero Sabio"
            fill
            className="object-contain object-left"
            sizes="(max-width: 768px) 220px, 320px"
            priority
          />
        </Link>


        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`font-sans text-sm tracking-wider font-medium transition-custom hover:text-gold-principal py-2 ${
              pathname === "/" ? "text-gold-principal active-nav-link" : "text-grey-warm"
            }`}
          >
            Inicio
          </Link>

          {/* Mega Menu Trigger */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className={`flex items-center gap-1 font-sans text-sm tracking-wider font-medium transition-custom hover:text-gold-principal py-2 cursor-pointer focus:outline-none ${
                isServiceActive ? "text-gold-principal active-nav-link" : "text-grey-warm"
              }`}
            >
              Servicios <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Mega Menu */}
            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[480px] z-50 pointer-events-auto"
                >
                  <div className="bg-[#1B2419] border border-gold-principal/20 rounded-2xl dropdown-shadow p-5 grid grid-cols-1 gap-3">
                    {servicesList.map((service) => {
                      const Icon = service.icon;
                      const isActive = pathname === service.href;
                      return (
                        <Link
                          key={service.title}
                          href={service.href}
                          className={`flex gap-4 p-3 rounded-xl transition-custom ${
                            isActive
                              ? "bg-gold-principal/10 border border-gold-principal/20"
                              : "hover:bg-gold-principal/8 border border-transparent"
                          }`}
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold-principal/10 flex items-center justify-center border border-gold-principal/25">
                            <Icon className="w-5 h-5 text-gold-principal stroke-[2px]" />
                          </div>
                          <div>
                            <h4 className="font-sans text-sm font-semibold tracking-wide text-gold-light">
                              {service.title}
                            </h4>
                            <p className="font-sans text-xs text-grey-warm/80 mt-1 leading-normal">
                              {service.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/educacion-financiera"
            className={`font-sans text-sm tracking-wider font-medium transition-custom hover:text-gold-principal py-2 ${
              pathname === "/educacion-financiera" ? "text-gold-principal active-nav-link" : "text-grey-warm"
            }`}
          >
            Educación
          </Link>

          <Link
            href="/nosotros"
            className={`font-sans text-sm tracking-wider font-medium transition-custom hover:text-gold-principal py-2 ${
              pathname === "/nosotros" ? "text-gold-principal active-nav-link" : "text-grey-warm"
            }`}
          >
            Nosotros
          </Link>

          <Link
            href="/actualidad"
            className={`font-sans text-sm tracking-wider font-medium transition-custom hover:text-gold-principal py-2 ${
              pathname === "/actualidad" ? "text-gold-principal active-nav-link" : "text-grey-warm"
            }`}
          >
            Actualidad
          </Link>
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center font-sans font-semibold text-sm tracking-wider text-black-principal bg-gold-principal px-6 py-3 rounded-custom-button transition-all duration-300 hover:bg-gold-light hover:-translate-y-0.5 active:translate-y-0 min-h-[44px]"
          >
            Agendar Asesoría
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-11 h-11 border border-gold-principal/20 rounded-xl text-gold-principal hover:bg-gold-principal/10 transition-custom min-h-[44px] min-w-[44px]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE MENU PANEL */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[92px] left-0 right-0 bg-[#0E120D] border-b border-gold-principal/15 z-40 overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-8">
              <Link
                href="/"
                className={`font-sans text-base font-medium tracking-wide py-2 ${
                  pathname === "/" ? "text-gold-principal" : "text-grey-warm"
                }`}
              >
                Inicio
              </Link>
              
              <div className="border-t border-gold-principal/10 pt-2">
                <span className="font-sans text-xs tracking-wider text-gold-principal/60 uppercase font-semibold block mb-2">
                  Servicios Patrimoniales
                </span>
                <div className="grid grid-cols-1 gap-2 pl-2">
                  {servicesList.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className={`font-sans text-sm font-medium py-2 ${
                        pathname === service.href ? "text-gold-principal" : "text-grey-warm"
                      }`}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/educacion-financiera"
                className={`font-sans text-base font-medium tracking-wide border-t border-gold-principal/10 pt-4 py-2 ${
                  pathname === "/educacion-financiera" ? "text-gold-principal" : "text-grey-warm"
                }`}
              >
                Educación Financiera
              </Link>

              <Link
                href="/nosotros"
                className={`font-sans text-base font-medium tracking-wide border-t border-gold-principal/10 pt-4 py-2 ${
                  pathname === "/nosotros" ? "text-gold-principal" : "text-grey-warm"
                }`}
              >
                Nosotros
              </Link>

              <Link
                href="/actualidad"
                className={`font-sans text-base font-medium tracking-wide border-t border-gold-principal/10 pt-4 py-2 ${
                  pathname === "/actualidad" ? "text-gold-principal" : "text-grey-warm"
                }`}
              >
                Actualidad
              </Link>

              <Link
                href="/contacto"
                className="mt-4 flex items-center justify-center font-sans font-semibold text-base text-black-principal bg-gold-principal py-3.5 rounded-custom-button transition-custom hover:bg-gold-light min-h-[44px]"
              >
                Agendar Asesoría
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
