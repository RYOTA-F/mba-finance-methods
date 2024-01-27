import { roundWithScale } from '@/methods/common/round'

/**
 * 内部収益率を計算
 * 高次代数方程式: 漸近法で算出 (解析法では算出不可)
 * @see https://www.itmedia.co.jp/im/articles/0707/18/news115.html
 */
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
      (acc, val, index) => acc + val / Math.pow(1 + irr, index),
      0
    )

    netPresentValue > 0 ? (lowerBound = irr) : (upperBound = irr)
  }

  return roundWithScale(upperBound * 100, 2)
}
