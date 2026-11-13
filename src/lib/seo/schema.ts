import { type ReactNode } from "react";

// Type-safe schema builders for Dr. Suranjana Roy website

export type PostalAddress = {
  "@type": "PostalAddress";
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
};

export type Person = {
  "@context": "https://schema.org";
  "@type": "Person";
  name: string;
  jobTitle: string;
  url: string;
  telephone: string;
  email: string;
  areaServed: string[];
  address?: PostalAddress;
  sameAs?: string[];
};

export type WebSite = {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  description: string;
  publisher: string;
};

export type WebPage = {
  "@context": "https://schema.org";
  "@type": "WebPage";
  url: string;
  name: string;
  description: string;
  inLanguage: string;
  isPartOf: string;
};

export type MedicalClinic = {
  "@context": "https://schema.org";
  "@type": "MedicalClinic";
  name: string;
  url: string;
  telephone: string;
  address: PostalAddress;
  geo?: {
    "@type": "GeoCoordinates";
    latitude: string;
    longitude: string;
  };
};

// Verified chamber addresses (only locations that appear across multiple sections in codebase)
export const verifiedChambers = {
  siliguri: {
    addressLocality: "Siliguri",
    addressRegion: "West Bengal",
    postalCode: "734011",
    addressCountry: "IN",
    geo: {
      latitude: "26.7271",
      longitude: "88.3956",
    } as const,
  },
  jadavpur: {
    addressLocality: "Jadavpur",
    addressRegion: "Kolkata, West Bengal",
    postalCode: "700092",
    addressCountry: "IN",
    geo: {
      latitude: "22.5422",
      longitude: "88.3732",
    } as const,
  },
} as const;

// Verified person schema (from codebase)
export const person: Person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dr. Suranjana Roy",
  jobTitle: "Oral & Maxillofacial Surgeon and Onco Surgeon",
  url: "https://dr-suranajana-roy.vercel.app/",
  telephone: "+91 7980103899",
  email: "drsuranjanaroy@gmail.com",
  areaServed: ["Siliguri", "Kolkata", "West Bengal"],
  address: verifiedChambers.jadavpur,
  sameAs: [],
};

// Verified website schema
export const website: WebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dr. Suranjana Roy",
  url: "https://dr-suranajana-roy.vercel.app/",
  description:
    "Oral & Maxillofacial Surgery and Head & Neck Oncology information",
  publisher: "Dr. Suranjana Roy",
};

// --- JSX Builders ---

/**
 * Builds the site-wide Person + WebSite JSON-LD script block for __root.tsx
 */
export function buildRootSchema(): ReactNode {
  return {
    "@type": "ApplyActions",
    "name": "Script",
    "children": [
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Dr. Suranjana Roy",
        "jobTitle": "Oral & Maxillofacial Surgeon and Onco Surgeon",
        "url": "https://dr-suranajana-roy.vercel.app/",
        "telephone": "+91 7980103899",
        "email": "drsuranjanaroy@gmail.com",
        "areaServed": ["Siliguri", "Kolkata", "West Bengal"],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Jadavpur",
          "addressRegion": "Kolkata, West Bengal",
          "postalCode": "700092",
          "addressCountry": "IN",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Dr. Suranjana Roy",
        "url": "https://dr-suranajana-roy.vercel.app/",
        "description": "Oral & Maxillofacial Surgery and Head & Neck Oncology information",
        "publisher": "Dr. Suranjana Roy",
      },
    ],
  };
}

/**
 * Builds a WebPage JSON-LD for a specific route
 */
export function buildPageSchema(
  route: {
    id: string;
    path: string;
    title: string;
    description: string;
  },
  siteName: string = "Dr. Suranjana Roy"
): WebPage {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: `https://dr-suranajana-roy.vercel.app${route.path}`,
    name: route.title,
    description: route.description,
    inLanguage: "en",
    isPartOf: siteName,
  };
}

/**
 * Builds a MedicalClinic schema for a verified chamber
 */
export function buildMedicalClinicSchema(
  chamber:
    | "siliguri"
    | "jadavpur"
): MedicalClinic {
  const chamberData = verifiedChambers[chamber];
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: `Dr. Suranjana Roy's Clinic`,
    url: "https://dr-suranajana-roy.vercel.app/",
    telephone: "+91 7980103899",
    address: chamberData.address,
    geo: chamberData.geo,
  };
}