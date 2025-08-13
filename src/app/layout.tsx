import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "./components/ClientLayout";

// This will be set at build time based on the environment
const basePath = process.env.NODE_ENV === 'production' 
  ? process.env.NEXT_PUBLIC_BASE_PATH || '' 
  : '';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Farhan Wahyuda - Portfolio",
  description: "Personal portfolio of Farhan Wahyuda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
      data-base-path={basePath}
    >
      <head>
        {/* Only set base href in production */}
        {process.env.NODE_ENV === 'production' && basePath && (
          <base href={`${basePath}/`} />
        )}
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body 
        className="antialiased bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
        suppressHydrationWarning
      >
        <ClientLayout basePath={basePath}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
