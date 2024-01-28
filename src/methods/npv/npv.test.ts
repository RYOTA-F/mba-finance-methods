import { describe, test, expect } from 'vitest'
import { calculationNPV } from './npv'

describe('calculationNPV', () => {
  describe('IEF Day1', () => {
    describe('Exercises1', () => {
      test('NPV が正しく出力される', () => {
        // Input
        const cashFlows = new Array(3).fill(200)
        const discountPercentage = 10

        // Output
        const totalPresentValue = 497.4

        const result = calculationNPV(cashFlows, discountPercentage)
        expect(result.totalPresentValue).toBe(totalPresentValue)
      })
    })
  })

  describe('IEF Day2', () => {
    describe('Assignment1', () => {
      test('NPV が正しく出力される', () => {
        // Input
        const cashFlows = new Array(30).fill(24000)
        const discountPercentage = 10

        // Output
        const totalPresentValue = 226245.9

        const result = calculationNPV(cashFlows, discountPercentage)
        expect(result.totalPresentValue).toBe(totalPresentValue)
      })
    })

    describe('Assignment2 (5%)', () => {
      test('NPV が正しく出力される', () => {
        // Input
        const cashFlows = new Array(15).fill(2000000000)
        const discountPercentage = 5

        // Output
        const totalPresentValue = 20759316076.4

        const result = calculationNPV(cashFlows, discountPercentage)
        expect(result.totalPresentValue).toBe(totalPresentValue)
      })
    })

    describe('Assignment2 (10%)', () => {
      test('NPV が正しく出力される', () => {
        // Input
        const cashFlows = new Array(15).fill(2000000000)
        const discountPercentage = 10

        // Output
        const totalPresentValue = 15212159012.6

        const result = calculationNPV(cashFlows, discountPercentage)
        expect(result.totalPresentValue).toBe(totalPresentValue)
      })
    })

    describe('Assignment3-HighSchool', () => {
      test('NPV が正しく出力される', () => {
        // Input
        const cashFlows = new Array(40).fill(500)
        const discountPercentage = 10

        // Output
        const totalPresentValue = 4889.5

        const result = calculationNPV(cashFlows, discountPercentage)
        expect(result.totalPresentValue).toBe(totalPresentValue)
      })
    })

    describe('Assignment3-University', () => {
      test('NPV が正しく出力される', () => {
        // Input
        const cashFlows = [
          ...new Array(4).fill(-100),
          ...new Array(36).fill(800),
        ]
        const discountPercentage = 10

        // Output
        const totalPresentValue = 4970.4

        const result = calculationNPV(cashFlows, discountPercentage)
        expect(result.totalPresentValue).toBe(totalPresentValue)
      })
    })

    describe('Assignment4-ProjectA', () => {
      test('NPV が正しく出力される', () => {
        // Input
        const initialInvestment = -10
        const cashFlows = [...new Array(3).fill(5)]
        const discountPercentage = 5

        // Output
        const totalPresentValue = 3.6

        const result = calculationNPV(cashFlows, discountPercentage)
        expect(
          Number((result.totalPresentValue + initialInvestment).toFixed(2))
        ).toBe(totalPresentValue)
      })
    })

    describe('Assignment4-ProjectB', () => {
      test('NPV が正しく出力される', () => {
        // Input
        const initialInvestment = -120
        const cashFlows = [60, 50, 40]
        const discountPercentage = 5

        // Output
        const totalPresentValue = 17

        const result = calculationNPV(cashFlows, discountPercentage)
        expect(result.totalPresentValue + initialInvestment).toBe(
          totalPresentValue
        )
      })
    })
  })
  describe('IEF Day3', () => {
    describe('Assignment2', () => {
      test('NPV が正しく出力される', () => {
        // Input
        const fcfs = [52, 44, 50, 52, 78, 100, 106, 122, 128, 128]
        const newFcfs = [...fcfs]
        newFcfs[9] = newFcfs[9] * (1 + 10)

        // Output
        const totalPresentValue = 970

        const result = calculationNPV(newFcfs, 10)
        expect(result.totalPresentValue).toBe(totalPresentValue)
      })
    })
  })
})
