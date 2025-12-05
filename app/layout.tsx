import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Device Repair Quote System",
  description: "Submit device issues and get repair quotes using real APIs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${inter.className} bg-gray-50`}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-lg">
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-3">
                <i className="fas fa-tools mr-3"></i>
                Device Repair Quote System
              </h1>
              <p className="text-center text-blue-100 text-lg">
                Submit your device details and issue, receive a repair quote in minutes
              </p>
              <div className="mt-4 text-center text-sm text-blue-200">
                <i className="fas fa-plug mr-2"></i>
                Using real device data from public APIs
              </div>
            </div>
          </header>
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="bg-white border-t border-gray-200 py-6 mt-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Device Repair Quote System &copy; {new Date().getFullYear()} | Real Public API Integration</p>
              <div className="mt-2 flex items-center justify-center gap-2 text-sm">
                <i className="fas fa-info-circle text-purple-600"></i>
                <span>Powered by Wikipedia API for device information</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
