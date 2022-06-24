import { useRecoilState } from "recoil"
import { cartAtom } from "../Store/ShoppingCart.store"

export const useCart = () => {
    const [cart, updateCart] = useRecoilState(cartAtom)
    const add = () => {}
    const remove = () => {}
    const update = () => {}

    return {add, remove, update}
}