import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel Zyrick Gayao Portfolio",
  description: "This is Daniel Zyrick Gayao Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
