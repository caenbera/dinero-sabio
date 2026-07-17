import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black-principal border-t border-gold-principal/12 pt-16 pb-8 px-6 lg:px-12 w-full mt-auto">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* Column 1: Brand Logo & ADN */}
        <div className="flex flex-col gap-5 col-span-1 md:col-span-1.5">
          <Link href="/" className="relative h-10 w-44 focus:outline-none block">
            <Image
              src="/logo-dinero-sabio.png"
              alt="Dinero Sabio"
              fill
              className="object-contain object-left"
              sizes="180px"
            />
          </Link>
          <p className="font-sans text-sm text-grey-warm/75 leading-relaxed max-w-[280px]">
            Elegancia, patrimonio y tranquilidad. Firma privada de asesoría patrimonial y financiera de alto nivel.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg border border-gold-principal/20 flex items-center justify-center text-gold-principal hover:bg-gold-principal/10 transition-custom focus:outline-none min-h-[40px] min-w-[40px]"
              aria-label="LinkedIn"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Services */}
        <div className="flex flex-col gap-4">
          <h4 className="font-sans font-semibold text-sm tracking-wider text-gold-principal uppercase">
            Servicios
          </h4>
          <ul className="flex flex-col gap-2.5">
            <li>
              <Link href="/planeacion-financiera" className="font-sans text-sm text-grey-warm/80 hover:text-gold-principal transition-custom flex items-center gap-1">
                Planeación Financiera <ArrowUpRight className="w-3.5 h-3.5 opacity-0 hover:opacity-100 transition-opacity" />
              </Link>
            </li>
            <li>
              <Link href="/ahorro-inversion" className="font-sans text-sm text-grey-warm/80 hover:text-gold-principal transition-custom flex items-center gap-1">
                Ahorro e Inversión <ArrowUpRight className="w-3.5 h-3.5 opacity-0 hover:opacity-100 transition-opacity" />
              </Link>
            </li>
            <li>
              <Link href="/planeacion-patrimonial" className="font-sans text-sm text-grey-warm/80 hover:text-gold-principal transition-custom flex items-center gap-1">
                Planeación Patrimonial <ArrowUpRight className="w-3.5 h-3.5 opacity-0 hover:opacity-100 transition-opacity" />
              </Link>
            </li>
            <li>
              <Link href="/soluciones-complementarias" className="font-sans text-sm text-grey-warm/80 hover:text-gold-principal transition-custom flex items-center gap-1">
                Soluciones Adicionales <ArrowUpRight className="w-3.5 h-3.5 opacity-0 hover:opacity-100 transition-opacity" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-sans font-semibold text-sm tracking-wider text-gold-principal uppercase">
            Firma
          </h4>
          <ul className="flex flex-col gap-2.5">
            <li>
              <Link href="/nosotros" className="font-sans text-sm text-grey-warm/80 hover:text-gold-principal transition-custom">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/educacion-financiera" className="font-sans text-sm text-grey-warm/80 hover:text-gold-principal transition-custom">
                Educación Financiera
              </Link>
            </li>
            <li>
              <Link href="/actualidad" className="font-sans text-sm text-grey-warm/80 hover:text-gold-principal transition-custom">
                Actualidad
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="font-sans text-sm text-grey-warm/80 hover:text-gold-principal transition-custom">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Office */}
        <div className="flex flex-col gap-4">
          <h4 className="font-sans font-semibold text-sm tracking-wider text-gold-principal uppercase">
            Contacto
          </h4>
          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gold-principal flex-shrink-0 mt-0.5" />
              <span className="font-sans text-sm text-grey-warm/80 leading-relaxed">
                Av. de la Reforma 412, Piso 18, Lomas de Chapultepec, CDMX
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gold-principal flex-shrink-0" />
              <span className="font-sans text-sm text-grey-warm/80">
                +52 (55) 8432 9900
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gold-principal flex-shrink-0" />
              <span className="font-sans text-sm text-grey-warm/80">
                contacto@dinerosabio.com
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* Separator line & copyright */}
      <div className="max-w-[1320px] mx-auto border-t border-gold-principal/12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-sans text-xs text-grey-warm/50 text-center md:text-left">
          &copy; {new Date().getFullYear()} Dinero Sabio. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-6">
          <Link href="/aviso-privacidad" className="font-sans text-xs text-grey-warm/50 hover:text-gold-principal transition-custom">
            Aviso de Privacidad
          </Link>
          <Link href="/terminos-condiciones" className="font-sans text-xs text-grey-warm/50 hover:text-gold-principal transition-custom">
            Términos y Condiciones
          </Link>
        </div>
      </div>
    </footer>
  );
}
