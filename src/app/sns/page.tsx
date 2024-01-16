'use client'

import {
  Button,
  Center,
  Table,
  Title,
  Input,
  NumberInput,
  Space,
} from '@mantine/core'
import { useSns } from '@/hooks/useSns'

export default function SnsPage() {
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
  } = useSns()

  return (
    <Center className="px-[10%] py-10">
      <div>
        <Title>現在価値：{totalPresentValue} 円</Title>
        <Space h="lg" />

        <Input.Wrapper label="期間(年数)">
          <NumberInput value={yearsCount} onChange={handleChangeYearsCount} />
        </Input.Wrapper>
        <Space h="lg" />

        <Input.Wrapper label="割引率(%)">
          <NumberInput
            value={discountPercentage}
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

        <Button onClick={handleClickCalculation}>現在価値を計算</Button>
        <Space h="lg" />

        {tableData && tableData.length ? (
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
        ) : null}
      </div>
    </Center>
  )
}
