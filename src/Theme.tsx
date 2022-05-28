import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { lightBlue } from '@mui/material/colors';

const primaryColor = lightBlue[900];
const secondaryColor = lightBlue[300];

let theme = createTheme();
theme = responsiveFontSizes(theme);


theme = createTheme({
    palette: {
        primary: { 
            main: primaryColor
        }, 
        secondary: { 
            main: secondaryColor
        }
    }
})
export default theme
