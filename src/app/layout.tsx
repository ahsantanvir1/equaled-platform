import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { AuthProvider } from '@/components/providers/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EqualEd - Quality Tutoring for Pennsylvania Students',
  description:
    'Connect with expert tutors and unlock your learning potential. Free tutoring for under-privileged students through community donations.',
  keywords: [
    'tutoring',
    'education',
    'Pennsylvania',
    'affordable tutoring',
    'free tutoring',
    'online tutoring',
    'homework help',
  ],
  authors: [{ name: 'EqualEd Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://equaled.org',
    title: 'EqualEd - Quality Tutoring for Pennsylvania Students',
    description: 'Making quality education accessible to everyone',
    siteName: 'EqualEd',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EqualEd - Quality Tutoring for Pennsylvania Students',
    description: 'Making quality education accessible to everyone',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0284c7" />
      </head>
      <body className={inter.className}>
        {/* Skip to main content link for accessibility (WCAG 2.1) */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main id="main-content" className="flex-grow" role="main">
              {children}
            </main>
            <Footer />
          </div>
        </AuthProvider>

        {/* Announce page changes to screen readers */}
        <div
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        />
      </body>
    </html>
  );
}

