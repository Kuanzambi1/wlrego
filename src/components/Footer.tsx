import React from 'react';
import { Network, Building2, ShoppingCart, Mail, Phone, MapPin, ChevronRight, Copyright } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id: string) => {
    onNavigate(id);
  };

  const serviceCategories = [
    { label: 'Infraestruturas e Obras Públicas', id: 'services' },
    { label: 'Serviços Urbanos e Manutenção', id: 'services' },
    { label: 'Tecnologia e Modernização', id: 'services' },
    { label: 'Desenvolvimento Social', id: 'services' },
    { label: 'Fornecimento Geral de Bens', id: 'services' },
  ];

  const quickLinks = [
    { label: 'Início', id: 'home' },
    { label: 'Serviços', id: 'services' },
    { label: 'Portfólio', id: 'portfolio' },
    { label: 'Sobre Nós', id: 'about' },
    { label: 'Contacto', id: 'contact' },
  ];

  return (
    <footer className="bg-gray-100 text-gray-500 border-t border-gray-200 relative z-10 font-sans">
      
      {/* Decorative vertical colored brand ribbon at top */}
      <div className="h-[2px] bg-gradient-to-r from-[#007a7d] via-[#4A9D2E] to-[#00969B]" />

      {/* Main Footer blocks */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Corporate Brief (Cols: 4) */}
          <div className="lg:col-span-4 space-y-5">
            <div
              className="cursor-pointer flex items-center transition-transform hover:scale-101 w-fit"
              onClick={() => handleLinkClick('home')}
            >
              <Logo className="h-10" />
              <div className="ml-2 text-left">
                <span className="text-[10px] block font-semibold text-[#4A9D2E] tracking-wider uppercase font-display">
                  WL. REGO Lda
                </span>
                <span className="text-[8px] block text-gray-400 tracking-widest font-bold">
                  COMÉRCIO GERAL & SERVIÇOS
                </span>
              </div>
            </div>

            <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed">
              Respostas multidisciplinares sob medida em Angola. Oferecemos soluções integradas nas áreas de infraestruturas, manutenção urbana, modernização tecnológica, desenvolvimento comunitário e fornecimento geral.
            </p>

            {/* Quick validation indicators */}
            <div className="flex flex-wrap items-center gap-2 text-[10px] text-gray-500 font-mono">
              <span className="px-2 py-0.5 bg-white border border-gray-200 rounded-sm">
                NIF: 5002823454
              </span>
              <span className="px-2 py-0.5 bg-white border border-gray-200 rounded-sm">
                Ingombota, Luanda
              </span>
              <span className="px-2 py-0.5 bg-white border border-gray-200 rounded-sm">
                Alvará Civil Ativo
              </span>
            </div>
          </div>

          {/* Quick links sitemap (Cols: 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider font-display">
              Mapa do Sítio
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="flex items-center gap-1 text-gray-500 hover:text-[#00969B] transition-colors text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 shrink-0 text-[#00969B]" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Areas list (Cols: 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider font-display">
              Áreas de Atuação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {serviceCategories.map((cat, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkClick(cat.id)}
                    className="flex items-center gap-1 text-gray-500 hover:text-[#00969B] transition-colors text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 shrink-0 text-[#00969B]" />
                    <span>{cat.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Quick contact links (Cols: 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider font-display">
              Subscrever Novidades
            </h4>
            <p className="text-gray-500 text-xs font-light leading-relaxed">
              Subscreva para receber relatórios técnicos sobre tendências tecnológicas em Angola.
            </p>
            
            {/* Simple footer email signup form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Obrigado por subscrever a nossa newsletter técnica!');
                (e.target as HTMLFormElement).reset();
              }}
              className="flex gap-1 bg-white p-1 border border-gray-200 rounded-xl max-w-sm"
            >
              <input
                type="email"
                required
                placeholder="O seu e-mail"
                className="bg-transparent text-xs text-gray-900 placeholder-gray-400 flex-1 px-2.5 py-1.5 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-brand-teal hover:bg-brand-green text-black font-extrabold uppercase tracking-wide text-[9px] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                Registar
              </button>
            </form>
          </div>

        </div>

        {/* Separator */}
        <div className="border-t border-gray-200 my-10" />

        {/* Legal licensing bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-gray-500">
          <div className="flex items-center gap-1">
            <Copyright className="w-4 h-4 text-gray-400 shrink-0" />
            <span>
              {currentYear} <strong>W.L. REGO - COMÉRCIO GERAL & PRESTAÇÃO DE SERVIÇOS, LDA</strong>. Todos os direitos reservados.
            </span>
          </div>

          <div className="flex gap-4 text-[11px] text-gray-400">
            <span className="hover:text-gray-600 cursor-pointer">Termos de Uso</span>
            <span>&bull;</span>
            <span className="hover:text-gray-600 cursor-pointer">Política de Privacidade</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
