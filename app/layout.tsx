import "./globals.css";
import type { Metadata } from "next";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "BP Tech and Resources Nigeria Limited",
  description:
    "Fiber Optic Sales, Installation, Maintenance, and Telecommunications Solutions in Nigeria",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white text-gray-900">
  {children}
<FloatingWhatsApp />

      </body>
    </html>
  );
}
