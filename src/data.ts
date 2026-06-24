import { Service, PortfolioProject, QuoteOption } from './types';
import proj1Img from './assets/images/portfolio/proj-1.jpg';
import proj2Img from './assets/images/portfolio/proj-2.jpg';
import proj3Img from './assets/images/portfolio/proj-3.jpg';
import proj4Img from './assets/images/portfolio/proj-4.jpg';
import proj5Img from './assets/images/portfolio/proj-5.jpg';

export const SERVICES: Service[] = [
  {
    id: 'infraestruturas',
    title: 'Infraestruturas e Obras Públicas',
    category: 'infraestruturas',
    shortDescription: 'Prestação de serviços de construção civil e obras públicas, fiscalização e auditoria.',
    longDescription: 'Prestação de serviços de construção civil e obras públicas, fiscalização, consultoria, auditoria, contabilidade e gestão de projetos. Inclui-se também o saneamento básico e a instalação de sistemas de tratamento e purificação de água.',
    iconName: 'Building',
    features: [
      'Construção civil e obras públicas',
      'Fiscalização e consultoria',
      'Auditoria, contabilidade e gestão de projetos',
      'Saneamento básico',
      'Instalação de sistemas de tratamento e purificação de água'
    ],
    imagePlaceholder: 'bg-emerald-50 text-emerald-600'
  },
  {
    id: 'urbanos',
    title: 'Serviços Urbanos e Manutenção',
    category: 'urbanos',
    shortDescription: 'Serviços de limpeza, recolha de resíduos e manutenção de espaços e sistemas.',
    longDescription: 'Realização de serviços de limpeza e recolha de residuos solidos nas vias do município, limpeza industrial e semi-industrial, jardinagem, manutenção de espaços verdes, instalação e manutenção de sistemas de ar condicionado, materiais elétricos e de segurança (CCTV).',
    iconName: 'Settings',
    features: [
      'Limpeza e recolha de resíduos sólidos',
      'Limpeza industrial e semi-industrial',
      'Jardinagem e manutenção de espaços verdes',
      'Manutenção de sistemas de ar condicionado',
      'Instalação de materiais elétricos e de segurança (CCTV)'
    ],
    imagePlaceholder: 'bg-teal-50 text-teal-600'
  },
  {
    id: 'tecnologia',
    title: 'Tecnologia e Modernização',
    category: 'tecnologia',
    shortDescription: 'Desenvolvimento de software e gestão de projetos de tecnologias de informação.',
    longDescription: 'Desenvolvimento de software, serviços de impressão gráfica, gestão de projetos de tecnologias de informação e telecomunicações, visando a modernização dos serviços administrativos.',
    iconName: 'Network',
    features: [
      'Desenvolvimento de software',
      'Serviços de impressão gráfica',
      'Gestão de projetos de TI',
      'Projetos de telecomunicações',
      'Modernização dos serviços administrativos'
    ],
    imagePlaceholder: 'bg-indigo-50 text-indigo-600'
  },
  {
    id: 'social',
    title: 'Desenvolvimento Social e Comunitário',
    category: 'social',
    shortDescription: 'Formação profissional e promoção de atividades de lazer e bem-estar.',
    longDescription: 'Serviços de formação profissional, promoção de eventos culturais e desportivos, e exploração de atividades de lazer e bem-estar, como ginásios e projetos de parques de diversão.',
    iconName: 'Users',
    features: [
      'Serviços de formação profissional',
      'Promoção de eventos culturais e desportivos',
      'Exploração de atividades de lazer',
      'Gestão de ginásios e bem-estar',
      'Projetos de parques de diversão'
    ],
    imagePlaceholder: 'bg-blue-50 text-blue-600'
  },
  {
    id: 'fornecimento',
    title: 'Fornecimento Geral de Bens',
    category: 'fornecimento',
    shortDescription: 'Comércio e fornecimento de produtos essenciais e materiais diversos.',
    longDescription: 'Comércio e fornecimento de uma vasta gama de produtos essenciais, incluindo material de escritório, equipamentos hospitalares, medicamentos, produtos de limpeza e higiene, materiais de construção, e géneros alimentares.',
    iconName: 'ShoppingCart',
    features: [
      'Fornecimento de material de escritório',
      'Equipamentos hospitalares e medicamentos',
      'Produtos de limpeza e higiene',
      'Fornecimento de materiais de construção',
      'Comércio de géneros alimentares'
    ],
    imagePlaceholder: 'bg-orange-50 text-orange-600'
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

export const COMPANY_STATS = [
  { value: '10+', label: 'Anos de Atividade', description: 'De experiência combinada com fundadores experientes.' },
  { value: '150+', label: 'Projetos Concluídos', description: 'Infraestruturas, edifícios e fornecimentos corporativos.' },
  { value: '98%', label: 'Satisfação de Clientes', description: 'Os nossos clientes confiam na nossa precisão e agilidade.' },
  { value: '4', label: 'Áreas de Excelência', description: 'Redes, Arquitetura, Comércio Geral e Consultoria.' }
];

export const FAQ_ITEMS = [
  {
    question: 'A W.L. REGO atua fora de Luanda?',
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
    answer: 'Pode contactar a nossa equipa comercial usando o formulário de contacto abaixo ou diretamente via e-mail ou telefone. Iremos analisar o seu caderno de encargos e apresentar uma proposta detalhada.'
  }
];
