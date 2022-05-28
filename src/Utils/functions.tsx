export const pipe = (...fns: Function[]) => (x: any) => fns.reduce((v, f) => f(v), x) 
export const last = (array: any[]) => array[array.length -1]
export const first = (array: any[]) => array[0]


export const hasCapiatlLetters = (val: string) => val.match(/([A-Z][a-z]+)/gm)
export const splitOnCapitalLetters = (val: string) => val.split(/(?=[A-Z])/) 