import { describe, test, expect } from 'vitest'
import { calculationNPV } from './npv'

describe('calculationNPV', () => {
  describe('Day1 Exercises1', () => {
    test('NPV が正しく出力される', () => {
      // Input
      const cashFlows = [200, 200, 200]
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
      console.log(cashFlows)
      const discountPercentage = 10

      // Output
      const totalPresentValue = 226245.9

      const result = calculationNPV(cashFlows, discountPercentage)
      expect(result.totalPresentValue).toBe(totalPresentValue)
    })
  })
})
