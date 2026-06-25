import type { Metadata } from 'next'
import { Playfair_Display, Inter, Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif'
});
const geist = Geist({subsets:['latin'],variable:'--font-sans'});



export const metadata: Metadata = {
  title: 'Godrej Sarjapur Kada Agrahara, Sarjapur, South Bangalore',
  description: 'Godrej Sarjapur Road is a premium residential development in Bengaluru, thoughtfully spread across 7.9 acres of prime land. The project features two iconic high-rise towers with a configuration of 3 Basements + Ground + 33 Floors, offering a modern and elevated lifestyle experience. With only 518 exclusive apartments, the community ensures a perfect balance of privacy and comfort.',
  generator: 'v0.app',
  icons: {
    icon: [
      
      {
        url: '/',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${playfair.variable} ${geist.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
