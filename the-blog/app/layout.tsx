import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from 'next/head';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "The Blog.",
  description: "Just another internet place to read about philosophy, tech things and reflextions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <title>The Blog.</title>
        <meta name="description" content="Just another internet place to read about philosophy, tech things and reflextions." />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="The Blog." />
        <meta property="og:description" content="Just another internet place to read about philosophy, tech things and reflextions." />
        <meta property="og:image" content="/the-blog.png" />
        <meta property="og:url" content="https://the-vlog.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Blog." />
        <meta name="twitter:description" content="Just another internet place to read about philosophy, tech things and reflextions." />
        <meta name="twitter:image" content="/the-blog.png" />
      </Head>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </>
  );
}
