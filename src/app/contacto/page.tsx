"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    patrimony: "$250k - $1M USD",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        patrimony: "$250k - $1M USD",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black-principal">
      {/* Hero Section */}
      <section className="relative h-[480px] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/12-hero-contact.png"
            alt="Contacto Dinero Sabio"
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
              Asesoría Privada
            </span>
            <h1 className="font-serif text-5xl md:text-52px font-medium text-white-warm mt-3 leading-tight">
              Inicie la conversación <span className="text-gold-gradient">con total discreción</span>
            </h1>
            <p className="font-sans text-lg text-grey-warm/80 mt-4 leading-relaxed font-light">
              Estamos a su entera disposición para coordinar una reunión privada o llamada de diagnóstico patrimonial.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Grid: Form and Contact Info */}
      <section className="py-24 bg-gradient-principal">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Column 1: Info */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="font-serif text-3xl md:text-42px font-medium text-gold-light">
                Oficinas Centrales
              </h2>
              <p className="font-sans text-base text-grey-warm/80 leading-relaxed">
                Nuestra oficina principal se encuentra ubicada en el corazón financiero de la Ciudad de México, diseñada bajo estrictos estándares de privacidad y comodidad.
              </p>
              
              <ul className="flex flex-col gap-6 mt-6">
                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-principal/10 border border-gold-principal/25 flex items-center justify-center flex-shrink-0 text-gold-principal">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-gold-light">Dirección</h4>
                    <p className="font-sans text-base text-grey-warm/80 mt-1 leading-relaxed">
                      Av. de la Reforma 412, Piso 18, Lomas de Chapultepec, Ciudad de México, México
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-principal/10 border border-gold-principal/25 flex items-center justify-center flex-shrink-0 text-gold-principal">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-gold-light">Teléfono Directo</h4>
                    <p className="font-sans text-base text-grey-warm/80 mt-1">
                      +52 (55) 8432 9900
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-principal/10 border border-gold-principal/25 flex items-center justify-center flex-shrink-0 text-gold-principal">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-gold-light">Correo Electrónico</h4>
                    <p className="font-sans text-base text-grey-warm/80 mt-1">
                      contacto@dinerosabio.com
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative h-[250px] w-full overflow-hidden rounded-custom-image border border-gold-principal/20">
              <Image
                src="/12-contacto.png"
                alt="Reunión privada Dinero Sabio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-principal/80 via-transparent to-transparent" />
            </div>
          </div>

          {/* Column 2: Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#182116] border border-gold-principal/18 rounded-custom-card p-8 lg:p-12 card-shadow">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                  >
                    <div>
                      <h3 className="font-serif text-2xl text-gold-light font-medium mb-2">
                        Solicitud de Contacto
                      </h3>
                      <p className="font-sans text-sm text-grey-warm/60">
                        Todos los datos ingresados son tratados de manera confidencial y protegidos bajo nuestro Aviso de Privacidad.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="font-sans text-sm text-gold-light font-medium">
                          Nombre Completo
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-[#0E120D] text-white-warm border border-gold-principal/20 focus:border-gold-principal rounded-custom-input p-3.5 text-sm font-sans focus:outline-none transition-custom placeholder-grey-warm/40 min-h-[44px]"
                          placeholder="Ej. Carlos Albeiro"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="font-sans text-sm text-gold-light font-medium">
                          Correo Electrónico
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-[#0E120D] text-white-warm border border-gold-principal/20 focus:border-gold-principal rounded-custom-input p-3.5 text-sm font-sans focus:outline-none transition-custom placeholder-grey-warm/40 min-h-[44px]"
                          placeholder="carlos@ejemplo.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="font-sans text-sm text-gold-light font-medium">
                          Teléfono de Contacto
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-[#0E120D] text-white-warm border border-gold-principal/20 focus:border-gold-principal rounded-custom-input p-3.5 text-sm font-sans focus:outline-none transition-custom placeholder-grey-warm/40 min-h-[44px]"
                          placeholder="+52 55 1234 5678"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="patrimony" className="font-sans text-sm text-gold-light font-medium">
                          Rango de Patrimonio estimado
                        </label>
                        <select
                          id="patrimony"
                          value={formData.patrimony}
                          onChange={(e) => setFormData({ ...formData, patrimony: e.target.value })}
                          className="bg-[#0E120D] text-white-warm border border-gold-principal/20 focus:border-gold-principal rounded-custom-input p-3.5 text-sm font-sans focus:outline-none transition-custom min-h-[48px]"
                        >
                          <option value="<$250k USD">&lt; $250,000 USD</option>
                          <option value="$250k - $1M USD">$250,000 - $1,000,000 USD</option>
                          <option value="$1M - $5M USD">$1,000,000 - $5,000,000 USD</option>
                          <option value=">$5M USD">&gt; $5,000,000 USD</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="font-sans text-sm text-gold-light font-medium">
                        Mensaje o Consulta Especial
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-[#0E120D] text-white-warm border border-gold-principal/20 focus:border-gold-principal rounded-custom-input p-3.5 text-sm font-sans focus:outline-none transition-custom placeholder-grey-warm/40 min-h-[44px] resize-none"
                        placeholder="Describa brevemente sus objetivos financieros o legales patrimoniales..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="mt-4 flex items-center justify-center gap-2 font-sans font-semibold text-sm tracking-wider text-black-principal bg-gold-principal py-4.5 rounded-custom-button transition-all duration-300 hover:bg-gold-light hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 min-h-[48px] cursor-pointer"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-black-principal border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          Enviar Mensaje Discreto <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-12 gap-5"
                  >
                    <div className="w-16 h-16 bg-gold-principal/15 border border-gold-principal/30 rounded-full flex items-center justify-center text-gold-principal">
                      <CheckCircle className="w-10 h-10 stroke-[1.5px]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-3xl text-gold-light font-medium">
                        Solicitud Recibida
                      </h3>
                      <p className="font-sans text-base text-grey-warm/80 mt-3 max-w-[420px] leading-relaxed mx-auto">
                        Agradecemos su interés en Dinero Sabio. Un consultor patrimonial senior se pondrá en contacto con usted de forma discreta en un plazo no mayor a 24 horas hábiles.
                      </p>
                    </div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 font-sans font-semibold text-xs tracking-wider text-gold-principal border border-gold-principal/30 px-6 py-2.5 rounded-custom-button hover:bg-gold-principal hover:text-black-principal transition-custom min-h-[44px]"
                    >
                      Enviar otra consulta
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
