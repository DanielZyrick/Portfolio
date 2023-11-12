import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Providers } from "./providers";

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
    <html lang="en" suppressHydrationWarning>
      <body className={raleway.className}>
        <Navbar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
