import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, Calendar, MapPin, Briefcase, ChevronRight, X, Trophy, Milestone } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data';
import { PortfolioProject } from '../types';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'networks' | 'architecture' | 'commerce'>('all');

  const filters = [
    { id: 'all', label: 'Todos os Projetos' },
    { id: 'networks', label: 'Redes / Telecoms' },
    { id: 'architecture', label: 'Arquitetura / Engenharia' },
    { id: 'commerce', label: 'Comércio / Distribuição' },
  ] as const;

  const filteredProjects = PORTFOLIO_PROJECTS.filter(p => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative overlays */}
      <div className="absolute right-[-10%] top-[40%] w-[35%] h-[35%] rounded-full bg-brand-green/3 blur-3xl pointer-events-none" />
      <div className="absolute left-[-15%] top-[10%] w-[40%] h-[40%] rounded-full bg-[#00969B]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold tracking-[0.2em] text-[#00969B] uppercase block">
            Caso de Estudo e Obras
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-gray-900">
            Portfolio de Projetos Executados
          </h2>
          <p className="text-gray-600 font-light text-sm md:text-base leading-relaxed">
            Consulte os marcos de engenharia e fornecimento que atestam a nossa capacidade prática de entrega em Angola e na região PALOP.
          </p>
          <div className="w-12 h-1 bg-brand-green mx-auto rounded-full" />
        </div>

        {/* Filters bar */}
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

        {/* Portfolio Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:border-brand-teal/40 transition-all duration-300"
              >
                <div>
                  {/* Project Image */}
                  <div className="h-40 relative overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className={`w-full h-full flex items-center justify-center ${project.imagePlaceholder}`}>
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:14px_14px]" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 z-10">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-white bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/10 inline-block">
                        {project.category === 'networks' && 'REDES e INFRAESTRUTURAS'}
                        {project.category === 'architecture' && 'ARQUITETURA CIVIL'}
                        {project.category === 'commerce' && 'SUPRIMENTO E LOGÍSTICA'}
                      </span>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between text-xs text-gray-500 font-mono">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{project.year}</span>
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-brand-teal transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Card footer stats callout */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-gray-200 bg-gray-50">
                  {project.stats ? (
                    <div>
                      <span className="text-[10px] text-gray-500 block uppercase font-mono">
                        {project.stats.label}
                      </span>
                      <span className="text-sm font-extrabold text-[#00969B]">
                        {project.stats.value}
                      </span>
                    </div>
                  ) : (
                    <div />
                  )}

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1 py-1.5 px-3 rounded-lg text-xs font-bold text-brand-teal hover:bg-gray-100 transition-all"
                  >
                    <span>Explorar Relatório</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Case Study Details Modal Dialog block */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Modal Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 bg-black/30 backdrop-blur-xs flex items-center justify-center p-4"
            />

            {/* Modal Dialog Content container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="fixed inset-x-4 bottom-4 top-4 md:inset-auto md:w-full md:max-w-3xl bg-white rounded-3xl border border-gray-200 shadow-2xl z-50 overflow-hidden flex flex-col md:max-h-[85vh] text-gray-900"
            >
              {/* Colored top tag */}
              <div className="h-[3px] bg-gradient-to-r from-brand-teal via-brand-green to-brand-teal shrink-0" />
              
              {/* Scrollable Container Body */}
              <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-6">
                
                {/* Header info */}
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-bold tracking-wider uppercase bg-gray-100 text-brand-teal px-2.5 py-1 rounded-full border border-gray-200">
                      Caso de Estudo Certificado
                    </span>
                    <h3 className="font-display font-medium text-xl md:text-2xl text-gray-900 mt-3">
                      {selectedProject.title}
                    </h3>
                    
                    {/* Meta information ticks */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-xs text-gray-600">
                      <div className="flex items-center gap-1 bg-gray-100 border border-gray-200 px-2.5 py-1 rounded-md">
                        <Briefcase className="w-3.5 h-3.5 text-gray-500" />
                        <span>Cliente: <strong>{selectedProject.client}</strong></span>
                      </div>
                      <div className="flex items-center gap-1 bg-gray-100 border border-gray-200 px-2.5 py-1 rounded-md">
                        <MapPin className="w-3.5 h-3.5 text-gray-500" />
                        <span>{selectedProject.location}</span>
                      </div>
                      <div className="flex items-center gap-1 bg-gray-100 border border-gray-200 px-2.5 py-1 rounded-md">
                        <Calendar className="w-3.5 h-3.5 text-gray-500" />
                        <span>Ano {selectedProject.year}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Sub-block Challenge / Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* The Corporate Challenge */}
                  <div className="bg-red-50 border border-red-200 p-5 rounded-2xl relative">
                    <span className="p-1 px-2.5 bg-red-100 text-red-700 text-[10px] font-bold rounded-md block w-fit mb-2 uppercase">
                      Desafio Técnico
                    </span>
                    <p className="text-gray-700 text-xs sm:text-sm font-light leading-relaxed">
                      {selectedProject.challenge}
                    </p>
                  </div>

                  {/* The W. Rego engineered solution */}
                  <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl relative">
                    <span className="p-1 px-2.5 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded-md block w-fit mb-2 uppercase">
                      Solução Implementada
                    </span>
                    <p className="text-gray-700 text-xs sm:text-sm font-light leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Project Results Bullet List */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase flex items-center gap-1.5">
                    <Trophy className="w-4 h-4 text-brand-teal" />
                    <span>Métricas de Sucesso e Resultados Verificados:</span>
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.results.map((res, i) => (
                      <div key={i} className="flex items-start gap-3 bg-gray-100 p-3 rounded-xl border border-gray-200 text-gray-700">
                        <Milestone className="w-4.5 h-4.5 text-brand-teal shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual statistics badge if available */}
                {selectedProject.stats && (
                  <div className="p-4 bg-gradient-to-r from-gray-100 via-white to-gray-100 border border-gray-200 text-gray-900 rounded-2xl flex items-center justify-between shadow-sm">
                    <div className="px-1">
                      <span className="text-[10px] uppercase text-[#00969B] font-mono tracking-wider font-extrabold block">Métrica de impacto primário</span>
                      <p className="text-xs text-gray-500 font-light mt-1">Conformidade e testes de verificação concluídos e entregues ao cliente.</p>
                    </div>
                    <div className="bg-gray-100 px-4 py-2 rounded-xl text-center border border-gray-200">
                      <span className="text-[10px] font-bold text-brand-teal block uppercase font-mono">{selectedProject.stats.label}</span>
                      <span className="text-xl font-display font-semibold text-gray-900">{selectedProject.stats.value}</span>
                    </div>
                  </div>
                )}

              </div>

              {/* Modal Footer fixed operations */}
              <div className="p-6 bg-gray-50 border-t border-gray-200 flex items-center justify-end shrink-0">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 bg-[#00969B] hover:bg-[#007a7d] text-white font-extrabold text-xs rounded-xl shadow-md uppercase tracking-wider transition-all"
                >
                  Fechar Caso de Estudo
                </button>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
