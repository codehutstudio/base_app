import { Box, IconButton, Paper, styled, Typography, useTheme } from '@mui/material'
import { dollar } from '../../../Utils/currency.functions';
import currency from 'currency.js'
import Icons from '../../../Components/Icons';

const Image = styled('img')((props) => ({
  width: props.width,
  height: 'auto'
}))
interface Product {
  name: string;
  path: string;
  basePrice: number;
  sale: boolean;
  discount: number;
}
export default function inventory() {
  const imgs: Product[] = [
    { name: 'Castle', path: "/assets/images/castleBounceHouse.jpeg", basePrice: 200, sale: false, discount: 0},
    { name: 'Princess Castle', path: "/assets/images/princessCastle.jpeg", basePrice: 200, sale: false, discount: 0},
    { name: 'Castle With Pool', path: "/assets/images/castleWithPool.jpeg", basePrice: 200, sale: false, discount: 0},
    { name: 'Castle With Slide', path: "/assets/images/castleWithSlide.jpeg", basePrice: 200, sale: false, discount: 0},
  ]
  const theme = useTheme()
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100%', p: theme.spacing(2) }}>
      <Box sx={{ display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'center'}}>
        {imgs.map((img: Product) => <InventoryItem key={img.name} {...img} />)}
      </Box>
    </Box>
  )
}

function InventoryItem({ name, path, basePrice }: Product) {
  const theme = useTheme()
  console.log(theme)
  return (
    <Box sx={{ p: theme.spacing(1), minHeight: '210px'}}>
      <Paper sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '310px', height: '100%', flexDirection: 'column' }}>
        <Image src={path} alt={name} width="250px" />
        <Box sx={{display: 'flex', flexGrow: 1, alignItems: 'end'}}>
        <Typography variant='subtitle2' sx={{display: 'flex'}}>{name}</Typography>
        </Box>
        <Box sx={{display: 'flex', alignItems: 'end'}}>
          <Typography sx={{fontSize: 'smaller', fontStyle: 'italic', pr: '2px'}}>from</Typography>
          <Typography sx={{mr: theme.spacing(1)}}>{dollar(basePrice)}</Typography>
          <IconButton sx={{backgroundColor: 'primary.main'}}><Icons sx={{color: theme.highlight.main}} fontSize="small" icon="cart"/></IconButton>
        </Box>
      </Paper>
    </Box>)
}
