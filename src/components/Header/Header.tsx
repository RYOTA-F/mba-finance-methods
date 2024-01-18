'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Flex, Title } from '@mantine/core'
import { HomeSvg } from '@/components/Svg/Home'

export function Header() {
  const path = usePathname()

  return (
    <header className="flex items-center justify-between py-2 px-[10%] bg-main text-main">
      {path === '/' ? <Logo /> : <GoHome />}
    </header>
  )
}

function Logo() {
  return (
    <Flex className="w-full justify-center items-center">
      <Image
        src="/images/logo.png"
        alt="MBA Methods Logo"
        width={50}
        height={50}
        className="mr-4"
      />
      <Title order={1} className="font-bold">
        MBA Methods
      </Title>
    </Flex>
  )
}

function GoHome() {
  return (
    <Link href="/">
      <Flex>
        <HomeSvg />
        <span className="ml-1 font-bold">Home</span>
      </Flex>
    </Link>
  )
}
