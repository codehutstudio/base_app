import currency from 'currency.js'

export const dollar = (val: string | number): any => currency(val).format()
