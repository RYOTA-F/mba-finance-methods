import { roundWithScale } from '@/methods/common/round'

export const calculationIRR = (cashFlows: number[]) => {
  // 許容範囲
  const tolerance = 1.0e-7
  // 下限値
  let lowerBound = -1
  // 上限値
  let upperBound = 1

  while (upperBound - lowerBound > tolerance) {
    const irr = (lowerBound + upperBound) / 2
    const netPresentValue = cashFlows.reduce(
      (acc, val, idx) => acc + val / Math.pow(1 + irr, idx),
      0
    )

    netPresentValue > 0 ? (lowerBound = irr) : (upperBound = irr)
  }

  return roundWithScale(upperBound * 100, 2)
}
