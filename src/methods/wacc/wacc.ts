import { roundWithScale } from '../common'

export interface CalculationWACCInput {
  /**
   * 株主資本
   */
  equity: number

  /**
   * 有利子負債
   */
  debt: number

  /**
   * 株式コスト
   */
  equityCost: number

  /**
   * 借入コスト
   */
  debtCost: number

  /**
   * 税率
   */
  taxRate: number
}

/**
 * WACCを計算
 */
export const calculationWACC = ({
  equity,
  debt,
  equityCost,
  debtCost,
  taxRate,
}: CalculationWACCInput) => {
  const totalCapital = equity + debt
  const equityRatio = equity / totalCapital
  const debtRatio = debt / totalCapital
  const afterTaxDebtCost = debtCost * (1 - taxRate)

  const wacc = equityRatio * equityCost + debtRatio * afterTaxDebtCost

  return roundWithScale(wacc * 100, 2)
}
