const { PrismaClient } = require('@prisma/client');
const { faker } = require('@faker-js/faker');
const prisma = new PrismaClient();

// =============================================
// DADOS DO IME — CURSOS E HABILIDADES
// =============================================

const IME_COURSES = [
  'Engenharia Cartográfica',
  'Engenharia da Computação',
  'Engenharia de Comunicações',
  'Engenharia de Fortificação e Construção',
  'Engenharia de Materiais',
  'Engenharia Elétrica',
  'Engenharia Eletrônica',
  'Engenharia Mecânica e de Automóveis',
  'Engenharia Mecânica e de Armamentos',
  'Engenharia Química',
];

const IME_SKILLS = [
  // Tecnologia & Software
  'Python', 'C/C++', 'Java', 'TypeScript', 'JavaScript', 'Go', 'Rust',
  'React', 'Node.js', 'Django', 'FastAPI', 'Spring Boot',
  'Docker', 'Kubernetes', 'AWS', 'Google Cloud', 'Azure',
  'PostgreSQL', 'MySQL', 'MongoDB', 'Redis',
  'Git', 'Linux', 'Bash/Shell Script', 'CI/CD',
  'REST API', 'GraphQL', 'Microserviços', 'Arquitetura de Software',
  'DevOps', 'SRE', 'Terraform', 'Ansible',

  // IA & Dados
  'Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch',
  'Ciência de Dados', 'Análise de Dados', 'SQL', 'ETL',
  'Engenharia de Dados', 'Apache Spark', 'dbt', 'Power BI',
  'Estatística', 'NLP', 'Visão Computacional',
  'Engenharia de Prompt', 'LLMs / IA Generativa', 'MLOps',
  'R (Linguagem)', 'Matlab', 'Algoritmos e Estruturas de Dados',

  // Engenharia Elétrica / Eletrônica
  'Eletrônica Analógica', 'Eletrônica Digital', 'Sistemas Embarcados',
  'FPGA', 'PCB Design', 'Arduino', 'Raspberry Pi', 'ESP32',
  'IoT', 'Automação Industrial', 'CLP/PLC', 'SCADA',
  'Processamento de Sinais', 'Telecomunicações', 'Rádio Frequência',
  'Energia Solar Fotovoltaica', 'Eficiência Energética', 'Subestações Elétricas',
  'Robótica', 'Mecatrônica', 'Drives e Inversores',

  // Engenharia Mecânica / Materiais
  'SolidWorks', 'AutoCAD', 'Ansys', 'CATIA', 'Autodesk Inventor',
  'CFD', 'Análise por Elementos Finitos', 'Termodinâmica',
  'Resistência dos Materiais', 'Ciência dos Materiais', 'Metalurgia',
  'Manufatura Aditiva / Impressão 3D', 'CNC', 'Usinagem', 'Soldagem',
  'Lean Manufacturing', 'Six Sigma', 'FMEA', 'Manutenção Preditiva',

  // Engenharia Química
  'Engenharia de Processos', 'Transferência de Calor', 'Mecânica dos Fluidos',
  'Química Analítica', 'Química Orgânica', 'Bioquímica',

  // Engenharia Civil / Cartográfica
  'Topografia', 'Geodésia', 'Geoprocessamento', 'Sensoriamento Remoto',
  'BIM', 'Revit', 'Engenharia Estrutural', 'Geotecnia',

  // Comunicações
  '5G / LTE', 'Fibra Óptica', 'Antenas', 'Satélites', 'VoIP',
  'Engenharia de Redes', 'Cisco Networking', 'Segurança da Informação',
  'Cibersegurança', 'Criptografia', 'Pentest',

  // Gestão & Negócios
  'Gestão de Projetos (PMP)', 'Scrum', 'Kanban', 'Metodologias Ágeis',
  'Product Management', 'OKR', 'Planejamento Estratégico',
  'Análise de Negócios', 'Empreendedorismo', 'Startups',
  'Finanças Corporativas', 'Valuation', 'Venture Capital',
  'Consultoria de Negócios', 'Gestão de Pessoas', 'Liderança',

  // Setor Público / Militar
  'Gestão Pública', 'Políticas Públicas', 'Segurança Nacional',
  'Logística Militar', 'Pesquisa Científica', 'Publicação Científica',

  // Outras habilidades relevantes
  'LaTeX', 'Programação Competitiva', 'Olimpíadas de Informática',
  'Oratória', 'Comunicação Técnica', 'Inglês Técnico',
  'Blockchain', 'Web3', 'Computação Quântica',
  'Realidade Aumentada / VR', 'Digital Twin', 'Indústria 4.0',
];

const ROLE_GROUPS = [
      'Mestrando',
      'Doutorando',
      'Pós-Doutorando',
      'Pesquisador',
      'Pesquisador Sênior',
      'Professor Substituto / Temporário',
      'Professor Assistente',
      'Professor Adjunto',
      'Professor Associado',
      'Professor Titular',
      'Coordenador de Curso',
      'Chefe de Departamento',
      'Engenheiro de Software Júnior',
      'Engenheiro de Software Pleno',
      'Engenheiro de Software Sênior',
      'Engenheiro de Software Especialista / Staff',
      'Engenheiro de Software Principal / Principal Engineer',
      'Engenheiro de Plataforma / Platform Engineer',
      'Engenheiro de Infraestrutura / DevOps / SRE',
      'Engenheiro de Segurança (AppSec / InfoSec)',
      'Engenheiro de Dados',
      'Engenheiro de Machine Learning (MLE)',
      'Arquiteto de Software',
      'Arquiteto de Soluções',
      'Arquiteto de Dados','Líder Técnico (Tech Lead)',
      'Engineering Manager',
      'Head de Engenharia',
      'Diretor de Engenharia',
      'VP de Engenharia',
      'CTO (Diretor Técnico)',
      'Analista de Dados',
      'Cientista de Dados Júnior',
      'Cientista de Dados Pleno',
      'Cientista de Dados Sênior',
      'Especialista em IA / ML',
      'Pesquisador em IA (Research Scientist)',
      'Pesquisador Aplicado (Applied Scientist)',
      'Engenheiro de IA (AI Engineer)',
      'Analista de BI / Business Intelligence',
      'Analista Quant / Quantitativo',
      'Engenheiro Trainee',
      'Engenheiro Júnior',
      'Engenheiro Pleno',
      'Engenheiro Sênior',
      'Engenheiro Especialista',
      'Engenheiro Consultor',
      'Pesquisador em Engenharia (P&D)',
      'Líder Técnico (Tech Lead)',
      'Coordenador de Engenharia',
      'Gerente de Engenharia',
      'Gerente de P&D',
      'Head de Engenharia',
      'Diretor de Engenharia',
      'Associate Product Manager (APM)',
      'Product Manager (PM)',
      'Product Manager Sênior',
      'Group Product Manager (GPM)',
      'Principal Product Manager',
      'Director of Product',
      'VP de Produto',
      'Chief Product Officer (CPO)',
      'Product Designer / UX Designer',
      'UX Researcher',
      'Analista de Projetos',
      'Coordenador de Projetos',
      'Gerente de Projetos (GP)',
      'Gerente de Programa (PgM)',
      'Gerente de Portfólio',
      'PMO',
      'Scrum Master',
      'Product Owner (PO)',
      'Agile Coach',
      'Coordenador de Operações',
      'Gerente de Operações',
      'COO (Diretor de Operações)',
      'Analista de Negócios',
      'Consultor de Negócios / Estratégia',
      'Consultor (Big Four / Boutique)',
      'Analista Financeiro',
      'Analista de Investimentos',
      'Analista Quant (Finanças)',
      'Trader / Operador de Mesa',
      'Gerente Financeiro',
      'CFO (Diretor Financeiro)',
      'Account Manager',
      'Customer Success Manager',
      'Gerente Comercial / de Vendas',
      'Business Development Manager',
      'Estagiário em Órgão Público',
      'Servidor Público (Concursado)',
      'Analista de Órgão Público',
      'Especialista de Órgão Público',
      'Auditor Fiscal',
      'Técnico em Regulação / Agência Reguladora',
      'Pesquisador de Instituto Público (ex: INPE, INPI, Fiocruz)',
      'Diplomata / Carreira de Estado',
      'Militar — Oficial',
      'Professor Militar',
      'Fundador / Co-Fundador',
      'CEO (Diretor Executivo)',
      'CTO Fundador',
      'Sócio',
      'Empreendedor em Série',
      'Empreendedor em Residência (EIR)',
      'Consultor Autônomo (Tecnologia)',
      'Consultor Autônomo (Negócios / Estratégia)',
      'Consultor Autônomo (Dados / IA)',
      'Freelancer de Software',
      'Freelancer de Dados',
      'Freelancer Técnico (geral)',
      'Autônomo / Prestador de Serviços',
      'Estagiário',
      'Trainee',
      'Em transição de carreira',
      'Estudando / Preparando concurso',
      'Intercâmbio / Sabbatical',
];

const SEED_MARKER = '@alumni.teste.com';

async function main() {
  console.log('--- 🧹 Removendo apenas registros de seed anteriores ---');

  // Busca somente usuários gerados pelo seed (pelo email marker)
  const seedUsers = await prisma.users.findMany({
    where: { email: { endsWith: SEED_MARKER } },
    select: { id: true },
  });

  const seedUserIds = seedUsers.map((u) => u.id);

  if (seedUserIds.length > 0) {
    // Remove alumnus vinculados aos usuários de seed
    await prisma.alumnus.deleteMany({
      where: { user_id: { in: seedUserIds } },
    });

    // Remove os usuários de seed
    await prisma.users.deleteMany({
      where: { id: { in: seedUserIds } },
    });

    console.log(`🗑️  ${seedUserIds.length} registros de seed anteriores removidos.`);
  } else {
    console.log('ℹ️  Nenhum registro de seed anterior encontrado.');
  }

  console.log('🚀 Iniciando seed: Preparando 6.000 Ex-Alunos do IME...');

  const totalUsers = 6000;
  const batchSize = 1000;

  const defaultPasswordHash =
    '$2b$10$EP03m245oZpI0h/5Y4.8Z.u2oO3tA2g1mUvO.wF/L6h5lZ2z2D/Kq';

  for (let batch = 0; batch < totalUsers / batchSize; batch++) {
    const usersBatch = [];
    const alumniBatch = [];

    for (let i = 0; i < batchSize; i++) {
      const globalIndex = batch * batchSize + i;
      const userId = faker.string.uuid();
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      const fullName = `${firstName} ${lastName}`;

      // Marker no email garante identificação futura do seed
      const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}.${globalIndex}${SEED_MARKER}`;

      usersBatch.push({
        id: userId,
        full_name: fullName,
        email: email,
        password_hash: defaultPasswordHash,
      });

      alumniBatch.push({
        id: faker.string.uuid(),
        user_id: userId,
        fullName: fullName,
        email: email,
        phone: faker.phone.number(),
        birthDate: faker.date.birthdate({ min: 22, max: 65, mode: 'age' }),
        country: 'Brasil',
        state: faker.location.state(),
        city: faker.location.city(),
        course: faker.helpers.arrayElement(IME_COURSES),
        graduationYear: faker.number.int({ min: 1980, max: 2024 }),
        company: faker.company.name(),
        role: faker.helpers.arrayElement(ROLE_GROUPS),
        bio: faker.lorem.paragraph(),
        skills: faker.helpers.arrayElements(IME_SKILLS, faker.number.int({ min: 2, max: 6 })),
        profilePicture: `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=random`,
      });
    }

    await prisma.$transaction([
      prisma.users.createMany({ data: usersBatch }),
      prisma.alumnus.createMany({ data: alumniBatch }),
    ]);

    console.log(
      `✅ Lote ${batch + 1}/${totalUsers / batchSize} concluído: ${(batch + 1) * batchSize} usuários criados...`
    );
  }

  console.log('🎉 Seed concluído! 6.000 ex-alunos do IME inseridos com sucesso.');
}

main()
  .catch((e) => {
    console.error('❌ Erro durante o seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });