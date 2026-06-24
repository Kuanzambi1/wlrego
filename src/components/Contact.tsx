import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, Landmark, CheckCircle, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'Solicitação de Proposta',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedCoords, setCopiedCoords] = useState(false);



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor, preencha todos os campos obrigatórios (*).');
      return;
    }

    setIsSubmitting(true);

    // Simulate server side email API relay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1800);
  };

  const handleCopyCoordinates = () => {
    navigator.clipboard.writeText("-8.9234, 13.1812");
    setCopiedCoords(true);
    setTimeout(() => setCopiedCoords(false), 2000);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: 'Solicitação de Proposta',
      message: ''
    });
    setSubmitSuccess(false);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-[20%] left-[-15%] w-[45%] h-[45%] rounded-full bg-[#00969B]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[35%] h-[35%] rounded-full bg-[#00969B]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-[0.2em] text-[#00969B] uppercase block">
            Fale Connosco
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-gray-900">
            Pronto para Dar o Próximo Passo?
          </h2>
          <p className="text-gray-600 font-light text-sm md:text-base leading-relaxed">
            Estamos prontos para atender as suas demandas corporativas. Preencha o formulário para agendar uma vistoria ou esclarecer termos comerciais.
          </p>
          <div className="w-12 h-1 bg-brand-green mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact details and Vector Map left */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick contact list cards */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-lg text-white">informação de Contacto</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phones */}
                <div className="p-4 rounded-2xl bg-[#111111] border border-white/5 flex items-start gap-3">
                  <div className="p-2.5 bg-black text-[#00969B] rounded-xl shadow-xs shrink-0 border border-white/5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-slate-400 block uppercase font-mono font-bold">Ligar e WhatsApp</span>
                    <a href="tel:+244923913392" className="text-xs sm:text-sm font-semibold text-white hover:text-[#00969B] hover:underline block">
                      +244 923 913 392
                    </a>
                  </div>
                </div>

                {/* Emails */}
                <div className="p-4 rounded-2xl bg-[#111111] border border-white/5 flex items-start gap-3">
                  <div className="p-2.5 bg-black text-[#00969B] rounded-xl shadow-xs shrink-0 border border-white/5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-slate-400 block uppercase font-mono font-bold">Correio Eletrónico</span>
                    <a href="mailto:geralwlrego@gmail.com" className="text-xs sm:text-sm font-semibold text-white hover:text-[#00969B] hover:underline block truncate">
                      geralwlrego@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-[#111111] border border-white/5 flex items-start gap-3 sm:col-span-2">
                  <div className="p-2.5 bg-black text-[#00969B] rounded-xl shadow-xs shrink-0 border border-white/5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-slate-400 block uppercase font-mono font-bold">Sede e Escritório</span>
                    <p className="text-xs sm:text-sm font-semibold text-white leading-snug">
                      Província de Luanda, Município de Ingombota, Bairro Madeira, Rua n.º R10, Casa n.º 1255.
                    </p>
                  </div>
                </div>

                {/* Schedule times */}
                <div className="p-4 rounded-2xl bg-[#111111] border border-white/5 flex items-start gap-3 sm:col-span-2">
                  <div className="p-2.5 bg-black text-[#00969B] rounded-xl shadow-xs shrink-0 border border-white/5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-[#00969B] block uppercase font-mono font-bold">Horário de Atendimento</span>
                    <p className="text-xs text-slate-300 font-light leading-snug">
                      Segunda a Sexta: <strong className="text-white font-medium">08h00 - 18h00</strong><br />
                      Sábados: <strong className="text-white font-medium">09h00 - 13h00</strong> (Urgências sob agendamento)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Vector Map (No broken Google Map iFrame, but a beautiful localized corporate radar locator map!) */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white uppercase tracking-wide">
                  Localização Geográfica
                </span>
                <button
                  onClick={handleCopyCoordinates}
                  className="flex items-center gap-1 text-[10px] text-[#00969B] font-bold hover:underline"
                >
                  {copiedCoords ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedCoords ? 'Copiado!' : 'Copiar Coordenadas'}</span>
                </button>
              </div>

              {/* Styled Interactive Map Container */}
              <div className="h-48 border border-white/5 rounded-3xl relative overflow-hidden bg-black shadow-inner flex items-center justify-center">
                
                {/* Visual geographic contours representation with CSS lines */}
                <svg className="absolute inset-0 w-full h-full text-slate-900" xmlns="http://www.w3.org/2000/svg">
                  {/* Grid Lines */}
                  <defs>
                    <pattern id="mapGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#mapGrid)" />
                  
                  {/* Styled roads network */}
                  <path d="M-50 90 L300 240 M200-50 L180 300 M350 40 L-20 180" stroke="#111111" strokeWidth="8" strokeLinecap="round" />
                  <path d="M-50 90 L300 240 M200-50 L180 300 M350 40 L-20 180" stroke="#1c1c1c" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Highway bypass */}
                  <path d="M100-20 C110 80, 290 120, 420 180" stroke="#161616" strokeWidth="12" strokeLinecap="round" fill="none" />
                  <path d="M100-20 C110 80, 290 120, 420 180" stroke="#00969B" strokeWidth="1" strokeDasharray="4 4" strokeLinecap="round" fill="none" opacity="0.6" />
                </svg>

                {/* Simulated geographic names floating */}
                <span className="absolute top-4 left-10 text-[9px] font-mono font-extrabold text-slate-500">
                  INGOMBOTA
                </span>
                <span className="absolute bottom-10 right-10 text-[9px] font-mono font-extrabold text-slate-500">
                  BAIRRO MADEIRA
                </span>
                <span className="absolute top-18 right-6 text-[8px] font-mono text-slate-600">
                  RUA N.º R10
                </span>

                {/* Headquarters Radar Pointer Indicator Pin */}
                <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="relative">
                    <span className="absolute inline-flex h-9 w-9 rounded-full bg-[#4A9D2E]/20 animate-ping -left-1.5 -top-1.5" />
                    <span className="absolute inline-flex h-6 w-6 rounded-full bg-brand-teal/30 animate-pulse -left-0 -top-0" />
                    <div className="relative h-6 w-6 rounded-full bg-black border border-[#00969B] flex items-center justify-center shadow-lg">
                      <Landmark className="w-3 h-3 text-[#00969B]" />
                    </div>
                  </div>
                  <div className="mt-1.5 bg-[#111111] backdrop-blur-xs text-[9px] font-bold text-white px-2 py-0.5 rounded-md border border-[#00969B]/20 shadow-md">
                    W. REGO Sede
                  </div>
                </div>

                {/* Map Directions overlay footer info banner */}
                <div className="absolute bottom-2 left-2 right-2 bg-[#111111]/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/5 flex items-center justify-between shadow-xs">
                  <span className="text-[10px] text-slate-350 font-light truncate">
                    Casa n.º 1255.
                  </span>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="text-[10px] font-bold text-[#00969B] hover:text-white hover:underline shrink-0 pl-2"
                  >
                    Rotas Google Maps
                  </a>
                </div>

              </div>
            </div>

          </div>

          {/* Interactive Input Form Column right */}
          <div className="lg:col-span-7">
            <div className="bg-[#111111] border border-white/5 rounded-3xl p-6 md:p-8 relative min-h-[500px] shadow-2xl">
              
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="form-entry"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div>
                      <h3 className="font-display font-medium text-lg text-white mb-1">
                        Envie uma Mensagem
                      </h3>
                      <p className="text-slate-450 text-xs font-light">
                        Os campos assinalados com o asterisco (*) são de preenchimento obrigatório.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-xs font-semibold text-slate-300">
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Ex: Manuel Augusto"
                          className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-black text-sm font-medium text-white placeholder-slate-500 focus:outline-none focus:border-[#00969B] focus:ring-1 focus:ring-[#00969B]/25 transition-all text-white"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-semibold text-slate-300">
                          E-mail Corporativo *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="empresa@dominio.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-black text-sm font-medium text-white placeholder-slate-500 focus:outline-none focus:border-[#00969B] focus:ring-1 focus:ring-[#00969B]/25 transition-all text-white"
                        />
                      </div>

                      {/* Phone/WhatsApp input */}
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-xs font-semibold text-slate-300">
                          Telemóvel / WhatsApp
                        </label>
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+244 9..."
                          className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-black text-sm font-medium text-white placeholder-slate-500 focus:outline-none focus:border-[#00969B] focus:ring-1 focus:ring-[#00969B]/25 transition-all text-white"
                        />
                      </div>

                      {/* Company input */}
                      <div className="space-y-1.5">
                        <label htmlFor="company" className="text-xs font-semibold text-slate-300">
                          Nome da Empresa
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Ex: Limitada S.A."
                          className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-black text-sm font-medium text-white placeholder-slate-500 focus:outline-none focus:border-[#00969B] focus:ring-1 focus:ring-[#00969B]/25 transition-all text-white"
                        />
                      </div>
                    </div>

                    {/* Subject input selector */}
                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="text-xs font-semibold text-slate-300">
                        Assunto Principal
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-black text-sm font-medium text-white focus:outline-none focus:border-[#00969B] focus:ring-1 focus:ring-[#00969B]/25 transition-all"
                      >
                        <option value="Solicitação de Proposta">Solicitação de Proposta</option>
                        <option value="Serviços de Redes e Telecom">Instalação / Auditoria de Redes</option>
                        <option value="Projetos de Arquitetura">Desenho / Fiscalização de Arquitetura</option>
                        <option value="Comércio Geral e Logística">Fornecimento de Consumíveis / TI</option>
                        <option value="Cotação Geral / Informações">Parcerias e Outras Informações</option>
                      </select>
                    </div>

                    {/* Message input */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-semibold text-slate-300">
                        Como podemos ajudar o seu negócio? *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Por favor, descreva detalhadamente os serviços requeridos, a localização do imóvel, ou os prazos esperados."
                        className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-black text-sm font-medium text-white placeholder-slate-500 focus:outline-none focus:border-[#00969B] focus:ring-1 focus:ring-[#00969B]/25 transition-all resize-none text-white"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3 bg-brand-teal hover:bg-brand-green text-black font-extrabold text-sm rounded-xl shadow-lg cursor-pointer transition-all disabled:opacity-75 disabled:cursor-wait uppercase tracking-wider"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          <span>A enviar formulário...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Enviar Mensagem Comercial</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  /* Success Frame Receipt Summary */
                  <motion.div
                    key="success-card"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12 space-y-6 text-[#e5e5e5]"
                  >
                    <div className="p-3.5 bg-emerald-950/10 text-brand-green rounded-full shadow-inner animate-[bounce_2s_ease-in-out_infinite]">
                      <CheckCircle className="w-12 h-12" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display font-semibold text-2xl text-white">
                        Formulário Recebido com Sucesso!
                      </h3>
                      <p className="text-slate-300 text-sm max-w-md font-light leading-relaxed">
                        Agradecemos o seu interesse na <strong className="text-brand-teal">W. REGO Lda</strong>. O seu ticket de contacto foi gerado e partilhado com a equipa comercial.
                      </p>
                    </div>

                    {/* Styled Ticket details display */}
                    <div className="bg-[#0a0a0a] border border-white/5 p-5 rounded-2xl w-full max-w-sm text-left shadow-xs space-y-2 font-mono text-[11px] text-slate-350">
                      <div className="border-b border-dashed border-white/10 pb-2 mb-2 text-center text-brand-teal font-bold mb-3 uppercase tracking-wider">
                        REGISTO COMERCIAL - W. REGO
                      </div>
                      <div className="flex justify-between">
                        <span>Emissor:</span>
                        <strong className="text-white">{formData.name}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>E-mail:</span>
                        <span className="text-white">{formData.email}</span>
                      </div>
                      {formData.company && (
                        <div className="flex justify-between">
                          <span>Empresa:</span>
                          <span className="text-white">{formData.company}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>Assunto:</span>
                        <span className="text-white">{formData.subject}</span>
                      </div>
                      <div className="border-t border-dashed border-white/10 pt-2 mt-2 text-[10px] text-center text-slate-550">
                        Contacto triado em menos de 24 horas úteis.
                      </div>
                    </div>

                    <button
                      onClick={handleResetForm}
                      className="px-6 py-2.5 border border-white/10 hover:bg-white/5 text-white font-semibold text-xs rounded-xl transition-all"
                    >
                      Enviar outro contacto
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
