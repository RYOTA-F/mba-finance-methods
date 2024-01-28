export interface InputData {
  operationgIncome: number
  taxAmount: number
  depreciationExpense: number
  investmentAmount: number
  wc: number
}

export interface OutputData extends InputData {
  fcf: number
}

/**
 * フリーキャッシュフローを計算
 */
export const calculationFCF = (inputData: InputData[]): OutputData[] => {
  return inputData.map((data) => ({
    ...data,
    fcf:
      data.operationgIncome -
      data.taxAmount +
      data.depreciationExpense -
      data.investmentAmount -
      data.wc,
  }))
}
