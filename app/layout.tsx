import type { Metadata } from "next";
import "./globals.css";
import { antonio } from './font';
import { plus } from './font';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


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
