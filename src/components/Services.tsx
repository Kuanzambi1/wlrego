import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';

interface ServicesProps {
  onSelectCategory: (category: string) => void;
  onNavigate: (sectionId: string) => void;
}

export default function Services({ onSelectCategory, onNavigate }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'networks' | 'architecture' | 'commerce' | 'consulting'>('all');

  // Dynamic Lucide-react Icon Resolver
  const renderIcon = (iconName: string, className = "w-6 h-6") => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }
    return <Icons.HelpCircle className={className} />;
  };

  const filters = [
    { id: 'all', label: 'Todos os Serviços' },
    { id: 'networks', label: 'Redes e TI' },
    { id: 'architecture', label: 'Arquitetura e Civil' },
    { id: 'commerce', label: 'Comércio e Hardware' },
    { id: 'consulting', label: 'Consultoria' },
  ] as const;

  const filteredServices = SERVICES.filter(s => {
    if (activeFilter === 'all') return true;
    return s.category === activeFilter;
  });

  const handleSimulateCategory = (serviceCat: string) => {
    onSelectCategory(serviceCat);
    setSelectedService(null);
    onNavigate('simulator');
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute top-[10%] left-[-10%] w-[35%] h-[35%] rounded-full bg-[#00969B]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[35%] h-[35%] rounded-full bg-[#00969B]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold tracking-[0.2em] text-[#00969B] uppercase block">
            Nossos Serviços e Atividades
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-gray-900">
            Prestação de Serviços Integrados de Alta Fidelidade
          </h2>
          <p className="text-gray-600 font-light text-sm md:text-base leading-relaxed">
            Oferecemos uma resposta vertical estruturada para as suas necessidades de engenharia, redes de dados estruturadas, comércio geral certificado de material de escritório/TI e planeamento de arquitetura.
          </p>
          <div className="w-12 h-1 bg-brand-green mx-auto rounded-full" />
        </div>

        {/* Filter Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((fil) => (
            <button
              key={fil.id}
              onClick={() => setActiveFilter(fil.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all border uppercase tracking-wider ${
                activeFilter === fil.id
                  ? 'bg-brand-teal text-white border-brand-teal shadow-md'
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {fil.label}
            </button>
          ))}
        </div>

        {/* Services Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {filteredServices.map((service, idx) => (
            <motion.div
              layout
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-gray-200 hover:border-brand-teal/40 p-6 md:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  {/* Styled Icon box */}
                  <div className="p-4 rounded-xl border border-gray-200 shadow-inner bg-gray-100 text-[#00969B]">
                    {renderIcon(service.iconName, "w-6 h-6")}
                  </div>
                  
                  {/* Category Pill Tag */}
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-gray-100 text-[#00969B]">
                    {service.category === 'networks' && 'REDES & TI'}
                    {service.category === 'architecture' && 'ARQUITETURA'}
                    {service.category === 'commerce' && 'COMÉRCIO GERAL'}
                    {service.category === 'consulting' && 'CONSULTORIA'}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Horizontal bullets summary (first 3) */}
                <div className="space-y-1.5 pt-2">
                  {service.features.slice(0, 3).map((feat, fidx) => (
                    <div key={fidx} className="flex items-center gap-2">
                      <Icons.Check className="w-4 h-4 text-brand-green bg-[#4A9D2E]/15 rounded-full p-0.5 shrink-0" />
                      <span className="text-gray-600 text-xs truncate">{feat}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <span className="text-gray-400 text-[11px] block pl-6">
                      + {service.features.length - 3} outras especificidades técnicas
                    </span>
                  )}
                </div>
              </div>

              {/* Read more button link bottom */}
              <div className="mt-8 pt-4 border-t border-gray-200 flex items-center justify-between text-xs font-bold text-brand-teal hover:text-gray-900 transition-colors">
                <span>Ver plano de ação completo</span>
                <Icons.ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* More details info banner */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-500">
            Fornecemos serviços sob medida e faturados detalhadamente. Tem um caderno de encargos específico? Efetue um primeiro cálculo no nosso{' '}
            <button
              onClick={() => onNavigate('simulator')}
              className="text-[#00969B] cursor-pointer font-bold underline hover:text-gray-900 transition-colors"
            >
              Simulador Técnico Interativo
            </button>.
          </p>
        </div>

      </div>

      {/* Services Modal Dialog block */}
      <AnimatePresence>
        {selectedService && (
          <>
            {/* Modal Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4"
            />

            {/* Modal Dialog Content container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="fixed inset-x-4 bottom-4 top-4 md:inset-auto md:w-full md:max-w-2xl bg-white rounded-3xl border border-gray-200 shadow-2xl z-50 overflow-hidden flex flex-col md:max-h-[85vh] text-gray-900"
            >
              {/* Colored top visual bar */}
              <div className="h-[3px] bg-gradient-to-r from-brand-teal via-brand-green to-brand-teal" />
              
              {/* Modal Body scrollable area */}
              <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-6">
                
                {/* Modal Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-xl border border-gray-200 bg-gray-100 text-brand-teal font-bold shadow-inner">
                      {renderIcon(selectedService.iconName, "w-6 h-6")}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-gray-500 tracking-widest uppercase">
                        Plano Detalhado
                      </span>
                      <h3 className="font-display font-medium text-lg md:text-xl text-gray-900">
                        {selectedService.title}
                      </h3>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="p-1.5 hover:bg-black/10 rounded-full transition-colors text-gray-500"
                  >
                    <Icons.X className="w-5 h-5" />
                  </button>
                </div>

                {/* Descriptions */}
                <div className="space-y-3 pt-2">
                  <p className="text-brand-teal text-sm font-semibold italic bg-gray-100 p-3 rounded-xl border border-gray-200 leading-relaxed font-light">
                    &ldquo;{selectedService.shortDescription}&rdquo;
                  </p>
                  <p className="text-gray-700 text-xs sm:text-sm font-light leading-relaxed">
                    {selectedService.longDescription}
                  </p>
                </div>

                {/* Features list */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold text-brand-teal tracking-wider uppercase">
                    Especificações Técnicas e Competências:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                    {selectedService.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 bg-gray-100 p-2 rounded-lg border border-gray-200">
                        <Icons.CheckSquare className="w-4 h-4 text-[#00969B] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Regulating standard guidelines check */}
                <div className="p-4 bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 rounded-2xl">
                  <span className="text-[10px] font-bold text-brand-teal leading-none tracking-widest uppercase block mb-1">
                    Garantia e Conformidade W. REGO
                  </span>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    Todas as execuções de {selectedService.title.toLowerCase()} cumprem estritamente os regulamentos legais em vigor (licenciamentos civil e diretivas de redes estruturadas). Dispomos de certificação e relatórios com suporte pós-venda.
                  </p>
                </div>

              </div>

              {/* Modal footer fixed actions */}
              <div className="p-6 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row gap-3 justify-between items-center shrink-0">
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-5 py-2.5 border border-gray-200 text-gray-700 font-semibold text-xs rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Voltar à lista
                </button>
                <div className="flex gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => handleSimulateCategory(selectedService.id)}
                    className="w-full sm:w-auto px-5 py-2.5 bg-[#00969B] text-black font-extrabold text-xs rounded-xl hover:bg-[#007a7d] transition-colors shadow-md uppercase tracking-wider"
                  >
                    Simular Custo Inicial
                  </button>
                </div>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
