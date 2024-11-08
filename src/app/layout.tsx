import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globallanding.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wally Landing',
  description: 'Chatbot to get automatic responses when consulting to Willinn support via Freshdesk',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
