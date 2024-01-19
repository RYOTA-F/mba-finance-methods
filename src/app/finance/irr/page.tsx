'use client'

import {
  Button,
  Box,
  Center,
  CloseButton,
  Flex,
  Title,
  Input,
  NumberInput,
  Space,
} from '@mantine/core'
import { useIRR } from '@/hooks/useIrr'

export default function IRRPage() {
  const {
    irr,
    initialInvestment,
    handleChangeInitialInvestment,
    isErrorInitialInvestment,
    cashFlows,
    handleChangeCashFlows,
    handleRemoveCashFlow,
    handleAddCashFlow,
    handleClickCalculation,
  } = useIRR()

  return (
    <Center className="px-[10%] py-10">
      <Box>
        <Title>IRR: {irr} %</Title>
        <Space h="lg" />

        <Input.Wrapper label="初期投資額 (円)">
          <NumberInput
            value={initialInvestment}
            error={isErrorInitialInvestment}
            onChange={handleChangeInitialInvestment}
          />
        </Input.Wrapper>
        <Space h="lg" />

        <Input.Wrapper label="キャッシュフロー (円)">
          {cashFlows.map((cashFlow, index) => (
            <>
              <Input.Wrapper label={`${index + 1}年目`}>
                <Flex align="center">
                  <NumberInput
                    key={index}
                    value={cashFlow}
                    onChange={(e) => handleChangeCashFlows(e, index)}
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
          <Button onClick={handleClickCalculation}>IRRを計算</Button>
        </Box>
      </Box>
    </Center>
  )
}
