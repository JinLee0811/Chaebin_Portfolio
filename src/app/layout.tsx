import "./globals.css";
import { ReactNode } from "react";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Chaebin Official Website",
  description: "A singer portfolio built with Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-800 text-gray-900">
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
