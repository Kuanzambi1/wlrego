import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Network, Building2, ShoppingCart, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import heroEngineer from '../assets/images/engenheira.png';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [hoveredBadge, setHoveredBadge] = useState<number | null>(null);

  const pillars = [
    {
      icon: <Building2 className="w-5 h-5 text-brand-teal" />,
      title: 'Infraestruturas',
      desc: 'Obras Públicas, Saneamento, Projetos',
      color: 'bg-teal-500/10 border-brand-teal/20 hover:border-brand-teal/50'
    },
    {
      icon: <Network className="w-5 h-5 text-brand-green" />,
      title: 'Tecnologia',
      desc: 'Software, Telecomunicações, Impressão',
      color: 'bg-green-500/10 border-brand-green/20 hover:border-brand-green/50'
    },
    {
      icon: <ShoppingCart className="w-5 h-5 text-indigo-500" />,
      title: 'Fornecimento',
      desc: 'Bens Essenciais, Material Escritório',
      color: 'bg-indigo-500/10 border-indigo-500/20 hover:border-indigo-500/50'
    }
  ];

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-white">
      {/* Decorative background blurred patterns */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full bg-brand-teal/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[55%] rounded-full bg-brand-green/5 blur-3xl pointer-events-none" />
      <div className="absolute top-[30%] right-[20%] w-[35%] h-[35%] rounded-full bg-[#00969B]/5 blur-3xl pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:24px_24px] opacity-100 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text and Main Value Prop */}
          <div className="lg:col-span-7 space-y-6">
            

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-gray-900 leading-[1.08]"
            >
              Construímos <span className="text-brand-teal font-serif italic text-[#00969B] font-medium font-serif italic">Infraestruturas</span> e Projetamos o seu <span className="text-brand-green font-serif italic text-[#4A9D2E] font-medium font-serif italic">Futuro</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-600 max-w-2xl font-light leading-relaxed"
            >
              A <strong>W.L. REGO - COMÉRCIO GERAL & PRESTAÇÃO DE SERVIÇOS, LDA</strong> é o seu parceiro empresarial de confiança em Angola. Soluções integradas à medida das exigências da administração pública e privada, garantindo excelência e sustentabilidade para o desenvolvimento do seu município.
            </motion.p>

            {/* Micro-checks list */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-brand-teal shrink-0" />
                <span>Infraestruturas e Obras Públicas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-brand-green shrink-0" />
                <span>Serviços Urbanos e Manutenção</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-brand-teal shrink-0" />
                <span>Tecnologia e Modernização</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-brand-green shrink-0" />
                <span>Desenvolvimento Social e Fornecimento</span>
              </div>
            </motion.div>

            {/* Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <button
                onClick={() => onNavigate('contact')}
                className="group flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-teal text-black font-extrabold text-sm rounded-xl hover:bg-brand-green shadow-lg hover:shadow-xl transition-all uppercase tracking-wider"
              >
                <span>Fale Connosco</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              

            </motion.div>

            {/* Horizontal divisions badge list */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-gray-200"
            >
              {pillars.map((pil, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredBadge(idx)}
                  onMouseLeave={() => setHoveredBadge(null)}
                  className={`flex flex-col p-3 rounded-xl border bg-white border-gray-200 hover:border-[#00969B]/40 backdrop-blur-xs transition-all duration-300 ${
                    hoveredBadge === idx ? 'scale-103 shadow-lg shadow-black/10 translate-y-[-2px]' : ''
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {pil.icon}
                    <h3 className="font-display font-extrabold text-xs text-gray-900">{pil.title}</h3>
                  </div>
                  <p className="text-[10px] text-gray-500 leading-normal">{pil.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side Engineer Image */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-full max-w-[420px]"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                <img
                  src={heroEngineer}
                  alt="Engenheira W. REGO"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-semibold text-gray-900 shadow-lg border border-white/50">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-teal" />
                    <span>Engenharia & Projetos</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
