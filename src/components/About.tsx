import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Users, Target, Rocket, ChevronDown, HelpCircle, ArrowUpRight } from 'lucide-react';
import { COMPANY_STATS, FAQ_ITEMS } from '../data';

export default function About() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'mission' | 'history' | 'values'>('mission');

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const corporatePillars = {
    mission: {
      title: 'A Nossa Missão',
      icon: <Target className="w-10 h-10 text-brand-teal" />,
      content: 'Prover serviços integrados de alta engenharia, telecomunicações corporativas e suprimentos de comércio geral com agilidade, honestidade intelectual e rigor técnico. Capacitamos as empresas angolanas e internacionais a expandir o seu potencial físico e digital com infraestruturas sólidas e seguras.',
      points: [
        'Segurança jurídica e técnica em todos os projetos de arquitetura.',
        'Certificação rigorosa em todas as redes instaladas.',
        'Cadeia de suprimento transparente e de comércio ético.'
      ]
    },
    history: {
      title: 'A Nossa História',
      icon: <Rocket className="w-10 h-10 text-brand-green" />,
      content: 'Fundada por especialistas seniores com anos de experiência no sector imobiliário e engenharia de comunicações em Luanda, a W. REGO surgiu para preencher o vazio de coordenação em obras integradas. Percebemos que as empresas perdiam eficiência ao gerir empreiteiros de telecomunicações distintos dos engenheiros civis. Unificámos estas competências.',
      points: [
        'Fusão ideal de tecnologia da informação e construção civil.',
        'Parcerias com fabricantes globais de cabos e hardware de redes.',
        'Desenvolvimento de edifícios marco e remodelações corporativas.'
      ]
    },
    values: {
      title: 'Os Nossos Valores',
      icon: <ShieldCheck className="w-10 h-10 text-brand-purple" />,
      content: 'Regemo-nos pelo compromisso inabalável com a verdade dos factos, qualidade incondicional dos materiais e satisfação sustentável do cliente. Acreditamos na competência local suportada por metodologias e padrões internacionais de excelência profissional.',
      points: [
        'Transparência com orçamentos detalhados sem custos ocultos.',
        'Formação contínua de técnicos e instaladores locais.',
        'Sustentabilidade ecológica e eficiência energética nos edifícios.'
      ]
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Visual background accent */}
      <div className="absolute right-0 bottom-1/4 w-[30%] h-[30%] rounded-full bg-brand-green/2 blur-3xl pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-[25%] h-[25%] rounded-full bg-brand-teal/2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Grid */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-[0.2em] text-brand-teal uppercase block">
            Quem Somos Nós
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-purple">
            Compromisso com o Rigor, Qualidade e Inovação Multidisciplinar
          </h2>
          <div className="w-12 h-1 bg-brand-green mx-auto rounded-full" />
        </div>

        {/* Brand Pillars Interactive Tab Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Vertical switches left */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            {(['mission', 'history', 'values'] as const).map((tab) => {
              const active = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center gap-3 p-4 rounded-xl text-left border transition-all duration-300 ${
                    active
                      ? 'bg-brand-purple text-white border-brand-purple shadow-md shadow-brand-purple/10 translate-x-2'
                      : 'bg-slate-50 text-slate-700 border-slate-100 hover:bg-slate-100'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${active ? 'bg-white/10 text-white' : 'bg-white text-slate-600 border border-slate-200'}`}>
                    {tab === 'mission' && <Target className="w-4 h-4" />}
                    {tab === 'history' && <Rocket className="w-4 h-4" />}
                    {tab === 'values' && <ShieldCheck className="w-4 h-4" />}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm tracking-wide">
                      {tab === 'mission' && 'Missão & Foco'}
                      {tab === 'history' && 'A Nossa Origem'}
                      {tab === 'values' && 'Valores Corporativos'}
                    </h3>
                    <p className={`text-xs ${active ? 'text-white/60' : 'text-slate-400'}`}>
                      {tab === 'mission' && 'O que nos guia todos os dias'}
                      {tab === 'history' && 'A nossa jornada profissional'}
                      {tab === 'values' && 'Os pilares em que nos apoiamos'}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Tab Content display right */}
          <div className="lg:col-span-8 bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-2xl relative min-h-[300px] flex flex-col justify-between shadow-xs">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-xs border border-slate-100 text-brand-purple shrink-0">
                    {corporatePillars[activeTab].icon}
                  </div>
                  <h3 className="text-xl font-display font-bold text-brand-purple">
                    {corporatePillars[activeTab].title}
                  </h3>
                </div>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                  {corporatePillars[activeTab].content}
                </p>

                <div className="space-y-2 border-t border-slate-200/60 pt-4">
                  <span className="text-xs font-semibold text-brand-purple tracking-wider uppercase block mb-2">
                    Destaque de Atuação:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    {corporatePillars[activeTab].points.map((p, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-1.5 shrink-0" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Counters / Stats Section (Full-width grid) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 bg-brand-purple text-white p-6 md:p-8 rounded-3xl shadow-lg border border-brand-purple/20 mb-20 relative overflow-hidden">
          {/* Visual abstract overlay inside counter bar */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-brand-teal/10 to-transparent pointer-events-none" />
          
          {COMPANY_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="text-center space-y-1 relative"
            >
              {idx > 0 && <div className="hidden lg:block absolute left-0 top-1/4 bottom-1/4 w-[1px] bg-white/10" />}
              <span className="block text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand-teal tracking-tight">
                {stat.value}
              </span>
              <span className="block text-xs sm:text-sm font-bold tracking-wide text-white uppercase">
                {stat.label}
              </span>
              <span className="block text-[10px] text-slate-300 px-3 font-light leading-normal hidden sm:block">
                {stat.description}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Corporate Accordion FAQ Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-green/10 text-brand-green text-xs font-semibold rounded-full">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Dúvidas Frequentes</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-brand-purple leading-snug">
              Respostas Claras para as suas Questões
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed font-light">
              Procuramos desmistificar processos técnicos complexos. Se não encontrar a informação de que necessita sobre licenciamentos civil, infraestruturas informáticas ou adjudicações, por favor entre em contacto direto com os nossos consultores.
            </p>
            <div className="pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-brand-purple block uppercase tracking-wide">Precisa de Suporte Direto?</h4>
                  <p className="text-[10px] text-slate-400">Atendimento telefónico em dias úteis das 08h às 18h.</p>
                </div>
                <span className="p-2 bg-white rounded-xl shadow-xs text-brand-teal hover:text-brand-purple cursor-pointer transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-100/60 rounded-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-4 text-left font-display font-semibold text-sm sm:text-base text-brand-purple hover:bg-slate-100/50 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-brand-teal' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-4 pb-4 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
