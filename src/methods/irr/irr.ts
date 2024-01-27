import { roundWithScale } from '@/methods/common/round'

/**
 * 内部収益率を計算
 * 高次代数方程式: 漸近法で算出 (解析法では算出不可)
 * https://envision.microsoft.com/ja-JP/tokyo?wt.mc_ID=Envision2023_esc_corp_em_oo_fld_tokyo_city_homepage%20
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
      (acc, val, idx) => acc + val / Math.pow(1 + irr, idx),
      0
    )

    netPresentValue > 0 ? (lowerBound = irr) : (upperBound = irr)
  }

  return roundWithScale(upperBound * 100, 2)
}
