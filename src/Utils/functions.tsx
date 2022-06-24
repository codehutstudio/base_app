export const pipe = (...fns: Function[]) => (x: any) => fns.reduce((v, f) => f(v), x) 
export const last = (array: any[]) => array[array.length -1]
export const first = (array: any[]) => array[0]


export const hasCapiatlLetters = (val: string) => val.match(/([A-Z][a-z]+)/gm)
export const splitOnCapitalLetters = (val: string) => val.split(/(?=[A-Z])/) 
export const capitalize = (str: string) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`
export const camelCaseToLabel = (val: string): string => {
    if(hasCapiatlLetters(val)) {
         return val.split(/(?=[A-Z])/).map(s => capitalize(s)).join(' ')
    }
    return capitalize(val)
}