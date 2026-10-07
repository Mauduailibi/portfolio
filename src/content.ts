export type Lang = 'pt' | 'en';
export type L = Record<Lang, string>;
export type HeroSegment = string | { k: 'fund' | 'saas' | 'sci'; text: string };

export const links = {
  email: 'maudneto@gmail.com',
  whatsapp: 'https://wa.me/5547984476464',
  phone: '+55 47 98447-6464',
  linkedin: 'https://www.linkedin.com/in/mauricio-duailibi-neto-b391a41a6',
  github: 'https://github.com/Mauduailibi',
  cv: '/cv/mauricio-duailibi-neto-resume.pdf',
};

export const ui = {
  nav: {
    work: { pt: 'Projetos', en: 'Work' },
    experience: { pt: 'Experiência', en: 'Experience' },
    about: { pt: 'Sobre', en: 'About' },
    contact: { pt: 'Contato', en: 'Contact' },
  },
  hero: {
    meta: { pt: 'Portfólio · 2026', en: 'Portfolio · 2026' },
    greeting: { pt: 'Oi, eu sou o', en: "Hi, I'm" },
    lead: {
      pt: [
        'Engenheiro de software full-stack há 7 anos. Construo ',
        { k: 'fund', text: 'plataformas financeiras' },
        ', ',
        { k: 'saas', text: 'produtos SaaS' },
        ' e ',
        { k: 'sci', text: 'software científico' },
        ' — do banco de dados ao deploy — e cuido deles em produção.',
      ],
      en: [
        "Full-stack software engineer, 7 years in. I build ",
        { k: 'fund', text: 'financial platforms' },
        ', ',
        { k: 'saas', text: 'SaaS products' },
        ' and ',
        { k: 'sci', text: 'scientific software' },
        ' — from the database to the deploy — and keep them running in production.',
      ],
    } as Record<Lang, HeroSegment[]>,
    nowLabel: { pt: 'Agora', en: 'Now' },
    now: {
      pt: 'Construindo a plataforma que opera um FIDC de R$ 120M+',
      en: 'Building the platform that runs a BRL 120M+ receivables fund',
    },
    beforeLabel: { pt: 'Antes', en: 'Before' },
    before: 'Didbox · DietSystem · HomeQR · Entra21',
    ring: { pt: 'ENGENHEIRO FULL-STACK • PYTHON • REACT • JAVA • ', en: 'FULL-STACK ENGINEER • PYTHON • REACT • JAVA • ' },
    ctaWork: { pt: 'Ver projetos', en: 'See my work' },
    localTime: { pt: 'hora local', en: 'local time' },
    location: 'Balneário Camboriú, BR · Regina, CA',
  },
  stats: [
    { value: 7, suffix: '+', label: { pt: 'anos de experiência prática', en: 'years of hands-on experience' } },
    { value: 120, prefix: 'R$ ', suffix: 'M+', label: { pt: 'em recebíveis operados pela plataforma que construí', en: 'in receivables run on a platform I built' } },
    { value: 8, suffix: '', label: { pt: 'linguagens usadas em produção', en: 'languages shipped to production' } },
    { value: 2019, suffix: '', from: 1990, label: { pt: 'entregando software em produção desde', en: 'shipping production software since' } },
  ],
  work: {
    eyebrow: { pt: 'Projetos selecionados', en: 'Selected work' },
    title: { pt: 'Projetos reais, em produção.', en: 'Real projects, in production.' },
    sub: {
      pt: 'Uma seleção do que construí para empresas, clientes e grupos de pesquisa. Passe o mouse nas telas para rolar o site.',
      en: 'A selection of what I have built for companies, clients and research groups. Hover the screens to scroll through each site.',
    },
    role: { pt: 'Papel', en: 'Role' },
    period: { pt: 'Período', en: 'Period' },
    stack: { pt: 'Stack', en: 'Stack' },
    visit: { pt: 'Visitar site', en: 'Visit site' },
    code: { pt: 'Ver código', en: 'View code' },
    paper: { pt: 'Ler artigo', en: 'Read paper' },
    confidential: {
      pt: 'Projeto confidencial — visualização ilustrativa, sem dados reais.',
      en: 'Confidential project — illustrative visualization, no real data.',
    },
    illustrative: {
      pt: 'Visualização ilustrativa do software, recriada para o portfólio.',
      en: 'Illustrative visualization of the software, recreated for this portfolio.',
    },
    moreTitle: { pt: 'Pesquisa & outros projetos', en: 'Research & other work' },
  },
  experience: {
    eyebrow: { pt: 'Trajetória', en: 'Career' },
    title: { pt: 'Experiência profissional', en: 'Professional experience' },
    present: { pt: 'Atual', en: 'Present' },
  },
  about: {
    eyebrow: { pt: 'Sobre mim', en: 'About me' },
    title: { pt: 'Engenheiro de software com cabeça de engenheiro.', en: 'A software engineer who thinks like an engineer.' },
    p1: {
      pt: 'Comecei a programar no curso técnico em Informática do IFMS e, em 2019, já estava entregando software para produção — primeiro apps Flutter, depois plataformas web em PHP, React e Python. Desde então trabalhei sozinho e em equipe, em startups, com clientes freelance e em grupos de pesquisa.',
      en: 'I started coding during my IT technical diploma at IFMS and by 2019 I was already shipping production software — Flutter apps first, then web platforms in PHP, React and Python. Since then I have worked solo and in teams, at startups, with freelance clients and in research groups.',
    },
    p2: {
      pt: 'Hoje curso Engenharia de Petróleo na UDESC (com intercâmbio na University of Regina, Canadá), o que me aproximou de métodos numéricos, simulação e software científico. Gosto de ser dono do ciclo inteiro: conversar com o cliente, modelar o problema, escrever o código, colocar no ar e manter funcionando.',
      en: 'I am currently studying Petroleum Engineering at UDESC (with an exchange at the University of Regina, Canada), which brought me into numerical methods, simulation and scientific software. I like owning the whole cycle: talking to the client, modeling the problem, writing the code, shipping it and keeping it running.',
    },
    p3: {
      pt: 'Também fui instrutor de Java no programa Entra21, ensinando POO, Java Web e Spring Boot para turmas de 15–20 alunos.',
      en: 'I was also a Java instructor at the Entra21 program, teaching OOP, Java Web and Spring Boot to classes of 15–20 students.',
    },
    skillsTitle: { pt: 'Ferramentas do dia a dia', en: 'Everyday toolkit' },
    educationTitle: { pt: 'Formação', en: 'Education' },
    languagesTitle: { pt: 'Idiomas', en: 'Languages' },
    languages: { pt: 'Português (nativo) · Inglês (avançado)', en: 'Portuguese (native) · English (advanced)' },
  },
  contact: {
    eyebrow: { pt: 'Contato', en: 'Contact' },
    title: { pt: 'Tem um projeto em mente?', en: 'Have a project in mind?' },
    sub: {
      pt: 'Estou aberto a vagas remotas, freelas e parcerias. Respondo rápido — normalmente no mesmo dia.',
      en: 'I am open to remote roles, freelance work and partnerships. I reply fast — usually the same day.',
    },
    copy: { pt: 'Copiar e-mail', en: 'Copy email' },
    copied: { pt: 'Copiado!', en: 'Copied!' },
    cv: { pt: 'Baixar currículo (PDF)', en: 'Download résumé (PDF)' },
  },
  footer: {
    built: { pt: 'Feito com React, Vite e Motion.', en: 'Built with React, Vite and Motion.' },
    top: { pt: 'Voltar ao topo', en: 'Back to top' },
  },
  theme: { pt: 'Alternar tema', en: 'Toggle theme' },
  lang: { pt: 'Switch to English', en: 'Mudar para Português' },
} as const;

export type Visual =
  | { kind: 'site'; desktop: string; full: string; mobile: string; url: string }
  | { kind: 'fund' }
  | { kind: 'well' };

export type Project = {
  id: string;
  name: string;
  client: string;
  category: L;
  summary: L;
  highlights: L[];
  role: L;
  period: L;
  stack: string[];
  visual: Visual;
  accent: string;
  links: { kind: 'visit' | 'code' | 'paper'; href: string }[];
  confidential?: boolean;
};

export const projects: Project[] = [
  {
    id: 'fidc',
    name: 'FIDC Operations Platform',
    client: 'Lysa Tech & Ketos',
    category: { pt: 'Fintech · Plataforma interna', en: 'Fintech · Internal platform' },
    summary: {
      pt: 'Plataforma full-stack que automatiza o fluxo de gestão diário de um fundo de recebíveis (FIDC) com mais de R$ 120 milhões. Substituiu rotinas manuais em planilhas por pipelines de dados, validações e relatórios automáticos.',
      en: 'Full-stack platform that automates the daily management workflow of a BRL 120M+ credit receivables fund (FIDC). It replaced manual spreadsheet routines with automated data pipelines, validations and reports.',
    },
    highlights: [
      { pt: 'Arquitetura e desenvolvimento do zero à produção: API REST em Python, frontend Vite/React e PostgreSQL.', en: 'Architecture and development from scratch to production: Python REST API, Vite/React frontend and PostgreSQL.' },
      { pt: 'Deploy no Google Cloud Platform, com Firebase para autenticação e hosting.', en: 'Deployed on Google Cloud Platform, with Firebase for auth and hosting.' },
      { pt: 'Menos risco operacional para os administradores do fundo.', en: 'Lower operational risk for the fund administrators.' },
      { pt: 'Ciclo completo direto com o cliente: requisitos, modelagem, deploy, monitoramento e suporte.', en: 'Full lifecycle directly with the client: requirements, modeling, deploy, monitoring and support.' },
    ],
    role: { pt: 'Engenheiro de software full-stack', en: 'Full-stack software engineer' },
    period: { pt: '2026 — atual', en: '2026 — present' },
    stack: ['Python', 'REST API', 'React', 'Vite', 'PostgreSQL', 'GCP', 'Firebase'],
    visual: { kind: 'fund' },
    accent: '#7dd87a',
    links: [
      { kind: 'visit', href: 'https://lysa.tech/' },
      { kind: 'visit', href: 'https://ketos.com.br/' },
    ],
    confidential: true,
  },
  {
    id: 'didbox',
    name: 'Didbox',
    client: 'Didbox',
    category: { pt: 'SaaS · Criador de sites', en: 'SaaS · Website builder' },
    summary: {
      pt: 'Plataforma de criação de sites construída do zero — do conceito à produção. Um editor visual permite que qualquer pessoa crie e personalize sites responsivos, páginas de venda e funis sem escrever código.',
      en: 'A website creation platform built from scratch — from concept to production. A visual editor lets anyone create and customize responsive websites, sales pages and funnels without writing code.',
    },
    highlights: [
      { pt: 'Editor visual no-code para sites responsivos.', en: 'No-code visual editor for responsive websites.' },
      { pt: 'Frontend e backend da plataforma: gestão, personalização e publicação de sites.', en: 'Platform frontend and backend: site management, customization and publishing.' },
      { pt: 'Dono do ciclo inteiro: requisitos, arquitetura, deploy e manutenção.', en: 'Owned the whole lifecycle: requirements, architecture, deploy and maintenance.' },
    ],
    role: { pt: 'Desenvolvedor full-stack', en: 'Full-stack developer' },
    period: { pt: 'dez 2024 — jul 2026', en: 'Dec 2024 — Jul 2026' },
    stack: ['Visual editor', 'Full-stack', 'SaaS', 'Publishing pipeline'],
    visual: {
      kind: 'site',
      desktop: '/projects/didbox.webp',
      full: '/projects/didbox-full.webp',
      mobile: '/projects/didbox-mobile.webp',
      url: 'didbox.com.br',
    },
    accent: '#f7b500',
    links: [{ kind: 'visit', href: 'https://www.didbox.com.br/' }],
  },
  {
    id: 'dietsystem',
    name: 'DietSystem',
    client: 'DietSystem',
    category: { pt: 'Healthtech · Software para nutricionistas', en: 'Healthtech · Software for dietitians' },
    summary: {
      pt: 'Plataforma web de gestão nutricional usada por nutricionistas em todo o Brasil: plano alimentar, acompanhamento de pacientes, formulários e relatórios.',
      en: 'Nutrition management web platform used by dietitians across Brazil: meal plans, patient follow-up, forms and reports.',
    },
    highlights: [
      { pt: 'Desenvolvi e mantive features em PHP, JavaScript e MySQL.', en: 'Built and maintained features in PHP, JavaScript and MySQL.' },
      { pt: 'Endpoints de backend, queries e interfaces em toda a stack.', en: 'Backend endpoints, database queries and interfaces across the stack.' },
      { pt: 'Correção de bugs em produção e melhorias de performance e usabilidade.', en: 'Production bug fixes plus performance and usability improvements.' },
    ],
    role: { pt: 'Desenvolvedor full-stack (PHP)', en: 'Full-stack developer (PHP)' },
    period: { pt: 'nov 2021 — jan 2023', en: 'Nov 2021 — Jan 2023' },
    stack: ['PHP', 'JavaScript', 'MySQL', 'HTML/CSS'],
    visual: {
      kind: 'site',
      desktop: '/projects/dietsystem.webp',
      full: '/projects/dietsystem-full.webp',
      mobile: '/projects/dietsystem-mobile.webp',
      url: 'dietsystem.com.br',
    },
    accent: '#3ecf8e',
    links: [{ kind: 'visit', href: 'https://www.dietsystem.com.br/' }],
  },
  {
    id: 'terapizi',
    name: 'Terapizi',
    client: 'Terapizi',
    category: { pt: 'SaaS · Gestão de consultórios', en: 'SaaS · Practice management' },
    summary: {
      pt: 'Sistema para psicólogos e terapeutas organizarem agenda, prontuário, evoluções clínicas e financeiro em um só lugar — com pagamentos via PIX e alinhado à LGPD.',
      en: 'A system for psychologists and therapists to manage scheduling, clinical records, session notes and billing in one place — with PIX payments and LGPD (Brazilian GDPR) compliance.',
    },
    highlights: [
      { pt: 'Entrega completa: requisitos, UI, design responsivo, deploy e manutenção.', en: 'End-to-end delivery: requirements, UI, responsive design, deploy and maintenance.' },
      { pt: 'Landing page, área logada e fluxo de cadastro.', en: 'Landing page, authenticated app and sign-up flow.' },
    ],
    role: { pt: 'Desenvolvedor freelance', en: 'Freelance developer' },
    period: { pt: 'Freelance', en: 'Freelance' },
    stack: ['SaaS', 'Responsive UI', 'Auth', 'Payments'],
    visual: {
      kind: 'site',
      desktop: '/projects/terapizi.webp',
      full: '/projects/terapizi-full.webp',
      mobile: '/projects/terapizi-mobile.webp',
      url: 'terapizi.com.br',
    },
    accent: '#8b6cf0',
    links: [{ kind: 'visit', href: 'https://terapizi.com.br/' }],
  },
  {
    id: 'polyperfil',
    name: 'Polyperfil',
    client: 'Polyperfil',
    category: { pt: 'Site institucional · Catálogo', en: 'Company website · Catalog' },
    summary: {
      pt: 'Site institucional e catálogo de produtos para uma referência em revestimentos no Pará: produtos, história, diferenciais, unidades, feedback de clientes e pedido de orçamento.',
      en: 'Company website and product catalog for a leading wall-cladding brand in Pará, Brazil: products, history, differentiators, store locations, customer feedback and quote requests.',
    },
    highlights: [
      { pt: 'Design responsivo e foco em geração de orçamentos.', en: 'Responsive design focused on generating quote requests.' },
      { pt: 'Entrega completa, do layout ao deploy e manutenção.', en: 'Full delivery, from layout to deploy and maintenance.' },
    ],
    role: { pt: 'Desenvolvedor freelance', en: 'Freelance developer' },
    period: { pt: 'Freelance', en: 'Freelance' },
    stack: ['Website', 'Responsive UI', 'SEO', 'Lead capture'],
    visual: {
      kind: 'site',
      desktop: '/projects/polyperfil.webp',
      full: '/projects/polyperfil-full.webp',
      mobile: '/projects/polyperfil-mobile.webp',
      url: 'polyperfil.net',
    },
    accent: '#d6443a',
    links: [{ kind: 'visit', href: 'https://polyperfil.net/' }],
  },
  {
    id: 'drilling',
    name: 'Drilling Software',
    client: 'UDESC',
    category: { pt: 'Software científico · Desktop', en: 'Scientific software · Desktop' },
    summary: {
      pt: 'Aplicação desktop para correção e otimização de trajetórias de poços de petróleo. Lê malhas geológicas corner-point (GRDECL), posiciona cabeça de poço e alvo e calcula a trajetória ótima minimizando força, torque e tempo de broca.',
      en: 'Desktop application for correcting and optimizing oil well trajectories. It reads corner-point geological grids (GRDECL), places the wellhead and target and computes the optimal path, minimizing force, torque and bit time.',
    },
    highlights: [
      { pt: 'Dois módulos independentes: correção de trajetória 3D e minimização.', en: 'Two independent modules: 3D well path correction and minimization.' },
      { pt: 'Algoritmos de otimização numérica com visualização interativa.', en: 'Numerical optimization algorithms with interactive visualization.' },
      { pt: 'Matemática dos solvers protegida por testes golden em pytest.', en: 'Solver math locked down by golden tests in pytest.' },
    ],
    role: { pt: 'Desenvolvedor de software de pesquisa (bolsista)', en: 'Research software developer (scholarship)' },
    period: { pt: 'mai 2026 — atual', en: 'May 2026 — present' },
    stack: ['Python', 'PySide6 (Qt)', 'NumPy', 'pytest', 'GRDECL'],
    visual: { kind: 'well' },
    accent: '#4fb3ff',
    links: [{ kind: 'code', href: 'https://github.com/Mauduailibi/drilling_software' }],
  },
];

export type SmallProject = {
  id: string;
  name: string;
  org: string;
  year: string;
  summary: L;
  stack: string[];
  image?: string;
  art?: 'flow' | 'form';
  link?: { kind: 'visit' | 'code' | 'paper'; href: string };
};

export const smallProjects: SmallProject[] = [
  {
    id: 'cfd',
    name: 'CFD Simulations',
    org: 'Geoenergia · UDESC',
    year: '2025 — 2026',
    summary: {
      pt: 'Desenvolvi e estendi código C++ de dinâmica dos fluidos computacional para problemas de energia e reservatórios, com scripts Python para análise e visualização dos resultados.',
      en: 'Developed and extended C++ computational fluid dynamics code for energy and reservoir problems, with Python scripts for result analysis and visualization.',
    },
    stack: ['C++', 'Python', 'NumPy', 'Matplotlib'],
    art: 'flow',
  },
  {
    id: 'missao',
    name: 'Missão Cientista',
    org: 'UDESC CESFI',
    year: '2026',
    summary: {
      pt: 'Site da 1ª Feira de Ciências Missão Cientista: landing page, formulário de inscrição e painel administrativo, sem servidor próprio — dados protegidos por regras do Firestore.',
      en: 'Website for the 1st Missão Cientista Science Fair: landing page, registration form and admin dashboard, fully serverless — data secured by Firestore rules.',
    },
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Firebase'],
    art: 'form',
    link: { kind: 'code', href: 'https://github.com/Mauduailibi/missao-cientista' },
  },
  {
    id: 'ivo',
    name: 'Software IVO',
    org: 'IJIER · UFMS / IFMS',
    year: '2019',
    summary: {
      pt: 'Coautor do artigo sobre o software IVO, desenvolvido para coleta de dados clínicos, laboratoriais, terapêuticos e de custo de pacientes com Anemia Falciforme.',
      en: 'Co-author of the paper on IVO, software built to collect clinical, laboratory, therapeutic and cost data for patients with Sickle Cell Anemia.',
    },
    stack: ['Publication', 'Health data'],
    image: '/projects/ivo.webp',
    link: { kind: 'paper', href: 'https://doi.org/10.31686/ijier.vol7.iss12.1858' },
  },
];

export type Job = {
  role: L;
  company: string | L;
  href?: string;
  place: L;
  start: string;
  end?: string;
  bullets: L[];
  tags: string[];
};

export const jobs: Job[] = [
  {
    role: { pt: 'Engenheiro de Software Full-Stack', en: 'Full-Stack Software Engineer' },
    company: 'Lysa Tech & Ketos',
    href: 'https://lysa.tech/',
    place: { pt: 'Remoto · meio período', en: 'Remote · part-time' },
    start: '2026-06',
    bullets: [
      { pt: 'Plataforma full-stack que automatiza a gestão diária de um FIDC de R$ 120M+.', en: 'Full-stack platform automating daily management of a BRL 120M+ receivables fund.' },
      { pt: 'API REST em Python, frontend Vite/React, PostgreSQL, GCP e Firebase.', en: 'Python REST API, Vite/React frontend, PostgreSQL, GCP and Firebase.' },
    ],
    tags: ['Python', 'React', 'PostgreSQL', 'GCP'],
  },
  {
    role: { pt: 'Desenvolvedor de Software de Pesquisa', en: 'Research Software Developer' },
    company: 'UDESC',
    place: { pt: 'Bolsa de pesquisa · Drilling Software', en: 'Research scholarship · Drilling Software' },
    start: '2026-05',
    bullets: [
      { pt: 'App desktop em Python/PySide para otimização de trajetórias de poços.', en: 'Python/PySide desktop app for well trajectory optimization.' },
    ],
    tags: ['Python', 'PySide6', 'Numerical methods'],
  },
  {
    role: { pt: 'Instrutor de Java', en: 'Java Instructor' },
    company: 'Entra21',
    href: 'https://www.entra21.com.br/',
    place: { pt: 'Itajaí, SC', en: 'Itajaí, SC, Brazil' },
    start: '2026-04',
    end: '2026-09',
    bullets: [
      { pt: 'Ensinei Java, POO, Java Web e Spring Boot para 15–20 alunos.', en: 'Taught Java, OOP, Java Web and Spring Boot to 15–20 students.' },
      { pt: 'Criei exercícios práticos de APIs REST, Hibernate/JPA e bancos relacionais.', en: 'Designed hands-on exercises on REST APIs, Hibernate/JPA and relational databases.' },
    ],
    tags: ['Java', 'Spring Boot', 'Hibernate'],
  },
  {
    role: { pt: 'Desenvolvedor Full-Stack', en: 'Full-Stack Developer' },
    company: 'Didbox',
    href: 'https://www.didbox.com.br/',
    place: { pt: 'Brasil', en: 'Brazil' },
    start: '2024-12',
    end: '2026-07',
    bullets: [
      { pt: 'Construí do zero uma plataforma de criação de sites com editor visual no-code.', en: 'Built a website-builder platform with a no-code visual editor from scratch.' },
      { pt: 'Frontend, backend e fluxos de publicação, do conceito à produção.', en: 'Frontend, backend and publishing workflows, from concept to production.' },
    ],
    tags: ['Full-stack', 'SaaS'],
  },
  {
    role: { pt: 'Pesquisador — Dinâmica dos Fluidos Computacional', en: 'Research Developer — Computational Fluid Dynamics' },
    company: 'Geoenergia Research Group',
    place: { pt: 'UDESC', en: 'UDESC' },
    start: '2025-08',
    end: '2026-05',
    bullets: [
      { pt: 'Código C++ de CFD para problemas de energia e reservatórios.', en: 'C++ CFD code for energy and reservoir problems.' },
    ],
    tags: ['C++', 'Python'],
  },
  {
    role: { pt: 'Desenvolvedor Full-Stack (PHP)', en: 'Full-Stack Developer (PHP)' },
    company: 'DietSystem',
    href: 'https://www.dietsystem.com.br/',
    place: { pt: 'Brasil', en: 'Brazil' },
    start: '2021-11',
    end: '2023-01',
    bullets: [
      { pt: 'Features, endpoints e interfaces de uma plataforma de nutrição em PHP, JS e MySQL.', en: 'Features, endpoints and UI for a nutrition platform in PHP, JS and MySQL.' },
    ],
    tags: ['PHP', 'JavaScript', 'MySQL'],
  },
  {
    role: { pt: 'Desenvolvedor Web Freelance', en: 'Freelance Web Developer' },
    company: { pt: 'Autônomo', en: 'Self-employed' },
    place: { pt: 'Remoto', en: 'Remote' },
    start: '2020-01',
    bullets: [
      { pt: 'Sites e aplicações web para clientes como Polyperfil e Terapizi.', en: 'Websites and web apps for clients such as Polyperfil and Terapizi.' },
    ],
    tags: ['React', 'TypeScript', 'Web'],
  },
  {
    role: { pt: 'Desenvolvedor Mobile Flutter', en: 'Flutter Mobile Developer' },
    company: 'HomeQR',
    place: { pt: 'Brasil', en: 'Brazil' },
    start: '2019-10',
    end: '2021-10',
    bullets: [
      { pt: 'Apps Android e iOS em Flutter/Dart integrados a APIs REST e Firebase.', en: 'Android and iOS apps in Flutter/Dart integrated with REST APIs and Firebase.' },
    ],
    tags: ['Flutter', 'Dart', 'Firebase'],
  },
  {
    role: { pt: 'Estagiário de TI', en: 'IT Intern' },
    company: 'AGU — Advocacia-Geral da União',
    href: 'https://www.gov.br/agu/pt-br',
    place: { pt: 'Campo Grande, MS', en: 'Campo Grande, MS, Brazil' },
    start: '2019-02',
    end: '2019-06',
    bullets: [
      { pt: 'Suporte de TI, redes e planilhas para gestão de dados internos.', en: 'IT support, networking and spreadsheets for internal data management.' },
    ],
    tags: ['IT', 'Networks'],
  },
];

export const skills: { group: L; items: string[] }[] = [
  { group: { pt: 'Linguagens', en: 'Languages' }, items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'PHP', 'Dart', 'C++', 'SQL'] },
  { group: { pt: 'Frontend & Mobile', en: 'Frontend & Mobile' }, items: ['React', 'Vite', 'Tailwind', 'Flutter', 'Responsive design'] },
  { group: { pt: 'Backend & APIs', en: 'Backend & APIs' }, items: ['FastAPI', 'Flask', 'Node.js', 'Spring Boot', 'REST', 'Auth'] },
  { group: { pt: 'Dados & ORMs', en: 'Data & ORMs' }, items: ['PostgreSQL', 'MySQL', 'Firestore', 'Prisma', 'Drizzle', 'Hibernate/JPA'] },
  { group: { pt: 'Cloud & DevOps', en: 'Cloud & DevOps' }, items: ['GCP', 'Firebase', 'Docker', 'CI/CD', 'Linux', 'Git'] },
  { group: { pt: 'Científico', en: 'Scientific' }, items: ['pandas', 'NumPy', 'PySide (Qt)', 'CFD (C++)', 'Optimization'] },
];

export const education: { title: L; school: string; period: L }[] = [
  {
    title: { pt: 'Intercâmbio em Engenharia', en: 'Engineering exchange student' },
    school: 'University of Regina · Canada',
    period: { pt: 'jan — mai 2027', en: 'Jan — May 2027' },
  },
  {
    title: { pt: 'Bacharelado em Engenharia de Petróleo', en: 'B.Eng. Petroleum Engineering' },
    school: 'UDESC · Santa Catarina',
    period: { pt: '2022 — 2028 (previsto)', en: '2022 — 2028 (expected)' },
  },
  {
    title: { pt: 'Técnico em Informática', en: 'IT Technical Diploma' },
    school: 'IFMS · Mato Grosso do Sul',
    period: { pt: '2017 — 2020', en: '2017 — 2020' },
  },
];
