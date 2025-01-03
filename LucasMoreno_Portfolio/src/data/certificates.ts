export interface Certificate {
    title: string;
    provider: string;
    description: string;
    date: string; // Fecha de obtención
    tags: string[];
    logo: string; // Logo del certificado o proveedor
    media: string[];
    certificateUrl?: string; // URL para ver más detalles del certificado
    credentials?: string; //ID credeciales
  }
  
  export const certificates: Certificate[] = [
    {
      title: "BackEnd Development y APIs",
      provider: "freeCodeCamp",
      description: "Certificación que cubre conceptos fundamentales en desarrollo backend, incluyendo el uso de Node.js, Express, y bases de datos como MongoDB, así como la creación y consumo de APIs RESTful.",
      date: "Diciembre 2024",
      tags: ["Back End", "API", "Node.js", "Express", "MongoDB"],
      logo: "/src/data/Certificates/BackEndAPIs/BackEndAPIs.svg",
      media: ["/src/data/Certificates/BackEndAPIs/BackEndAPIs.png"],
      certificateUrl: "https://freecodecamp.org/certification/LucasMorenoDev/back-end-development-and-apis",
      credentials: "lucasmorenodev-bedaa"
    },
    {
      title: "Data Analysis",
      provider: "freeCodeCamp",
      description: "Certificacion que valida conceptos de analizar datos utilizando Python, aplicando herramientas como pandas, numpy y técnicas de visualización para extraer información útil de grandes conjuntos de datos.",
      date: "Noviembre 2024",
      tags: ["Data Analysis", "Python", "pandas", "numpy", "Data Science"],
      logo: "/src/data/Certificates/DataAnalysis/DataAnalysis.svg",
      media: ["/src/data/Certificates/DataAnalysis/DataAnalysis.png"],
      certificateUrl: "https://freecodecamp.org/certification/LucasMorenoDev/data-analysis-with-python-v7",
      credentials: "lucasmorenodev-dawp"
    },
    {
      title: "Data Visualization",
      provider: "freeCodeCamp",
      description: "Certificacion que valida conceptos de visualizar datos de forma interactiva y estática, usando JavaScript y bibliotecas como D3.js, enfocándome en la representación clara y efectiva de la información.",
      date: "Octubre 2024",
      tags: ["Data Visualization", "JavaScript", "D3.js", "Data Representation"],
      logo: "/src/data/Certificates/DataVisualization/DataVisualization.svg",
      media: ["/src/data/Certificates/DataVisualization/DataVisualization.png"],
      certificateUrl: "https://www.freecodecamp.org/certification/LucasMorenoDev/data-visualization",
      credentials: "lucasmorenodev-dv"
    },
    {
      title: "EF SET English",
      provider: "EF SET",
      description: "Certificación de inglés que demuestra un nivel C1 en el examen EF SET, reflejando una alta competencia en comprensión y expresión oral y escrita en inglés.",
      date: "Noviembre 2024",
      tags: ["English", "EF SET", "C1", "English Proficiency"],
      logo: "/src/data/Certificates/EFSET/EFSET.svg",
      media: ["/src/data/Certificates/EFSET/EFSET.png"],
      certificateUrl: "https://cert.efset.org/en/iUxDXs",
      credentials: "iUxDXs"
    },
    {
      title: "Responsive Web Design",
      provider: "freeCodeCamp",
      description: "Certificación que valida mis habilidades en diseño web adaptable, utilizando HTML, CSS y metodologías como Flexbox y CSS Grid, asegurando una experiencia óptima en cualquier dispositivo.",
      date: "Septiembre 2024",
      tags: ["HTML", "CSS", "Responsive Design", "Flexbox", "CSS Grid"],
      logo: "/src/data/Certificates/ResponsiveWebDesign/ResponsiveWebDesign.svg",
      media: ["/src/data/Certificates/ResponsiveWebDesign/ResponsiveWebDesign.png"],
      certificateUrl: "https://freecodecamp.org/certification/LucasMorenoDev/responsive-web-design",
      credentials: "lucasmorenodev-rwd"
    },
    {
      title: "CCNA 2 Routing and Switching",
      provider: "Cisco Networking Academy",
      description: "Curso de la segunda parte del CCNA, centrado en el enrutamiento y conmutación avanzados, incluida la configuración de routers y switches, la implementación de redes y la resolución de problemas.",
      date: "Junio 2020",
      tags: ["CCNA", "Networking", "Routing", "Switching"],
      logo: "/src/data/Certificates/CCNA/CCNA.svg",
      media: ["/src/data/Certificates/CCNA/CCNA2.png"],
    },
    {
      title: "CCNA 1 Routing and Switching",
      provider: "Cisco Networking Academy",
      description: "Curso introductorio al CCNA, cubriendo los fundamentos de redes, configuraciones de routers y switches, y conceptos de seguridad en redes de área local (LAN).",
      date: "Junio 2019",
      tags: ["CCNA", "Networking", "Routing", "Switching"],
      logo: "/src/data/Certificates/CCNA/CCNA.svg",
      media: ["/src/data/Certificates/CCNA/CCNA1.png"],
      credentials: "20027584"
    },
  ];
  
  