import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GCDS component test',
  description: 'Generated by create next app',
}

import '../../node_modules/@cdssnc/gcds-components-ssr/gcds.css'
import { Footer } from '@/components/gcds/footer';
import { Header } from '@/components/gcds/header';


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // ********************************************
  // Document the need for this in README
    // ********************************************
  await import('@cdssnc/gcds-components-ssr/server');

  return (
    <html lang="en">
      <head>
        <Script src="https://kit.fontawesome.com/892cb27850.js"></Script>
        <link rel="stylesheet" href="https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-utility@latest/dist/gcds-utility.min.css"/>

      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />

        {/* ******************************************** */}
        {/* Document the need for this, maybe serve it through the gcds-components-ssr package */}
        {/* ******************************************** */}
        <Script src="https://cdn.jsdelivr.net/npm/@webcomponents/template-shadowroot@0.2.1/template-shadowroot.min.js" strategy="beforeInteractive" />
      </body>
    </html>
  )
}
