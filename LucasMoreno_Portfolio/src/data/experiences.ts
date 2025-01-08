export interface Experience {
    id: number;
    title: string;
    provider?: string;
    briefDescription:string;
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
      id: 4,
      title: "Certificados",
      briefDescription: `Educación autodidacta demostrada mediante diversas certificaciones en áreas como **desarrollo Backend**, **visualización de datos**, **análisis de datos**, **diseño web adaptable**, y habilidades en **inglés**.`,
      description:
        `Educación autodidacta demostrada mediante diversas certificaciones en áreas como **desarrollo Backend**, **visualización de datos**, **análisis de datos**, **diseño web adaptable**, y habilidades en **inglés**.  
        Estas certificaciones reflejan un compromiso continuo con el aprendizaje y la mejora profesional.`,
      startDate: "2024-09-01",
      endDate: "Actualidad",
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
          <li>Certificación en **Backend Development y APIs**, con **Node.js**, **Express** y **MongoDB**.</li>
          <li>Certificación en **Data Analysis** con **Python** y bibliotecas como **pandas** y **numpy**.</li>
          <li>Certificación en **Data Visualization** con **JavaScript** y **D3.js**.</li>
          <li>Certificación en **Responsive Web Design**, enfocada en **HTML**, **CSS** y diseño adaptable.</li>
          <li>Certificación de **inglés** con nivel **C1** en EF SET.</li>
        </ul>`
      ],
    },
    {
      id: 3,
      title: "Desarrollador Fullstack en ControlNet",
      provider: "ControlNet",
      briefDescription: `Experiencia Laboral en la que **lideré** y **desarrolle** una aplicación además de contribuir en diversos proyectos en **producción** y en **desarrollo**.
      Obteniendo así una gran experiencia como desarrollador **FullStack** en un entorno de **trabajo profesional**.`,
      description:
        `Lideré y contribuí en la migración de una aplicación iOS para la inmobiliaria Bafre, implementando **SwiftUI**, **Firebase**, **CocoaPods** y **Git** así como la ajustes en la **API** de la empresa cliente.  
        También trabajé en el diseño **UI/UX** y resolución de problemas de seguridad y diseño en **WordPress**, así como la contribución momentanea en proyectos con **Angular** y un **CRM** en **ASP.NET**.  
        Dando como resultado una gran experiencia como desarrollador **FullStack** en un entorno de trabajo profesional y multidisciplinario.`,
      startDate: "2023-09-01",
      endDate: "2023-12-23",
      location: "Jerez de la Frontera, Cádiz, España",
      tags: ["Swift", "Firebase", "CocoaPods", "Git", "UI/UX", "Angular", "ASP.NET"],
      logo: "https://example.com/logo-controlnet.png",
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
          <li>Completé una **migración compleja** superando los estándares de calidad.</li>
          <li>Colaboré con un equipo multidisciplinario en distintos proyectos.</li>
          <li>Optimizé la **funcionalidad** y **diseño** de aplicaciones existentes y creadas desde 0.</li>
        </ul>`
      ],
      responsibilities: [
        `<ul>
          <li>Migración de aplicaciones iOS.</li>
          <li>Diseño y optimización de UI/UX.</li>
          <li>Resolución de problemas técnicos en aplicaciones web.</li>
        </ul>`
      ],
      
    },
    {
      id: 2,
      title: "Tecnico Superior en Desarrollo de Aplicaciones Web",
      provider: "IES Francisco Romero Vargas",
      briefDescription: `Formación **Frontend** en diseño, desarrollo y mantenimiento de aplicaciones **web modernas**, obteniendo la capacidad de interpretar y mostrar correctamente los datos.  
      Así como en **BackEnd** con diversas **tecnologías** y **metodologías de trabajo colaborativo**, obteniendo la capacidad de instalar configurar y administrar **servidores** y **bases de datos SQL** y **NoSQL**.`,
      description:
        `El programa _DAW_ ofreció una formación completa en el diseño, desarrollo y mantenimiento de aplicaciones web modernas, utilizando un enfoque integral para la programación **Backend** y **Frontend**.  
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
        `<ul>
          <li>Desarrollo Web</li>
          <li>Frontend Development</li>
          <li>Backend Development</li>
          <li>Bases de Datos</li>
          <li>Bases de Datos NoSQL</li>
          <li>Control de Versiones con Git</li>
          <li>Integración de APIs</li>
          <li>Optimización de Performance</li>
          <li>Responsive Web Design</li>
          <li>Seguridad Web</li>
          <li>UI/UX Design</li>
          <li>Desarrollo con Angular y React</li>
          <li>Automatización con Python y Django</li>
          <li>Gestión de Servidores con Linux</li>
          <li>Manejo de datos con XLS</li>
          <li>Configuración de entornos con XAMPP</li>
        </ul>`
      ],
      highlights: [
        `<ul>
          <li>Adquirí un dominio avanzado en la creación de interfaces web con **HTML5**, **CSS3** y frameworks como **Bootstrap**, aplicando principios de **diseño responsive** para garantizar compatibilidad en distintos dispositivos.</li>
          <li>Desarrollé aplicaciones dinámicas utilizando **JavaScript**, **TypeScript** y frameworks como **Angular** y **React**, mejorando la interactividad y experiencia de usuario.</li>
          <li>Implementé soluciones **backend** robustas utilizando **PHP**, **Python** y **Django**, integrando bases de datos **SQL** y **NoSQL** según los requisitos de cada proyecto.</li>
          <li>Participé en proyectos colaborativos utilizando sistemas de control de versiones como **Git** y **GitHub**, gestionando de forma eficiente el **ciclo de vida** del desarrollo de software.</li>
          <li>Integré **CMS** populares como **WordPress** y **Joomla** en proyectos prácticos, adaptándolos a necesidades específicas mediante personalización de temas y plugins.</li>
          <li>Automaticé tareas y optimicé procesos utilizando **Python**, aplicando bibliotecas específicas para **procesamiento de datos** y **análisis**.</li>
          <li>Utilicé herramientas como **XAMPP** para configurar entornos de desarrollo local, facilitando pruebas y despliegues.</li>
          <li>Gestioné **servidores** **Linux** para el despliegue de aplicaciones web, asegurando **seguridad** y **estabilidad** en los servicios.</li>
          <li>Realicé análisis y reportes utilizando hojas de cálculo **XLS**, aplicando principios de organización y **visualización de datos**.</li>
        </ul>`
      ],
      responsibilities: [
        `<ul>
          <li>Desarrollar aplicaciones web completas desde el diseño inicial hasta el despliegue.</li>
          <li>Garantizar la seguridad y optimización del código, siguiendo buenas prácticas como validación de entradas y codificación de salidas.</li>
          <li>Configurar y gestionar entornos de desarrollo locales y en servidores Linux.</li>
          <li>Colaborar en equipos multidisciplinarios para cumplir con los objetivos de proyectos prácticos.</li>
          <li>Documentar procesos de desarrollo y guías técnicas para proyectos implementados.</li>
        </ul>`
      ],
      
      media: [
        "/src/assets/projects/daw-project-1.png",
        "/src/assets/projects/daw-project-2.png",
      ],
    },
    {
      id: 1,
      title: "Tecnico en Sistemas Microinformaticos y Redes",
      provider: "IES Castillo de Luna",
      briefDescription: `Formación técnica en la **instalación**, **configuración**, **administración** y **mantenimiento** de **sistemas informáticos y redes**.
      Aprendí a gestionar **infraestructuras de TI**, resolver problemas de **hardware** y **software**, y algunos aspectos de **ciberseguridad**.`,
      description:
        `El ciclo formativo de _SMR_ me brindó una formación técnica completa en la **instalación**, **configuración**, **administración** y **mantenimiento** de **sistemas informáticos y redes**.  
        Aprendí a gestionar **infraestructuras de TI**, resolver problemas de **hardware** y **software**, y optimizar el rendimiento de **sistemas** y **redes**.  
        Durante el curso, participé en proyectos prácticos que incluyeron entre otras cosas la implementación de **redes**, **configuración de servidores**, **gestión de usuarios**, **seguridad informática** y otros aspectos...`,
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
        `<ul>
          <li>Administración de Redes</li>
          <li>Instalación de Sistemas Operativos</li>
          <li>Resolución de Problemas de Hardware</li>
          <li>Gestión de Servidores</li>
          <li>Seguridad de Redes</li>
          <li>Configuración de Servicios TCP/IP</li>
          <li>Virtualización</li>
          <li>Backups y Recuperación de Datos</li>
          <li>Documentación Técnica</li>
          <li>Configuración de Firewalls</li>
          <li>Active Directory</li>
          <li>Routing y Switching con Cisco</li>
        </ul>`
      ],
      highlights: [
        `<ul>
          <li>Instalación y configuración de **redes** y **servidores** en entornos reales, incluyendo sistemas operativos como **Windows Server** y **Linux**.</li>
          <li>Optimización del rendimiento de **redes** mediante el uso de tecnologías avanzadas de **routing y switching**.</li>
          <li>Gestión de la **seguridad** informática mediante **firewalls** y soluciones de **backup**.</li>
          <li>Desarrollo de habilidades prácticas en el **soporte** y **mantenimiento** de equipos informáticos en entornos de trabajo profesionales.</li>
        </ul>`
      ],
      responsibilities: [
        `<ul>
          <li>Configurar y administrar redes informáticas, servidores y dispositivos de seguridad.</li>
          <li>Instalar y mantener sistemas operativos en equipos de trabajo.</li>
          <li>Gestionar redes locales y realizar tareas de mantenimiento preventivo.</li>
          <li>Configurar servicios y protocolos como DNS, DHCP y TCP/IP.</li>
          <li>Asistir en la implementación de soluciones de backup y recuperación ante desastres.</li>
          <li>Gestionar Active Directory y tareas relacionadas con la administración de usuarios.</li>
        </ul>`
      ],      
    }
  ];
  