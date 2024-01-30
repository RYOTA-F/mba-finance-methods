import { describe, test, expect } from 'vitest'
import { calculationWACC } from './wacc'

describe('calculationWACC', () => {
  describe('Example', () => {
    test('WACC が正しく出力される', () => {
      // Input
      const equity = 500000 // 企業の株式の市場価値
      const debt = 300000 // 企業の借入額
      const equityCost = 0.08 // 株式のコスト（例: 8%）
      const debtCost = 0.05 // 借入のコスト（例: 5%）
      const taxRate = 0.3 // 企業の税率（例: 30%）

      // Output
      const totalPresentValue = 6.31

      const result = calculationWACC({
        equity,
        debt,
        equityCost,
        debtCost,
        taxRate,
      })
      expect(result).toBe(totalPresentValue)
    })
  })
})
