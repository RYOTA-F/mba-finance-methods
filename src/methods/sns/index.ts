import { calculationPresentValue } from './calculationPresentValue'

const discountPercentage = 10 // ⇦ ここに割引率を入力 (%)
const yearsCount = 30 // ⇦ ここに期間を入力 (年)
const yearsCashFrow = 24000 // ⇦ ここに年間キャッシュフローを入力(円)

const { yearsArray, discountRateArray, presentValueArray, totalPresentValue } =
  calculationPresentValue(yearsCount, discountPercentage, yearsCashFrow)

console.log('==========================')
console.log('現在価値 : ', totalPresentValue, '円')
console.log('==========================')

// 値を出力
yearsArray.forEach((year) => {
  const targetYear = year - 1

  console.log(
    `${year}年目 : `,
    'ディスカウントレート -> ',
    discountRateArray[targetYear],

    '現在価値 -> ',
    presentValueArray[targetYear],
    '円',
  )
})
