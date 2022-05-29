import { atom } from 'recoil'
import AppData from './AppData'

export const appStateAtom = atom({
    key: 'appState', 
    default: AppData
})
export const appRoutesAtom = atom<{[key:string]: any} | null>({
    key: 'appRoutes',
    default: null
})
