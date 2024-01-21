import { useState } from 'react'
import { calculationNPV } from '@/methods/npv'

type TableData = {
  year: number
  discountRate: number
  presentValue: number
}

export const useNpv = () => {
  const [discountPercentage, setDiscountPercentage] = useState(0)
  const [cashFlows, setCashFlows] = useState([0, 0, 0])
  const [totalPresentValue, setTotalPresentValue] = useState(0)
  const [tableData, setTableData] = useState<TableData[]>([])

  /**
   * 割引率を変更
   */
  const handleChangeDiscountPercentage = (e: number | string) =>
    setDiscountPercentage(Number(e))

  /**
   * キャッシュフローを変更
   */
  const handleChangeCashFlow = (cashFlow: number | string, index: number) => {
    const newCashFlows = [...cashFlows]
    newCashFlows[index] = Number(cashFlow)
    setCashFlows(newCashFlows)
  }

  /**
   * キャッシュフローを削除
   */
  const handleRemoveCashFlow = (index: number) => {
    const newCashFlows = [...cashFlows]
    newCashFlows.splice(index, 1)
    setCashFlows(newCashFlows)
  }

  /**
   * キャッシュフローを追加
   */
  const handleAddCashFlow = () => {
    setCashFlows([...cashFlows, 0])
  }

  /**
   * 計算ボタンをクリック
   */
  const handleClickCalculation = () => {
    const {
      yearsArray,
      discountRateArray,
      presentValueArray,
      totalPresentValue,
    } = calculationNPV(cashFlows, discountPercentage)

    setTotalPresentValue(totalPresentValue)

    setTableData(
      yearsArray.map((year, i) => ({
        year,
        discountRate: discountRateArray[i],
        presentValue: presentValueArray[i],
      }))
    )
  }

  /**
   * 割引率が0以下かどうか
   */
  const isErrorDiscountPercentage = discountPercentage <= 0

  return {
    cashFlows,
    discountPercentage,
    handleChangeDiscountPercentage,
    handleChangeCashFlow,
    handleRemoveCashFlow,
    handleAddCashFlow,
    handleClickCalculation,
    totalPresentValue,
    tableData,
    isErrorDiscountPercentage,
  }
}
