import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, Plus, Trash2, Printer, FileText, Send, HelpCircle, RefreshCw } from 'lucide-react';
import { QUOTE_OPTIONS } from '../data';
import { QuoteOption } from '../types';

interface QuoteSimulatorProps {
  selectedCategory: string;
  onNavigateToContact: (quoteMessage: string) => void;
}

interface CartItem {
  option: QuoteOption;
  quantity: number;
}

export default function QuoteSimulator({ selectedCategory, onNavigateToContact }: QuoteSimulatorProps) {
  const [selectedDept, setSelectedDept] = useState<string>('Redes e Informática');
  const [cart, setCart] = useState<CartItem[]>([]);
  
  // Local active quantity inputs
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  const sections = [
    'Redes e Informática',
    'Arquitetura e Engenharia',
    'Comércio Geral'
  ];

  // Prepopulate form if a category was forwarded from Services modal click
  React.useEffect(() => {
    if (selectedCategory === 'networks') {
      setSelectedDept('Redes e Informática');
    } else if (selectedCategory === 'architecture') {
      setSelectedDept('Arquitetura e Engenharia');
    } else if (selectedCategory === 'commerce') {
      setSelectedDept('Comércio Geral');
    }
  }, [selectedCategory]);

  const handleQtyChange = (optionId: string, val: number) => {
    setQuantities({
      ...quantities,
      [optionId]: val
    });
  };

  const addToCart = (option: QuoteOption) => {
    const qty = quantities[option.id] || option.minUnits || 1;
    const currentMin = option.minUnits || 1;
    
    if (qty < currentMin) {
      alert(`Quantidade mínima recomendada para este projeto é de ${currentMin} ${option.unitName}.`);
      return;
    }

    const existingIndex = cart.findIndex(item => item.option.id === option.id);
    if (existingIndex > -1) {
      const updated = [...cart];
      updated[existingIndex].quantity = qty;
      setCart(updated);
    } else {
      setCart([...cart, { option, quantity: qty }]);
    }
  };

  const removeFromCart = (optionId: string) => {
    setCart(cart.filter(item => item.option.id !== optionId));
  };

  const clearCart = () => {
    setCart([]);
  };

  // Math totals
  const subtotalUSD = cart.reduce((acc, item) => acc + (item.option.basePrice * item.quantity), 0);
  const conversionRateAOA = 850; // Dynamic illustrative Kwanza rate
  const subtotalAOA = subtotalUSD * conversionRateAOA;

  // Estimate execution timelines
  const calculateTimeline = () => {
    if (cart.length === 0) return '0 dias';
    const maxQty = Math.max(...cart.map(i => i.quantity));
    if (maxQty < 10) return '3 a 5 dias úteis';
    if (maxQty < 50) return '7 a 15 dias úteis';
    return '15 a 30 dias úteis';
  };

  // Build inquiry text to send to contact component
  const handleExportInquiry = () => {
    if (cart.length === 0) return;
    
    let text = `Olá equipa W. REGO,\n\nGostaria de solicitar uma proposta técnica baseada na simulação efetuada no vosso portal:\n\n`;
    cart.forEach(item => {
      text += `- ${item.option.name}: ${item.quantity} ${item.option.unitName} (Preço Ref: $${(item.option.basePrice * item.quantity).toLocaleString()})\n`;
    });
    text += `\nSubtotal de Referência: $${subtotalUSD.toLocaleString()} USD (~${subtotalAOA.toLocaleString()} AOA)\n`;
    text += `Prazo estimado verificado: ${calculateTimeline()}\n\nPor favor, contactem-me para validar o escopo das especificações técnicas.`;

    onNavigateToContact(text);
  };

  const filteredOptions = QUOTE_OPTIONS.filter(o => o.category === selectedDept);

  return (
    <section id="simulator" className="py-16 md:py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] rounded-full bg-[#00969B]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[35%] h-[35%] rounded-full bg-[#00969B]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold tracking-[0.2em] text-[#00969B] uppercase block">
            Orçamento Inicial e Simulador
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white">
            Simulador de Serviços e Cotações
          </h2>
          <p className="text-slate-350 font-light text-sm md:text-base leading-relaxed">
            Monte a estimativa preliminar para o seu projeto selecionando os módulos abaixo. Exporte a cotação diretamente para contacto ou imprima o sumário.
          </p>
          <div className="w-12 h-1 bg-brand-teal mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Grid Selection Section left */}
          <div className="lg:col-span-8 bg-[#111111] p-6 md:p-8 rounded-3xl border border-white/5 shadow-2xl space-y-8">
            
            {/* Dept switch header */}
            <div className="border-b border-white/5 pb-4">
              <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase block mb-3">
                1. Selecione o Sector da Simulação
              </span>
              <div className="grid grid-cols-3 gap-2">
                {sections.map((sect) => (
                  <button
                    key={sect}
                    onClick={() => setSelectedDept(sect)}
                    className={`py-3 px-2 text-center rounded-xl text-xs font-bold font-display transition-all border uppercase tracking-wider ${
                      selectedDept === sect
                        ? 'bg-brand-teal text-black border-brand-teal shadow-md'
                        : 'bg-[#0a0a0a] text-slate-300 border-white/5 hover:bg-white/5'
                    }`}
                  >
                    {sect}
                  </button>
                ))}
              </div>
            </div>

            {/* List of items inside department */}
            <div className="space-y-4">
              <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase block">
                2. Adicione os Módulos do Projeto ({selectedDept})
              </span>
              
              <div className="divide-y divide-white/5">
                {filteredOptions.map((opt) => {
                  const currentMin = opt.minUnits || 1;
                  const activeQty = quantities[opt.id] !== undefined ? quantities[opt.id] : currentMin;
                  const inCartItem = cart.find(i => i.option.id === opt.id);

                  return (
                    <div key={opt.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 first:pt-0 last:pb-0">
                      
                      {/* Name of point */}
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold text-white leading-snug">{opt.name}</h4>
                        <span className="text-slate-400 text-xs font-light block">
                          Valor estimado de referência: ${opt.basePrice} USD por {opt.unitName}.
                        </span>
                        {opt.minUnits && (
                          <span className="text-[10px] text-brand-teal font-medium bg-white/5 border border-white/10 px-2 py-0.5 rounded-full w-fit block">
                            Min. requerido: {opt.minUnits} {opt.unitName}
                          </span>
                        )}
                      </div>

                      {/* Controls Area */}
                      <div className="flex items-center gap-3 self-end sm:self-auto shrink-0">
                        {/* Quantity input box */}
                        <div className="flex items-center border border-white/10 rounded-lg overflow-hidden bg-black">
                          <input
                            type="number"
                            min={currentMin}
                            value={activeQty}
                            onChange={(e) => handleQtyChange(opt.id, parseInt(e.target.value) || currentMin)}
                            className="w-16 px-2 py-1.5 bg-black text-center text-sm font-bold text-white focus:outline-none focus:ring-0 [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                          />
                          <span className="text-[10px] text-slate-400 bg-[#1a1a1a] px-2 py-2 border-l border-white/10">
                            {opt.unitName}
                          </span>
                        </div>

                        {/* Add to list trigger */}
                        <button
                          onClick={() => addToCart(opt)}
                          className={`flex items-center gap-1.5 p-2 rounded-lg text-xs font-bold transition-all uppercase tracking-wider ${
                            inCartItem
                              ? 'bg-[#00969B] text-black hover:bg-[#007a7d]'
                              : 'bg-white/5 text-brand-teal hover:bg-white/10 border border-white/10'
                          }`}
                        >
                          <Plus className="w-4 h-4" />
                          <span>{inCartItem ? 'Atualizar' : 'Adicionar'}</span>
                        </button>
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>

            {/* Note banner */}
            <div className="flex gap-2.5 p-4 bg-black/45 border border-white/5 rounded-2xl text-[11px] text-slate-400 leading-normal font-light">
              <HelpCircle className="w-5 h-5 text-brand-teal shrink-0" />
              <span>
                <strong>Nota Importante:</strong> Os valores simulados servem puramente como benchmark preliminar bruto em Luanda e região. Não incluem IVA legal, taxas alfandegárias de importação especializadas ou deslocações extras ao interior da província. A proposta final finalizada será emitida pela nossa equipa após vistoria.
              </span>
            </div>

          </div>

          {/* Cart Results Panel right */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#111111] text-white p-6 rounded-3xl shadow-2xl border border-white/5 space-y-6 relative overflow-hidden">
              <div className="absolute right-0 top-0 w-24 h-24 bg-brand-teal/10 rounded-full blur-xl" />
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10 font-sans">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-brand-teal" />
                  <h3 className="font-display font-medium text-sm tracking-wide">Sumário de Estimativa</h3>
                </div>
                {cart.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="p-1 hover:bg-white/10 text-slate-300 hover:text-white rounded-lg transition-colors text-xs flex items-center gap-1"
                    title="Limpar Simulador"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Iniciar</span>
                  </button>
                )}
              </div>

              {/* Added Lines List */}
              <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
                {cart.length === 0 ? (
                  <div className="text-center py-8 space-y-2">
                    <FileText className="w-8 h-8 text-white/10 mx-auto" />
                    <p className="text-xs text-slate-400">Nenhum item adicionado à simulação até ao momento.</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.option.id} className="relative bg-[#0a0a0a] border border-white/5 p-3 rounded-xl flex justify-between gap-2 overflow-hidden group">
                      <div className="space-y-1">
                        <span className="text-[9px] font-bold text-brand-teal tracking-wide block uppercase font-mono">
                          {item.option.category}
                        </span>
                        <h4 className="text-xs font-semibold leading-tight text-white pr-4">
                          {item.option.name}
                        </h4>
                        <span className="text-[10px] text-slate-300 block font-mono">
                          {item.quantity} {item.option.unitName} x ${item.option.basePrice}
                        </span>
                      </div>
                      <div className="flex flex-col justify-between items-end shrink-0">
                        <button
                          onClick={() => removeFromCart(item.option.id)}
                          className="p-1 hover:bg-white/10 text-slate-400 hover:text-red-400 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-bold text-[#4A9D2E] font-mono">
                          ${(item.option.basePrice * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Totals displays */}
              {cart.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-white/10 relative z-10 font-sans">
                  
                  {/* Detailed Math rows */}
                  <div className="space-y-1.5 text-xs text-slate-300 font-light pr-1">
                    <div className="flex justify-between">
                      <span>Prazo Estipulado:</span>
                      <span className="font-semibold text-brand-teal">{calculateTimeline()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Moeda Secundária (AOA):</span>
                      <span>Kwanza de Referência</span>
                    </div>
                  </div>

                  {/* Gigantic Total display overlay */}
                  <div className="bg-black/50 p-4 rounded-2xl border border-white/5 text-center space-y-1">
                    <span className="text-[10px] uppercase text-slate-400 block font-mono tracking-widest">Custo Estimado Total</span>
                    <span className="text-2xl font-display font-bold text-white block font-mono">
                      ${subtotalUSD.toLocaleString()} USD
                    </span>
                    <span className="text-xs font-semibold text-brand-teal block font-mono">
                      ~ {subtotalAOA.toLocaleString(undefined, { maximumFractionDigits: 0 })} AOA
                    </span>
                  </div>

                  {/* Actions buttons layout */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {/* Print Quote */}
                    <button
                      onClick={() => window.print()}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs rounded-xl transition-all"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Imprimir</span>
                    </button>

                    {/* Forward to Contact form area */}
                    <button
                      onClick={handleExportInquiry}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-brand-teal hover:bg-brand-green text-black font-extrabold text-xs rounded-xl shadow-md transition-all uppercase tracking-wider"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Adjudicar</span>
                    </button>
                  </div>

                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
