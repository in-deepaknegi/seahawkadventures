import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sea Hawk Adventures',
  description: "Embark on unforgettable hiking, rafting, and kayaking adventures in the stunning landscapes of Uttarakhand, surrounded by the majestic beauty of the Himalayas, and along the pristine Ganges River",
  metadataBase: new URL('https://www.seahawkadventures.com/'),
  openGraph: {
    url: "https://www.seahawkadventures.com/",
    title: "Sea Hawk Adventures",
    description: "Embark on unforgettable hiking, rafting, and kayaking adventures in the stunning landscapes of Uttarakhand, surrounded by the majestic beauty of the Himalayas, and along the pristine Ganges River",
    siteName: "Sea Hawk Adventures",
    images: "/rafting/r00.jpg"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-54D2VZ5TLK" />
    </html>
  )
}
