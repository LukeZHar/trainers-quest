import type { Metadata } from "next";
import "../styles/globals.css";
import { VT323 } from "next/font/google";
import { Sour_Gummy } from "next/font/google";

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: "400",
});

const sourGummy = Sour_Gummy({
  variable: "--font-sour-gummy",
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "Trainer's Quest",
  description: "Track, organise and showcase your Pokémon cards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/pokeball.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${vt323.variable} ${sourGummy.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
