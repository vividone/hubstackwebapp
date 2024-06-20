import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/progress.css";



export const metadata: Metadata = {
  title: "Hubstack",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
