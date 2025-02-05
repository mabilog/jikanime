import type { Metadata } from "next";
import "../globals.css";
import { geistMono, geistSans } from "../fonts";
import { SearchProvider } from "../context/useSearchContext";
import NavbarWrapper from "../components/NavbarWrapper";

export const metadata: Metadata = {
  title: "Jikanime",
  description:
    "Anime search app. Mostly used to search for characters in an anime that I'm currently watching",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SearchProvider>
          <NavbarWrapper />
          {children}
        </SearchProvider>
      </body>
    </html>
  );
}
