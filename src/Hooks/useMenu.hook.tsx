import { useState } from 'react'

const useMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const openMenu = (event: {[key: string]:any}) => {
      setAnchorEl(event.currentTarget);
    };
    const closeMenu = () => {
      setAnchorEl(null);
    };

    return { anchorEl, open, openMenu, closeMenu };
}
export default useMenu