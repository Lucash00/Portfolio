// src/data/projects.ts
const devOpsTemplateMediaFolder = "/DevOpsTemplate";
const utschMediaFolder = "/Utsch";
const cubocMediaFolder = "/Cuboc";
const indekMediaFolder = "/IndeK";
const tourismWithStyleMediaFolder = "/TourismWithStyle";
const russellsMediaFolder = "/Russells";
const iceEditorialMediaFolder = "/ICEditorial";
const bafreMediaFolder = "/BafreMedia";
const la11milMediaFolder = "/la11mil";
const rotaPlaceMediaFolder = "/RotaPlace";
const moviesDetailsMediaFolder = "/MoviesDetails";
const BookingApiMediaFolder = "/BookingApi";


import type { Project } from "../types";

export const projectsEn: Project[] = [
  {
    slug: "DevOps-Template-GCP",
    title: "DevOps Template GCP",
    titleJob: "Enterprise DevOps and Infrastructure as Code template on GCP",
    briefDescription: "Design and development of a <strong>reusable enterprise DevOps template</strong> with <strong>Terraform</strong> and <strong>Google Cloud Platform</strong>, automating <strong>fullstack</strong> multi-environment deployments (Preview, Staging, Production) with <strong>CI/CD</strong>, <strong>Cloud Run</strong> and <strong>Cloudflare</strong>.",
    description: `During my time at <strong>Databay Solutions</strong>, I designed and developed the cornerstone of the company's cloud infrastructure: a <strong>reusable DevOps template</strong> based on <strong>Infrastructure as Code (Terraform)</strong> to deploy fullstack applications on <strong>GCP</strong> in an automated, secure and scalable manner.

<strong>Core architecture:</strong>
      <ul>
      <li><strong>Modular Terraform:</strong> Modules for Artifact Registry, Cloud Run, GCS (static frontend), Cloudflare DNS/Workers and IAM with least privilege principle.</li>
      <li><strong>Trimodal frontend:</strong> Static hosting on GCS, SSR on Cloud Run or hybrid architecture with intelligent routing.</li>
      <li><strong>Backend and microservices:</strong> Cloud Run with auto-scaling, health checks and fault isolation.</li>
      <li><strong>Cloudflare:</strong> Workers for routing, dynamic DNS, SSL/TLS and global CDN.</li>
      <li><strong>CI/CD:</strong> GitHub Actions (build, deploy, detect-changes, Terraform validation, gradual rollout 10% → 50% → 100%).</li>
      </ul>

<strong>Impact:</strong> ~90% reduction in deployment time, zero-downtime deployments, versioned infrastructure and technical documentation for adoption across all client projects.

_Internal Databay Solutions repository — not publicly available as proprietary code._`,
    objective: "Create a <strong>reusable, automated and secure</strong> infrastructure foundation that standardizes GCP deployments for all company projects, reducing manual errors and time-to-market for new clients.",
    startDate: "Ago 2025",
    endDate: "May 2026",
    tags: [
      "Terraform",
      "GCP",
      "Cloud Run",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Cloudflare",
      "Infrastructure as Code",
      "Artifact Registry",
      "Cloud Storage",
      "DevOps"
    ],
    logo: `${devOpsTemplateMediaFolder}/logo.png`,
    media: [
      `${devOpsTemplateMediaFolder}/1.png`
    ],
    company: "Databay Solutions"
  },
  {
    slug: "UTSCH",
    title: "UTSCH",
    titleJob: "Digital platform for personalized license plates",
    briefDescription: "<strong>Fullstack</strong> development and production deployment of <strong>UTSCH España</strong> platform for license plate management and sales, with <strong>DGT</strong> integration, <strong>Kount</strong> anti-fraud and automated <strong>GCP</strong> infrastructure.",
    description: `Complete development and deployment of the digital platform for <strong>UTSCH España</strong> for the management and sale of personalized license plates, using the internal DevOps template (<strong>Terraform + GCP</strong>).

<strong>Main responsibilities:</strong>
      <ul>
      <li><strong>DevOps:</strong> Preview, Staging and Production environments; CI/CD with GitHub Actions; Cloud Run and Cloud Storage; DNS and routing with Cloudflare Workers.</li>
      <li><strong>Frontend:</strong> React and Vue.js.</li>
      <li><strong>Backend:</strong> Prisma ORM with PostgreSQL; REST API; administration panel.</li>
      <li><strong>Critical integrations:</strong> Official <strong>DGT</strong> API (real-time validations), <strong>Kount</strong> (anti-fraud and scoring), third-party APIs and secure payment system.</li>
      </ul>

_Platform in stable production with automatic scalability and zero-downtime deployments._`,
    objective: "Deliver a <strong>scalable, secure and production-ready</strong> platform for digital license plate sales, with official integrations (DGT) and robust anti-fraud controls.",
    startDate: "Ago 2025",
    endDate: "May 2026",
    tags: [
      "React",
      "Vue.js",
      "Prisma",
      "PostgreSQL",
      "Terraform",
      "GCP",
      "Cloud Run",
      "GitHub Actions",
      "Cloudflare",
      "Kount",
      "API REST",
      "DGT API"
    ],
    logo: `${utschMediaFolder}/logo.png`,
    media: [
      `${utschMediaFolder}/1.png`,
      `${utschMediaFolder}/2.png`,
      `${utschMediaFolder}/3.png`
    ],
    links: {
      website: "https://utsch.es/"
    },
    team: {
      contributors: [
        { name: "Lucas Moreno", role: "Desarrollador Fullstack & DevOps" }
      ]
    },
    developmentProcess: {
      methodology: "Agile",
      timeline: "Ago 2025 - May 2026"
    },
    company: "Databay Solutions"
  },
  {
    slug: "Cuboc",
    title: "Cuboc",
    titleJob: "Internal work application — Soluble Studio",
    briefDescription: "<strong>Fullstack</strong> development of <strong>Cuboc</strong>, private application for <strong>Soluble Studio</strong> for internal team work, with <strong>Next.js</strong>, <strong>Vue.js</strong>, <strong>Kount</strong> and <strong>Open Graph</strong>.",
    description: `Fullstack development of <strong>Cuboc</strong>, private web application for <strong><a href="https://solublestudio.com" target="_blank" rel="noopener noreferrer">Soluble Studio</a></strong>: exclusive tool for the studio team to manage their daily operations (internal projects, processes and resources).

Not a public product or client-facing; it's the studio's own digital work environment, with restricted access to authorized personnel only.

<strong>Main stack:</strong>
      <ul>
      <li><strong>JavaScript:</strong> Next.js (SSR/SSG) and Vue.js in specific modules and components.</li>
      <li><strong>Security:</strong> Kount integration for fraud prevention and secure operations.</li>
      <li><strong>UI and social presence:</strong> Open Graph for sharing and social media metadata.</li>
      <li><strong>DevOps:</strong> GCP infrastructure (dev/staging) and production deployment with automated CI/CD.</li>
      </ul>`,
    objective: "Deliver a <strong>secure and maintainable</strong> internal application that allows Soluble Studio to centralize their daily operations, with frontend best practices and security controls.",
    startDate: "Ago 2025",
    endDate: "May 2026",
    tags: [
      "Next.js",
      "Vue.js",
      "JavaScript",
      "Kount",
      "Open Graph",
      "SSR",
      "DevOps",
      "GCP"
    ],
    logo: `${cubocMediaFolder}/logo.png`,
    media: [
      `${cubocMediaFolder}/1.png`,
      `${cubocMediaFolder}/2.png`,
      `${cubocMediaFolder}/3.png`,
      `${cubocMediaFolder}/4.png`
    ],
    links: {
      website: "https://solublestudio.com"
    },
    team: {
      contributors: [
        { name: "Lucas Moreno", role: "Desarrollador Fullstack & DevOps" }
      ],
      externalCollaborators: [
        { name: "Soluble Studio", role: "Cliente" }
      ]
    },
    developmentProcess: {
      methodology: "Agile",
      timeline: "Ago 2025 - May 2026"
    },
    company: "Databay Solutions"
  },
  {
    slug: "INDEK-API",
    title: "INDEK API",
    titleJob: "Internal business management and data processing API",
    briefDescription: "Internal <strong>REST</strong> API for <strong>INDE-K</strong> with advanced <strong>Excel</strong> processing, analysis with <strong>Pandas</strong>, <strong>Redis</strong> cache and deployment on <strong>Cloud Run</strong> over <strong>GCP</strong>.",
    description: `Development of internal REST API for <strong>INDE-K</strong> focused on spreadsheet processing and automation of internal control processes, reports and complex data.

<strong>Key features:</strong>
      <ul>
      <li><strong>Excel processing:</strong> Import/export, validation, transformations and automated report generation.</li>
      <li><strong>Backend:</strong> Node.js/Express and Python/FastAPI; asynchronous queues for large files.</li>
      <li><strong>Infrastructure:</strong> Terraform, Cloud Run, Cloud Storage, Redis, Secrets Manager and Cloud Monitoring.</li>
      <li><strong>Security:</strong> JWT authentication, role-based access control and complete operation auditing.</li>
      </ul>

_Private internal system — code and links cannot be shown due to data protection._`,
    objective: "Automate manual business processes through a <strong>robust, scalable and auditable</strong> API for efficient Excel data processing.",
    startDate: "Ago 2025",
    endDate: "May 2026",
    tags: [
      "Node.js",
      "Express",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Pandas",
      "Terraform",
      "GCP",
      "Cloud Run",
      "GitHub Actions",
      "JWT"
    ],
    logo: `${indekMediaFolder}/logo.png`,
    media: [
      `${indekMediaFolder}/1.png`,
      `${indekMediaFolder}/2.png`,
      `${indekMediaFolder}/3.png`,
      `${indekMediaFolder}/4.png`,
      `${indekMediaFolder}/5.png`
    ],
    links: {
      website: "https://inde-k.com/"
    },
    team: {
      contributors: [
        { name: "Lucas Moreno", role: "Desarrollador Backend & DevOps" }
      ]
    },
    developmentProcess: {
      methodology: "Agile",
      timeline: "Ago 2025 - May 2026"
    },
    company: "Databay Solutions"
  },
  {
    slug: "Tourism-With-Style",
    title: "Tourism With Style",
    titleJob: "Odoo 19 ERP implementation for luxury tourism agency",
    briefDescription: "Complete implementation of <strong>Odoo 19</strong> for tourism agency: consulting, <strong>custom modules</strong>, accounting with <strong>Verifactu (AEAT)</strong>, data migration and client training.",
    description: `End-to-end project implementing <strong>Odoo 19 ERP</strong> for <strong>Tourism With Style</strong>, luxury tourism agency, from requirements analysis to production deployment.

<strong>Implemented and customized modules:</strong>
      <ul>
      <li><strong>Sales and Purchases:</strong> Tourism packages, quotations, hotel suppliers and margin control.</li>
      <li><strong>CRM and Contacts:</strong> B2B/B2C segmentation, leads, travel history and loyalty.</li>
      <li><strong>Inventory:</strong> Service availability, quotas and temporary reservations.</li>
      <li><strong>Accounting:</strong> Spanish chart of accounts, automated invoicing and <strong>Verifactu (AEAT)</strong> integration with automatic submission and traceability.</li>
      </ul>

<strong>Technical development:</strong> 6+ custom modules in Python, XML/QWeb views, AEAT client API, automations, reports and migration from legacy system.

_Estimated 80% reduction in manual process time._`,
    objective: "Digitize and automate agency operations with an <strong>ERP adapted to the tourism business</strong>, complying with Spanish tax regulations (Verifactu) and training the client team.",
    startDate: "Ago 2025",
    endDate: "May 2026",
    tags: [
      "Odoo 19",
      "Python",
      "PostgreSQL",
      "XML",
      "QWeb",
      "Verifactu",
      "Docker",
      "Nginx",
      "ERP",
      "Consultoría"
    ],
    logo: `${tourismWithStyleMediaFolder}/logo.png`,
    media: [
      `${tourismWithStyleMediaFolder}/1.png`,
      `${tourismWithStyleMediaFolder}/2.png`,
      `${tourismWithStyleMediaFolder}/3.png`,
      `${tourismWithStyleMediaFolder}/4.png`
    ],
    links: {
      website: "https://www.tourismwithstyle.com/"
    },
    team: {
      contributors: [
        { name: "Lucas Moreno", role: "Consultor Odoo & Desarrollador de Módulos" }
      ]
    },
    developmentProcess: {
      methodology: "Agile",
      timeline: "Ago 2025 - May 2026"
    },
    company: "Databay Solutions"
  },
  {
    slug: "Russells",
    title: "Russells",
    titleJob: "Odoo 19 ERP for multi-vendor gourmet marketplace",
    briefDescription: "Implementation of <strong>Odoo 19</strong> as ERP for gourmet <strong>marketplace</strong>: custom vendor module, <strong>automated commissions</strong>, multi-vendor orders and accounting adapted to marketplace model.",
    description: `Complete implementation of <strong>Odoo 19</strong> for <strong>Russells</strong>, gourmet food and snacks marketplace, with specific multi-vendor logic.

<strong>Custom module — Marketplace Management:</strong>
      <ul>
      <li><strong>Vendor dashboard:</strong> Autonomous panel for products, sales and commissions.</li>
      <li><strong>Automated commissions:</strong> Configurable engine by category, volume and settlements.</li>
      <li><strong>Multi-vendor orders:</strong> Automatic split, notifications and tracking per sub-order.</li>
      <li><strong>Accounting:</strong> Commission invoicing, vendor payments and per-vendor reports.</li>
      </ul>

<strong>Consulting:</strong> Marketplace model analysis, team training and tax parameterization for food products.

_~70% reduction in administrative management time._`,
    objective: "Operate a gourmet marketplace with <strong>transparent commissions</strong>, vendor autonomy and scalability to onboard new partners without operational friction.",
    startDate: "Ago 2025",
    endDate: "May 2026",
    tags: [
      "Odoo 19",
      "Python",
      "PostgreSQL",
      "XML",
      "QWeb",
      "Marketplace",
      "ERP",
      "Docker",
      "Nginx",
      "Consultoría"
    ],
    logo: `${russellsMediaFolder}/logo.png`,
    media: [
      `${russellsMediaFolder}/1.png`,
      `${russellsMediaFolder}/2.png`,
      `${russellsMediaFolder}/3.png`,
      `${russellsMediaFolder}/4.png`,
      `${russellsMediaFolder}/5.png`
    ],
    links: {
      website: "https://www.russells.es/"
    },
    team: {
      contributors: [
        { name: "Lucas Moreno", role: "Consultor Odoo & Desarrollador de Módulos" }
      ]
    },
    developmentProcess: {
      methodology: "Agile",
      timeline: "Ago 2025 - May 2026"
    },
    company: "Databay Solutions"
  },
  {
    slug: "ICEditorial",
    title: "ICEditorial",
    titleJob: "PrestaShop 9, migration and custom integrations",
    briefDescription: "Development of the store in <strong>PrestaShop</strong>, migration to <strong>PrestaShop 9</strong>, <strong>bulk import</strong> of customers and products, and custom Databay Solutions modules (orders, address validation and catalog sync).",
    description: `Development and evolution of the <strong>ICEditorial online editorial store</strong> in PrestaShop: building the page in the new stack, <strong>migration from legacy PrestaShop to PrestaShop 9</strong>, <strong>bulk import of customers and products</strong>, and integration with external APIs through custom modules.

<strong>PrestaShop and migration:</strong>
      <ul>
      <li>Store development, theme, payments, shipping and SEO (301 redirects).</li>
      <li>Complete data migration: catalog, customers and historical orders.</li>
      <li>Bulk import of customers and products to PrestaShop 9 environment.</li>
      </ul>

<strong>Custom modules (Databay Solutions):</strong>
      <ul>
      <li><strong>Iceditorial API Pedidos v3.0.0:</strong> send order data to external API in real-time (hooks, retries, logs and backoffice).</li>
      <li><strong>IC Validador de direcciones v1.0.1:</strong> address validation at checkout via IC Grupo API (<code>POST /validate</code>).</li>
      <li><strong>ICEditorial API Sync v1.2.1:</strong> product synchronization with Innovación y Cualificación API (batch cron, incremental, ~10x faster on large catalogs).</li>
      </ul>

<strong>Infrastructure:</strong> Linux, Nginx, SSL/TLS, optimized MySQL, backups and cache.`,
    objective: "Modernize the store to <strong>PrestaShop 9</strong> without data loss, automate catalog and orders with reliable modules, and improve checkout with integrated <strong>address validation</strong>.",
    startDate: "Ago 2025",
    endDate: "May 2026",
    tags: [
      "PrestaShop 9",
      "PHP",
      "MySQL",
      "API REST",
      "Módulos custom",
      "Importación masiva",
      "Cron Jobs",
      "E-commerce",
      "Nginx",
      "Docker"
    ],
    logo: `${iceEditorialMediaFolder}/logo.png`,
    media: [
      `${iceEditorialMediaFolder}/1.png`,
      `${iceEditorialMediaFolder}/2.png`,
      `${iceEditorialMediaFolder}/3.png`,
      `${iceEditorialMediaFolder}/4.png`,
      `${iceEditorialMediaFolder}/5.png`,
      `${iceEditorialMediaFolder}/6.png`,
      `${iceEditorialMediaFolder}/7.png`,
      `${iceEditorialMediaFolder}/8.png`,
      `${iceEditorialMediaFolder}/9.png`
    ],
    links: {
      website: "https://nuevo.iceditorial.com/"
    },
    team: {
      contributors: [
        { name: "Lucas Moreno", role: "Desarrollador Backend & Especialista PrestaShop" }
      ]
    },
    developmentProcess: {
      methodology: "Agile",
      timeline: "Ago 2025 - May 2026"
    },
    company: "Databay Solutions"
  },
  {
    slug: "BookingApi",
    title: "BookingApi",
    titleJob: "RESTful API for booking management",
    briefDescription: "BookingAPI is a <strong>RESTful API</strong> developed with <strong>Spring Boot</strong> that allows complete management of <strong>users, roles, bookings, rooms, reviews and payments</strong> in a hotel system. The API includes <strong>security</strong>, <strong>authentication</strong> and <strong>authorization</strong> with JWT.",
    description: "BookingAPI is a <strong>RESTful API</strong> developed with <strong>Spring Boot</strong> that allows complete management of <strong>users, roles, bookings, rooms, reviews and payments</strong> in a hotel system. Through <strong>JWT</strong>, secure user <strong>authentication</strong> and <strong>authorization</strong> is guaranteed, enabling operations on bookings, rooms and reviews. The API includes a <strong>role system</strong> to control access to functionalities. Additionally, <strong>Swagger</strong> has been integrated for interactive API documentation, facilitating interaction with the endpoints.",
    objective: "Develop a RESTful API to manage room bookings, users, and roles in a hotel booking system, implementing authentication and authorization with JWT and providing interactive documentation with Swagger.",
    startDate: "Mar 2025",
    endDate: "Abr 2025",
    tags: ["API RESTful", "Java", "Spring Boot", "Spring Security", "Spring Data JPA", "BCrypt", "Jakarta", "JWT", "Swagger"],
    logo: `${BookingApiMediaFolder}/logo.png`,
    media: [
      `${BookingApiMediaFolder}/1.png`,
      `${BookingApiMediaFolder}/2.png`
    ],
    links: {
      codeRepository: "https://github.com/Lucash00/Bookingapi.git"
    },
    team: {
      contributors: [
        { "name": "Lucas Moreno", "role": "Desarrollador Principal" }
      ]
    },
    developmentProcess: {
      methodology: "Agile",
      timeline: "Mar 2025 - Abr 2025"
    }
  },
  {
    slug: "Bafre-iOS",
    title: "Bafre iOS",
    titleJob: "Bafre iOS Application Migration",
    briefDescription: "<strong>Migration</strong> and modernization of the <strong>iOS</strong> application for a renowned international real estate company, <strong>Bafre</strong>, using <strong>SwiftUI</strong>, improving functionality, user experience, and optimizing workflow through <strong>CI/CD</strong>.",
    description: `During my time at <strong>ControlNet</strong>, I led and developed the <strong>migration</strong> of an <strong>iOS</strong> application for <strong>Bafre</strong>, a renowned international real estate company. The original application had obsolete 10-year-old code and needed to be <strong>updated</strong> to <strong>improve its performance</strong> and <strong>functionality</strong>.
  
  Through reverse engineering we understood the obsolete code and the <strong>Android</strong> version. In a period of <strong>2 months</strong>, we achieved a successful migration to <strong>SwiftUI</strong>. This project included the integration of new technologies and the <strong>optimization of Bafre's API</strong>, resulting in a more modern and efficient application.
  
  The development workflow was optimized through the implementation of <strong>CI/CD</strong>, which enabled more efficient continuous integration and delivery and better version management in production.
  
  The Bafre iOS application, developed for a leading real estate company, offers a series of functionalities designed to improve <strong>user experience</strong>:
      <ul>
      <li><strong>Catalog</strong>: Advanced filtering and property search system.</li>
      <li><strong>Clients</strong>: User management, including suppliers and buyers.</li>
      <li><strong>Advisors</strong>: Tools for real estate advisors, enabling advice via chat, calls and emails.</li>
      <li><strong>Agenda</strong>: Exclusive agenda for advisors, facilitating appointment and meeting tracking.</li>
      <li><strong>Auth</strong>: Authentication and authorization system, including secure login and session management.</li>
      <li><strong>Chats</strong>: Real-time communication between clients and advisors, implemented with Firebase and Bafre's API.</li>
      <li><strong>Inmomatch</strong>: Client-property matching algorithm based on their preferences, optimizing advisory management.</li>
      <li><strong>Properties</strong>: Property details, including appointments, location, images and 360º virtual tours.</li>
      <li><strong>SideMenu</strong>: Collapsible side menu for intuitive navigation.</li>
      <li><strong>Location</strong>: Integration with Apple Maps and Google Maps to show property locations.</li>
      <li><strong>VR</strong>: Virtual reality property visualization through 360º images.</li>
      </ul>`,
    objective: "Complete Application Migration. Update and modernize the Bafre iOS application to <strong>improve its performance</strong>, <strong>security</strong> and <strong>user experience</strong>, using current technologies and <strong>facilitating future maintenance</strong> through <strong>CI/CD</strong>.",
    startDate: "Sept 2023",
    endDate: "Dec 2023",
    tags: [
      "Swift",
      "SwiftUI",
      "Xcode",
      "Firebase",
      "CocoaPods",
      "API Integration",
      "Mobile Development",
      "CI/CD"
    ],
    logo: bafreMediaFolder + "/logo.png",
    media: [
      bafreMediaFolder + "/1.png",
      bafreMediaFolder + "/2.png",
      bafreMediaFolder + "/3.png",
      bafreMediaFolder + "/4.png",
      bafreMediaFolder + "/5.png",
      bafreMediaFolder + "/6.png",
      bafreMediaFolder + "/7.png",
      bafreMediaFolder + "/8.png",
      bafreMediaFolder + "/9.png",
      bafreMediaFolder + "/10.png"
    ],
    links: {
      website: "https://apps.apple.com/app/bafre-inmobiliaria/id6496130033?platform=iphone",
    },
    team: {
      contributors: [
        { name: "Lucas Moreno", role: "Desarrollador Fullstack Líder" },
        { name: "Victor Lillo Godoy", role: "Desarrollador Fullstack" }
      ],
      externalCollaborators: [
        { name: "Colaborador de Bafre", role: "Cliente" }
      ]
    },
    developmentProcess: {
      methodology: "Agile",
      timeline: "Jan 2022 - Dec 2022"
    },
    company: "ControlNet SL"
  },
  {
    slug: "La-11mil-WordPress",
    title: "La 11mil WordPress",
    titleJob: "Improvement and optimization of La 11mil website",
    briefDescription: "Improvement of the <strong>functionality</strong> and <strong>security</strong> of the <strong>La 11mil</strong> website, including <strong>malware cleaning</strong>, performance <strong>optimization</strong> and improvements in the <strong>logic</strong> of various sections.",
    description: `In this project, I was responsible for improving various aspects of the <strong>La 11mil</strong> website, developed in <strong>WordPress</strong>.

During my intervention, I made changes to the <strong>functional logic</strong> of different sections of the page to improve <strong>user experience</strong>, as well as optimizing media implementation (images, videos, etc.) to <strong>reduce loading times</strong> and improve <strong>accessibility</strong>.

After identifying that the page was compromised due to the presence of <strong>malware</strong>, I proceeded to perform an <strong>exhaustive cleaning</strong> to remove viruses and <strong>secure the system</strong>. This allowed reactivation of the DNS, which had previously been blocked due to the infection.

Subsequently, I reinforced the site's <strong>security measures</strong>, implementing best practices to <strong>prevent future attacks</strong>, and put the page back into production with <strong>improved performance</strong> and <strong>no security risks</strong>.`,
    objective: "<strong>Optimize</strong> website performance, improve <strong>security</strong> by removing malware and securing the site for continuous operation, and make adjustments to the functional logic to <strong>improve user experience</strong>.",
    startDate:"Oct 2023",
    endDate:"Oct 2023",
    tags: [
      "WordPress",
      "Seguridad Web",
      "Optimización de Rendimiento",
      "Limpieza de Malwares",
      "PHP",
      "DNS"
    ],
    logo: `${la11milMediaFolder}/logo.png`, 
    media: [
      `${la11milMediaFolder}/1.png`,
      `${la11milMediaFolder}/2.png`,
      `${la11milMediaFolder}/3.png`,
      `${la11milMediaFolder}/4.png`,
      `${la11milMediaFolder}/5.png`,
      `${la11milMediaFolder}/6.png`
    ],
    links: {
      website: "https://la11mil.es/",

    },
    team: {
      contributors: [
        { name: "Lucas Moreno", role: "Desarrollador Fullstack" },
        { name: "Victor Lillo Godoy", role: "Desarrollador Fullstack" }
      ]
    },
    developmentProcess: {
      methodology: "Agile",
      timeline: "Oct 2023 - Oct 2023"
    },
    company: "ControlNet SL"
  },
  {
    slug: "CRM-ASP.NET",
    title: "CRM ASP.NET",
    titleJob: "Contribution to functionality problem solving in CRM using",
    briefDescription: "Contribution to the <strong>bug fixing</strong> and <strong>functionality improvement</strong> of a production CRM using <strong>ASP.NET</strong>, with the objective of ensuring its problem-free operation.",
    description: `In this project, I participated in several <strong>functionality problem corrections</strong> in a CRM built in <strong>ASP.NET</strong> that had been in production for years.

Although the system was mostly working correctly, some key functionalities had errors that affected <strong>user experience</strong> and <strong>operational efficiency</strong>.

My work consisted of analyzing the system to <strong>identify errors</strong> and resolve them so that the CRM remained fully functional. We worked on <strong>bug fixing</strong>, improving <strong>business logic</strong> and <strong>optimizing</strong> certain <strong>internal system processes</strong> to ensure its <strong>stability</strong> and continuity in production.

_Code and Link cannot be shown due to Data Protection_`,
    objective: "Correct functionality errors present in the CRM, ensuring its <strong>stability</strong> and <strong>efficiency</strong> so it continues operating without interruptions.",
    startDate:"Sep 2023",
    endDate:"Oct 2023",
    tags: [
      "CRM",
      "PHP",
      "MySQL",
      "Debugging",
      "Mantenimiento de Software",
      "Optimización",
      "Corrección de Errores",
      "AWS"
    ],
    logo: "/CRM/logo.png",
    team: {
      contributors: [
        { name: "Lucas Moreno", role: "Desarrollador Fullstack" }
      ] 
    },
    developmentProcess: {
      methodology: "Agile", 
      timeline: "Sep 2023 - Oct 2023"
    },
    company: "ControlNet SL"
  },  
  {
    slug: "MoviesDetails",
    title: "MoviesDetails",
    titleJob: "Movie Catalog",
    briefDescription: "Interactive movie catalog that updates <strong>automatically</strong>, displaying different movie sections, genres, trailers, synopsis and cast.\n\nBuilt with <strong>React</strong> and the <strong>TMDb</strong> <strong>API</strong> to obtain updated movie information.",
    description: "The <strong>MoviesDetails</strong> project is a <strong>movie catalog</strong> that <strong>automatically updates</strong> through the <strong>TMDb API</strong>. This project was built completely from scratch with <strong>React</strong> to learn the technology in a <strong>self-taught</strong> manner. Through this project, I implemented a structure that includes various sections for movies, genres, and more. Each movie has its own trailer, synopsis and cast. The <strong>TMDb API</strong> allows obtaining data continuously, ensuring that the information is always <strong>up to date</strong>. This project allowed me to apply my <strong>React</strong> knowledge and improve my understanding of how to interact with <strong>external APIs</strong>.",
    objective: "Create an <strong>interactive movie catalog</strong> with continuously updated data, using <strong>React</strong> and the <strong>TMDb API</strong> to obtain movie information, trailers, genres and more.",
    startDate:"Jan 2023",
    endDate:"Abr 2023",
    tags: ["React", "JavaScript", "API Integration", "Async/Await"],
    logo: `${moviesDetailsMediaFolder}/logo.png`, 
    media: [
      `${moviesDetailsMediaFolder}/1.png`,
      `${moviesDetailsMediaFolder}/2.png`,
      `${moviesDetailsMediaFolder}/3.png`,
      `${moviesDetailsMediaFolder}/4.png`,
      `${moviesDetailsMediaFolder}/5.png`
    ],
    links: {
      website: "https://3a32f515.moviesdetails-react.pages.dev/",
      codeRepository: "https://github.com/Lucash00/MoviesDetails_React.git"
    },
    team: {
      contributors: [
        { name: "Lucas Moreno", role: "Desarrollador Fullstack" }
      ]
    },
    developmentProcess: {
      methodology: "Agile",
      timeline: "Sep 2023 - Nov 2023"
    }
  },
  {
    slug: "RotaPlace-Backend",
    title: "RotaPlace Backend",
    titleJob: "Installation, Configuration and Optimization of NginX Server for RotaPlace.es",
    briefDescription: "<strong>Installation</strong> and <strong>performance optimization</strong> of NginX server for a <strong>marketplace</strong> called RotaPlace.es, in a <strong>Linux Server Debian</strong> environment without GUI, implementing <strong>SSL security</strong> and optimizations for better user experience.",
    description: `As a self-taught final project, I was responsible for the <strong>installation, configuration and optimization</strong> of the NginX server for the <strong>backend of RotaPlace.es</strong>, an e-commerce <strong>marketplace</strong>. The task consisted of configuring a Linux server environment (Debian without GUI), where I performed multiple essential tasks to ensure server performance and security.\n\nFirst, I optimized the server to improve performance with optimizations in <strong>pagination</strong>, <strong>downloads</strong> and file <strong>uploads</strong>, improving server efficiency under load. I implemented a <strong>cache system</strong> to improve response times and reduce unnecessary resource usage.\n\nAdditionally, I established <strong>advanced security</strong> through the use of <strong>SSL encryption</strong>, configuring server access via a <strong>public/private key</strong> for administrators using each administrator's <strong>digital certificate</strong> as a <strong>private key</strong>, thus ensuring that only authorized personnel could manage the server. I also configured user authentication and authorization, ensuring that remote access was secure and met industry standards.\n\nTo facilitate server access and improve service reliability, I performed <strong>DNS</strong> configuration and managed NginX integration with the <strong>load balancing</strong> system and <strong>IP authorization</strong> to ensure availability and traffic distribution.\n\nThis project allowed me to apply my knowledge of <strong>server security</strong>, <strong>network optimization</strong> and <strong>system administration</strong>, while ensuring maximum performance for marketplace end users.`,
    objective: "Create, Configure, Optimize, Secure and Host the <strong>NginX</strong> server for the <strong>backend</strong> of RotaPlace.es, implementing advanced security measures and improving system scalability and reliability.",
    startDate: "Jun 2023",
    endDate: "Nov 2023",
    tags: [
      "NginX",
      "Linux",
      "SSL",
      "Servidor Web",
      "Optimización de Rendimiento",
      "Seguridad de Servidores",
      "DNS",
      "Administración de Sistemas"
    ],
    logo: `${rotaPlaceMediaFolder}/logo.png`,
    team: {
      contributors: [
        { name: "Lucas Moreno", role: "Desarrollador Backend" }
      ]
    },
    developmentProcess: {
      methodology: "Agile",
      timeline: "Jun 2023 - Nov 2023"
    },
    company: "IES Castillo de Luna"
  }
];
