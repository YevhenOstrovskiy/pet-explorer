import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from '@/components';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pet Breed Explorer",
  description: "Find any cat or dog breed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="pt-6 bg-gray-100">
          {children}
        </div>
        <Footer/>
        </body>
    </html>
  );
}
