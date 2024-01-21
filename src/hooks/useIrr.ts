import { useState } from 'react'
import { calculationIRR } from '@/methods/irr'

export const useIRR = () => {
  const [irr, setIrr] = useState(0)
  const [initialInvestment, setInitialInvestment] = useState(0)
  const [cashFlows, setCashFlows] = useState([0, 0, 0])

  /**
   * 初期投資額を変更
   */
  const handleChangeInitialInvestment = (e: number | string) => {
    setInitialInvestment(Number(e))
  }

  /**
   * キャッシュフローを変更
   */
  const handleChangeCashFlows = (cashFlow: number | string, index: number) => {
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
   * IRRを計算
   */
  const handleClickCalculation = () => {
    setIrr(calculationIRR([-initialInvestment, ...cashFlows]))
  }

  /**
   * 初期投資額が0以下かどうか
   */
  const isErrorInitialInvestment = initialInvestment <= 0

  return {
    irr,
    initialInvestment,
    handleChangeInitialInvestment,
    isErrorInitialInvestment,
    cashFlows,
    handleChangeCashFlows,
    handleRemoveCashFlow,
    handleAddCashFlow,
    handleClickCalculation,
  }
}
