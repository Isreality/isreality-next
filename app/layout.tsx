import type { Metadata } from "next";
// import { Antonio, Inter } from "next/font/google";
import "./globals.css";
// import "./font";
import { antonio } from './font';
import { plus } from './font';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// const antonio = Antonio({
//   variable: "--font-antonio",
//   subsets: ["latin"],
// });

// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Israel Agbaje",
  description: "Product Designer || Brand Designer || Frontend Developer || Illustrator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${antonio.className} ${plus.className} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
