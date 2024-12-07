import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Senna Tribute",
  description:
    "A tribute to the legendary Brazilian Formula 1 driver Ayrton Senna.",
  twitter: {
    card: "summary_large_image",
    title: "Senna Tribute",
    description:
      "A tribute to the legendary Brazilian Formula 1 driver Ayrton Senna.",
    images: [
      "https://github.com/davidgarciamunozz/ayrton-senna/blob/main/public/opengraph-image.png?raw=true",
    ], // Nueva ubicación pública
  },
  openGraph: {
    title: "Senna Tribute",
    description:
      "A tribute to the legendary Brazilian Formula 1 driver Ayrton Senna.",
    images: [
      {
        url: "https://github.com/davidgarciamunozz/ayrton-senna/blob/main/public/opengraph-image.png?raw=true",
        width: 1200,
        height: 630,
        alt: "Ayrton Senna Tribute",
      },
    ],
    type: "website",
  },
  verification:{
    google: "1EcfcCYaPqu4xAGN-JLRKMFpGYprOxd-ZGBJCnswgQQ"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="David García" />
        <meta
          name="keywords"
          content="Ayrton Senna, Formula 1, Tribute, Brazilian Driver"
        />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Twitter */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:type" content={metadata.openGraph.type} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
