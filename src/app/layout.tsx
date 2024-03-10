import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header/Header";
import { store } from "@/store/store";
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
      <StorageProvider>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </StorageProvider>
    </html>
  );
}
