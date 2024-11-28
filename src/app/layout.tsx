import type { Metadata } from 'next';

import { dancingScript, greatVibes, jost, monteCarlo, sail } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Phan Điện ❤️ Vũ Anh',
  description: 'We Are Getting Married December 28, 2024',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'antialiased',
          jost.variable,
          greatVibes.variable,
          sail.variable,
          dancingScript.variable,
          monteCarlo.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
