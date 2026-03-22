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
  title: `Web Development Services | Weblify`,
  description: `Professional web development services. Build fast, modern, and SEO-optimized websites for your business.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${libre.variable} antialiased`}>
    <main>

          <Header />
          {children}
        <Footer />

    </main>
            <Toaster /> 
 
      </body>
    </html>
  );
}
