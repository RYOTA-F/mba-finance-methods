'use client'

import {
  Button,
  Box,
  Center,
  CloseButton,
  Flex,
  Table,
  Title,
  Input,
  NumberInput,
  Space,
} from '@mantine/core'
import { useNpv } from '@/hooks/useNpv'

export default function NpvPage() {
  const {
    cashFlows,
    discountPercentage,
    handleChangeDiscountPercentage,
    handleChangeCashFlow,
    handleRemoveCashFlow,
    handleAddCashFlow,
    handleClickCalculation,
    totalPresentValue,
    tableData,
    isErrorDiscountPercentage,
  } = useNpv()

  return (
    <Center className="px-[10%] py-10">
      <Box>
        <Title>NPV: {totalPresentValue} 円</Title>
        <Space h="lg" />

        <Input.Wrapper label="割引率(%)">
          <NumberInput
            value={discountPercentage}
            error={isErrorDiscountPercentage}
            onChange={handleChangeDiscountPercentage}
          />
        </Input.Wrapper>
        <Space h="lg" />

        <Input.Wrapper label="キャッシュフロー(円)">
          {cashFlows.map((cashFlow, index) => (
            <>
              <Input.Wrapper label={`${index + 1}年目`}>
                <Flex align="center">
                  <NumberInput
                    key={index}
                    value={cashFlow}
                    onChange={(e) => handleChangeCashFlow(e, index)}
                  />
                  <CloseButton onClick={() => handleRemoveCashFlow(index)} />
                </Flex>
              </Input.Wrapper>
              <Space h="sm" />
            </>
          ))}
        </Input.Wrapper>

        <Box>
          <CloseButton icon={<>+</>} onClick={handleAddCashFlow} />
        </Box>
        <Space h="lg" />

        <Box>
          <Button
            disabled={isErrorDiscountPercentage}
            onClick={handleClickCalculation}
          >
            正味現在価値を計算
          </Button>
        </Box>
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
      </Box>
    </Center>
  )
}
