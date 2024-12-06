import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Senna Tribute',
  description: 'A tribute to the legendary Brazilian Formula 1 driver Ayrton Senna.',
  twitter: {
    card: "summary_large_image",
    title: 'Senna Tribute',
    description: 'A tribute to the legendary Brazilian Formula 1 driver Ayrton Senna.',
    images: ['https://matraxlubricantes.com/wp-content/uploads/2020/03/6.jpg'], // Nueva ubicación pública
  },
  openGraph: {
    title: 'Senna Tribute',
    description: 'A tribute to the legendary Brazilian Formula 1 driver Ayrton Senna.',
    images: [
      {
        url: 'https://matraxlubricantes.com/wp-content/uploads/2020/03/6.jpg',
        width: 1200,
        height: 630,
        alt: 'Ayrton Senna Tribute',
      },
    ],
    type: 'website',
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
