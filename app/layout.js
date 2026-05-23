// app/layout.jsx

import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./component/Home/Navbar/ResponsiveNav";
const font = Inter({
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  subsets: ["latin"],
});

export const metadata = {
  title: "Himel's DevPortfolio",
  description:
    "portfolio of Himel, a passionate developer specializing in Next.js and React.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <ResponsiveNav/>
          {children}
      </body>
    </html>
  );
}