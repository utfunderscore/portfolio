import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

const description = "Backend Software developer.";
const title = "Connor's Portfolio";

export const metadata: Metadata = {
  title: title,
  description: description,
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: title,
    description: description,
    url: 'https://utf.lol', // Replace with your actual domain
    siteName: title,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: title,
    description: description,
    creator: '@yourusername', // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://utf.lol'), // Replace with your actual domain
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={`antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
