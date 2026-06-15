export interface Service {
  id: string;
  title: string;
  category: 'networks' | 'architecture' | 'commerce' | 'consulting' | 'all';
  shortDescription: string;
  longDescription: string;
  iconName: string; // Dynamic icon reference
  features: string[];
  imagePlaceholder: string; // Visual pattern description
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'networks' | 'architecture' | 'commerce' | 'consulting';
  client: string;
  year: number;
  location: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  image?: string;
  imagePlaceholder: string;
  stats?: { label: string; value: string };
}

export interface QuoteOption {
  id: string;
  name: string;
  category: string;
  basePrice: number;
  unitName: string;
  minUnits?: number;
}
