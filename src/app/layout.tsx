import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header/Header";
import "./globals.scss";
import { StorageProvider } from "@/providers/StorageProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Streaming app",
  description: "Generated Yevhenii Zadorozhnyi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={inter.className}>
      <StorageProvider>
          <Header />
          <div className="wrap">
            {children}
          </div>
      </StorageProvider>
        </body>
    </html>
  );
}
