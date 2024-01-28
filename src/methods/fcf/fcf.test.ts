import { describe, test, expect } from 'vitest'
import { calculationFCF, InputData } from './fcf'

describe('calculationFCF', () => {
  describe('IEF Day3', () => {
    describe('Assignment2', () => {
      test('FCF が正しく出力される', () => {
        // Input
        const inputData: InputData[] = [
          {
            operationgIncome: 120,
            taxAmount: 48,
            depreciationExpense: 30,
            investmentAmount: 40,
            wc: 10,
          },
          {
            operationgIncome: 140,
            taxAmount: 56,
            depreciationExpense: 30,
            investmentAmount: 50,
            wc: 20,
          },
          {
            operationgIncome: 150,
            taxAmount: 60,
            depreciationExpense: 30,
            investmentAmount: 50,
            wc: 20,
          },
          {
            operationgIncome: 170,
            taxAmount: 68,
            depreciationExpense: 20,
            investmentAmount: 50,
            wc: 20,
          },
          {
            operationgIncome: 180,
            taxAmount: 72,
            depreciationExpense: 20,
            investmentAmount: 30,
            wc: 20,
          },
          {
            operationgIncome: 200,
            taxAmount: 80,
            depreciationExpense: 20,
            investmentAmount: 20,
            wc: 20,
          },
          {
            operationgIncome: 210,
            taxAmount: 84,
            depreciationExpense: 10,
            investmentAmount: 20,
            wc: 10,
          },
          {
            operationgIncome: 220,
            taxAmount: 88,
            depreciationExpense: 10,
            investmentAmount: 10,
            wc: 10,
          },
          {
            operationgIncome: 230,
            taxAmount: 92,
            depreciationExpense: 10,
            investmentAmount: 10,
            wc: 10,
          },
          {
            operationgIncome: 230,
            taxAmount: 92,
            depreciationExpense: 10,
            investmentAmount: 10,
            wc: 10,
          },
        ]
        const fcfs = [52, 44, 50, 52, 78, 100, 106, 122, 128, 128]

        // Output
        const outputData = inputData.map((data, index) => ({
          ...data,
          fcf: fcfs[index],
        }))

        const result = calculationFCF(inputData)
        expect(result).toEqual(outputData)
      })
    })
  })
})
