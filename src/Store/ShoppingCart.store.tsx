import { atom, selector } from 'recoil'

export const cartAtom = atom({
    key: 'cart',
    default: {
        items: [],
        compare: [],
    }
})

export const cartUtils = selector({
    key: 'cartUtils',
    get: ({get}) => {
        const cart = get(cartAtom)
        const count = cart.items
        const compareCount = cart.compare.length
        const compareList = cart.compare
        return {count, compareCount, compareList}
    }
})

export const showCartPopop = atom({key: 'showCartPopop', default: false})