import type { Metadata } from 'next'
import { MantineProvider } from '@mantine/core'
import { Header } from '@/components/Header/Header'

import './globals.css'
import '@mantine/core/styles.css'

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
      <body>
        <MantineProvider>
          <Header />
          <div className="bg-main text-main min-h-[100vh]">{children}</div>
        </MantineProvider>
      </body>
    </html>
  )
}
