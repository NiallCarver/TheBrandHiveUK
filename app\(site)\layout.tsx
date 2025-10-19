import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/providers/Providers";

export const metadata: Metadata = {
  title: "The Brand Hive UK — Authority That Converts",
  description: "Modern, premium, tech-forward brand building across X & LinkedIn for founders and CEOs.",
  icons: [
    { rel: "icon", url: "/logos/brand-logo.png" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header/>
          <main>{children}</main>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
