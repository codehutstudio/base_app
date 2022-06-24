import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import { useCart } from '../../Hooks/useCart.hook';

export default function ShoppingCartPopupButton() {
    const cart = useCart()
  return (
    <IconButton>
        <ShoppingCartIcon sx={{color: "#fff"}}/>
    </IconButton>
  )
}
