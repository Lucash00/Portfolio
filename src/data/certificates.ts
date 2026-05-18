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
      description: "Certificación que cubre conceptos fundamentales en <strong>desarrollo backend</strong>, incluyendo el uso de <strong>Node.js</strong>, <strong>Express</strong>, y bases de datos como <strong>MongoDB</strong>, así como la creación y consumo de <strong>APIs RESTful</strong>.",
      date: "Diciembre 2024",
      tags: ["Back End", "API", "Node.js", "Express", "MongoDB"],
      logo: "/Certificates/BackEndAPIs/BackEndAPIs.svg",
      media: ["/Certificates/BackEndAPIs/BackEndAPIs.png"],
      certificateUrl: "https://freecodecamp.org/certification/LucasMorenoDev/back-end-development-and-apis",
      credentials: "lucasmorenodev-bedaa"
    },
    {
      title: "Data Analysis",
      provider: "freeCodeCamp",
      description: "Certificación que valida conceptos de analizar datos utilizando <strong>Python</strong>, aplicando herramientas como <strong>pandas</strong>, <strong>numpy</strong> y <strong>técnicas de visualización</strong> para extraer información útil de grandes conjuntos de datos.",
      date: "Noviembre 2024",
      tags: ["Data Analysis", "Python", "pandas", "numpy", "Data Science"],
      logo: "/Certificates/DataAnalysis/DataAnalysis.svg",
      media: ["/Certificates/DataAnalysis/DataAnalysis.png"],
      certificateUrl: "https://freecodecamp.org/certification/LucasMorenoDev/data-analysis-with-python-v7",
      credentials: "lucasmorenodev-dawp"
    },
    {
      title: "Data Visualization",
      provider: "freeCodeCamp",
      description: "Certificación que valida conceptos de visualizar datos de forma <strong>interactiva</strong> y <strong>estática</strong>, usando <strong>JavaScript</strong> y bibliotecas como <strong>D3.js</strong>, enfocándome en la representación clara y efectiva de la información.",
      date: "Octubre 2024",
      tags: ["Data Visualization", "JavaScript", "D3.js", "Chart.js", "Data Representation"],
      logo: "/Certificates/DataVisualization/DataVisualization.svg",
      media: ["/Certificates/DataVisualization/DataVisualization.png"],
      certificateUrl: "https://www.freecodecamp.org/certification/LucasMorenoDev/data-visualization",
      credentials: "lucasmorenodev-dv"
    },
    {
      title: "EF SET English",
      provider: "EF SET",
      description: "Certificación de inglés que demuestra un nivel general <strong>C1</strong> en el examen <strong>EF SET</strong>, reflejando una alta competencia en comprensión y expresión escrita en inglés.",
      date: "Noviembre 2024",
      tags: ["English", "EF SET", "C1", "English Proficiency"],
      logo: "/Certificates/EFSET/EFSET.svg",
      media: ["/Certificates/EFSET/EFSET.png"],
      certificateUrl: "https://cert.efset.org/en/iUxDXs",
      credentials: "iUxDXs"
    },
    {
      title: "Responsive Web Design",
      provider: "freeCodeCamp",
      description: "Certificación que valida mis habilidades en <strong>diseño web adaptable</strong>, utilizando <strong>HTML</strong>, <strong>CSS</strong> y metodologías como <strong>Flexbox</strong> y <strong>CSS Grid</strong>, asegurando una experiencia óptima en cualquier dispositivo.",
      date: "Septiembre 2024",
      tags: ["HTML", "CSS", "Responsive Design", "Flexbox", "CSS Grid"],
      logo: "/Certificates/ResponsiveWebDesign/ResponsiveWebDesign.svg",
      media: ["/Certificates/ResponsiveWebDesign/ResponsiveWebDesign.png"],
      certificateUrl: "https://freecodecamp.org/certification/LucasMorenoDev/responsive-web-design",
      credentials: "lucasmorenodev-rwd"
    },
    {
      title: "CCNA 2 Routing and Switching",
      provider: "Cisco Networking Academy",
      description: "Curso de la segunda parte del <strong>CCNA</strong>, centrado en el <strong>enrutamiento</strong> y <strong>conmutación</strong> avanzados, incluida la configuración de <strong>routers</strong> y <strong>switches</strong>, la <strong>implementación de redes</strong> y la <strong>resolución de problemas</strong>.",
      date: "Junio 2020",
      tags: ["CCNA", "Networking", "Routing", "Switching"],
      logo: "/Certificates/CCNA/CCNA.svg",
      media: ["/Certificates/CCNA/CCNA2.png"]
    },
    {
      title: "CCNA 1 Routing and Switching",
      provider: "Cisco Networking Academy",
      description: "Curso introductorio al <strong>CCNA</strong>, cubriendo los fundamentos de <strong>redes</strong>, configuraciones de <strong>routers</strong> y <strong>switches</strong>, y conceptos de <strong>seguridad en redes</strong> de área local (<strong>LAN</strong>) y área global (<strong>WAN</strong>).",
      date: "Junio 2019",
      tags: ["CCNA", "Networking", "Routing", "Switching"],
      logo: "/Certificates/CCNA/CCNA.svg",
      media: ["/Certificates/CCNA/CCNA1.png"],
      credentials: "20027584"
    }
  ];
  
  
  