export interface ServiceSpec {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  equipment?: string;
  images: { src: string; alt: string }[];
  options: {
    sizes?: string[];
    materials?: string[];
    finishes?: string[];
    colors?: string[];
    sides?: ("Single-Sided" | "Double-Sided")[];
    items?: string[];
    packages?: string[];
    scale?: string[];
    services?: string[];
  };
  basePrice?: number;
}