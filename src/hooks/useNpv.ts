import { useState } from 'react'
import { calculationNetPresentValue } from '@/methods/npv'

type TableData = {
  year: number
  discountRate: number
  presentValue: number
}

export const useNpv = () => {
  const [yearsCount, setYearsCount] = useState(0)
  const [discountPercentage, setDiscountPercentage] = useState(0)
  const [yearsCashFrow, setYearsCashFrow] = useState(0)

  const [totalPresentValue, setTotalPresentValue] = useState(0)
  const [tableData, setTableData] = useState<TableData[]>([])

  /**
   * 年数が0以下かどうか
   */
  const isErrorYearsCount = yearsCount <= 0

  /**
   * 割引率が0以下かどうか
   */
  const isErrorDiscountPercentage = discountPercentage <= 0

  /**
   * 年数を変更
   */
  const handleChangeYearsCount = (e: number | string) =>
    setYearsCount(Number(e))

  /**
   * 割引率を変更
   */
  const handleChangeDiscountPercentage = (e: number | string) =>
    setDiscountPercentage(Number(e))

  /**
   * 年間キャッシュフローを変更
   */
  const handleChangeYearsCashFrow = (e: number | string) =>
    setYearsCashFrow(Number(e))

  /**
   * 計算ボタンをクリック
   */
  const handleClickCalculation = () => {
    getPresentValue()
  }

  /**
   * 現在価値を計算する
   */
  const getPresentValue = () => {
    const {
      yearsArray,
      discountRateArray,
      presentValueArray,
      totalPresentValue,
    } = calculationNetPresentValue(
      yearsCount,
      discountPercentage,
      yearsCashFrow
    )

    setTotalPresentValue(totalPresentValue)

    setTableData(
      yearsArray.map((year, i) => ({
        year,
        discountRate: discountRateArray[i],
        presentValue: presentValueArray[i],
      }))
    )
  }

  return {
    yearsCount,
    handleChangeYearsCount,
    discountPercentage,
    handleChangeDiscountPercentage,
    yearsCashFrow,
    handleChangeYearsCashFrow,
    handleClickCalculation,
    totalPresentValue,
    tableData,
    isErrorYearsCount,
    isErrorDiscountPercentage,
  }
}
