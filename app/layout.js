import { Geist, Geist_Mono,Montserrat, Cormorant_Garamond ,Open_Sans } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-opensans',
  display: 'swap',
});

// ── SEO & OG Metadata ──────────────────────────────────────
// Covers: Google, WhatsApp, Twitter/X, LinkedIn
// ──────────────────────────────────────────────────────────

export const metadata = {
  // ── Core ──
  metadataBase: new URL('https://www.oceion.com'),
  title: {
    default: 'OCEION — Compliance Beyond the Surface',
    template: '%s | OCEION',
  },
  description:
    'OCEION is a specialist privacy and compliance consultancy offering data protection advisory, information security governance, regulatory compliance, risk audits, and professional training — across Asia, Europe, and beyond.',
  keywords: [
    'data privacy consultancy',
    'GDPR compliance',
    'PDPA compliance',
    'ISO 27001',
    'data protection officer',
    'DPO as a service',
    'regulatory compliance India',
    'information security governance',
    'privacy advisory',
    'DPIA',
    'privacy training',
    'compliance consultancy New Delhi',
    'OCEION',
  ],
  authors: [{ name: 'OCEION', url: 'https://www.oceion.com' }],
  creator: 'OCEION',
  publisher: 'OCEION',
  category: 'Legal & Compliance',

  // ── Canonical & Alternates ──
  alternates: {
    canonical: 'https://www.oceion.com',
  },

  // ── Robots ──
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ── Open Graph (WhatsApp + LinkedIn + Facebook) ──
  // WhatsApp uses og:title, og:description, og:image, og:url
  // LinkedIn uses og:title, og:description, og:image (min 1200×627), og:type
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.oceion.com',
    siteName: 'OCEION',
    title: 'OCEION — Compliance Beyond the Surface',
    description:
      'Specialist privacy advisory, data protection compliance, information security, and professional training — delivered with depth. Based in New Delhi, serving clients across Asia & Europe.',
    images: [
      {
        // Recommended: 1200×630px, < 300 KB, sharp text visible even as thumbnail
        // Create this image and place at /public/og/oceion-og-default.jpg
        url: '/og/oceion-og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'OCEION — Compliance Beyond the Surface | Privacy & Data Protection Consultancy',
        type: 'image/jpeg',
      },
      {
        // Square fallback for WhatsApp & some LinkedIn previews
        url: '/og/oceion-og-square.jpg',
        width: 800,
        height: 800,
        alt: 'OCEION | Privacy & Compliance Specialists',
        type: 'image/jpeg',
      },
    ],
  },

  // ── Twitter / X Card ──
  // 'summary_large_image' renders the full-width card on Twitter/X
  twitter: {
    card: 'summary_large_image',
    site: '@oceion',          // replace with your actual Twitter/X handle
    creator: '@oceion',       // replace with your actual Twitter/X handle
    title: 'OCEION — Compliance Beyond the Surface',
    description:
      'Data privacy, regulatory compliance, information security & professional training — delivered with depth. Trusted advisors across Asia & Europe.',
    images: {
      url: '/og/oceion-og-default.jpg',  // Twitter requires an absolute URL in production
      alt: 'OCEION — Privacy & Compliance Consultancy',
    },
  },

  // ── Verification (add your codes when ready) ──
  verification: {
    google: 'REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_CODE',
    // yandex: 'REPLACE_WITH_YANDEX_CODE',
    // bing: 'REPLACE_WITH_BING_WEBMASTER_CODE',
  },

  // ── App / PWA basics ──
  applicationName: 'OCEION',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// ── Structured Data (JSON-LD) ──────────────────────────────
// Paste this <script> block inside your <head> via the layout
// return, or use a separate JsonLd component.
// LinkedIn and Google both consume this for rich results.
// ──────────────────────────────────────────────────────────

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'OCEION',
  alternateName: 'OCEION Compliance Advisory',
  url: 'https://www.oceion.com',
  logo: 'https://www.oceion.com/og/oceion-logo.png',
  image: 'https://www.oceion.com/og/oceion-og-default.jpg',
  description:
    'OCEION is a specialist privacy and compliance consultancy offering GDPR and PDPA advisory, information security governance, risk assessments, policy drafting, and professional training programs across Asia and Europe.',
  slogan: 'Compliance Beyond the Surface',
  email: 'info@oceion.com',
  telephone: '+910000000000',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New Delhi',
    addressCountry: 'IN',
  },
  areaServed: ['IN', 'SG', 'GB', 'DE', 'AE', 'AU'],
  serviceType: [
    'Data Privacy Compliance',
    'GDPR Advisory',
    'PDPA Compliance',
    'Information Security Governance',
    'Risk Assessment',
    'DPO as a Service',
    'Privacy Training',
  ],
  sameAs: [
    'https://www.linkedin.com/company/oceion',  // replace with actual LinkedIn URL
    'https://twitter.com/oceion',               // replace with actual Twitter/X URL
  ],
};

// ── Root Layout ────────────────────────────────────────────

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${cormorant.variable} ${openSans.variable}`}
    >
      <head>
        {/* Favicon set — generate from https://realfavicongenerator.net */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#042C53" />

        {/*
          LinkedIn-specific note:
          LinkedIn caches OG tags aggressively.
          After deploying, refresh your URL here:
          https://www.linkedin.com/post-inspector/
        */}

        {/*
          WhatsApp-specific note:
          WhatsApp reads og:title, og:description, og:image.
          Image must be publicly accessible (no auth), ideally < 300 KB.
          After deploy, send the link in WhatsApp to test.
        */}

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}


// ============================================================
// OG IMAGE CHECKLIST
// ============================================================
// Create these two files inside /public/og/ :
//
//  1. oceion-og-default.jpg  →  1200 × 630 px
//     • Dark navy (#042C53) background
//     • OCEION logo + wordmark centred or left-aligned
//     • Tagline: "Compliance Beyond the Surface"
//     • Subtle ocean wave / concentric circles motif (brand)
//     • Keep text within a 1080 × 570 safe zone
//     • Export < 300 KB
//
//  2. oceion-og-square.jpg   →  800 × 800 px
//     • Same brand language, square crop
//     • Used by WhatsApp (square preview) & some LinkedIn posts
//
// Free tools: Figma, Canva, or generate programmatically via
// Next.js /app/og/route.js using @vercel/og
// ============================================================