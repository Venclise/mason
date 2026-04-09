import type { Metadata } from "next";
import "./globals.css";
import { Inter, Libre_Caslon_Display } from "next/font/google";
import Header from "@/components/Header";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";


const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const libre = Libre_Caslon_Display({
  variable: "--font-Libre_Caslon_Display",
  weight: "400",
});

export const metadata: Metadata = {
  title: `Mason`,
  description: `Best Company in bulding high ends Houses `,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${libre.variable} antialiased`}>
    <main className="relative">

          <Header />
          {children}
        <Footer />

    </main>
            <Toaster /> 
 
      </body>
    </html>
  );
}
