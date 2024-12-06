import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Senna Tribute',
  description: 'A tribute to the legendary Brazilian Formula 1 driver Ayrton Senna.',
  openGraph: {
    title: 'Senna Tribute',
    description: 'A tribute to the legendary Brazilian Formula 1 driver Ayrton Senna.',
    type: 'website',
    url: 'https://ayrton-senna-three.vercel.app/',
    image: './opengraph-image.png',
    site_name: 'Senna Tribute',
    locale: 'en_US',
  },
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
