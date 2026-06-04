// app/data/portfolioData.ts

export interface PortfolioSection {
  id: string
  title: string
  subtitle: string
  category: 'PROFILE' | 'VAULT' | 'TERMINAL' | 'SYSTEM'
  targetUrl: string
  contentBlocks: string[]
  meta?: {
    dateRange?: string
    statusTag?:
      | 'READY'
      | 'ONLINE'
      | 'STABLE'
      | 'ACTIVE'
      | 'ENCRYPTED'
      | 'STAGING'
      | 'PENDING'
      | 'ACTIVE_CORE // HOST'
      | 'STABLE // PRODUCTION'
      | 'ACTIVE // DEPLOYED'
      | 'PATCH_PENDING'
    isCurrent?: boolean
    hasVideo?: boolean
    videoSrc?: string
    stack?: string[]
    isSelf?: boolean
    liveUrl?: string
    repoUrl?: string
  }
}

export const portfolioRegistry: PortfolioSection[] = [
  // ==========================================
  // PROFILE SECTIONS (Core Skills)
  // ==========================================
  {
    id: 'prof-interface',
    title: '/interface_layer',
    subtitle: 'Core UI & Frontend Matrix',
    category: 'PROFILE',
    targetUrl: '/profile?tab=interface', // Dynamic Section Anchor
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
    targetUrl: '/profile?tab=infrastructure', // Dynamic Section Anchor
    contentBlocks: [
      'REST & GraphQL Secure API Gateways',
      'Marketing, Analytics, Marketo and Salesforce Integration',
      'AI-Augmented Rapid Prototyping',
    ],
    meta: { statusTag: 'STAGING' },
  },
  {
    id: 'prof-ops',
    title: '/operations',
    subtitle: 'Systems, Deployment & Telemetry',
    category: 'PROFILE',
    targetUrl: '/profile?tab=operations', // Dynamic Section Anchor
    contentBlocks: [
      'Git Version Control & Automating CI/CD Pipelines',
      'Vercel & AWS Cloud Architecture Deployments',
      'High-Speed Viewport Performance Optimization',
    ],
    meta: { statusTag: 'STAGING' },
  },
  {
    id: 'prof-pending-backend',
    title: '/backend_foundations',
    subtitle: 'Relational Frameworks & Legacy Infrastructure',
    category: 'PROFILE',
    targetUrl: '/profile?tab=pending',
    contentBlocks: [
      'Node.js / Express Runtime Engines',
      'PostgreSQL / Prisma ORM Architecture',
      'Docker Containers & Containerization Infrastructure',
    ],
    meta: { statusTag: 'PENDING' },
  },

  // ==========================================
  // PROFILE SECTIONS (Operational Timeline)
  // ==========================================
  {
    id: 'exp-senior',
    title: 'Senior Full Stack Engineer',
    subtitle: 'Ecosystem Architecture Lab',
    category: 'PROFILE',
    targetUrl: '/profile?tab=experience',
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
    targetUrl: '/profile?tab=experience',
    contentBlocks: [
      'Developed robust, secure RESTful APIs and interactive micro-frontends.',
      'Optimized database queries and streamlined state management architectures across decoupled client modules.',
    ],
    meta: { dateRange: '2022 — 2024', isCurrent: false },
  },

  // ==========================================
  // VAULT SECTIONS (The Repositories) - FIXED WITH UNIQUE PARAMS
  // ==========================================
  {
    id: 'NEX-01',
    title: 'Codex OS',
    subtitle: 'Operational Infrastructure Task Manager',
    category: 'VAULT',
    targetUrl: '/vault?node=codex-os', // UNIQUE EXPLICIT ROUTE
    contentBlocks: [
      'A minimal, system-level task management architecture built to replace bloated traditional interfaces.',
      'Features an active terminal focus engine, responsive data matrix arrays, and direct state synchronization hooks.',
    ],
    meta: {
      statusTag: 'STABLE // PRODUCTION',
      hasVideo: true,
      videoSrc: '/assets/demo.gif',
      stack: ['React', 'Tailwind v3', 'TypeScript'],
      liveUrl: 'https://codex-os-task-manager.vercel.app/',
      repoUrl: 'https://github.com/Vacilli/React-To_Do-List',
    },
  },
  {
    id: 'NEX-02',
    title: 'Netsphere Universe',
    subtitle: 'Ecosystem Telemetry Dashboard & Portfolio',
    category: 'VAULT',
    targetUrl: '/vault?node=netsphere-universe', // UNIQUE EXPLICIT ROUTE
    contentBlocks: [
      'The core aesthetic node for full-stack operations.',
      'Built using a high-speed programmatic interface with zero wasted motion, dynamic viewport portals, and unified theme inversion variables.',
    ],
    meta: {
      statusTag: 'ACTIVE // DEPLOYED',
      hasVideo: true,
      videoSrc: '/assets/portfolio-demo.gif',
      stack: ['Next.js 15', 'Tailwind v4', 'React Server Components'],
      liveUrl: 'https://netsphere.universe',
      repoUrl: 'https://github.com/yourusername/netsphere',
    },
  },
  {
    id: 'NEX-03',
    title: 'Netsphere Deck OS',
    subtitle: 'Local Mainframe Terminal Node',
    category: 'VAULT',
    targetUrl: '/vault?node=netsphere-deck-os', // UNIQUE EXPLICIT ROUTE
    contentBlocks: [
      'The exact interactive terminal module you are browsing right now.',
      'Engineered to handle state-locked boot arrays, clean dynamic subview navigation channels, and a secure server-side communications uplink.',
    ],
    meta: {
      statusTag: 'ACTIVE_CORE // HOST',
      hasVideo: false,
      videoSrc: '',
      stack: ['Next.js 15', 'TypeScript', 'Server Actions', 'Resend API'],
      liveUrl: '#',
      repoUrl: 'https://github.com/yourusername/netsphere',
    },
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
