'use client'

import {
  Box,
  Button,
  Center,
  Table,
  Title,
  Input,
  NumberInput,
  Space,
} from '@mantine/core'
import { useNpv } from '@/hooks/useNpv'

export default function NpvPage() {
  const {
    yearsCount,
    handleChangeYearsCount,
    discountPercentage,
    handleChangeDiscountPercentage,
    yearsCashFrow,
    handleChangeYearsCashFrow,
    handleClickCalculation,
    totalPresentValue,
    tableData,
    isErrorYearsCount,
    isErrorDiscountPercentage,
  } = useNpv()

  return (
    <Center className="px-[10%] py-10">
      <div>
        <Title>現在価値：{totalPresentValue} 円</Title>
        <Space h="lg" />

        <Input.Wrapper label="期間(年数)">
          <NumberInput
            value={yearsCount}
            error={isErrorYearsCount}
            onChange={handleChangeYearsCount}
          />
        </Input.Wrapper>
        <Space h="lg" />

        <Input.Wrapper label="割引率(%)">
          <NumberInput
            value={discountPercentage}
            error={isErrorDiscountPercentage}
            onChange={handleChangeDiscountPercentage}
          />
        </Input.Wrapper>
        <Space h="lg" />

        <Input.Wrapper label="年間キャッシュフロー(円)">
          <NumberInput
            value={yearsCashFrow}
            onChange={handleChangeYearsCashFrow}
          />
        </Input.Wrapper>
        <Space h="lg" />

        <Button
          disabled={isErrorYearsCount || isErrorDiscountPercentage}
          onClick={handleClickCalculation}
        >
          現在価値を計算
        </Button>
        <Space h="lg" />

        {tableData && tableData.length ? (
          <Center bg="#fff" className="w-full rounded py-4 px-10 text-sub">
            <Table>
              <Table.Thead>
                {tableData.map((data) => (
                  <Table.Tr key={data.year}>
                    <Table.Td>{data.year}</Table.Td>
                    <Table.Td>年目</Table.Td>
                    <Table.Td>{data.discountRate}</Table.Td>
                    <Table.Td>%</Table.Td>
                    <Table.Td>{data.presentValue}</Table.Td>
                    <Table.Td>円</Table.Td>
                  </Table.Tr>
                ))}
              </Table.Thead>
            </Table>
          </Center>
        ) : null}
      </div>
    </Center>
  )
}
