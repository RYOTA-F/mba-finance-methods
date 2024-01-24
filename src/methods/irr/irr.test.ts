import { describe, test, expect } from 'vitest'
import { calculationIRR } from './irr'

describe('calculationIRR', () => {
  describe('IEF Day2', () => {
    describe('Example1', () => {
      test('IRR が正しく出力される', () => {
        // 初期投資
        const initialInvestment = 2000
        // キャッシュフロー
        const cashFlows = [0, 1000, 1000, 1000]
        // IRR
        const irr = 14.71

        const result = calculationIRR([-initialInvestment, ...cashFlows])
        expect(result).toBe(irr)
      })
    })

    describe('Exercises4-1', () => {
      test('IRR が正しく出力される', () => {
        // 初期投資
        const initialInvestment = 10
        // キャッシュフロー
        const cashFlows = [5, 5, 5]
        // IRR
        const irr = 23.38

        const result = calculationIRR([-initialInvestment, ...cashFlows])
        expect(result).toBe(irr)
      })
    })

    describe('Exercises4-2', () => {
      test('IRR が正しく出力される', () => {
        // 初期投資
        const initialInvestment = 120
        // キャッシュフロー
        const cashFlows = [60, 50, 40]
        // IRR
        const irr = 12.99

        const result = calculationIRR([-initialInvestment, ...cashFlows])
        expect(result).toBe(irr)
      })
    })

    describe('Day2 Assignment2', () => {
      test('IRR が正しく出力される', () => {
        // 初期投資
        const initialInvestment = 20000000000
        // キャッシュフロー
        const cashFlows = new Array(15).fill(2000000000)
        // IRR
        const irr = 5.56

        const result = calculationIRR([-initialInvestment, ...cashFlows])
        expect(result).toBe(irr)
      })
    })

    describe('Day2 Assignment4-ProjectA', () => {
      test('IRR が正しく出力される', () => {
        // 初期投資
        const initialInvestment = 10
        // キャッシュフロー
        const cashFlows = new Array(3).fill(5)
        // IRR
        const irr = 23.38

        const result = calculationIRR([-initialInvestment, ...cashFlows])
        expect(result).toBe(irr)
      })
    })

    describe('Day2 Assignment4-ProjectB', () => {
      test('IRR が正しく出力される', () => {
        // 初期投資
        const initialInvestment = 120
        // キャッシュフロー
        const cashFlows = [60, 50, 40]
        // IRR
        const irr = 12.99

        const result = calculationIRR([-initialInvestment, ...cashFlows])
        expect(result).toBe(irr)
      })
    })
  })
})
