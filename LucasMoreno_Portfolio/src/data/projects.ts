// src/data/projects.ts
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
      methodology: "Autodidacta",
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
      methodology: "Autodidacta",
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
      methodology: "Autodidacta",
      timeline: "Jun 2023 - Nov 2023"
    },
    company: "Autodidacta"
  }
];
