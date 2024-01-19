import Link from 'next/link'
import { Box, Card, Space } from '@mantine/core'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Box>
        <Link href="/finance/npv" className="w-1/2">
          <Card shadow="xl">
            <h2 className="text-2xl font-bold text-center text-sub">NPV</h2>
          </Card>
        </Link>
        <Space h="lg" />

        <Link href="/finance/irr" className="w-1/2">
          <Card shadow="xl">
            <h2 className="text-2xl font-bold text-center text-sub">IRR</h2>
          </Card>
        </Link>
      </Box>
    </main>
  )
}
