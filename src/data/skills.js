// ─── SKILL TREE DATA ─────────────────────────────────────────
// This is your skill tree. Edit `completed: true` as you learn each skill.
// Add resources by filling in the `resources` array.
// Add personal notes in the `notes` field.
//
// XP per completed skill: the value in `xp` field (default 100).
// XP per completed category: automatic sum of skills within it.

export const skillBranches = [

  // ════════════════════════════════════════════════════════════
  //  SYSTEM DESIGN
  // ════════════════════════════════════════════════════════════
  {
    id: 'system-design',
    title: 'System Design',
    subtitle: 'The Architecture Arts',
    icon: '🏛️',
    colorVar: 'arcane',
    themeClass: 'blue',
    description:
      'Master the ancient art of designing scalable, resilient systems that serve thousands — then millions. From humble components to architectures worthy of great kingdoms.',

    categories: [
      {
        id: 'fundamentals',
        title: 'Fundamentals',
        icon: '📜',
        description: 'The bedrock principles every architect must internalize before designing anything at scale.',
        skills: [
          {
            id: 'cap-theorem',
            title: 'CAP Theorem',
            description: 'Consistency, Availability, Partition Tolerance — and why you can only pick two.',
            completed: false,
            xp: 100,
            resources: [
              { title: 'CAP Theorem — IBM', url: 'https://www.ibm.com/topics/cap-theorem', type: 'article' },
              { title: 'Please stop calling databases CP or AP', url: 'https://martin.kleppmann.com/2015/05/11/please-stop-calling-databases-cp-or-ap.html', type: 'article' },
            ],
            notes: '',
          },
          {
            id: 'acid-properties',
            title: 'ACID Properties',
            description: 'Atomicity, Consistency, Isolation, Durability — the promises relational databases make.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
          {
            id: 'base-properties',
            title: 'BASE & Eventual Consistency',
            description: 'Basically Available, Soft state, Eventually consistent — the NoSQL trade-off.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
          {
            id: 'scalability-patterns',
            title: 'Scalability Patterns',
            description: 'Horizontal vs vertical scaling, sharding, partitioning strategies.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
          {
            id: 'availability-patterns',
            title: 'Availability & Reliability',
            description: 'SLA, SLO, SLI, failover strategies, redundancy, replication.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
        ],
      },

      {
        id: 'api-design',
        title: 'API Design',
        icon: '🔗',
        description: 'Craft elegant, versioned contracts between services and clients.',
        skills: [
          {
            id: 'rest-principles',
            title: 'REST Principles',
            description: 'HTTP methods, status codes, idempotency, resource naming, HATEOAS.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
          {
            id: 'graphql',
            title: 'GraphQL',
            description: 'Schema definition, queries, mutations, subscriptions, N+1 problem.',
            completed: false,
            xp: 100,
            resources: [
              { title: 'GraphQL Official Docs', url: 'https://graphql.org/learn/', type: 'docs' },
            ],
            notes: '',
          },
          {
            id: 'grpc',
            title: 'gRPC & Protocol Buffers',
            description: 'High-performance RPC, protobuf schemas, streaming, vs REST trade-offs.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
          {
            id: 'api-versioning',
            title: 'API Versioning Strategies',
            description: 'URL versioning, header versioning, deprecation lifecycles.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
          {
            id: 'api-gateway',
            title: 'API Gateway Patterns',
            description: 'Routing, auth, rate limiting, request transformation at the gateway.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
        ],
      },

      {
        id: 'load-balancing',
        title: 'Load Balancing',
        icon: '⚖️',
        description: 'Distribute the burden of a kingdom across many shoulders.',
        skills: [
          {
            id: 'lb-algorithms',
            title: 'Balancing Algorithms',
            description: 'Round robin, least connections, IP hash, consistent hashing, weighted.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
          {
            id: 'l4-vs-l7',
            title: 'L4 vs L7 Load Balancing',
            description: 'Transport layer vs application layer — when to use each.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
          {
            id: 'reverse-proxy',
            title: 'Reverse Proxy',
            description: 'Nginx, HAProxy — SSL termination, caching, compression.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
          {
            id: 'consistent-hashing',
            title: 'Consistent Hashing',
            description: 'Minimizing redistribution when nodes join/leave — used in CDNs & caches.',
            completed: false,
            xp: 150,
            resources: [],
            notes: '',
          },
        ],
      },

      {
        id: 'message-queues',
        title: 'Message Queues',
        icon: '📨',
        description: 'Asynchronous scrolls carried between services across the realm.',
        skills: [
          {
            id: 'kafka',
            title: 'Apache Kafka',
            description: 'Topics, partitions, consumer groups, offsets, log compaction.',
            completed: false,
            xp: 150,
            resources: [
              { title: 'Kafka Official Docs', url: 'https://kafka.apache.org/documentation/', type: 'docs' },
            ],
            notes: '',
          },
          {
            id: 'rabbitmq',
            title: 'RabbitMQ',
            description: 'Exchanges, queues, bindings, AMQP, dead letter queues.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
          {
            id: 'pub-sub',
            title: 'Pub/Sub Pattern',
            description: 'Decoupled event-driven architecture, fan-out, topic routing.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
          {
            id: 'event-sourcing',
            title: 'Event Sourcing & CQRS',
            description: 'Storing state as event log, command/query separation.',
            completed: false,
            xp: 150,
            resources: [],
            notes: '',
          },
        ],
      },

      {
        id: 'rate-limiting',
        title: 'Rate Limiting',
        icon: '🚦',
        description: 'Guard the gates — protect your services from storms of requests.',
        skills: [
          {
            id: 'token-bucket',
            title: 'Token Bucket Algorithm',
            description: 'Burst-tolerant rate limiting with token replenishment.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
          {
            id: 'sliding-window',
            title: 'Sliding Window Algorithm',
            description: 'Fixed vs sliding window counters, pros and cons.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
          {
            id: 'leaky-bucket',
            title: 'Leaky Bucket Algorithm',
            description: 'Smoothing bursty traffic into a steady output rate.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
          {
            id: 'distributed-rl',
            title: 'Distributed Rate Limiting',
            description: 'Redis-based rate limiting across multiple service instances.',
            completed: false,
            xp: 150,
            resources: [],
            notes: '',
          },
        ],
      },

      {
        id: 'caching',
        title: 'Caching',
        icon: '⚡',
        description: 'The art of remembering — trading memory for speed across the realm.',
        skills: [
          {
            id: 'cache-strategies',
            title: 'Caching Strategies',
            description: 'Cache-aside, write-through, write-behind, read-through patterns.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
          {
            id: 'redis',
            title: 'Redis',
            description: 'Data types, TTL, pub/sub, Lua scripting, clustering, persistence.',
            completed: false,
            xp: 150,
            resources: [
              { title: 'Redis Official Docs', url: 'https://redis.io/docs/', type: 'docs' },
            ],
            notes: '',
          },
          {
            id: 'cdn',
            title: 'CDN & Edge Caching',
            description: 'Content delivery networks, edge nodes, cache-control headers.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
          {
            id: 'cache-invalidation',
            title: 'Cache Invalidation',
            description: 'TTL, event-based invalidation, cache stampede prevention.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════
  //  LEADERSHIP
  // ════════════════════════════════════════════════════════════
  {
    id: 'leadership',
    title: 'Leadership',
    subtitle: 'The Noble Arts',
    icon: '👑',
    colorVar: 'gold',
    themeClass: 'gold',
    description:
      'Rise from lone warrior to leader of guilds. Master communication, mentorship, and the art of steering engineering teams through complex quests.',

    categories: [
      {
        id: 'communication',
        title: 'Technical Communication',
        icon: '📢',
        description: 'Speak clearly, write well, influence without authority.',
        skills: [
          {
            id: 'technical-writing',
            title: 'Technical Writing',
            description: 'Clear documentation, RFCs, ADRs, postmortems, design docs.',
            completed: false,
            xp: 100,
            resources: [
              { title: 'Google Technical Writing Course', url: 'https://developers.google.com/tech-writing', type: 'course' },
            ],
            notes: '',
          },
          {
            id: 'presentations',
            title: 'Technical Presentations',
            description: 'Presenting complex ideas to technical and non-technical audiences.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
          {
            id: 'async-communication',
            title: 'Async Communication',
            description: 'Effective PR descriptions, Slack messages, email threading, status updates.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
          {
            id: 'difficult-conversations',
            title: 'Difficult Conversations',
            description: 'Delivering hard feedback, disagreeing constructively, escalating safely.',
            completed: false,
            xp: 150,
            resources: [],
            notes: '',
          },
        ],
      },

      {
        id: 'code-review',
        title: 'Code Review Culture',
        icon: '🔍',
        description: 'Elevate the craft of the entire guild through thoughtful review.',
        skills: [
          {
            id: 'giving-reviews',
            title: 'Giving Effective Reviews',
            description: 'Constructive, kind, thorough reviews that teach rather than criticize.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
          {
            id: 'receiving-reviews',
            title: 'Receiving Reviews Gracefully',
            description: 'Separating ego from code, implementing feedback constructively.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
          {
            id: 'code-standards',
            title: 'Defining Code Standards',
            description: 'Creating team coding guidelines, linting configs, style guides.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
        ],
      },

      {
        id: 'technical-leadership',
        title: 'Technical Leadership',
        icon: '🗺️',
        description: 'Chart the course for your engineering guild.',
        skills: [
          {
            id: 'rfc-writing',
            title: 'RFC / Design Docs',
            description: 'Writing proposals that drive technical decisions with stakeholder buy-in.',
            completed: false,
            xp: 150,
            resources: [],
            notes: '',
          },
          {
            id: 'adr',
            title: 'Architecture Decision Records',
            description: 'Documenting architectural decisions and their rationale for future readers.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
          {
            id: 'tech-debt',
            title: 'Tech Debt Management',
            description: 'Identifying, prioritizing, and systematically reducing technical debt.',
            completed: false,
            xp: 150,
            resources: [],
            notes: '',
          },
          {
            id: 'estimation',
            title: 'Technical Estimation',
            description: 'Breaking down work, estimating complexity, communicating uncertainty well.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
          {
            id: 'incident-management',
            title: 'Incident Management',
            description: 'On-call culture, incident response, blameless postmortems.',
            completed: false,
            xp: 150,
            resources: [],
            notes: '',
          },
        ],
      },

      {
        id: 'mentoring',
        title: 'Mentoring & Teaching',
        icon: '🎓',
        description: 'Pass down the ancient knowledge to the next generation of knights.',
        skills: [
          {
            id: 'pair-programming',
            title: 'Pair Programming',
            description: 'Driver/navigator, knowledge transfer, when to pair and when not to.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
          {
            id: 'knowledge-sharing',
            title: 'Knowledge Sharing',
            description: 'Tech talks, brown bags, internal wikis, documentation-first culture.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
          {
            id: 'onboarding',
            title: 'Onboarding Engineers',
            description: 'Creating effective onboarding experiences; being a multiplier.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
        ],
      },

      {
        id: 'agile-practices',
        title: 'Agile & Process',
        icon: '🔄',
        description: 'The disciplined rhythm of the engineering guild.',
        skills: [
          {
            id: 'scrum-kanban',
            title: 'Scrum & Kanban',
            description: 'Sprint planning, retrospectives, WIP limits, cycle time.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
          {
            id: 'stakeholder-management',
            title: 'Stakeholder Management',
            description: 'Managing expectations, communicating delays, feature negotiation.',
            completed: false,
            xp: 150,
            resources: [],
            notes: '',
          },
          {
            id: 'project-scoping',
            title: 'Project Scoping & Breakdown',
            description: 'Decomposing projects into milestones, epics, and actionable tasks.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════
  //  FULL STACK
  // ════════════════════════════════════════════════════════════
  {
    id: 'fullstack',
    title: 'Full Stack',
    subtitle: 'The Crafts of Creation',
    icon: '⚔️',
    colorVar: 'forest',
    themeClass: 'green',
    description:
      'Command all layers of the digital realm — from glittering frontends to iron-clad backends and the vast cloud kingdoms above.',

    categories: [
      {
        id: 'frontend',
        title: 'Frontend',
        icon: '🎨',
        description: 'Craft beautiful, performant, accessible interfaces for the people.',
        skills: [
          {
            id: 'react-advanced',
            title: 'React (Advanced)',
            description: 'Context, custom hooks, performance patterns, concurrent features, Server Components.',
            completed: false,
            xp: 150,
            resources: [
              { title: 'React Docs (New)', url: 'https://react.dev', type: 'docs' },
            ],
            notes: '',
          },
          {
            id: 'state-management',
            title: 'State Management',
            description: 'Redux Toolkit, Zustand, React Query — server state vs client state.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
          {
            id: 'web-performance',
            title: 'Web Performance',
            description: 'Core Web Vitals, code splitting, lazy loading, bundle analysis.',
            completed: false,
            xp: 150,
            resources: [
              { title: 'web.dev — Performance', url: 'https://web.dev/performance/', type: 'article' },
            ],
            notes: '',
          },
          {
            id: 'accessibility',
            title: 'Accessibility (a11y)',
            description: 'WCAG 2.1, ARIA, semantic HTML, keyboard navigation, screen readers.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
          {
            id: 'frontend-testing',
            title: 'Frontend Testing',
            description: 'Vitest, React Testing Library, Playwright E2E, visual regression.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
          {
            id: 'css-mastery',
            title: 'CSS Mastery',
            description: 'Grid, Flexbox, custom properties, animations, CSS architecture (BEM/modules).',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
          {
            id: 'typescript',
            title: 'TypeScript (Advanced)',
            description: 'Generics, conditional types, mapped types, utility types, strict mode.',
            completed: false,
            xp: 150,
            resources: [
              { title: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/handbook/', type: 'docs' },
            ],
            notes: '',
          },
        ],
      },

      {
        id: 'backend',
        title: 'Backend',
        icon: '⚙️',
        description: 'Build the iron foundations that power the entire realm.',
        skills: [
          {
            id: 'node-advanced',
            title: 'Node.js (Advanced)',
            description: 'Event loop deep-dive, streams, worker threads, clustering, libuv.',
            completed: false,
            xp: 150,
            resources: [],
            notes: '',
          },
          {
            id: 'database-design',
            title: 'Database Design',
            description: 'Relational modeling, normalization, indexing strategy, query optimization.',
            completed: false,
            xp: 150,
            resources: [],
            notes: '',
          },
          {
            id: 'security',
            title: 'Security Best Practices',
            description: 'OWASP Top 10, JWT, OAuth 2.0, RBAC, SQL injection, XSS prevention.',
            completed: false,
            xp: 150,
            resources: [
              { title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/', type: 'article' },
            ],
            notes: '',
          },
          {
            id: 'microservices',
            title: 'Microservices Architecture',
            description: 'Service decomposition, inter-service communication, distributed tracing.',
            completed: false,
            xp: 200,
            resources: [],
            notes: '',
          },
          {
            id: 'backend-testing',
            title: 'Backend Testing',
            description: 'Unit tests, integration tests, contract testing, test pyramid.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
          {
            id: 'observability',
            title: 'Observability',
            description: 'The three pillars: logging (structured), metrics (Prometheus), tracing (OpenTelemetry).',
            completed: false,
            xp: 150,
            resources: [],
            notes: '',
          },
        ],
      },

      {
        id: 'cloud',
        title: 'Cloud & DevOps',
        icon: '☁️',
        description: 'Rule the skies — cloud mastery and automation at scale.',
        skills: [
          {
            id: 'aws-fundamentals',
            title: 'AWS Fundamentals',
            description: 'EC2, S3, RDS, Lambda, VPC, IAM, CloudWatch — the core services.',
            completed: false,
            xp: 150,
            resources: [
              { title: 'AWS Documentation', url: 'https://docs.aws.amazon.com/', type: 'docs' },
            ],
            notes: '',
          },
          {
            id: 'docker',
            title: 'Docker & Containers',
            description: 'Dockerfile best practices, multi-stage builds, Docker Compose, image optimization.',
            completed: false,
            xp: 100,
            resources: [],
            notes: '',
          },
          {
            id: 'kubernetes',
            title: 'Kubernetes',
            description: 'Pods, deployments, services, ingress, ConfigMaps, Helm charts.',
            completed: false,
            xp: 200,
            resources: [],
            notes: '',
          },
          {
            id: 'cicd',
            title: 'CI/CD Pipelines',
            description: 'GitHub Actions, automated testing gates, deployment strategies (blue/green, canary).',
            completed: false,
            xp: 150,
            resources: [],
            notes: '',
          },
          {
            id: 'iac',
            title: 'Infrastructure as Code',
            description: 'Terraform, CloudFormation — managing infra programmatically.',
            completed: false,
            xp: 150,
            resources: [],
            notes: '',
          },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════
  //  LEGENDARY PROJECTS
  // ════════════════════════════════════════════════════════════
  {
    id: 'legendary-projects',
    title: 'Legendary Works',
    subtitle: 'The Great Deeds',
    icon: '🏆',
    colorVar: 'ember',
    themeClass: 'red',
    description:
      'The chronicles of great works undertaken. Each project is a battle won — a skill forged in the fires of real-world challenges, not just theory.',

    categories: [
      {
        id: 'personal-quests',
        title: 'Personal Quests',
        icon: '🗡️',
        description: 'Projects born from personal passion and curiosity.',
        skills: [
          {
            id: 'road-to-senior-site',
            title: 'Road to Senior — This Site',
            description: 'A medieval RPG skill tracker documenting the journey to senior engineer. Built with React + Vite.',
            completed: true,
            xp: 500,
            resources: [
              { title: 'GitHub Repository', url: 'https://github.com/yourusername/RoadToSenior', type: 'github' },
            ],
            notes: 'Built with React, Vite, CSS custom properties. Deployed to GitHub Pages.',
          },
        ],
      },

      {
        id: 'guild-commissions',
        title: 'Guild Commissions',
        icon: '🏰',
        description: 'Projects built for professional engagements and clients.',
        skills: [
          // Add your professional projects here
        ],
      },

      {
        id: 'open-source',
        title: 'Open Source Contributions',
        icon: '🌍',
        description: 'Contributions to the shared treasury of knowledge.',
        skills: [
          // Add your open source contributions here
        ],
      },
    ],
  },
]
