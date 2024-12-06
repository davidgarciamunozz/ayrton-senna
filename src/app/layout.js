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
    images: ['/opengraph-image.png'], // Asegúrate de que la ruta sea correcta
  },
  openGraph: {
    title: 'Senna Tribute',
    description: 'A tribute to the legendary Brazilian Formula 1 driver Ayrton Senna.',
    images: [
      {
        url: '/opengraph-image.png', // Ruta de la imagen
        width: 1200, // Opcional
        height: 630, // Opcional
        alt: 'Ayrton Senna Tribute', // Descripción de la imagen
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
