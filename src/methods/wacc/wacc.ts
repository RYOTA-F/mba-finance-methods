import { roundWithScale } from '../common'

export const calculationWACC = (
  equity: number,
  debt: number,
  equityCost: number,
  debtCost: number,
  taxRate: number
) => {
  const totalCapital = equity + debt
  const equityRatio = equity / totalCapital
  const debtRatio = debt / totalCapital
  const afterTaxDebtCost = debtCost * (1 - taxRate)

  const wacc = equityRatio * equityCost + debtRatio * afterTaxDebtCost

  return roundWithScale(wacc * 100, 2)
}
