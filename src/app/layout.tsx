import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/progress.css";
import QueryClientLayout from "@/helpers/useQueryClient";


export const metadata: Metadata = {
  title: "Hubstack",
  description: "Innovate. Simplify. Prosper. Hassle-free financial services and bill payments powered by AI.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <QueryClientLayout>
        <html lang="en">
            <body>{children}</body>
        </html>
      </QueryClientLayout>
  );
}
