import Link from 'next/link'
import { Card } from '@mantine/core'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/finance/npv" className="w-1/2">
        <Card shadow="xl">
          <h2 className="text-2xl font-bold text-center text-sub">
            正味現在価値（NPV）
          </h2>
        </Card>
      </Link>
    </main>
  )
}
