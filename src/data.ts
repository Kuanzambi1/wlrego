import { Service, PortfolioProject, QuoteOption } from './types';
import proj1Img from './assets/images/portfolio/proj-1.jpg';
import proj2Img from './assets/images/portfolio/proj-2.jpg';
import proj3Img from './assets/images/portfolio/proj-3.jpg';
import proj4Img from './assets/images/portfolio/proj-4.jpg';
import proj5Img from './assets/images/portfolio/proj-5.jpg';

export const SERVICES: Service[] = [
  {
    id: 'networks',
    title: 'Redes, Telecomunicações e Informática',
    category: 'networks',
    shortDescription: 'Criação de infraestruturas de comunicação robustas, redes de dados estruturadas e soluções tecnológicas corporativas.',
    longDescription: 'Projetamos e implementamos soluções avançadas de conectividade para garantir que a sua empresa opere com a máxima velocidade, segurança e fiabilidade. Da cablagem estruturada técnica ao suporte de servidores empresariais e segurança na nuvem.',
    iconName: 'Network',
    features: [
      'Cablagem estruturada (Cobre, Fibra Óptica e Sem Fios)',
      'Configuração de servidores ativos e gateways de segurança',
      'Infraestrutura de datacenter de média e grande escala',
      'Sistemas de videovigilância IP (CCTV) e controlo de acessos',
      'Manutenção preventiva e corretiva de sistemas de TI'
    ],
    imagePlaceholder: 'bg-emerald-50 text-emerald-600'
  },
  {
    id: 'architecture',
    title: 'Arquitetura, Engenharia e Construção',
    category: 'architecture',
    shortDescription: 'Planeamento urbano, design arquitetónico contemporâneo, engenharia de estruturas e fiscalização de obras.',
    longDescription: 'Unimos estética, funcionalidade e regulamentação portuguesa/angolana para criar espaços inspiradores e seguros. Cuidamos de todo o ciclo de vida do seu edifício, desde o estudo de viabilidade, representação 3D, projetos de especialidades até à entrega final.',
    iconName: 'Building',
    features: [
      'Projetos arquitetónicos residenciais, comerciais e industriais',
      'Modelagem 3D, renders de alta fidelidade e realidade virtual',
      'Projetos de engenharia de especialidades (Água, Saneamento, Eletrecidade)',
      'Remodelação de interiores e reabilitação de edifícios',
      'Direção, gestão e fiscalização técnica de obras civis'
    ],
    imagePlaceholder: 'bg-teal-50 text-teal-600'
  },
  {
    id: 'commerce',
    title: 'Comércio Geral e Fornecimento de Equipamentos',
    category: 'commerce',
    shortDescription: 'Importação, exportação de consumíveis de grande escala, e fornecimento oficial de hardware e software.',
    longDescription: 'Como parceiro estratégico de comércio geral, fornecemos com agilidade e conformidade legal equipamentos de tecnologia, materiais de escritório, componentes industriais e elétricos de marcas líderes globais, garantindo elevados padrões de qualidade de fornecimento.',
    iconName: 'ShoppingCart',
    features: [
      'Distribuição e fornecimento de equipamento informático e de servidores',
      'Importação de materiais de construção e acabamento premium',
      'Fornecimento de frotas e soluções corporativas customizadas',
      'Gestão integrada da cadeia logística e alfandegária',
      'Garantia oficial direta com os principais fabricantes internacionais'
    ],
    imagePlaceholder: 'bg-indigo-50 text-indigo-600'
  },
  {
    id: 'consulting',
    title: 'Consultoria de Projetos e Serviços Integrados',
    category: 'consulting',
    shortDescription: 'Assessoria técnica, licenciamento de atividades, assistência pós-venda, auditoria de redes e eficiência energética.',
    longDescription: 'Ajudamos a sua empresa a tomar decisões informadas com base na nossa experiência multidisciplinar. Avaliamos riscos de conformidade arquitetónica, realizamos auditorias de vulnerabilidade cibernética e otimizamos fluxos de trabalho.',
    iconName: 'FileCheck',
    features: [
      'Auditoria de redes corporativas e cibersegurança empresarial',
      'Licenciamento camarário de estabelecimentos e obras complexas',
      'Consultoria de eficiência térmica, acústica e sustentabilidade de edifícios',
      'Estudos de impacto ambiental e impacto de vizinhança',
      'Planos de contingência de TI e Business Continuity (DRP)'
    ],
    imagePlaceholder: 'bg-blue-50 text-blue-600'
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'proj-1',
    image: proj1Img,
    title: 'Infraestrutura de Rede Edifício Corporate Talatona',
    category: 'networks',
    client: 'Talatona Investments S.A.',
    year: 2025,
    location: 'Luanda, Angola',
    description: 'Instalação completa e certificada de rede híbrida com mais de 350 pontos de dados ativos para a nova sede financeira do cliente.',
    challenge: 'Instalar cablagem estruturada blindada Cat6A num período de 30 dias, sem interrupção das operações do escritório de seguros no piso inferior.',
    solution: 'Implementação em horários pós-laboral faseado por zonas com teste de atenuação e fibra óptica de espinha dorsal certificada Fluke.',
    results: [
      'Velocidades de transmissão garantidas de 10 Gbps',
      'Redução do ruído de interferência eletromagnética em 98%',
      'Certificação internacional Fluke dada para 25 anos de uso'
    ],
    imagePlaceholder: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500',
    stats: { label: 'Pontos Certificados', value: '380+' }
  },
  {
    id: 'proj-2',
    image: proj2Img,
    title: 'Projeto Arquitetónico do Condomínio Quinta da Luz',
    category: 'architecture',
    client: 'Promotora Imobiliária Atlântida',
    year: 2024,
    location: 'Sintra, Portugal / Luanda, Angola',
    description: 'Conceção estética e técnica de um condomínio residencial de luxo composto por 12 moradias unifamiliares inteligentes com eficiência classe A+.',
    challenge: 'Integrar as residências na topologia de encosta acentuada mantendo a privacidade de todos e optimizando a exposição solar natural.',
    solution: 'Uso de plataformas escalonadas de betão exposto, fachadas ventiladas de madeira nobre e simulação térmica avançada por computador.',
    results: [
      'Classe de eficiência energética alcançada: A+',
      '100% de aproveitamento de águas pluviais para irrigação',
      'Prémio de Inovação Arquitetónica Sustentável'
    ],
    imagePlaceholder: 'bg-teal-500/10 border-teal-500/20 text-teal-500',
    stats: { label: 'Área Terreno', value: '18.500m²' }
  },
  {
    id: 'proj-3',
    image: proj3Img,
    title: 'Migração de Servidores e Datacenter IP',
    category: 'networks',
    client: 'Logis-Cargo Solutions',
    year: 2025,
    location: 'Lobito, Angola',
    description: 'Substituição da antiga sala de servidores locais por uma infraestrutura otimizada em bastidores climatizados autónomos com failover ativo.',
    challenge: 'Mudar a estrutura inteira de armazenamento de inventários e faturas sem causar "downtime" na logística de navios porta-contentores.',
    solution: 'Fizemos um espelhamento de dados em tempo real na nuvem privada W. Rego e migrámos a hardware local na janela das 02:00 às 04:00 da manhã.',
    results: [
      'Downtime de sistema verificado de 0 minutos',
      'Aumento da segurança física com bastidores contra incêndios',
      'Sistemas UPS autónomos suportando até 4 horas sem rede elétrica'
    ],
    imagePlaceholder: 'bg-blue-500/10 border-blue-500/20 text-blue-500',
    stats: { label: 'Espelhamento', value: '45 TB' }
  },
  {
    id: 'proj-4',
    image: proj4Img,
    title: 'Edifício W-Corporate e Sede Coletiva',
    category: 'architecture',
    client: 'W. Rego Imobiliária',
    year: 2023,
    location: 'Luanda, Angola',
    description: 'Edifício administrativo moderno com design minimalista de betão, vidro fosco térmico e estruturas de telecomunicações de ponta integradas de raiz.',
    challenge: 'Conceber uma sede que unisse o comércio geral com o laboratório de projetos de arquitetura de alta tecnologia, num lote confinado no centro da cidade.',
    solution: 'Planta de arquitetura modular aberta com divisórias em vidro amovíveis e infraestrutura subterrânea de calhas de redes expansível.',
    results: [
      'Design em plano livre adaptável a novas equipas',
      'Redução de 35% nos custos de arrefecimento solar passivo',
      'Ponto central de atendimento ao cliente unificado'
    ],
    imagePlaceholder: 'bg-sky-500/10 border-sky-500/20 text-sky-500',
    stats: { label: 'Andares Úteis', value: '3 Pisos' }
  },
  {
    id: 'proj-5',
    image: proj5Img,
    title: 'Fornecimento e Fitting Informático - Direção Provincial',
    category: 'commerce',
    client: 'Gabinete de Obras Públicas e Planeamento',
    year: 2024,
    location: 'Huambo, Angola',
    description: 'Fornecimento massivo, entrega assegurada e montagem técnica de postos de trabalho de última geração, impressoras industriais de plotter e servidores locais.',
    challenge: 'Garantir a importação sem quebras de hardware especializado num prazo de entrega rigoroso de 45 dias no interior da província.',
    solution: 'Canal de logística integrado W. Rego com alfândega prioritária e montagem por equipas técnicas certificadas no local.',
    results: [
      '120 computadores de alto desempenho montados e validados',
      'Plotters de arquitetura HP calibradas e ativas',
      'Satisfação de 100% no prazo estipulado por edital'
    ],
    imagePlaceholder: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-500',
    stats: { label: 'Equipamentos', value: '180 Unidades' }
  }
];

export const QUOTE_OPTIONS: QuoteOption[] = [
  // Redes
  { id: 'net-point', name: 'Instalação e Certificação de Ponto de Rede (Cat6A)', category: 'Redes e Informática', basePrice: 45, unitName: 'pontos', minUnits: 5 },
  { id: 'net-switch', name: 'Configuração de Switch Gerível / Routing / VLAN', category: 'Redes e Informática', basePrice: 250, unitName: 'dispositivo', minUnits: 1 },
  { id: 'net-ap', name: 'Ponto de Acesso Profissional Wi-Fi 6 com Gestão Cloud', category: 'Redes e Informática', basePrice: 180, unitName: 'pontos de acesso', minUnits: 2 },
  { id: 'net-rack', name: 'Montagem e Organização de Bastidor Técnico / Rack TI', category: 'Redes e Informática', basePrice: 500, unitName: 'bastidores', minUnits: 1 },
  // Arquitetura
  { id: 'arch-project', name: 'Desenho de Projeto de Arquitetura (Estudo Prévio ao Licenciamento)', category: 'Arquitetura e Engenharia', basePrice: 18, unitName: 'm² de área', minUnits: 80 },
  { id: 'arch-render', name: 'Renderização 3D Fotorrealista e Animação de Ambientes', category: 'Arquitetura e Engenharia', basePrice: 150, unitName: 'ambientes gerados', minUnits: 2 },
  { id: 'arch-supervision', name: 'Fiscalização e Direção Técnica de Obra', category: 'Arquitetura e Engenharia', basePrice: 850, unitName: 'meses de obra', minUnits: 1 },
  // Comércio Geral
  { id: 'comm-it-setup', name: 'Posto de Trabalho Completo (Estação HP/Dell + Monitor + UPS)', category: 'Comércio Geral', basePrice: 1100, unitName: 'computadores', minUnits: 3 },
  { id: 'comm-ups-office', name: 'Sistema de Proteção e Sistema de Emergência Redundante (UPS 3kVA)', category: 'Comércio Geral', basePrice: 850, unitName: 'unidades', minUnits: 1 }
];

export const COMPANY_STATS = [
  { value: '10+', label: 'Anos de Atividade', description: 'De experiência combinada com fundadores experientes.' },
  { value: '150+', label: 'Projetos Concluídos', description: 'Infraestruturas, edifícios e fornecimentos corporativos.' },
  { value: '98%', label: 'Satisfação de Clientes', description: 'Os nossos clientes confiam na nossa precisão e agilidade.' },
  { value: '4', label: 'Áreas de Excelência', description: 'Redes, Arquitetura, Comércio Geral e Consultoria.' }
];

export const FAQ_ITEMS = [
  {
    question: 'A W. REGO atua fora de Luanda?',
    answer: 'Sim. Embora tenhamos a nossa sede principal em Luanda, temos parceiros e capacidade logística para efetuar entregas de comércio, projetos de arquitetura e infraestruturas em todas as províncias de Angola e na região da CPLP.'
  },
  {
    question: 'Vocês dão garantia técnica após a instalação de redes?',
    answer: 'Com certeza. Todas as nossas instalações de redes e cablagem recebem relatórios de certificação de fabricante (p. ex., Fluke Networks) e disponibilizamos uma garantia contratual de redes de dados de até 25 anos nas partes passivas, e garantia oficial de fábrica no hardware ativo.'
  },
  {
    question: 'Como funciona o processo de projetos de Arquitetura?',
    answer: 'Iniciamos com uma entrevista detalhada para compreender os desejos e orçamento do cliente. De seguida, desenvolvemos o Estudo de Viabilidade e o Estudo Prévio em 3D. Após a aprovação do cliente, elaboramos os Projetos de Execução e Especialidades e orientamos todo o processo de licenciamento até à aprovação das autoridades públicas.'
  },
  {
    question: 'Como posso solicitar cotações de material corporativo em grande escala?',
    answer: 'Pode contactar a nossa equipa comercial usando o formulário abaixo ou diretamente via o nosso e-mail ou telefone. Também criámos um Simulador Interativo nesta página onde pode fazer uma estimativa inicial dos seus projetos e enviar-nos diretamente.'
  }
];
