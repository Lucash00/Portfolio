export interface Experience {
    id: number;
    title: string;
    provider?: string;
    description: string;
    startDate: string;
    endDate?: string;
    location?: string;
    tags: string[];
    logo?: string;
    media?: string[];
    type: 'Trabajo' | 'Educacion' | 'Personal' | 'Voluntario';
    skills?: string[];
    certificateUrl?: string[];
    projectUrl?: string[];
    highlights?: string[];
    responsibilities?: string[];
  }
  
  export const experiences: Experience[] = [
    {
      id: 5,
      title: "Certificados",
      description:
        `Educación autodidacta demostrada mediante diversas certificaciones en áreas como **desarrollo Backend**, **visualización de datos**, **análisis de datos**, **diseño web adaptable**, y habilidades en **inglés**.  
        Estas certificaciones reflejan un compromiso continuo con el aprendizaje y la mejora profesional.`,
      startDate: "2024-09-01",
      endDate: "actualidad",
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
      logo: "/src/data/Certificates/Certificates.svg",
      type: "Voluntario",
      skills: [
        `
      - JavaScript  
      - D3.js  
      - Node.js  
      - Express  
      - MongoDB  
      - Python  
      - pandas  
      - numpy  
      - HTML  
      - CSS  
      - Flexbox  
      - CSS Grid  
      - English Proficiency`
      ],
      certificateUrl: [
        "/certificado/BackEnd-Development-y-APIs",
        "/certificado/Data-Analysis",
        "/certificado/Data-Visualization",
        "/certificado/EF-SET-English",
        "/certificado/Responsive-Web-Design",
      ],
      highlights: [
        `
      - Certificación en Backend Development y APIs, con Node.js, Express y MongoDB.
      - Certificación en Data Analysis con Python y bibliotecas como pandas y numpy.
      - Certificación en Data Visualization con JavaScript y D3.js.
      - Certificación Responsive Web Design, enfocada en HTML, CSS y diseño adaptable.
      - Certificación de inglés con nivel C1 en EF SET.
        `
      ],
    },
    {
      id: 4,
      title: "Desarrollador Fullstack en ControlNet",
      provider: "ControlNet",
      description:
        `Lideré y contribuí en la migración de una aplicación iOS para la inmobiliaria Bafre, implementando **SwiftUI**, **Firebase**, **CocoaPods** y **Git**.  
        También trabajé en el diseño **UI/UX** y resolución de problemas de seguridad y diseño en **WordPress**, así como en proyectos con **Angular** y un **CRM** en **ASP.NET**.`,
      startDate: "2023-09-01",
      endDate: "2023-12-23",
      location: "Jerez de la Frontera, Cádiz, España",
      tags: ["Swift", "Firebase", "CocoaPods", "Git", "UI/UX", "Angular", "ASP.NET"],
      logo: "https://example.com/logo-controlnet.png",
      type: "Trabajo",
      projectUrl: [
        "/certificado/BackEnd-Development-y-APIs",
        "/certificado/Data-Analysis",
        "/certificado/Data-Visualization",
        "/certificado/EF-SET-English",
        "/certificado/Responsive-Web-Design",
      ],
      skills: [
        "SwiftUI",
        "Firebase",
        "Git",
        "CocoaPods",
        "UI/UX",
        "WordPress",
        "Angular",
        "ASP.NET",
      ],
      highlights: [
        `
      - Completé una migración compleja superando los estándares de calidad.
      - Colaboré con un equipo multidisciplinario en distintos proyectos.
      - Optimizé la funcionalidad y diseño de aplicaciones existentes.
        `
      ],
      responsibilities: [
        `
      - Migración de aplicaciones iOS.
      - Diseño y optimización de UI/UX.
      - Resolución de problemas técnicos en aplicaciones web.
        `
      ],
    },
    {
      id: 3,
      title: "Tecnico Superior en Desarrollo de Aplicaciones Web",
      provider: "IES Francisco Romero Vargas",
      description:
        `El programa **DAW** ofreció una formación completa en el diseño, desarrollo y mantenimiento de aplicaciones web modernas, utilizando un enfoque integral para la programación backend y frontend.  
        A lo largo de dos años, desarrollé competencias avanzadas en el uso de tecnologías clave, **herramientas de desarrollo y metodologías** de trabajo colaborativo, **destacándome en proyectos individuales y en equipo**.  
        Durante mi formación, creé aplicaciones funcionales y escalables que integraban las mejores prácticas de desarrollo web, priorizando la **seguridad**, el **rendimiento** y la **experiencia de usuario**.`,
      startDate: "2020-09-01",
      endDate: "2022-06-30",
      location: "Cádiz, España",
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
      logo: "/src/assets/logos/instituto-daw.png",
      type: "Educacion",
      skills: [
        `
      - Desarrollo Web  
      - Frontend Development  
      - Backend Development  
      - Bases de Datos  
      - Bases de Datos NoSQL  
      - Control de Versiones con Git  
      - Integración de APIs  
      - Optimización de Performance  
      - Responsive Web Design  
      - Seguridad Web  
      - UI/UX Design  
      - Desarrollo con Angular y React  
      - Automatización con Python y Django  
      - Gestión de Servidores con Linux  
      - Manejo de datos con XLS  
      - Configuración de entornos con XAMPP`
      ],
      highlights: [
        `
      - Adquirí un dominio avanzado en la creación de interfaces web con HTML5, CSS3 y frameworks como Bootstrap, aplicando principios de diseño responsive para garantizar compatibilidad en distintos dispositivos.
      - Desarrollé aplicaciones dinámicas utilizando JavaScript, TypeScript y frameworks como Angular y React, mejorando la interactividad y experiencia de usuario.
      - Implementé soluciones backend robustas utilizando PHP, Python y Django, integrando bases de datos SQL y NoSQL según los requisitos de cada proyecto.
      - Participé en proyectos colaborativos utilizando sistemas de control de versiones como Git y GitHub, gestionando de forma eficiente el ciclo de vida del desarrollo de software.
      - Integré CMS populares como WordPress y Joomla en proyectos prácticos, adaptándolos a necesidades específicas mediante personalización de temas y plugins.
      - Automaticé tareas y optimicé procesos utilizando Python, aplicando bibliotecas específicas para procesamiento de datos y análisis.
      - Utilicé herramientas como XAMPP para configurar entornos de desarrollo local, facilitando pruebas y despliegues.
      - Gestioné servidores Linux para el despliegue de aplicaciones web, asegurando seguridad y estabilidad en los servicios.
      - Realicé análisis y reportes utilizando hojas de cálculo XLS, aplicando principios de organización y visualización de datos.
        `
      ],
      responsibilities: [
        `
      - Desarrollar aplicaciones web completas desde el diseño inicial hasta el despliegue.
      - Garantizar la seguridad y optimización del código, siguiendo buenas prácticas como validación de entradas y codificación de salidas.
      - Configurar y gestionar entornos de desarrollo locales y en servidores Linux.
      - Colaborar en equipos multidisciplinarios para cumplir con los objetivos de proyectos prácticos.
      - Documentar procesos de desarrollo y guías técnicas para proyectos implementados.
        `
      ],
      media: [
        "/src/assets/projects/daw-project-1.png",
        "/src/assets/projects/daw-project-2.png",
      ],
    },
    {
      id: 2,
      title: "Tecnico en Sistemas Microinformáticos y Redes",
      provider: "IES Castillo de Luna",
      description:
        `El ciclo formativo de **SMR** me brindó una formación técnica completa en la instalación, configuración, administración y mantenimiento de sistemas informáticos y redes. Aprendí a gestionar infraestructuras de TI, resolver problemas de hardware y software, y optimizar el rendimiento de sistemas y redes. Durante el curso, participé en proyectos prácticos que incluyeron la implementación de redes locales, configuración de servidores, gestión de usuarios y seguridad informática.`,
      startDate: "2018-09-01",
      endDate: "2020-06-30",
      location: "Cádiz, España",
      tags: [
        "Sistemas Operativos",
        "Redes",
        "Hardware",
        "Windows Server",
        "Linux",
        "Cisco",
        "Virtualización",
        "VMware",
        "Hyper-V",
        "Seguridad Informática",
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
      logo: "/src/assets/logos/instituto-smr.png",
      type: "Educacion",
      skills: [
        `
      - Administración de Redes  
      - Instalación de Sistemas Operativos  
      - Resolución de Problemas de Hardware  
      - Gestión de Servidores  
      - Seguridad de Redes  
      - Configuración de Servicios TCP/IP  
      - Virtualización  
      - Backups y Recuperación de Datos  
      - Documentación Técnica  
      - Configuración de Firewalls  
      - Active Directory  
      - Routing y Switching con Cisco`
      ],
      highlights: [
        `
      - Instalación y configuración de redes y servidores en entornos reales, incluyendo sistemas operativos como Windows Server y Linux.
      - Optimización del rendimiento de redes mediante el uso de tecnologías avanzadas de routing y switching.
      - Gestión de la seguridad informática mediante firewalls y soluciones de backup.
      - Desarrollo de habilidades prácticas en el soporte y mantenimiento de equipos informáticos en entornos de trabajo profesionales.
        `
      ],
      responsibilities: [
        `
      - Configurar y administrar redes informáticas, servidores y dispositivos de seguridad.
      - Instalar y mantener sistemas operativos en equipos de trabajo.
      - Gestionar redes locales y realizar tareas de mantenimiento preventivo.
      - Configurar servicios y protocolos como DNS, DHCP y TCP/IP.
      - Asistir en la implementación de soluciones de backup y recuperación ante desastres.
      - Gestionar Active Directory y tareas relacionadas con la administración de usuarios.
        `
      ],
    }
  ];
  