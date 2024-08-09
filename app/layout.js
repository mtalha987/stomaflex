import { Inter,Poppins,Arial } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stoma Flex",
  description: "Stomaflex provides innovative stoma care solutions and products for a better quality of life. Find the right ostomy supplies and expert advice here.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.svg"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
      </head>
      <body className={inter.className}><Header/>{children}<Footer/></body>
    </html>
  );
}
