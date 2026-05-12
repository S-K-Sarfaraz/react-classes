import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Home page',
  description: 'this is my first next project',
  authors: [{name:'sarfaraz'},{name: 'sakib'}],
  keywords: ['sakib', 'full satck developer', 'backend developer', 'frontend developer'],
  icons: {
    icon: '/hero.jpeg'
  }
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <Header/>
      <body className="min-h-full  flex flex-col">{children}</body>

    </html>
  );
}
