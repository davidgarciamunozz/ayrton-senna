import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Senna Tribute',
  description: 'A tribute to the legendary Brazilian Formula 1 driver Ayrton Senna.',
  twitter: {
    card: "summary_large_image"
  }
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
