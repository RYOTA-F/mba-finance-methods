export const calculationIRR = (values: number[], guess: number = 0.1) => {
  let x0 = guess
  let x1 = 0.0
  let tol = 0.00001
  let maxIter = 1000
  let iter = 0

  while (iter < maxIter) {
    let fValue = 0.0
    let fDerivative = 0.0
    for (let i = 0; i < values.length; i++) {
      fValue += values[i] / Math.pow(1 + x0, i)
      fDerivative += (-i * values[i]) / Math.pow(1 + x0, i + 1)
    }

    if (Math.abs(fValue) < tol) {
      return x0
    }

    x1 = x0 - fValue / fDerivative
    x0 = x1
    iter++
  }

  // Return null if no convergence
  return null
}
