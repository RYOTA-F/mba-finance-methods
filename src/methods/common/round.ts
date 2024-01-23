/**
 * 指定した桁を四捨五入
 */
export const roundWithScale = (value: number, scale: number) => {
  return Math.round(value * 10 ** scale) / 10 ** scale
}
