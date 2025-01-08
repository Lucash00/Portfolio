// src/data/projects.ts
const bafreMediaFolder = "/src/data/BafreMedia";
const la11milMediaFolder = "/src/data/la11mil";

export interface Project {
  title: string;
  titleJob: string;
  briefDescription: string;
  description: string;
  objective: string;
  startDate: string;
  endDate: string;
  tags: string[];
  projectUrl?: string;
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

// Unificamos los proyectos en un solo array
export const projects: Project[] = [
  {
    title: "Bafre iOS",
    titleJob:"Migración de Aplicación Bafre iOS",
    briefDescription: "**Migración** y modernización de la aplicación **iOS** de una reconocida inmobiliaria internacional, **Bafre**, utilizando **SwiftUI** y mejorando la funcionalidad y experiencia del usuario.",
    description: `Durante mi estancia en **ControlNet**, Lideré y desarrollé la **migración** de una aplicación **iOS** para **Bafre**, una reconocida inmobiliaria internacional. La aplicación original tenía un código obsoleto de 10 años de antigüedad y necesitaba ser **actualizada** para **mejorar su rendimiento** y **funcionalidad**.\n\nMediante ingeniería inversa comprendimos el código obsoleto y la versión de **Android**. En un periodo de **2 meses**, logramos una migración exitosa a **SwiftUI**. Este proyecto incluyó la integración de nuevas tecnologías y la **optimización de la API** de Bafre, resultando en una aplicación más moderna y eficiente.\n\nLa aplicación Bafre iOS, desarrollada para una inmobiliaria líder, ofrece una serie de funcionalidades diseñadas para mejorar la **experiencia de sus usuarios**:
    <ul>
    <li>**Catálogo**: Sistema avanzado de filtrado y búsqueda de inmuebles.
    <li>**Clientes**: Gestión de usuarios, incluyendo proveedores y compradores.
    <li>**Asesores**: Herramientas para asesores inmobiliarios, permitiendo asesoramiento vía chat, llamadas y correos electrónicos.
    <li>**Agenda**: Agenda exclusiva para asesores, facilitando el seguimiento de citas y reuniones.
    <li>**Auth**: Sistema de autenticación y autorización, incluyendo inicio de sesión seguro y gestión de sesiones.
    <li>**Chats**: Comunicación en tiempo real entre clientes y asesores, implementado con Firebase y la API de Bafre.
    <li>**Inmomatch**: Algoritmo de emparejamiento de clientes con inmuebles según sus preferencias, optimizando la gestión del asesoramiento.
    <li>**Inmuebles**: Detalles de los inmuebles, incluyendo citas, localización, imágenes y recorridos virtuales en 360º.
    <li>**SideMenu**: Menú lateral desplegable para una navegación intuitiva.
    <li>**Location**: Integración con Apple Maps y Google Maps para mostrar la localización de los inmuebles.
    <li>**VR**: Visualización de inmuebles en realidad virtual mediante imágenes 360º.
    <ul/>`,
    objective: "Migración completa de la Aplicación. Actualizar y modernizar la aplicación Bafre iOS para **mejorar su rendimiento**, **seguridad** y **experiencia de usuario**, utilizando tecnologías actuales y **facilitando su mantenimiento** futuro.",
    startDate:"Jan 2022",
    endDate:"Dec 2022",
    tags: [
      "Swift",
      "SwiftUI",
      "Xcode",
      "Firebase",
      "CocoaPods",
      "API Integration",
      "Mobile Development"
    ],
    projectUrl: "https://example.com/project-one",
    logo:`${bafreMediaFolder}/logo.png`,
    media: [
      `${bafreMediaFolder}/1.png`,
      `${bafreMediaFolder}/2.png`,
      `${bafreMediaFolder}/3.png`,
      `${bafreMediaFolder}/4.png`,
      `${bafreMediaFolder}/5.png`,
      `${bafreMediaFolder}/6.png`,
      `${bafreMediaFolder}/7.png`,
      `${bafreMediaFolder}/8.png`,
      `${bafreMediaFolder}/9.png`,
      `${bafreMediaFolder}/10.png`,
    ],
    links: {
      website: "https://example.com",
      codeRepository: "https://github.com/example/bafre",
      downloads: ["https://example.com/download"],
      documentation: "https://example.com/documentation"
    },
    team: {
      contributors: [
        { name: "Lucas Moreno", role: "Desarrollador Fullstack Lider" },
        { name: "Victor Lillo Godoy", role: "Desarrollador Fullstack" }
      ],
      externalCollaborators: [
        { name: "External Collaborator", role: "Consultant" }
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
    briefDescription: "Mejora de la **funcionalidad** y **seguridad** de la página web **La 11mil**, incluyendo **limpieza de malwares**, **optimización** de rendimiento y mejoras en la **lógica de funcionamiento** de varios apartados.",
    description: "En este proyecto, me encargué de mejorar varios aspectos de la página web **La 11mil**, desarrollada en **WordPress**.\n\nDurante mi intervención, realicé cambios en la **lógica de funcionamiento** de diferentes apartados de la página para mejorar la **experiencia del usuario**, así como optimicar la implementación de medios (imágenes, vídeos, etc.) para **reducir los tiempos de carga** y mejorar la **accesibilidad**.\n\nTras identificar que la página estaba comprometida debido a la presencia de **malwares**, procedí a realizar una **limpieza exhaustiva** para eliminar los virus y **asegurar el sistema**. Esto permitió reactivar el DNS, que previamente había sido bloqueado debido a la infección.\n\nPosteriormente, reforcé las **medidas de seguridad** del sitio web, implementando mejores prácticas para **evitar futuros ataques**, y volví a poner la página en producción con un **rendimiento mejorado** y **sin riesgos de seguridad**.",
    objective: "**Optimizar** el rendimiento de la página web, mejorar la **seguridad** eliminando malwares y asegurando el sitio para su funcionamiento continuo, y realizar ajustes en la lógica de funcionamiento para **mejorar experiencia del usuario**.",
    startDate:"Oct 2023",
    endDate:"Oct 2023",
    tags: [
      "WordPress",
      "Seguridad Web",
      "Optimización de Rendimiento",
      "Limpieza de Malwares",
      "PHP",
      "MySQL",
      "DNS"
    ],
    projectUrl: "https://la11mil.es/",
    logo: `${la11milMediaFolder}/logo.png`, // Asegúrate de actualizar la ruta del logo
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
      codeRepository: "https://github.com/example/la11mil", // Si tienes repositorio de código
      downloads: [], // Si hay archivos descargables
      documentation: "https://example.com/la11mil-docs" // Si hay documentación adicional
    },
    team: {
      contributors: [
        { name: "Lucas Moreno", role: "Desarrollador Fulstack" },
        { name: "Victor Lillo Godoy", role: "Desarrollador Fulstack" }
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
    briefDescription: "Contribución en la **corrección de errores** y **mejora de funcionalidad** de un CRM en producción usnado **ASP.NET**, con el objetivo de garantizar su funcionamiento sin problemas.",
    description: "En este proyecto, participé en varias **correcciones de problemas de funcionalidad** en un CRM realizado en **ASP.NET** que llevaba años en producción.\n\nA pesar de que el sistema funcionaba en su mayoría correctamente, algunas funcionalidades clave presentaban errores que afectaban la **experiencia del usuario** y la **eficiencia operativa**.\n\nMi trabajo consistió en analizar el sistema para **identificar los errores** y solucionarlos de manera que el CRM siguiera completamente funcional. Trabajamos en la **corrección de bugs**, la mejora de la **lógica de negocio** y en la **optimización** de ciertos **procesos internos del sistema** para asegurar su **estabilidad** y continuidad en producción.\n\n_No se puede mostrar el código ni el Link por Proteccion de Datos_",
    objective: "Corregir los errores de funcionalidad presentes en el CRM, asegurando su **estabilidad** y **eficiencia** para que siga operando sin interrupciones.",
    startDate:"Sep 2023",
    endDate:"Oct 2023",
    tags: [
      "CRM",
      "PHP",
      "MySQL",
      "Debugging",
      "Mantenimiento de Software",
      "Optimización",
      "Corrección de Errores"
    ],
    logo: "/src/data/CRM/logo.png",
    team: {
      contributors: [
        { name: "Lucas Moreno", role: "Desarrollador Web" }
      ],
      externalCollaborators: [] // Si hubo colaboradores externos, añadir aquí
    },
    developmentProcess: {
      methodology: "Agile", // Si se usó una metodología ágil, de lo contrario, puedes dejarlo vacío
      timeline: "Sep 2023 - Oct 2023"
    },
    company: "ControlNet SL"
  },
  {
    title: "MoviesDetails",
    titleJob: "Catálogo de Películas",
    briefDescription: "Catálogo de películas interactivo que se actualiza automáticamente, mostrando diferentes secciones de películas, géneros, trailers, sinopsis y reparto.",
    description: "El proyecto 'MoviesDetails' es un catálogo de películas que se actualiza automáticamente mediante la API TMDb. Este proyecto fue realizado completamente desde cero con React para aprender la tecnología de manera autodidacta. A través de este proyecto, implementé una estructura que incluye diversas secciones para películas, géneros, y más. Cada película cuenta con su propio trailer, sinopsis y reparto. La API TMDb permite obtener los datos de manera continua, garantizando que la información siempre esté actualizada. Este proyecto me permitió aplicar mis conocimientos de React y mejorar mi entendimiento de cómo interactuar con APIs externas.",
    objective: "Crear un catálogo interactivo de películas con datos actualizados de manera continua, utilizando React y la API TMDb para obtener la información de las películas, trailers, géneros y demás.",
    startDate:"Jan 2023",
    endDate:"Abr 2023",
    tags: ["React", "TMDb API", "JavaScript", "Movie Catalog", "API Integration"],
    projectUrl: "https://example.com/moviesdetails", // Agrega la URL si la tienes
    logo: "/src/data/CRM/logo.png", // Coloca la ruta de tu logo
    media: [
      "/path/to/image1.png", // Coloca las rutas de las imágenes
      "/path/to/image2.png"
    ],
    links: {
      codeRepository: "https://github.com/username/moviesdetails", // Reemplaza con tu repositorio
      documentation: "https://example.com/docs" // Agrega la URL si tienes documentación
    },
    team: {
      contributors: [
        { name: "Lucas Moreno", role: "Desarrollador Principal" }
      ]
    },
    developmentProcess: {
      methodology: "Autodidacta",
      timeline: "Enero 2023 - Marzo 2023"
    }
  }
  
  

  // Otros proyectos
];
