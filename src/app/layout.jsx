import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  display: "swap",
  weight: "100 900",
});

const fraunces = localFont({
  src: "../../node_modules/@fontsource-variable/fraunces/files/fraunces-latin-full-normal.woff2",
  display: "swap",
  weight: "100 900",
});

const frankRuhlLibre = localFont({
  src: "../../node_modules/@fontsource/frank-ruhl-libre/files/frank-ruhl-libre-latin-400-normal.woff2",
  display: "swap",
  weight: "400",
});

export const metadata = {
  title: "Threadline Health",
  description:
    "Prepare a complete ADHD Assessment Package for your child's clinician.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      style={{
        "--font-inter": inter.style.fontFamily,
        "--font-fraunces": fraunces.style.fontFamily,
        "--font-frank-ruhl-libre": frankRuhlLibre.style.fontFamily,
      }}
    >
      <body>{children}</body>
    </html>
  );
}
