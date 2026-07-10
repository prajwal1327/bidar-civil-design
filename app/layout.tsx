import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hatkar Construction & Consulting | Premium Construction Firm',
  description: 'Hatkar Construction & Consulting Firm delivers luxury homes, structural engineering, interior architecture and turnkey consulting across Karnataka.',
  openGraph: {
    title: 'Hatkar Construction & Consulting',
    description: 'Premium construction, architecture, engineering and consulting services led by Er. Pramod Hatkar.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
