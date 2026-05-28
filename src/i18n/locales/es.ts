/**
 * Catálogo en español (idioma por defecto).
 * Añade `en.ts`, `fr.ts`, etc. con la misma estructura cuando traduzcas.
 */
export const es = {
  meta: {
    siteTitle: "Portfolio Lucas Moreno",
  },
  language: {
    label: "Idioma",
    es: "Español",
    en: "Inglés",
    fr: "Francés",
    it: "Italiano",
    de: "Alemán",
    pl: "Polaco",
    comingSoon: "Próximamente",
  },
  nav: {
    home: "Inicio",
    projects: "Proyectos",
    certificates: "Certificados",
    experience: "Experiencia",
    about: "Sobre mí",
    downloadCv: "Descargar CV",
    toggleMenu: "Abrir o cerrar menú",
    profilePhoto: "Foto de perfil",
    aboutAria: "Sobre mí",
  },
  hero: {
    introPrefix: "Hey! Soy ",
    introName: "Lucas Moreno",
    introMiddle: ", un Desarrollador Web ",
    introVersatile: "versátil",
    introRest: " con una sólida base en diversas ",
    introTechnologies: "tecnologías",
    locationCity: "Cádiz",
    locationCountry: "España",
    technologiesTitle: "Tecnologías",
    rotator: {
      developer: "Desarrollador ",
      devops: "DevOps",
      specialties: {
        fullstack: "Fullstack",
        backend: "Backend",
        frontend: "Frontend",
      },
    },
  },
  home: {
    experiences: {
      title: "Experiencias",
      description:
        "Un vistazo rápido a mis experiencias laborales, formación y evolución en el sector.",
    },
    projects: {
      title: "Proyectos",
      description:
        "Proyectos destacados con enfoque práctico en desarrollo frontend, backend y despliegue.",
    },
    viewMore: "Ver más",
  },
  pages: {
    projects: {
      title: "Proyectos",
      description:
        "Aquí encontrarás mis trabajos más representativos, su enfoque y las tecnologías utilizadas.",
    },
    certificates: {
      title: "Certificados",
      description:
        "Certificaciones y formación complementaria que respaldan mi perfil técnico.",
    },
    experience: {
      title: "Experiencia",
      subtitle:
        "Mis experiencias laborales, aprendizaje autodidacta y formación en el sector tecnológico.",
    },
  },
  contact: {
    title: "Contacto",
    intro:
      "¿Tienes un proyecto en mente o quieres hablar de una posible colaboración? Escríbeme con el formulario o contáctame por cualquiera de mis canales.",
    formTitle: "Envíame un mensaje",
    infoTitle: "Información de contacto",
    infoText:
      "Siempre estoy abierto a nuevos proyectos, ideas creativas u oportunidades profesionales.",
    email: "Email",
    location: "Ubicación",
    locationValue: "Cádiz, España",
    socialTitle: "Redes y enlaces",
    form: {
      hiddenSubject: "Nuevo mensaje desde el portfolio",
      nameLabel: "Tu nombre",
      namePlaceholder: "Lucas Moreno",
      emailLabel: "Tu email",
      emailPlaceholder: "tu@email.com",
      phoneLabel: "Teléfono",
      phoneOptional: "(opcional)",
      phonePlaceholder: "+34 600 000 000",
      subjectLabel: "Motivo del mensaje",
      selectPlaceholder: "Selecciona una opción",
      messageLabel: "Tu mensaje",
      messagePlaceholder: "Hola, me gustaría hablar sobre...",
      submit: "Enviar mensaje",
      sending: "Enviando...",
      subjects: {
        project: "Proyecto o encargo",
        collaboration: "Colaboración",
        job: "Oportunidad laboral",
        inquiry: "Consulta general",
        other: "Otro",
      },
      success: "¡Mensaje enviado! Te responderé lo antes posible.",
      error:
        "No se pudo enviar el mensaje. Prueba de nuevo o escríbeme por correo directamente.",
    },
  },
  footer: {
    aria: "Pie de página",
    role: "Desarrollador Web · Cádiz, España",
    navAria: "Enlaces del pie de página",
    rights: "Todos los derechos reservados.",
  },
  about: {
    clickHint: "Click me!",
    greeting: "Hola, soy",
    name: "Lucas Moreno",
    pageTitle: "Sobre mí",
    paragraphs: {
      p1: 'Soy desarrollador web apasionado por la creación de experiencias digitales únicas, funcionales y centradas en el usuario. Mi enfoque combina <strong>FrontEnd</strong>, <strong>BackEnd</strong> y <strong>DevOps</strong>, lo que me permite abordar proyectos de manera integral: desde la concepción de interfaces <strong>atractivas</strong> y <strong>responsive</strong>, hasta la implementación de sistemas <strong>robustos</strong>, <strong>escalables</strong> y con despliegues <strong>eficientes</strong>.',
      p2: 'Mi compromiso con la excelencia técnica se refleja en cada detalle: <strong>diseño intuitivo</strong>, <strong>análisis de datos</strong>, <strong>optimización de rendimiento</strong>, <strong>automatización</strong> y una <strong>comunicación fluida</strong> que garantiza que cada proyecto alcance su máximo potencial. Soy <strong>adaptable</strong> a las necesidades de cada equipo y contexto, y la curiosidad me impulsa a seguir creciendo y a transformar ideas en soluciones tecnológicas reales.',
      p3: "Cuando no estoy programando, disfruto aprendiendo sobre tendencias emergentes, perfeccionando mi conocimiento en desarrollo y DevOps, y explorando cómo la tecnología puede impactar positivamente.",
    },
  },
  experienceType: {
    Trabajo: "Trabajo",
    Educacion: "Educación",
    Personal: "Personal",
    Voluntario: "Voluntario",
  },
  project: {
    selfTaught: "Autodidacta",
    sections: {
      objective: "Objetivo",
      team: "Equipo",
      process: "Proceso",
      methodology: "Metodología",
    },
    links: {
      viewProject: "Ver Proyecto",
      viewCode: "Ver Código",
    },
  },
  experience: {
    current: "Actualidad",
    sections: {
      highlights: "Aspectos destacados",
      responsibilities: "Responsabilidades",
      skills: "Habilidades",
      type: "Tipo",
      location: "Ubicación",
      links: "Enlaces",
    },
    links: {
      viewCompany: "Ver empresa",
    },
  },
  certificate: {
    viewCertificate: "Ver certificado",
    credentials: "Credenciales",
  },
} as const;

export type Messages = typeof es;
