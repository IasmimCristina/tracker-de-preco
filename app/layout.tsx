import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })
export const metadata: Metadata = {
  title: 'PreçoSábio',
  description: 'Acompanhe preços da melhor forma possível e gaste menos dinheiro!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Always importante to set a max-width */}
        <main className="max-w-10xl mx-auto">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
