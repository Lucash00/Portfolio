// src/data/projects.ts
const bafreMediaFolder = "/src/data/BafreMedia";

export interface Project {
  title: string;
  titleJob: string;
  briefDescription: string;
  description: string;
  objective?: string;
  tags: string[];
  projectUrl: string;
  logo: string;
  media: string[];
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
    briefDescription: "Migración y modernización de la aplicación iOS de una reconocida inmobiliaria, Bafre, utilizando SwiftUI y mejorando la funcionalidad y experiencia del usuario.",
    description: "Durante mi estancia en ControlNet, participé en la migración de una aplicación iOS para Bafre, una reconocida inmobiliaria. La aplicación original tenía un código base de 10 años de antigüedad y necesitaba ser actualizada para mejorar su rendimiento y funcionalidad. Utilizamos ingeniería inversa para comprender el código obsoleto y la versión de Android. En un periodo de dos meses, logramos una migración exitosa a SwiftUI. Este proyecto incluyó la integración de nuevas tecnologías y la optimización de la API de Bafre, resultando en una aplicación más moderna y eficiente.\n\nLa aplicación Bafre iOS, desarrollada para una inmobiliaria líder, ofrece una serie de funcionalidades diseñadas para mejorar la experiencia de sus usuarios:\n\nCatálogo: Sistema avanzado de filtrado y búsqueda de inmuebles.\nClientes: Gestión de usuarios, incluyendo proveedores y compradores.\nAsesores: Herramientas para asesores inmobiliarios, permitiendo asesoramiento vía chat, llamadas y correos electrónicos.\nAgenda: Agenda exclusiva para asesores, facilitando el seguimiento de citas y reuniones.\nAuth: Sistema de autenticación y autorización, incluyendo inicio de sesión seguro y gestión de sesiones.\nChats: Comunicación en tiempo real entre clientes y asesores, implementado con Firebase y la API de Bafre.\nInmomatch: Algoritmo de emparejamiento de clientes con inmuebles según sus preferencias, optimizando la gestión del asesoramiento.\nInmuebles: Detalles de los inmuebles, incluyendo citas, localización, imágenes y recorridos virtuales en 360º.\nSideMenu: Menú lateral desplegable para una navegación intuitiva.\nLocation: Integración con Apple Maps y Google Maps para mostrar la localización de los inmuebles.\nVR: Visualización de inmuebles en realidad virtual mediante imágenes 360º.",
    objective: "Actualizar y modernizar la aplicación Bafre iOS para mejorar su rendimiento, seguridad y experiencia de usuario, utilizando tecnologías actuales y facilitando su mantenimiento futuro.",
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
    title: "Bafre iOS",
    titleJob:"Migración de Aplicación Bafre iOS",
    briefDescription: "Migración y modernización de la aplicación iOS de una reconocida inmobiliaria, Bafre, utilizando SwiftUI y mejorando la funcionalidad y experiencia del usuario.",
    description: "Durante mi estancia en ControlNet, participé en la migración de una aplicación iOS para Bafre, una reconocida inmobiliaria. La aplicación original tenía un código base de 10 años de antigüedad y necesitaba ser actualizada para mejorar su rendimiento y funcionalidad. Utilizamos ingeniería inversa para comprender el código obsoleto y la versión de Android. En un periodo de dos meses, logramos una migración exitosa a SwiftUI. Este proyecto incluyó la integración de nuevas tecnologías y la optimización de la API de Bafre, resultando en una aplicación más moderna y eficiente.\n\nLa aplicación Bafre iOS, desarrollada para una inmobiliaria líder, ofrece una serie de funcionalidades diseñadas para mejorar la experiencia de sus usuarios:\n\nCatálogo: Sistema avanzado de filtrado y búsqueda de inmuebles.\nClientes: Gestión de usuarios, incluyendo proveedores y compradores.\nAsesores: Herramientas para asesores inmobiliarios, permitiendo asesoramiento vía chat, llamadas y correos electrónicos.\nAgenda: Agenda exclusiva para asesores, facilitando el seguimiento de citas y reuniones.\nAuth: Sistema de autenticación y autorización, incluyendo inicio de sesión seguro y gestión de sesiones.\nChats: Comunicación en tiempo real entre clientes y asesores, implementado con Firebase y la API de Bafre.\nInmomatch: Algoritmo de emparejamiento de clientes con inmuebles según sus preferencias, optimizando la gestión del asesoramiento.\nInmuebles: Detalles de los inmuebles, incluyendo citas, localización, imágenes y recorridos virtuales en 360º.\nSideMenu: Menú lateral desplegable para una navegación intuitiva.\nLocation: Integración con Apple Maps y Google Maps para mostrar la localización de los inmuebles.\nVR: Visualización de inmuebles en realidad virtual mediante imágenes 360º.",
    objective: "Actualizar y modernizar la aplicación Bafre iOS para mejorar su rendimiento, seguridad y experiencia de usuario, utilizando tecnologías actuales y facilitando su mantenimiento futuro.",
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
    title: "Bafre iOS",
    titleJob:"Migración de Aplicación Bafre iOS",
    briefDescription: "Migración y modernización de la aplicación iOS de una reconocida inmobiliaria, Bafre, utilizando SwiftUI y mejorando la funcionalidad y experiencia del usuario.",
    description: "Durante mi estancia en ControlNet, participé en la migración de una aplicación iOS para Bafre, una reconocida inmobiliaria. La aplicación original tenía un código base de 10 años de antigüedad y necesitaba ser actualizada para mejorar su rendimiento y funcionalidad. Utilizamos ingeniería inversa para comprender el código obsoleto y la versión de Android. En un periodo de dos meses, logramos una migración exitosa a SwiftUI. Este proyecto incluyó la integración de nuevas tecnologías y la optimización de la API de Bafre, resultando en una aplicación más moderna y eficiente.\n\nLa aplicación Bafre iOS, desarrollada para una inmobiliaria líder, ofrece una serie de funcionalidades diseñadas para mejorar la experiencia de sus usuarios:\n\nCatálogo: Sistema avanzado de filtrado y búsqueda de inmuebles.\nClientes: Gestión de usuarios, incluyendo proveedores y compradores.\nAsesores: Herramientas para asesores inmobiliarios, permitiendo asesoramiento vía chat, llamadas y correos electrónicos.\nAgenda: Agenda exclusiva para asesores, facilitando el seguimiento de citas y reuniones.\nAuth: Sistema de autenticación y autorización, incluyendo inicio de sesión seguro y gestión de sesiones.\nChats: Comunicación en tiempo real entre clientes y asesores, implementado con Firebase y la API de Bafre.\nInmomatch: Algoritmo de emparejamiento de clientes con inmuebles según sus preferencias, optimizando la gestión del asesoramiento.\nInmuebles: Detalles de los inmuebles, incluyendo citas, localización, imágenes y recorridos virtuales en 360º.\nSideMenu: Menú lateral desplegable para una navegación intuitiva.\nLocation: Integración con Apple Maps y Google Maps para mostrar la localización de los inmuebles.\nVR: Visualización de inmuebles en realidad virtual mediante imágenes 360º.",
    objective: "Actualizar y modernizar la aplicación Bafre iOS para mejorar su rendimiento, seguridad y experiencia de usuario, utilizando tecnologías actuales y facilitando su mantenimiento futuro.",
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
    title: "Bafre iOS",
    titleJob:"Migración de Aplicación Bafre iOS",
    briefDescription: "Migración y modernización de la aplicación iOS de una reconocida inmobiliaria, Bafre, utilizando SwiftUI y mejorando la funcionalidad y experiencia del usuario.",
    description: "Durante mi estancia en ControlNet, participé en la migración de una aplicación iOS para Bafre, una reconocida inmobiliaria. La aplicación original tenía un código base de 10 años de antigüedad y necesitaba ser actualizada para mejorar su rendimiento y funcionalidad. Utilizamos ingeniería inversa para comprender el código obsoleto y la versión de Android. En un periodo de dos meses, logramos una migración exitosa a SwiftUI. Este proyecto incluyó la integración de nuevas tecnologías y la optimización de la API de Bafre, resultando en una aplicación más moderna y eficiente.\n\nLa aplicación Bafre iOS, desarrollada para una inmobiliaria líder, ofrece una serie de funcionalidades diseñadas para mejorar la experiencia de sus usuarios:\n\nCatálogo: Sistema avanzado de filtrado y búsqueda de inmuebles.\nClientes: Gestión de usuarios, incluyendo proveedores y compradores.\nAsesores: Herramientas para asesores inmobiliarios, permitiendo asesoramiento vía chat, llamadas y correos electrónicos.\nAgenda: Agenda exclusiva para asesores, facilitando el seguimiento de citas y reuniones.\nAuth: Sistema de autenticación y autorización, incluyendo inicio de sesión seguro y gestión de sesiones.\nChats: Comunicación en tiempo real entre clientes y asesores, implementado con Firebase y la API de Bafre.\nInmomatch: Algoritmo de emparejamiento de clientes con inmuebles según sus preferencias, optimizando la gestión del asesoramiento.\nInmuebles: Detalles de los inmuebles, incluyendo citas, localización, imágenes y recorridos virtuales en 360º.\nSideMenu: Menú lateral desplegable para una navegación intuitiva.\nLocation: Integración con Apple Maps y Google Maps para mostrar la localización de los inmuebles.\nVR: Visualización de inmuebles en realidad virtual mediante imágenes 360º.",
    objective: "Actualizar y modernizar la aplicación Bafre iOS para mejorar su rendimiento, seguridad y experiencia de usuario, utilizando tecnologías actuales y facilitando su mantenimiento futuro.",
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
    title: "Project Two",
    titleJob: "Project Two",
    briefDescription: "Brief description of the second project.",
    description: "Detailed description of the second project.",
    objective: "Main purpose of the project.",
    tags: ["HTML", "CSS", "JavaScript"],
    projectUrl: "https://example.com/project-two",
    logo: "",
    media: ["/path/to/image2.jpg"],
    links: {
      website: "https://example.com",
      codeRepository: "https://github.com/example/project-two",
      downloads: ["https://example.com/download"],
      documentation: "https://example.com/documentation",
    },
    team: {
      contributors: [
        { name: "Charlie Davis", role: "Lead Developer" },
        { name: "Dana Lee", role: "QA Engineer" },
      ],
      externalCollaborators: [
        { name: "Freelance Designer", role: "UI/UX Designer" },
      ],
    },
    developmentProcess: {
      methodology: "Waterfall",
      timeline: "Mar 2022 - Oct 2022",
    },
    company: "InnovateTech",
  },
  {
    title: "Project Four",
    titleJob: "Project Four",
    briefDescription: "Brief description of the fourth project.",
    description: "Detailed description of the fourth project.",
    objective: "Main purpose of the project.",
    tags: ["HTML", "CSS", "JavaScript"],
    projectUrl: "https://example.com/project-four",
    logo: "",
    media: ["/path/to/image2.jpg"],
    links: {
      website: "https://example.com",
      codeRepository: "https://github.com/example/project-four",
      downloads: ["https://example.com/download"],
      documentation: "https://example.com/documentation",
    },
    team: {
      contributors: [
        { name: "Eve White", role: "Product Owner" },
        { name: "Frank Black", role: "Backend Developer" },
      ],
      externalCollaborators: [
        { name: "Consulting Firm", role: "Business Analyst" },
      ],
    },
    developmentProcess: {
      methodology: "Kanban",
      timeline: "Apr 2022 - Sep 2022",
    },
    company: "NextGen Solutions",
  },
  // Otros proyectos
];
