import { describe, test, expect } from 'vitest'
import { calculationIRR } from './irr'

describe('calculationIRR', () => {
  describe('Unit2 Example1', () => {
    test('IRR が正しく出力される', () => {
      // 初期投資
      const initialInvestment = 2000
      // キャッシュフロー
      const cashFlows = [0, 1000, 1000, 1000]
      // IRR
      const irr = 14.7

      const result = calculationIRR([-initialInvestment, ...cashFlows])
      expect(result).toBe(irr)
    })
  })

  describe('Unit2 Exercises4-1', () => {
    test('IRR が正しく出力される', () => {
      // 初期投資
      const initialInvestment = 10
      // キャッシュフロー
      const cashFlows = [5, 5, 5]
      // IRR
      const irr = 23.4

      const result = calculationIRR([-initialInvestment, ...cashFlows])
      expect(result).toBe(irr)
    })
  })

  describe('Unit2 Exercises4-2', () => {
    test('IRR が正しく出力される', () => {
      // 初期投資
      const initialInvestment = 120
      // キャッシュフロー
      const cashFlows = [60, 50, 40]
      // IRR
      const irr = 13.0

      const result = calculationIRR([-initialInvestment, ...cashFlows])
      expect(result).toBe(irr)
    })
  })
})
