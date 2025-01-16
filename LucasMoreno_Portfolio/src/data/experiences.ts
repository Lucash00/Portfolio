export interface Experience {
  id: number;
  title: string;
  provider?: string;
  briefDescription: string;
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
    briefDescription: `Educación autodidacta demostrada mediante diversas certificaciones en áreas como <strong>desarrollo Backend</strong>, <strong>visualización de datos</strong>, <strong>análisis de datos</strong>, <strong>diseño web adaptable</strong>, y habilidades en <strong>inglés</strong>.`,
    description:
      `Educación autodidacta demostrada mediante diversas certificaciones en áreas como <strong>desarrollo Backend</strong>, <strong>visualización de datos</strong>, <strong>análisis de datos</strong>, <strong>diseño web adaptable</strong>, y habilidades en <strong>inglés</strong>.  
       Estas certificaciones reflejan un compromiso continuo con el aprendizaje y la mejora profesional.`,
    startDate: "Sept 2024",
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
          <li>Certificación en <strong>Backend Development</strong> y APIs, con <strong>Node.js</strong>, <strong>Express</strong> y <strong>MongoDB</strong>.</li>
          <li>Certificación en <strong>Data Analysis</strong> con <strong>Python</strong> y bibliotecas como <strong>pandas</strong> y <strong>numpy</strong>.</li>
          <li>Certificación en <strong>Data Visualization</strong> con <strong>JavaScript</strong> y <strong>D3.js</strong>.</li>
          <li>Certificación en <strong>Responsive Web Design</strong>, enfocada en <strong>HTML</strong>, <strong>CSS</strong> y diseño adaptable.</li>
          <li>Certificación de <strong>inglés</strong> con nivel <strong>C1</strong> en EF SET.</li>
        </ul>`
    ],
  },
  {
    id: 3,
    title: "Desarrollador Fullstack en ControlNet",
    provider: "ControlNet",
    briefDescription: `Experiencia Laboral en la que <strong>lideré</strong> y <strong>desarrollé</strong> una aplicación además de contribuir en diversos proyectos en <strong>producción</strong> y en <strong>desarrollo</strong>.  
   Obteniendo así una gran experiencia como desarrollador <strong>FullStack</strong> en un entorno de <strong>trabajo profesional</strong>.`,
    description:
      `Lideré y contribuí en la migración de una aplicación iOS para la inmobiliaria Bafre, implementando <strong>SwiftUI</strong>, <strong>Firebase</strong>, <strong>CocoaPods</strong> y <strong>Git</strong>, así como ajustes en la <strong>API</strong> de la empresa cliente.  
   También trabajé en el diseño <strong>UI/UX</strong> y resolución de problemas de seguridad y diseño en <strong>WordPress</strong>, así como la contribución momentánea en proyectos con <strong>Angular</strong> y un <strong>CRM</strong> en <strong>ASP.NET</strong>.  
   Dando como resultado una gran experiencia como desarrollador <strong>FullStack</strong> en un entorno de trabajo profesional y multidisciplinario.`,

    startDate: "Sept 2023",
    endDate: "Ene 2024",
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
          <li>Completé una <strong>migración compleja</strong> superando los estándares de calidad.</li>
          <li>Colaboré con un equipo multidisciplinario en distintos proyectos.</li>
          <li>Optimizé la <strong>funcionalidad</strong> y <strong>diseño</strong> de aplicaciones existentes y creadas desde 0.</li>
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
    briefDescription: `Formación <strong>Frontend</strong> en diseño, desarrollo y mantenimiento de aplicaciones <strong>web modernas</strong>, obteniendo la capacidad de interpretar y mostrar correctamente los datos.  
   Así como en <strong>Backend</strong> con diversas <strong>tecnologías</strong> y <strong>metodologías de trabajo colaborativo</strong>, obteniendo la capacidad de instalar, configurar y administrar <strong>servidores</strong> y <strong>bases de datos SQL</strong> y <strong>NoSQL</strong>.`,
    description:
      `El programa <em>DAW</em> ofreció una formación completa en el diseño, desarrollo y mantenimiento de aplicaciones web modernas, utilizando un enfoque integral para la programación <strong>Backend</strong> y <strong>Frontend</strong>.  
   A lo largo de dos años, desarrollé competencias avanzadas en el uso de tecnologías clave, <strong>herramientas de desarrollo y metodologías</strong> de trabajo colaborativo, <strong>destacándome en proyectos individuales y en equipo</strong>.  
   Durante mi formación, creé aplicaciones funcionales y escalables que integraban las mejores prácticas de desarrollo web, priorizando la <strong>seguridad</strong>, el <strong>rendimiento</strong> y la <strong>experiencia de usuario</strong>.`,
    startDate: "Sept 2020",
    endDate: "Jul 2022",
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
          <li>Adquirí un dominio avanzado en la creación de interfaces web con <strong>HTML5</strong>, <strong>CSS3</strong> y frameworks como <strong>Bootstrap</strong>, aplicando principios de <strong>diseño responsive</strong> para garantizar compatibilidad en distintos dispositivos.</li>
          <li>Desarrollé aplicaciones dinámicas utilizando <strong>JavaScript</strong>, <strong>TypeScript</strong> y frameworks como <strong>Angular</strong> y <strong>React</strong>, mejorando la interactividad y experiencia de usuario.</li>
          <li>Implementé soluciones <strong>backend</strong> robustas utilizando <strong>PHP</strong>, <strong>Python</strong> y <strong>Django</strong>, integrando bases de datos <strong>SQL</strong> y <strong>NoSQL</strong> según los requisitos de cada proyecto.</li>
          <li>Participé en proyectos colaborativos utilizando sistemas de control de versiones como <strong>Git</strong> y <strong>GitHub</strong>, gestionando de forma eficiente el <strong>ciclo de vida</strong> del desarrollo de software.</li>
          <li>Integré <strong>CMS</strong> populares como <strong>WordPress</strong> y <strong>Joomla</strong> en proyectos prácticos, adaptándolos a necesidades específicas mediante personalización de temas y plugins.</li>
          <li>Automaticé tareas y optimicé procesos utilizando <strong>Python</strong>, aplicando bibliotecas específicas para <strong>procesamiento de datos</strong> y <strong>análisis</strong>.</li>
          <li>Utilicé herramientas como <strong>XAMPP</strong> para configurar entornos de desarrollo local, facilitando pruebas y despliegues.</li>
          <li>Gestioné <strong>servidores</strong> <strong>Linux</strong> para el despliegue de aplicaciones web, asegurando <strong>seguridad</strong> y <strong>estabilidad</strong> en los servicios.</li>
          <li>Realicé análisis y reportes utilizando hojas de cálculo <strong>XLS</strong>, aplicando principios de organización y <strong>visualización de datos</strong>.</li>
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
    briefDescription: `Formación técnica en la <strong>instalación</strong>, <strong>configuración</strong>, <strong>administración</strong> y <strong>mantenimiento</strong> de <strong>sistemas informáticos y redes</strong>.  
   Aprendí a gestionar <strong>infraestructuras de TI</strong>, resolver problemas de <strong>hardware</strong> y <strong>software</strong>, y algunos aspectos de <strong>ciberseguridad</strong>.`,
    description:
      `El ciclo formativo de <em>SMR</em> me brindó una formación técnica completa en la <strong>instalación</strong>, <strong>configuración</strong>, <strong>administración</strong> y <strong>mantenimiento</strong> de <strong>sistemas informáticos y redes</strong>.  
   Aprendí a gestionar <strong>infraestructuras de TI</strong>, resolver problemas de <strong>hardware</strong> y <strong>software</strong>, y optimizar el rendimiento de <strong>sistemas</strong> y <strong>redes</strong>.  
   Durante el curso, participé en proyectos prácticos que incluyeron, entre otras cosas, la implementación de <strong>redes</strong>, <strong>configuración de servidores</strong>, <strong>gestión de usuarios</strong>, <strong>seguridad informática</strong> y otros aspectos...`,
    startDate: "Sept 2018",
    endDate: "Jul 2020",
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
          <li>Instalación y configuración de <strong>redes</strong> y <strong>servidores</strong> en entornos reales, incluyendo sistemas operativos como <strong>Windows Server</strong> y <strong>Linux</strong>.</li>
          <li>Optimización del rendimiento de <strong>redes</strong> mediante el uso de tecnologías avanzadas de <strong>routing y switching</strong>.</li>
          <li>Gestión de la <strong>seguridad</strong> informática mediante <strong>firewalls</strong> y soluciones de <strong>backup</strong>.</li>
          <li>Desarrollo de habilidades prácticas en el <strong>soporte</strong> y <strong>mantenimiento</strong> de equipos informáticos en entornos de trabajo profesionales.</li>
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
