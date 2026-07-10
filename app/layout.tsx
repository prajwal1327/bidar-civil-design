import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bidar Civil Design | Luxury Construction & Architecture',
  description: 'Premium construction, architecture, engineering and home design services based in Bidar, Karnataka.',
  openGraph: {
    title: 'Bidar Civil Design',
    description: 'Luxury construction, turnkey architecture, interior design, AutoCAD drafting, BIM and structural engineering services.',
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
