import type { Metadata } from 'next';
import { I18nProvider } from '@/lib/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Quan Tu | Software Engineer',
  description: 'A passionate full-stack developer with a strong interest in web development, AI integration and software architecture.',
  keywords: ['Software Engineer', 'Full-stack Developer', 'Web Development', 'React', 'Spring Boot', 'Next.js'],
  authors: [{ name: 'Tu Van Nguyen Anh Quan' }],
  openGraph: {
    title: 'Quan Tu | Software Engineer',
    description: 'A passionate full-stack developer with a strong interest in web development, AI integration and software architecture.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <I18nProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
