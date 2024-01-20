import { describe, test, expect } from 'vitest'
import { calculationNPV } from './npv'

describe('calculationNPV', () => {
  describe('Day1 Exercises1', () => {
    test('NPV が正しく出力される', () => {
      // Input
      const yearsCount = 3
      const discountPercentage = 10
      const yearsCashFrow = 200

      // Output
      const totalPresentValue = 497.4

      const result = calculationNPV(
        yearsCount,
        discountPercentage,
        yearsCashFrow
      )

      expect(result.totalPresentValue).toBe(totalPresentValue)
    })
  })
})
