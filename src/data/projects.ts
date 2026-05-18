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

export interface Project {
  title: string;
  titleJob: string;
  briefDescription: string;
  description: string;
  objective: string;
  startDate: string;
  endDate: string;
  tags: string[];
  logo: string;
  media?: string[];
  links?: {
    website?: string;
    codeRepository?: string;
    downloads?: string[];
    documentation?: string;
  };
  team?: {
    contributors?: { name: string; role: string }[];
    externalCollaborators?: { name: string; role: string }[];
  };
  developmentProcess?: {
    methodology?: string;
    timeline?: string;
  };
  company?: string;
}


export const projects: Project[] = [
  {
    title: "DevOps Template GCP",
    titleJob: "Template empresarial de DevOps e Infrastructure as Code en GCP",
    briefDescription: "Diseño y desarrollo de un <strong>template empresarial reutilizable de DevOps</strong> con <strong>Terraform</strong> y <strong>Google Cloud Platform</strong>, que automatiza despliegues <strong>fullstack</strong> multi-ambiente (Preview, Staging, Production) con <strong>CI/CD</strong>, <strong>Cloud Run</strong> y <strong>Cloudflare</strong>.",
    description: `Durante mi etapa en <strong>Databay Solutions</strong>, diseñé y desarrollé la piedra angular de la infraestructura cloud de la empresa: un <strong>template DevOps reutilizable</strong> basado en <strong>Infrastructure as Code (Terraform)</strong> para desplegar aplicaciones fullstack en <strong>GCP</strong> de forma automatizada, segura y escalable.

<strong>Arquitectura principal:</strong>
      <ul>
      <li><strong>Terraform modular:</strong> Módulos para Artifact Registry, Cloud Run, GCS (frontend estático), Cloudflare DNS/Workers e IAM con principio de mínimo privilegio.</li>
      <li><strong>Frontend trimodal:</strong> Hosting estático en GCS, SSR en Cloud Run o arquitectura híbrida con routing inteligente.</li>
      <li><strong>Backend y microservicios:</strong> Cloud Run con auto-scaling, health checks y aislamiento de fallos.</li>
      <li><strong>Cloudflare:</strong> Workers para routing, DNS dinámico, SSL/TLS y CDN global.</li>
      <li><strong>CI/CD:</strong> GitHub Actions (build, deploy, detect-changes, validación Terraform, rollout gradual 10% → 50% → 100%).</li>
      </ul>

<strong>Impacto:</strong> Reducción del ~90% en tiempo de despliegue, zero-downtime deployments, infraestructura versionada y documentación técnica para adopción en todos los proyectos cliente.

_Repositorio interno de Databay Solutions — no disponible públicamente por ser código propietario._`,
    objective: "Crear una base de infraestructura <strong>reutilizable, automatizada y segura</strong> que estandarice los despliegues en GCP para todos los proyectos de la empresa, reduciendo errores manuales y el time-to-market de nuevos clientes.",
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
    company: "Databay Solutions"
  },
  {
    title: "UTSCH",
    titleJob: "Plataforma digital de matrículas personalizadas",
    briefDescription: "Desarrollo <strong>fullstack</strong> y despliegue en producción de la plataforma de <strong>UTSCH España</strong> para gestión y venta de matrículas, con integración <strong>DGT</strong>, antifraude <strong>Kount</strong> e infraestructura <strong>GCP</strong> automatizada.",
    description: `Desarrollo y despliegue completo de la plataforma digital de <strong>UTSCH España</strong> para la gestión y venta de matrículas personalizadas, utilizando el template DevOps interno (<strong>Terraform + GCP</strong>).

<strong>Responsabilidades principales:</strong>
      <ul>
      <li><strong>DevOps:</strong> Ambientes Preview, Staging y Production; CI/CD con GitHub Actions; Cloud Run y Cloud Storage; DNS y routing con Cloudflare Workers.</li>
      <li><strong>Frontend:</strong> React y Vue.js.</li>
      <li><strong>Backend:</strong> Prisma ORM con PostgreSQL; API REST; panel de administración.</li>
      <li><strong>Integraciones críticas:</strong> API oficial de la <strong>DGT</strong> (validaciones en tiempo real), <strong>Kount</strong> (antifraude y scoring), APIs de terceros y sistema de pagos seguros.</li>
      </ul>

_Plataforma en producción estable con escalabilidad automática y despliegues sin downtime._`,
    objective: "Entregar una plataforma <strong>escalable, segura y en producción</strong> para la venta de matrículas digitales, con integraciones oficiales (DGT) y controles antifraude robustos.",
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
    title: "Cuboc",
    titleJob: "Plataforma de gestión empresarial con arquitectura híbrida",
    briefDescription: "Desarrollo <strong>fullstack</strong> de plataforma empresarial con <strong>Next.js</strong>, <strong>React</strong> y <strong>Prisma</strong>, usando infraestructura <strong>GCP</strong> en dev/staging y despliegue optimizado en <strong>Vercel</strong> para producción.",
    description: `Desarrollo fullstack de la plataforma empresarial <strong>Cuboc</strong> con arquitectura híbrida: infraestructura DevOps propia en desarrollo y staging, y deployment final en <strong>Vercel</strong> para producción.

<strong>Arquitectura y desarrollo:</strong>
      <ul>
      <li><strong>Dev/Staging:</strong> Terraform, GCP Cloud Run, preview environments por PR, CI/CD con GitHub Actions.</li>
      <li><strong>Producción:</strong> Vercel con Edge Functions, SSR/SSG optimizado y CDN global.</li>
      <li><strong>Stack:</strong> React, Next.js, Vue.js (componentes específicos), Prisma, PostgreSQL.</li>
      <li><strong>Seguridad y SEO:</strong> Integración <strong>Kount</strong>, Open Graph, autenticación/autorización y panel administrativo.</li>
      </ul>`,
    objective: "Construir una plataforma empresarial <strong>moderna y performante</strong>, con flujos de despliegue automatizados en múltiples entornos y optimización de producción en Vercel.",
    startDate: "Ago 2025",
    endDate: "May 2026",
    tags: [
      "React",
      "Next.js",
      "Vue.js",
      "Prisma",
      "PostgreSQL",
      "Vercel",
      "Terraform",
      "GCP",
      "GitHub Actions",
      "Kount",
      "Open Graph",
      "SSR"
    ],
    logo: `${cubocMediaFolder}/logo.png`,
    links: {
      website: "https://cuboc-app.vercel.app/es/"
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
    title: "INDEK API",
    titleJob: "API interna de gestión empresarial y procesamiento de datos",
    briefDescription: "API <strong>REST</strong> interna para <strong>INDE-K</strong> con procesamiento avanzado de <strong>Excel</strong>, análisis con <strong>Pandas</strong>, caché <strong>Redis</strong> y despliegue en <strong>Cloud Run</strong> sobre <strong>GCP</strong>.",
    description: `Desarrollo de API REST interna para <strong>INDE-K</strong> orientada al procesamiento de hojas de cálculo y automatización de procesos de control interno, reportes y datos complejos.

<strong>Funcionalidades clave:</strong>
      <ul>
      <li><strong>Procesamiento Excel:</strong> Import/export, validación, transformaciones y generación de reportes automatizados.</li>
      <li><strong>Backend:</strong> Node.js/Express y Python/FastAPI; colas asíncronas para archivos grandes.</li>
      <li><strong>Infraestructura:</strong> Terraform, Cloud Run, Cloud Storage, Redis, Secrets Manager y Cloud Monitoring.</li>
      <li><strong>Seguridad:</strong> Autenticación JWT, control de acceso por roles y auditoría completa de operaciones.</li>
      </ul>

_Sistema interno privado — no se puede mostrar código ni enlaces por protección de datos._`,
    objective: "Automatizar procesos manuales empresariales mediante una API <strong>robusta, escalable y auditable</strong> para el procesamiento eficiente de datos en Excel.",
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
    title: "Tourism With Style",
    titleJob: "Implementación ERP Odoo 19 para agencia de turismo de lujo",
    briefDescription: "Implementación completa de <strong>Odoo 19</strong> para agencia turística: consultoría, <strong>módulos personalizados</strong>, contabilidad con <strong>Verifactu (AEAT)</strong>, migración de datos y formación al cliente.",
    description: `Proyecto end-to-end de implementación de <strong>ERP Odoo 19</strong> para <strong>Tourism With Style</strong>, agencia de turismo de lujo, desde análisis de requisitos hasta puesta en producción.

<strong>Módulos implementados y personalizados:</strong>
      <ul>
      <li><strong>Ventas y Compras:</strong> Paquetes turísticos, cotizaciones, proveedores hoteleros y control de márgenes.</li>
      <li><strong>CRM y Contactos:</strong> Segmentación B2B/B2C, leads, historial de viajes y fidelización.</li>
      <li><strong>Inventario:</strong> Disponibilidad de servicios, cupos y reservas temporales.</li>
      <li><strong>Contabilidad:</strong> Plan contable español, facturación automatizada e integración <strong>Verifactu (AEAT)</strong> con envío automático y trazabilidad.</li>
      </ul>

<strong>Desarrollo técnico:</strong> 6+ módulos custom en Python, vistas XML/QWeb, API cliente AEAT, automatizaciones, reports y migración desde sistema legacy.

_Reducción estimada del 80% en tiempo de procesos manuales._`,
    objective: "Digitalizar y automatizar la operativa de la agencia con un ERP <strong>adaptado al negocio turístico</strong>, cumpliendo normativa fiscal española (Verifactu) y formando al equipo del cliente.",
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
    title: "Russells",
    titleJob: "ERP Odoo 19 para marketplace gourmet multi-vendedor",
    briefDescription: "Implementación de <strong>Odoo 19</strong> como ERP de <strong>marketplace</strong> gourmet: módulo custom de vendedores, <strong>comisiones automatizadas</strong>, pedidos multi-vendedor y contabilidad adaptada al modelo marketplace.",
    description: `Implementación completa de <strong>Odoo 19</strong> para <strong>Russells</strong>, marketplace de comidas y aperitivos gourmet, con lógica específica multi-vendedor.

<strong>Módulo personalizado — Gestión de Marketplace:</strong>
      <ul>
      <li><strong>Dashboard de vendedores:</strong> Panel autónomo de productos, ventas y comisiones.</li>
      <li><strong>Comisiones automatizadas:</strong> Motor configurable por categoría, volumen y liquidaciones.</li>
      <li><strong>Pedidos multi-vendedor:</strong> División automática, notificaciones y tracking por sub-pedido.</li>
      <li><strong>Contabilidad:</strong> Facturación de comisiones, pagos a vendedores y reports por vendedor.</li>
      </ul>

<strong>Consultoría:</strong> Análisis del modelo marketplace, formación al equipo y parametrización fiscal de productos alimentarios.

_Reducción del ~70% en tiempo de gestión administrativa._`,
    objective: "Operar un marketplace gourmet con <strong>transparencia en comisiones</strong>, autonomía de vendedores y escalabilidad para incorporar nuevos partners sin fricción operativa.",
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
    title: "ICEditorial",
    titleJob: "Migración PrestaShop 9 y módulos de sincronización",
    briefDescription: "Migración de tienda editorial a <strong>PrestaShop 9</strong> y desarrollo de dos módulos custom: sincronización de <strong>pedidos vía API</strong> y sincronización de <strong>catálogo por cron optimizado</strong> (batch processing).",
    description: `Migración completa de la tienda online de <strong>ICEditorial</strong> desde versión legacy a <strong>PrestaShop 9</strong>, incluyendo base de datos, tema, pagos, envíos y SEO (redirecciones 301).

<strong>Módulo 1 — Sincronización de pedidos:</strong>
      <ul>
      <li>Hook de captura de pedidos y envío en tiempo real vía API REST a sistema externo.</li>
      <li>Retry automático, logs de auditoría y panel de monitoreo en backoffice.</li>
      </ul>

<strong>Módulo 2 — Sincronización de productos (cron optimizado):</strong>
      <ul>
      <li>Procesamiento por lotes (batch) y sincronización incremental para catálogos grandes.</li>
      <li>Resolución de timeouts y límites de memoria de cronjobs nativos de PrestaShop (~10x más rápido).</li>
      </ul>

<strong>Infraestructura:</strong> Linux, Nginx, SSL/TLS, MySQL optimizado para e-commerce, backups automáticos y caché.`,
    objective: "Completar la migración sin pérdida de datos y eliminar errores manuales en inventario y pedidos mediante <strong>sincronización fiable y monitorizable</strong> con sistemas externos.",
    startDate: "Ago 2025",
    endDate: "May 2026",
    tags: [
      "PrestaShop 9",
      "PHP",
      "MySQL",
      "JavaScript",
      "API REST",
      "Cron Jobs",
      "Docker",
      "Nginx",
      "SSL/TLS",
      "E-commerce"
    ],
    logo: `${iceEditorialMediaFolder}/logo.png`,
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
    title: "BookingApi",
    titleJob: "API RESTful para gestión de reservas",
    briefDescription: "BookingAPI es una <strong>API RESTful</strong> desarrollada con <strong>Spring Boot</strong> que permite la gestión completa de <strong>usuarios, roles, reservas, habitaciones, reviews y payments</strong> en un sistema hotelero. La API incluye <strong>seguridad</strong>, <strong>autenticación</strong> y <strong>autorización</strong> con JWT.",
    description: "BookingAPI es una <strong>API RESTful</strong> desarrollada con <strong>Spring Boot</strong> que permite la gestión completa de <strong>usuarios, roles, reservas, habitaciones, reviews y payments</strong> en un sistema hotelero. A través de <strong>JWT</strong>, se garantiza la <strong>autenticación</strong> y <strong>autorización</strong> segura de los usuarios, permitiendo operaciones sobre reservas, habitaciones y reviews. La API incluye un <strong>sistema de roles</strong> para controlar el acceso a las funcionalidades. Además, se ha integrado <strong>Swagger</strong> para la documentación interactiva de la API, lo que facilita la interacción con los endpoints.",
    objective: "Desarrollar una API RESTful para gestionar reservas de habitaciones, usuarios, y roles en un sistema de reservas hotelero, implementando autenticación y autorización con JWT y proporcionando documentación interactiva con Swagger.",
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
    title: "Bafre iOS",
    titleJob: "Migración de Aplicación Bafre iOS",
    briefDescription: "<strong>Migración</strong> y modernización de la aplicación <strong>iOS</strong> de una reconocida inmobiliaria internacional, <strong>Bafre</strong>, utilizando <strong>SwiftUI</strong>, mejorando la funcionalidad, experiencia del usuario, y optimizando el flujo de trabajo mediante <strong>CI/CD</strong>.",
    description: `Durante mi estancia en <strong>ControlNet</strong>, Lideré y desarrollé la <strong>migración</strong> de una aplicación <strong>iOS</strong> para <strong>Bafre</strong>, una reconocida inmobiliaria internacional. La aplicación original tenía un código obsoleto de 10 años de antigüedad y necesitaba ser <strong>actualizada</strong> para <strong>mejorar su rendimiento</strong> y <strong>funcionalidad</strong>.
  
  Mediante ingeniería inversa comprendimos el código obsoleto y la versión de <strong>Android</strong>. En un periodo de <strong>2 meses</strong>, logramos una migración exitosa a <strong>SwiftUI</strong>. Este proyecto incluyó la integración de nuevas tecnologías y la <strong>optimización de la API</strong> de Bafre, resultando en una aplicación más moderna y eficiente.
  
  El flujo de desarrollo se optimizó mediante la implementación de <strong>CI/CD</strong>, lo que permitió una integración y entrega continua más eficiente y una mejor gestión de versiones en producción.
  
  La aplicación Bafre iOS, desarrollada para una inmobiliaria líder, ofrece una serie de funcionalidades diseñadas para mejorar la <strong>experiencia de sus usuarios</strong>:
      <ul>
      <li><strong>Catálogo</strong>: Sistema avanzado de filtrado y búsqueda de inmuebles.</li>
      <li><strong>Clientes</strong>: Gestión de usuarios, incluyendo proveedores y compradores.</li>
      <li><strong>Asesores</strong>: Herramientas para asesores inmobiliarios, permitiendo asesoramiento vía chat, llamadas y correos electrónicos.</li>
      <li><strong>Agenda</strong>: Agenda exclusiva para asesores, facilitando el seguimiento de citas y reuniones.</li>
      <li><strong>Auth</strong>: Sistema de autenticación y autorización, incluyendo inicio de sesión seguro y gestión de sesiones.</li>
      <li><strong>Chats</strong>: Comunicación en tiempo real entre clientes y asesores, implementado con Firebase y la API de Bafre.</li>
      <li><strong>Inmomatch</strong>: Algoritmo de emparejamiento de clientes con inmuebles según sus preferencias, optimizando la gestión del asesoramiento.</li>
      <li><strong>Inmuebles</strong>: Detalles de los inmuebles, incluyendo citas, localización, imágenes y recorridos virtuales en 360º.</li>
      <li><strong>SideMenu</strong>: Menú lateral desplegable para una navegación intuitiva.</li>
      <li><strong>Location</strong>: Integración con Apple Maps y Google Maps para mostrar la localización de los inmuebles.</li>
      <li><strong>VR</strong>: Visualización de inmuebles en realidad virtual mediante imágenes 360º.</li>
      </ul>`,
    objective: "Migración completa de la Aplicación. Actualizar y modernizar la aplicación Bafre iOS para <strong>mejorar su rendimiento</strong>, <strong>seguridad</strong> y <strong>experiencia de usuario</strong>, utilizando tecnologías actuales y <strong>facilitando su mantenimiento</strong> futuro mediante <strong>CI/CD</strong>.",
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
    title: "La 11mil WordPress",
    titleJob: "Mejora y optimización de la página web La 11mil",
    briefDescription: "Mejora de la <strong>funcionalidad</strong> y <strong>seguridad</strong> de la página web <strong>La 11mil</strong>, incluyendo <strong>limpieza de malwares</strong>, <strong>optimización</strong> de rendimiento y mejoras en la <strong>lógica de funcionamiento</strong> de varios apartados.",
    description: `En este proyecto, me encargué de mejorar varios aspectos de la página web <strong>La 11mil</strong>, desarrollada en <strong>WordPress</strong>.

Durante mi intervención, realicé cambios en la <strong>lógica de funcionamiento</strong> de diferentes apartados de la página para mejorar la <strong>experiencia del usuario</strong>, así como optimicar la implementación de medios (imágenes, vídeos, etc.) para <strong>reducir los tiempos de carga</strong> y mejorar la <strong>accesibilidad</strong>.

Tras identificar que la página estaba comprometida debido a la presencia de <strong>malwares</strong>, procedí a realizar una <strong>limpieza exhaustiva</strong> para eliminar los virus y <strong>asegurar el sistema</strong>. Esto permitió reactivar el DNS, que previamente había sido bloqueado debido a la infección.

Posteriormente, reforcé las <strong>medidas de seguridad</strong> del sitio web, implementando mejores prácticas para <strong>evitar futuros ataques</strong>, y volví a poner la página en producción con un <strong>rendimiento mejorado</strong> y <strong>sin riesgos de seguridad</strong>.`,
    objective: "<strong>Optimizar</strong> el rendimiento de la página web, mejorar la <strong>seguridad</strong> eliminando malwares y asegurando el sitio para su funcionamiento continuo, y realizar ajustes en la lógica de funcionamiento para <strong>mejorar experiencia del usuario</strong>.",
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
    title: "CRM ASP.NET",
    titleJob: "Contribución en la solución de problemas de funcionalidad en CRM usando",
    briefDescription: "Contribución en la <strong>corrección de errores</strong> y <strong>mejora de funcionalidad</strong> de un CRM en producción usnado <strong>ASP.NET</strong>, con el objetivo de garantizar su funcionamiento sin problemas.",
    description: `En este proyecto, participé en varias <strong>correcciones de problemas de funcionalidad</strong> en un CRM realizado en <strong>ASP.NET</strong> que llevaba años en producción.

A pesar de que el sistema funcionaba en su mayoría correctamente, algunas funcionalidades clave presentaban errores que afectaban la <strong>experiencia del usuario</strong> y la <strong>eficiencia operativa</strong>.

Mi trabajo consistió en analizar el sistema para <strong>identificar los errores</strong> y solucionarlos de manera que el CRM siguiera completamente funcional. Trabajamos en la <strong>corrección de bugs</strong>, la mejora de la <strong>lógica de negocio</strong> y en la <strong>optimización</strong> de ciertos <strong>procesos internos del sistema</strong> para asegurar su <strong>estabilidad</strong> y continuidad en producción.

_No se puede mostrar el código ni el Link por Proteccion de Datos_`,
    objective: "Corregir los errores de funcionalidad presentes en el CRM, asegurando su <strong>estabilidad</strong> y <strong>eficiencia</strong> para que siga operando sin interrupciones.",
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
    title: "MoviesDetails",
    titleJob: "Catálogo de Películas",
    briefDescription: "Catálogo de películas interactivo que se actualiza <strong>automáticamente</strong>, mostrando diferentes secciones de películas, géneros, trailers, sinopsis y reparto.\n\nRealizado con <strong>React</strong> y la <strong>API</strong> de <strong>TMDb</strong> para obtener información actualizada de las películas.",
    description: "El proyecto <strong>MoviesDetails</strong> es un <strong>catálogo de películas</strong> que se <strong>actualiza automáticamente</strong> mediante la <strong>API TMDb</strong>. Este proyecto fue realizado completamente desde cero con <strong>React</strong> para aprender la tecnología de manera <strong>autodidacta</strong>. A través de este proyecto, implementé una estructura que incluye diversas secciones para películas, géneros, y más. Cada película cuenta con su propio trailer, sinopsis y reparto. La <strong>API TMDb</strong> permite obtener los datos de manera continua, garantizando que la información siempre esté <strong>actualizada</strong>. Este proyecto me permitió aplicar mis conocimientos de <strong>React</strong> y mejorar mi entendimiento de cómo interactuar con <strong>APIs externas</strong>.",
    objective: "Crear un <strong>catálogo interactivo de películas</strong> con datos actualizados de manera continua, utilizando <strong>React</strong> y la <strong>API TMDb</strong> para obtener la información de las películas, trailers, géneros y demás.",
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
    title: "RotaPlace Backend",
    titleJob: "Instalación, Configuración y Optimización de Servidor NginX para RotaPlace.es",
    briefDescription: "<strong>Instalación</strong> y <strong>optimización de rendimiento</strong> del servidor NginX para un <strong>marketplace</strong> llamado RotaPlace.es, en un entorno de <strong>Linux Server Debian</strong> sin GUI, implementando <strong>seguridad SSL</strong> y optimizaciones para una mejor experiencia de usuario.",
    description: `Como proyecto final autodidacta, me encargué de la <strong>instalación, configuración y optimización</strong> del servidor NginX para el <strong>backend de RotaPlace.es</strong>, un <strong>marketplace</strong> de comercio electrónico. La tarea consistió en configurar un entorno de servidor Linux (Debian sin GUI), donde realicé múltiples tareas esenciales para garantizar el rendimiento y la seguridad del servidor.\n\nEn primer lugar, optimicé el servidor para mejorar el rendimiento con optimizaciones en las <strong>paginaciones</strong>, <strong>descargas</strong> y <strong>cargas</strong> de archivos, mejorando la eficiencia del servidor bajo carga. Implementé un <strong>sistema de caché</strong> para mejorar los tiempos de respuesta y reducir el uso innecesario de recursos.\n\nAdemás, establecí una <strong>seguridad avanzada</strong> mediante el uso de <strong>encriptacion SSL</strong>, configurando acceso al servidor mediante una <strong>clave pública/privada</strong> para los administradores usando como clave privada para cada administrador su <strong>certificado digital</strong> como <strong>clave privada</strong>, asegurando así que solo personal autorizado pudiera gestionar el servidor. Configuré también la autenticación y la autorización de usuarios, garantizando que el acceso remoto fuese seguro y cumpliese con los estándares de la industria.\n\nPara facilitar el acceso al servidor y mejorar la fiabilidad del servicio, realicé la configuración de un <strong>DNS</strong> y gestioné la integración de NginX con el sistema de <strong>balanceo de carga</strong> y <strong>autorización de IPs</strong> para asegurar la disponibilidad y distribución del tráfico.\n\nEste proyecto me permitió aplicar mis conocimientos sobre <strong>seguridad en servidores</strong>, <strong>optimización de redes</strong> y <strong>administración de sistemas</strong>, mientras garantizaba un rendimiento máximo para los usuarios finales del marketplace.`,
    objective: "Crear, Configurar, Optimizar, Asegurar y Alojar el servidor <strong>NginX</strong> para el <strong>backend</strong> de RotaPlace.es, implementando medidas de seguridad avanzadas y mejorando la escalabilidad y fiabilidad del sistema.",
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
