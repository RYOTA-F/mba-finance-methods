import Link from 'next/link'
import { Box, Card, Space } from '@mantine/core'

export default function Home() {
  return (
    <Box w={400} className="my-0 mx-auto py-10">
      <Link href="/finance/npv">
        <Card shadow="xl">
          <h2 className="text-2xl font-bold text-center text-sub">NPV</h2>
        </Card>
      </Link>
      <Space h="lg" />

      <Link href="/finance/irr">
        <Card shadow="xl">
          <h2 className="text-2xl font-bold text-center text-sub">IRR</h2>
        </Card>
      </Link>
    </Box>
  )
}
