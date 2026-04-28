import './globals.css';

export const metadata = {
  title: 'AbstractLabs — Building Intelligent Digital Systems',
  description:
    'Abstract Labs is a modern technology studio building scalable digital systems, intelligent automation tools, and high-performance web platforms for founders and product teams.',
  keywords: [
    'web development agency India',
    'AI systems development',
    'React development agency',
    'custom software development',
    'digital studio India',
    'machine learning solutions',
    'automation tools',
    'full stack development',
    'Next.js development',
    'Python AI development',
    'AbstractLabs',
    'abstract labs India',
    'web platforms',
    'SaaS development',
    'data analytics platform',
    'UI/UX design agency India',
    'cloud infrastructure solutions',
    'intelligent automation studio',
  ],
  authors: [{ name: 'AbstractLabs', url: 'https://abstractlabs.in' }],
  creator: 'AbstractLabs',
  publisher: 'AbstractLabs',
  metadataBase: new URL('https://abstractlabs.in'),
  alternates: {
    canonical: 'https://abstractlabs.in',
  },
  openGraph: {
    title: 'AbstractLabs — Building Intelligent Digital Systems',
    description:
      'A modern technology studio building scalable digital systems, AI automation, and high-performance web platforms for startups and enterprise teams.',
    url: 'https://abstractlabs.in',
    siteName: 'AbstractLabs',
    images: [
      {
        url: 'https://abstractlabs.in/og-image.png', // User should add this file
        width: 1200,
        height: 630,
        alt: 'AbstractLabs — Intelligent Digital Systems',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AbstractLabs — Building Intelligent Digital Systems',
    description:
      'A modern technology studio building scalable digital systems, AI automation, and high-performance web platforms.',
    creator: '@abstractlabs',
  },
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
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AbstractLabs',
  url: 'https://abstractlabs.in',
  logo: 'https://abstractlabs.in/logo.png',
  description:
    'A modern technology studio building scalable digital systems and intelligent automation tools.',
  email: 'info.abstractlabs@gmail.com',
  sameAs: [
    'https://linkedin.com/company/abstractlabs',
    'https://github.com/abstractlabs',
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  offers: {
    '@type': 'Offer',
    description: 'Web Platform Development, AI & Custom Technology Solutions',
  },
};

import { Providers } from './providers';
import ClientEffectsWrapper from '@/components/ClientEffectsWrapper';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { navLinks } from '@/data/content';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Providers>
          <ClientEffectsWrapper>
            <Navbar />
            <main>{children}</main>
            <Footer navLinks={navLinks} />
          </ClientEffectsWrapper>
        </Providers>
      </body>
    </html>
  );
}
