
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ToasterContext from './context/ToasterContext';


// set fonts here
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yale Clubs',
  description: 'New Version of Yale Connect Clubs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterContext/>
        {children}
      </body>
    </html>
  )
}
