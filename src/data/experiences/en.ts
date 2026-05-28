const databaySolutionsMediaFolder = "/DatabaySolutions";
const certificatesMediaFolder = "/Certificates";
const controlNetMediaFolder = "/ControlNet";
const tecnicoMediaFolder = "/tecnico";

import type { Experience } from "../types";

export const experiencesEn: Experience[] = [
  {
    id: 5,
    slug: "Desarrollador-Fullstack-&-DevOps",
    title: "Fullstack & DevOps Developer",
    provider: "Databay Solutions",
    briefDescription: `At <strong>Databay Solutions</strong>, a technology consulting firm, I developed <strong>fullstack</strong> and <strong>DevOps</strong> solutions for clients from very different sectors: from <strong>Odoo ERP</strong> and <strong>PrestaShop e-commerce</strong> to <strong>GCP platforms</strong> with <strong>Terraform</strong>, <strong>AI</strong>, <strong>IoT</strong> and custom integrations.`,
    description: `<strong>Databay Solutions</strong> (<a href="https://databay.solutions" target="_blank" rel="noopener noreferrer">databay.solutions</a>) is a <strong>technology consulting firm</strong> that accompanies medium and large companies in their digital transformation. Their catalog covers <strong>Odoo ERP</strong>, <strong>Data & AI</strong>, <strong>automation</strong>, <strong>custom software</strong>, <strong>cloud</strong> and <strong>IoT</strong>, among other service lines.

In my role as <strong>Fullstack & DevOps Developer</strong>, I participated in end-to-end client projects: infrastructure design, automated deployments, backend/frontend development and integrations with external APIs, always with a focus on <strong>stable production</strong> and <strong>maintainability</strong>.

<strong>Main lines of work:</strong>
      <ul>
      <li><strong>DevOps & Cloud:</strong> Enterprise <strong>Terraform + GCP</strong> template (CI/CD, Cloud Run, Cloudflare) reusable across multiple projects.</li>
      <li><strong>Web platforms:</strong> UTSCH España (license plates, DGT, Kount), Cuboc (Soluble Studio internal app).</li>
      <li><strong>Backend & data:</strong> INDE-K internal API (Excel, Pandas, Cloud Run).</li>
      <li><strong>Odoo 19 ERP:</strong> Tourism With Style (Verifactu/AEAT) and Russells (multi-vendor marketplace).</li>
      <li><strong>E-commerce:</strong> ICEditorial — migration to PrestaShop 9, bulk imports and custom modules (orders, addresses, catalog sync).</li>
      </ul>`,
    startDate: "Aug 4, 2025",
    endDate: "May 8, 2026",
    location: "Remote, Spain",
    tags: [
      "Terraform",
      "GCP",
      "DevOps",
      "Odoo 19",
      "PrestaShop 9",
      "React",
      "Next.js",
      "Vue.js",
      "PHP",
      "Python",
      "Cloud Run",
      "GitHub Actions",
      "Cloudflare",
      "REST API",
      "ERP",
      "E-commerce",
    ],
    logo: `${databaySolutionsMediaFolder}/logo.png`,
    media: [
      `${databaySolutionsMediaFolder}/1.png`,
      `${databaySolutionsMediaFolder}/2.png`
    ],
    type: "Trabajo",
    companyUrl: "https://databay.solutions",
    companyLinkLabel: "View Databay Solutions",
    projectUrl: [
      "/proyecto/DevOps-Template-GCP",
      "/proyecto/UTSCH",
      "/proyecto/Cuboc",
      "/proyecto/INDE-K-API",
      "/proyecto/Tourism-With-Style",
      "/proyecto/Russells",
      "/proyecto/ICEditorial",
    ],
    skills: [
      `<ul>
          <li>Infrastructure as code (Terraform) and GCP deployments</li>
          <li>CI/CD with GitHub Actions, Docker and Cloud Run</li>
          <li>Fullstack development (React, Next.js, Vue.js, PHP, Python)</li>
          <li>Odoo 19 ERP: consulting, custom modules and Verifactu</li>
          <li>PrestaShop 9: migration, bulk imports and custom modules</li>
          <li>REST API integration and third-party systems</li>
          <li>Security (Kount, JWT, SSL/TLS) and observability</li>
        </ul>`,
    ],
    highlights: [
      `<ul>
          <li>Designed the <strong>DevOps template</strong> that became the consultancy's infrastructure foundation.</li>
          <li><strong>7 client projects</strong> brought to production across different stacks.</li>
          <li>Automated multi-environment deployments (preview, staging, production).</li>
          <li>Implemented <strong>Verifactu (AEAT)</strong> and marketplace logic in Odoo.</li>
          <li><strong>PrestaShop 9</strong> migration with catalog and order synchronization via API.</li>
        </ul>`,
    ],
    responsibilities: [
      `<ul>
          <li>Development and deployment of fullstack applications in cloud environments.</li>
          <li>Design of CI/CD pipelines and reproducible infrastructure with Terraform.</li>
          <li>Implementation and configuration of Odoo ERP and PrestaShop stores.</li>
          <li>Creation of custom modules and integrations for clients.</li>
          <li>Technical coordination with official APIs and external providers (DGT, Kount, AEAT).</li>
        </ul>`,
    ],
  },
  {
    id: 4,
    slug: "Certificados",
    title: "Certificates",
    briefDescription: `Self-taught education demonstrated through various certifications in areas such as <strong>Backend development</strong>, <strong>data visualization</strong>, <strong>data analysis</strong>, <strong>responsive web design</strong>, and <strong>English</strong> proficiency.`,
    description:
      `Self-taught education demonstrated through various certifications in areas such as <strong>Backend development</strong>, <strong>data visualization</strong>, <strong>data analysis</strong>, <strong>responsive web design</strong>, and <strong>English</strong> proficiency.  
       These certifications reflect a continuous commitment to learning and professional development.`,
    startDate: "Sept 2024",
    endDate: "Aug 4, 2025",
    tags: [
      "Data Visualization",
      "Back End",
      "APIs",
      "Node.js",
      "Express",
      "MongoDB",
      "Responsive Design",
      "HTML",
      "CSS",
      "Python",
      "English Proficiency",
    ],
    logo: `${certificatesMediaFolder}/logo.png`,
    type: "Voluntario",
    skills: [
      `<ul>
          <li>JavaScript</li>
          <li>D3.js</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>Python</li>
          <li>pandas</li>
          <li>numpy</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Flexbox</li>
          <li>CSS Grid</li>
          <li>English Proficiency</li>
        </ul>`
    ],

    certificateUrl: [
      "/certificado/BackEnd-Development-y-APIs",
      "/certificado/Data-Analysis",
      "/certificado/Data-Visualization",
      "/certificado/EF-SET-English",
      "/certificado/Responsive-Web-Design",
    ],
    highlights: [
      `<ul>
          <li>Certification in <strong>Backend Development</strong> and APIs, with <strong>Node.js</strong>, <strong>Express</strong> and <strong>MongoDB</strong>.</li>
          <li>Certification in <strong>Data Analysis</strong> with <strong>Python</strong> and libraries like <strong>pandas</strong> and <strong>numpy</strong>.</li>
          <li>Certification in <strong>Data Visualization</strong> with <strong>JavaScript</strong> and <strong>D3.js</strong>.</li>
          <li>Certification in <strong>Responsive Web Design</strong>, focused on <strong>HTML</strong>, <strong>CSS</strong> and responsive design.</li>
          <li><strong>English</strong> certification with <strong>C1</strong> level on EF SET.</li>
        </ul>`
    ],
  },
  {
    id: 3,
    slug: "Desarrollador-Fullstack",
    title: "Fullstack Developer",
    provider: "ControlNet",
    briefDescription: `Work experience in which I <strong>led</strong> and <strong>developed</strong> an application while contributing to various projects in <strong>production</strong> and <strong>development</strong>.  
   This provided extensive experience as a <strong>FullStack</strong> developer in a <strong>professional work environment</strong>.`,
    description:
      `I led and contributed to the migration of an iOS application for Bafre real estate, implementing <strong>SwiftUI</strong>, <strong>Firebase</strong>, <strong>CocoaPods</strong> and <strong>Git</strong>, as well as adjustments to the client company's <strong>API</strong>.  
   I also worked on <strong>UI/UX</strong> design and resolved security and design issues in <strong>WordPress</strong>, as well as momentary contributions to projects with <strong>Angular</strong> and a <strong>CRM</strong> in <strong>ASP.NET</strong>.  
   This resulted in extensive experience as a <strong>FullStack</strong> developer in a professional and multidisciplinary work environment.`,

    startDate: "Sept 2023",
    endDate: "Jan 2024",
    location: "Jerez de la Frontera, Cádiz, Spain",
    tags: ["Swift", "Firebase", "CocoaPods", "Git", "UI/UX", "Angular", "ASP.NET"],
    logo: `${controlNetMediaFolder}/logo.png`,
    media: [
      `${controlNetMediaFolder}/1.png`,
      `${controlNetMediaFolder}/2.png`,
      `${controlNetMediaFolder}/3.png`,
    ],
    type: "Trabajo",
    projectUrl: [
      "/proyecto/Bafre-iOS",
      "/proyecto/CRM-ASP.NET",
      "/proyecto/La-11mil-WordPress",
    ],
    skills: [
      `<ul>
          <li>SwiftUI</li>
          <li>Firebase</li>
          <li>Git</li>
          <li>CocoaPods</li>
          <li>UI/UX</li>
          <li>WordPress</li>
          <li>Angular</li>
          <li>ASP.NET</li>
        </ul>`
    ],
    highlights: [
      `<ul>
          <li>Completed a <strong>complex migration</strong> exceeding quality standards.</li>
          <li>Collaborated with a multidisciplinary team on various projects.</li>
          <li>Optimized the <strong>functionality</strong> and <strong>design</strong> of existing applications and those created from scratch.</li>
        </ul>`
    ],
    responsibilities: [
      `<ul>
          <li>Migration of iOS applications.</li>
          <li>UI/UX design and optimization.</li>
          <li>Troubleshooting technical issues in web applications.</li>
        </ul>`
    ],

  },
  {
    id: 2,
    slug: "Tecnico-Superior-en-Desarrollo-de-Aplicaciones-Web",
    title: "Higher Technician in Web Application Development",
    provider: "IES Francisco Romero Vargas",
    briefDescription: `<strong>Frontend</strong> training in design, development and maintenance of <strong>modern web</strong> applications, acquiring the ability to correctly interpret and display data.  
   As well as <strong>Backend</strong> with various <strong>technologies</strong> and <strong>collaborative work methodologies</strong>, acquiring the ability to install, configure and administer <strong>servers</strong> and <strong>SQL</strong> and <strong>NoSQL</strong> databases.`,
    description:
      `The <em>DAW</em> program offered comprehensive training in the design, development and maintenance of modern web applications, using an integral approach to <strong>Backend</strong> and <strong>Frontend</strong> programming.  
   Over two years, I developed advanced skills in the use of key technologies, <strong>development tools and methodologies</strong> for collaborative work, <strong>excelling in individual and team projects</strong>.  
   During my training, I created functional and scalable applications that integrated web development best practices, prioritizing <strong>security</strong>, <strong>performance</strong> and <strong>user experience</strong>.`,
    startDate: "Sept 2021",
    endDate: "Jun 2023",
    location: "Cádiz, Spain",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "PHP",
      "SQL",
      "NoSQL",
      "Angular",
      "React",
      "Python",
      "Django",
      "Responsive Design",
      "Bootstrap",
      "WordPress",
      "Joomla",
      "Git",
      "GitHub",
      "SASS",
      "TypeScript",
      "JSON",
      "AJAX",
      "XML",
      "XLS",
      "XAMPP",
      "Linux",
    ],
    logo: `${tecnicoMediaFolder}/logo.png`,
    type: "Educacion",
    skills: [
      `<ul>
          <li>Web Development</li>
          <li>Frontend Development</li>
          <li>Backend Development</li>
          <li>Databases</li>
          <li>NoSQL Databases</li>
          <li>Version Control with Git</li>
          <li>API Integration</li>
          <li>Performance Optimization</li>
          <li>Responsive Web Design</li>
          <li>Web Security</li>
          <li>UI/UX Design</li>
          <li>Development with Angular and React</li>
          <li>Automation with Python and Django</li>
          <li>Server Management with Linux</li>
          <li>Data handling with XLS</li>
          <li>Environment configuration with XAMPP</li>
        </ul>`
    ],
    highlights: [
      `<ul>
          <li>Acquired advanced proficiency in creating web interfaces with <strong>HTML5</strong>, <strong>CSS3</strong> and frameworks like <strong>Bootstrap</strong>, applying <strong>responsive design</strong> principles to ensure compatibility across different devices.</li>
          <li>Developed dynamic applications using <strong>JavaScript</strong>, <strong>TypeScript</strong> and frameworks like <strong>Angular</strong> and <strong>React</strong>, improving interactivity and user experience.</li>
          <li>Implemented robust <strong>backend</strong> solutions using <strong>PHP</strong>, <strong>Python</strong> and <strong>Django</strong>, integrating <strong>SQL</strong> and <strong>NoSQL</strong> databases according to each project's requirements.</li>
          <li>Participated in collaborative projects using version control systems like <strong>Git</strong> and <strong>GitHub</strong>, efficiently managing the software development <strong>lifecycle</strong>.</li>
          <li>Integrated popular <strong>CMS</strong> platforms like <strong>WordPress</strong> and <strong>Joomla</strong> in practical projects, adapting them to specific needs through theme and plugin customization.</li>
          <li>Automated tasks and optimized processes using <strong>Python</strong>, applying specific libraries for <strong>data processing</strong> and <strong>analysis</strong>.</li>
          <li>Used tools like <strong>XAMPP</strong> to configure local development environments, facilitating testing and deployments.</li>
          <li>Managed <strong>Linux</strong> <strong>servers</strong> for web application deployment, ensuring <strong>security</strong> and <strong>stability</strong> of services.</li>
          <li>Performed analysis and reports using <strong>XLS</strong> spreadsheets, applying organization principles and <strong>data visualization</strong>.</li>
        </ul>`
    ],
    responsibilities: [
      `<ul>
          <li>Develop complete web applications from initial design to deployment.</li>
          <li>Ensure code security and optimization, following best practices like input validation and output encoding.</li>
          <li>Configure and manage local development environments and Linux servers.</li>
          <li>Collaborate in multidisciplinary teams to meet practical project objectives.</li>
          <li>Document development processes and technical guides for implemented projects.</li>
        </ul>`
    ]
  },
  {
    id: 1,
    slug: "Tecnico-en-Sistemas-Microinformaticos-y-Redes",
    title: "Technician in Microcomputer Systems and Networks",
    provider: "IES Castillo de Luna",
    briefDescription: `Technical training in the <strong>installation</strong>, <strong>configuration</strong>, <strong>administration</strong> and <strong>maintenance</strong> of <strong>computer systems and networks</strong>.  
   I learned to manage <strong>IT infrastructures</strong>, resolve <strong>hardware</strong> and <strong>software</strong> problems, and some aspects of <strong>cybersecurity</strong>.`,
    description:
      `The <em>SMR</em> training cycle provided me with comprehensive technical training in the <strong>installation</strong>, <strong>configuration</strong>, <strong>administration</strong> and <strong>maintenance</strong> of <strong>computer systems and networks</strong>.  
   I learned to manage <strong>IT infrastructures</strong>, resolve <strong>hardware</strong> and <strong>software</strong> problems, and optimize the performance of <strong>systems</strong> and <strong>networks</strong>.  
   During the course, I participated in practical projects that included, among other things, <strong>network</strong> implementation, <strong>server configuration</strong>, <strong>user management</strong>, <strong>computer security</strong> and other aspects...`,
    startDate: "Sept 2018",
    endDate: "Jun 2020",
    location: "Cádiz, Spain",
    tags: [
      "Operating Systems",
      "Networks",
      "Hardware",
      "Windows Server",
      "Linux",
      "Cisco",
      "Virtualization",
      "VMware",
      "Hyper-V",
      "Computer Security",
      "Backup",
      "TCP/IP",
      "DNS",
      "DHCP",
      "Active Directory",
      "Firewall",
      "Routing",
      "Switching",
      "SQL",
      "NoSQL",
    ],
    logo: `${tecnicoMediaFolder}/logo.png`,
    type: "Educacion",
    skills: [
      `<ul>
          <li>Network Administration</li>
          <li>Operating System Installation</li>
          <li>Hardware Troubleshooting</li>
          <li>Server Management</li>
          <li>Network Security</li>
          <li>TCP/IP Service Configuration</li>
          <li>Virtualization</li>
          <li>Backups and Data Recovery</li>
          <li>Technical Documentation</li>
          <li>Firewall Configuration</li>
          <li>Active Directory</li>
          <li>Routing and Switching with Cisco</li>
        </ul>`
    ],
    highlights: [
      `<ul>
          <li>Installation and configuration of <strong>networks</strong> and <strong>servers</strong> in real environments, including operating systems like <strong>Windows Server</strong> and <strong>Linux</strong>.</li>
          <li>Network performance optimization through the use of advanced <strong>routing and switching</strong> technologies.</li>
          <li>Management of computer <strong>security</strong> through <strong>firewalls</strong> and <strong>backup</strong> solutions.</li>
          <li>Development of practical skills in the <strong>support</strong> and <strong>maintenance</strong> of computer equipment in professional work environments.</li>
        </ul>`
    ],
    responsibilities: [
      `<ul>
          <li>Configure and administer computer networks, servers and security devices.</li>
          <li>Install and maintain operating systems on work equipment.</li>
          <li>Manage local networks and perform preventive maintenance tasks.</li>
          <li>Configure services and protocols like DNS, DHCP and TCP/IP.</li>
          <li>Assist in implementing backup and disaster recovery solutions.</li>
          <li>Manage Active Directory and tasks related to user administration.</li>
        </ul>`
    ],
  }
];
