import type { Metadata } from 'next'
import {Cormorant_Garamond} from 'next/font/google'
import './globals.css'
import { Providers } from './provider'

const inter = Cormorant_Garamond({ subsets: ['latin'], weight: "500" })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
        
        </body>
    </html>
  )
}
