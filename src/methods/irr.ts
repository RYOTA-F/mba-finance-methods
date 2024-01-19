import { roundWithScale } from './round'

export const calculationIRR = (cashFlows: number[]) => {
  const tolerance = 1.0e-7
  let irr = 0.1 // 初期IRR推定値

  for (let i = 0; i < cashFlows.length; i++) {
    const fValue = cashFlows.reduce(
      (acc, val, idx) => acc + val / Math.pow(1 + irr, idx),
      0
    )
    const fDerivative = cashFlows.reduce(
      (acc, val, idx) => acc - (idx * val) / Math.pow(1 + irr, idx + 1),
      0
    )

    const newIrr = irr - fValue / fDerivative

    if (Math.abs(newIrr - irr) < tolerance) {
      return roundWithScale(newIrr * 100, 1)
    }

    irr = newIrr
  }

  throw new Error('IRR not converging')
}
