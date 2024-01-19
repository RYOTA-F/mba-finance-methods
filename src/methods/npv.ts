import { roundWithScale } from './round'
import { RATE } from '../consts/rate'

/**
 * 正味現在価値を計算
 */
export const calculationNPV = (
  yearsCount: number,
  discountPercentage: number,
  yearsCashFrow: number
) => {
  // 割引率
  const discountRate = discountPercentage / RATE
  // 年数ごとの配列
  const yearsArray = Array.from({ length: yearsCount }, (_, i) => i + 1)

  // ディスカウントレートの配列
  const discountRateArray = yearsArray.map(
    (year) => 1 / (1 + discountRate) ** year
  )

  // 単年度の現在価値
  const presentValueArray = discountRateArray.map(
    (discountRate, i) => yearsCashFrow * discountRate
  )

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
