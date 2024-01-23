import { RATE } from '@/consts/rate'
import { roundWithScale } from '@/methods/common/round'

/**
 * 正味現在価値を計算
 */
export const calculationNPV = (
  cashFlows: number[],
  discountPercentage: number
) => {
  // 割引率
  const discountRate = discountPercentage / RATE
  // 年数ごとの配列
  const yearsArray = Array.from({ length: cashFlows.length }, (_, i) => i + 1)

  // ディスカウントレートの配列
  const discountRateArray = yearsArray.map(
    (year) => 1 / (1 + discountRate) ** year
  )

  // 単年度の現在価値
  const presentValueArray = yearsArray.map((year) => {
    const targetYear = year - 1
    return cashFlows[targetYear] * discountRateArray[targetYear]
  })

  const totalPresentValue = presentValueArray.reduce((a, b) => a + b)

  return {
    yearsArray,
    discountRateArray: discountRateArray.map((discountRate) =>
      roundWithScale(discountRate, 3)
    ),
    presentValueArray: presentValueArray.map((presentValue) =>
      roundWithScale(presentValue, 1)
    ),
    totalPresentValue: roundWithScale(totalPresentValue, 1),
  }
}
