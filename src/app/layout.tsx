import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://ruslanaviation.com";

export const metadata: Metadata = {
  title: "Ruslan Aviation | Premium Timepieces",
  description:
    "Curated collection of premium timepieces. Where Swiss precision meets modern elegance. Browse our selection of Falcon Chronograph, Navigator GMT, Heritage Pilot, and Stealth Chrono.",
  keywords: [
    "premium watches",
    "aviation watches",
    "chronograph",
    "GMT watch",
    "luxury timepieces",
    "Ruslan Aviation",
    "men watches",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Ruslan Aviation | Premium Timepieces",
    description:
      "Curated collection of premium timepieces. Where Swiss precision meets modern elegance.",
    type: "website",
    locale: "en_US",
    siteName: "Ruslan Aviation",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Ruslan Aviation Premium Timepieces",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruslan Aviation | Premium Timepieces",
    description:
      "Curated collection of premium timepieces.",
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#006039",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="google-site-verification" content="YOUR_GSC_CODE_HERE" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Ruslan Aviation",
                url: siteUrl,
                description:
                  "Premium timepieces. Curated collection of luxury watches.",
                sameAs: [
                  "https://www.instagram.com/ruslanaviation",
                  "https://www.facebook.com/share/g/1Bgu7mx7YP",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Ruslan Aviation",
                url: siteUrl,
                potentialAction: {
                  "@type": "SearchAction",
                  target: `${siteUrl}/?q={search_term_string}`,
                  "query-input": "required name=search_term_string",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Are your watches authentic / original?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Every timepiece we offer is 100% authentic and sourced through verified, authorized channels. Each watch comes with proof of authenticity.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do you provide a warranty on your watches?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, every watch is covered by an international warranty. Warranty terms and duration vary by brand and model — full details are shared with you during your WhatsApp consultation.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What payment methods do you accept?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "We accept bank transfer, major credit/debit cards, and cryptocurrency (BTC/USDT). Payment options are confirmed individually with our consultant via WhatsApp.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How does delivery work, and how long does it take?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "We offer secure, insured worldwide shipping. Delivery typically takes 3–7 business days depending on your location, with full tracking provided.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I return or exchange a watch after purchase?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, we offer a 14-day return window for unworn items in original condition with all documentation and packaging intact.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How do I place an order?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Simply click the \"Order\" button on any watch you like, and we'll guide you through the next steps to confirm your purchase.",
                    },
                  },
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "Product",
                name: "Falcon Chronograph",
                description: "Aviation chronograph style with metal bracelet and deep blue-black dial.",
                brand: {
                  "@type": "Brand",
                  name: "Ruslan Aviation",
                },
                offers: {
                  "@type": "Offer",
                  url: `${siteUrl}#catalog`,
                  priceCurrency: "USD",
                  availability: "https://schema.org/InStock",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "Product",
                name: "Navigator GMT",
                description: "GMT function with dual-timezone display, luminous indices and robust steel bracelet.",
                brand: {
                  "@type": "Brand",
                  name: "Ruslan Aviation",
                },
                offers: {
                  "@type": "Offer",
                  url: `${siteUrl}#catalog`,
                  priceCurrency: "USD",
                  availability: "https://schema.org/InStock",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "Product",
                name: "Heritage Pilot",
                description: "Pilot watch with clean white dial, bold numerals and premium leather strap.",
                brand: {
                  "@type": "Brand",
                  name: "Ruslan Aviation",
                },
                offers: {
                  "@type": "Offer",
                  url: `${siteUrl}#catalog`,
                  priceCurrency: "USD",
                  availability: "https://schema.org/InStock",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "Product",
                name: "Stealth Chrono",
                description: "Matte black chronograph with green accent details and sporty functionality.",
                brand: {
                  "@type": "Brand",
                  name: "Ruslan Aviation",
                },
                offers: {
                  "@type": "Offer",
                  url: `${siteUrl}#catalog`,
                  priceCurrency: "USD",
                  availability: "https://schema.org/InStock",
                },
              },
            ]),
          }}
        />
      </head>
      <body className="min-h-screen bg-surface text-text-primary font-body antialiased">
        {children}
      </body>
    </html>
  );
}
