import { describe, test, expect } from 'vitest'
import { calculationNPV } from './npv'

describe('calculationNPV', () => {
  describe('Day1 Exercises1', () => {
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

  describe('Day2 Assignment1', () => {
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

  describe('Day2 Assignment2 (5%)', () => {
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

  describe('Day2 Assignment2 (10%)', () => {
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

  describe('Day2 Assignment3-HighSchool', () => {
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

  describe('Day2 Assignment3-University', () => {
    test('NPV が正しく出力される', () => {
      // Input
      const cashFlows = [...new Array(4).fill(-100), ...new Array(36).fill(800)]
      const discountPercentage = 10

      // Output
      const totalPresentValue = 4970.4

      const result = calculationNPV(cashFlows, discountPercentage)
      expect(result.totalPresentValue).toBe(totalPresentValue)
    })
  })

  describe('Day2 Assignment4-ProjectA', () => {
    test('NPV が正しく出力される', () => {
      // Input
      const initialInvestment = -10
      const cashFlows = [...new Array(3).fill(5)]
      const discountPercentage = 5

      // Output
      const totalPresentValue = 3.5999999999999996

      const result = calculationNPV(cashFlows, discountPercentage)
      expect(result.totalPresentValue + initialInvestment).toBe(
        totalPresentValue
      )
    })
  })

  describe('Day2 Assignment4-ProjectB', () => {
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
