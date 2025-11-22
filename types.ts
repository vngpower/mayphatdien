
export enum BrandType {
  CUMMINS = 'Cummins',
  HYUNDAI = 'Hyundai',
  BAUDOUIN = 'Baudouin',
  KOKURO = 'Kokuro',
  MITSUBISHI = 'Mitsubishi',
  ISUZU = 'Isuzu'
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  brand: BrandType;
  kva: number;
  price: number | 'Contact';
  image: string;
  shortDescription: string;
  longDescription?: string; // HTML content from WP Editor
  catalogueLink?: string; // URL to PDF file
  isFeatured?: boolean; // New field for featured products
  specs: {
    model?: string; // Added model field (e.g., VNG132IS)
    engine: string;
    alternator: string;
    controller?: string; // Added controller field
    fuelConsumption: string; // L/h
    dimensions: string; // LxWxH mm
    weight: string; // kg
    origin?: string;
  };
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  customer: string;
  description: string;
  longDescription: string;
  location: string;
  capacity: string;
  image: string;
  year: number;
  challenge?: string;
  solution?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface Category {
  id: string;
  name: string;
  origin: string;
  desc: string;
  longDesc: string;
  range: string;
  image: string;
  technicalSpecs: {
    label: string;
    value: string;
  }[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML content
  image: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
}