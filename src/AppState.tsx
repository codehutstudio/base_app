import { atom } from 'recoil'

export const appRoutesAtom = atom<{[key:string]: any} | null>({
    key: 'appRoutes',
    default: null
})