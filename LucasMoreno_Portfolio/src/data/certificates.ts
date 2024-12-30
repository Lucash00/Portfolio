export interface Certificate {
    title: string;
    provider: string;
    description: string;
    date: string; // Fecha de obtención
    tags: string[];
    logo: string; // Logo del certificado o proveedor
    certificateUrl?: string; // URL para ver más detalles del certificado
    credentials?: string; //ID credeciales
  }
  
  export const certificates: Certificate[] = [
    {
      title: "Data Visualization with JavaScript",
      provider: "freeCodeCamp",
      description: "Aprendí a crear visualizaciones de datos interactivas y estáticas usando JavaScript y bibliotecas como D3.js.",
      date: "Octubre 2023",
      tags: ["Data Visualization", "JavaScript", "D3.js"],
      logo: "/src/data/Certificates/ResponsiveWebDesign.svg",
      certificateUrl: "https://www.freecodecamp.org/certification/username/datavis",
      credentials: "xddd"
    },
    {
      title: "Responsive Web Design",
      provider: "freeCodeCamp",
      description: "Certificado en diseño web responsive utilizando HTML y CSS, con énfasis en accesibilidad y usabilidad.",
      date: "Agosto 2023",
      tags: ["HTML", "CSS", "Responsive Design"],
      logo: "/path/to/freecodecamp-logo.png",
    },
  ];
  