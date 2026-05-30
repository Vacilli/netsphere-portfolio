export interface PortfolioSection {
  id: string
  title: string
  subtitle: string
  category: 'PROFILE' | 'VAULT' | 'TERMINAL' | 'SYSTEM'
  targetUrl: string
  contentBlocks: string[]
  meta?: {
    dateRange?: string
    statusTag?: 'READY' | 'ONLINE' | 'STABLE' | 'ACTIVE' | 'ENCRYPTED'
    isCurrent?: boolean
  }
}

export const portfolioRegistry: PortfolioSection[] = [
  // ==========================================
  // PROFILE SECTIONS
  // ==========================================
  {
    id: 'prof-interface',
    title: '/interface_layer',
    subtitle: 'Core UI & Frontend Matrix',
    category: 'PROFILE',
    targetUrl: '/profile',
    contentBlocks: [
      'React / Next.js 15+ Core Architecture',
      'TypeScript (Strict Mode Engineering)',
      'Tailwind CSS v4 Utility Framework',
      'Micro-Frontends & Modular Viewports',
    ],
    meta: { statusTag: 'READY' },
  },
  {
    id: 'prof-infra',
    title: '/infrastructure',
    subtitle: 'Backend Foundations & Data Streams',
    category: 'PROFILE',
    targetUrl: '/profile',
    contentBlocks: [
      'Node.js / Express Runtime Engines',
      'PostgreSQL / Prisma ORM Architecture',
      'REST & GraphQL Secure API Gateways',
      'Redis Distributed Caching Optimization',
    ],
    meta: { statusTag: 'ONLINE' },
  },
  {
    id: 'prof-ops',
    title: '/operations',
    subtitle: 'Systems, Deployment & Telemetry',
    category: 'PROFILE',
    targetUrl: '/profile',
    contentBlocks: [
      'Git Version Control & Automating CI/CD Pipelines',
      'Docker Containers & Containerization Infrastructure',
      'Vercel & AWS Cloud Architecture Deployments',
      'High-Speed Viewport Performance Optimization',
    ],
    meta: { statusTag: 'STABLE' },
  },
  {
    id: 'exp-senior',
    title: 'Senior Full Stack Engineer',
    subtitle: 'Ecosystem Architecture Lab',
    category: 'PROFILE',
    targetUrl: '/profile',
    contentBlocks: [
      'Engineering high-performance web infrastructure and managing complex state lifecycles.',
      'Refactoring legacy monolithic applications into modern, modular Next.js environments.',
    ],
    meta: { dateRange: '2024 — PRESENT', isCurrent: true },
  },
  {
    id: 'exp-software',
    title: 'Software Engineer',
    subtitle: 'Core Systems Corp',
    category: 'PROFILE',
    targetUrl: '/profile',
    contentBlocks: [
      'Developed robust, secure RESTful APIs and interactive micro-frontends.',
      'Optimized database queries and streamlined state management architectures across decoupled client modules.',
    ],
    meta: { dateRange: '2022 — 2024', isCurrent: false },
  },

  // ==========================================
  // VAULT SECTIONS (YOUR PROJECTS)
  // ==========================================
  {
    id: 'vault-proj-1',
    title: 'Hyper-Secure Mainframe Shell',
    subtitle: 'Next.js 15 App Router Terminal Template',
    category: 'VAULT',
    targetUrl: '/vault',
    contentBlocks: [
      'An open-source interactive portfolio capsule engineered purely in React and Tailwind CSS.',
      'Features a custom lightweight state scheduler to handle conditional asynchronous booting lifecycles seamlessly without layout shifts.',
    ],
    meta: { statusTag: 'ACTIVE' },
  },
  {
    id: 'vault-proj-2',
    title: 'Distributed Telemetry Pipeline',
    subtitle: 'High-Throughput Node Log Aggregator',
    category: 'VAULT',
    targetUrl: '/vault',
    contentBlocks: [
      'A decoupled analytics daemon designed to capture React runtime error footprints.',
      'Streams raw payload blocks directly into a distributed PostgreSQL database clustered with Redis caching mechanisms.',
    ],
    meta: { statusTag: 'ENCRYPTED' },
  },

  // ==========================================
  // TERMINAL / SYSTEM SECTIONS
  // ==========================================
  {
    id: 'sys-mainframe',
    title: 'Core Console // Terminal Mainframe',
    subtitle: 'Interactive Command Prompt Routine',
    category: 'TERMINAL',
    targetUrl: '/',
    contentBlocks: [
      'Type commands directly into the terminal link.',
      'Available command routines include help, about, profile, demo, contact, and clear.',
    ],
  },
]
