/** Rutas de logos usadas en cards/detalles (sin importar los arrays de datos). */
export const CARD_LOGO_PATHS = [
  "/DatabaySolutions/logo.png",
  "/Certificates/logo.png",
  "/ControlNet/logo.png",
  "/tecnico/logo.png",
  "/DevOpsTemplate/logo.png",
  "/Utsch/logo.png",
  "/Cuboc/logo.png",
  "/IndeK/logo.png",
  "/TourismWithStyle/logo.png",
  "/Russells/logo.png",
  "/ICEditorial/logo.png",
  "/BookingApi/logo.png",
  "/BafreMedia/logo.png",
  "/la11mil/logo.png",
  "/CRM/logo.png",
  "/MoviesDetails/logo.png",
  "/RotaPlace/logo.png",
  "/Certificates/BackEndAPIs/BackEndAPIs.svg",
  "/Certificates/DataAnalysis/DataAnalysis.svg",
  "/Certificates/DataVisualization/DataVisualization.svg",
  "/Certificates/EFSET/EFSET.svg",
  "/Certificates/ResponsiveWebDesign/ResponsiveWebDesign.svg",
  "/Certificates/CCNA/CCNA.svg",
] as const;

export type CardLogoUrls = {
  card: string;
  detail: string;
};

export type CardLogoUrlMap = Record<string, CardLogoUrls>;
