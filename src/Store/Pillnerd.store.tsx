import { atom, atomFamily, selector } from 'recoil'
import { User } from '../PageComponents/PillnerdPageComponents/PillnerdTypes'

export const pn_appDataAtom = atom({
    key: 'pn_appData',
    default: {
        lists: null,
        formSchemas: {
            newList: [
                { name: 'firstName', type: 'string'},
                { name: 'lastName', type: 'string', optional: true},
                { name: 'age', type: 'number', optional: true}
            ]
        }
    }
})
export const pn_userAtom = atom<User | null>({
    key: 'pn_user',
    default: null
})
export const pn_selectedDateAtom = atom<Date | null>({
    key: 'pn_selectedDate',
    default: null
})
export const pn_formIdsAtom = atom<string[]>({
    key: 'pn_formIds',
    default: []
})
export const pn_formInputAtom = atomFamily({
    key: 'pn_formInput',
    default: {
        value: "",
        error: false
    }
})
export const pn_formStateSelector = selector({
    key: 'pn_formState',
    get: ({get}) => {
        
    }
})
    