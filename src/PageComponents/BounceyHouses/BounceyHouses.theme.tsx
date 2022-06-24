import { createTheme } from "@mui/material/styles";
declare module '@mui/material/styles' {
    interface Theme {
      highlight: {
        main: string;
        secondary: string;
      };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        highlight?: {
            main?: string;
            secondary?: string;
          };
    }
  }
  
const theme = createTheme({
    palette: {
        primary: {
             main: "#313166"
        },
        secondary: {
            main: "#4c3781"
        },
    },
    highlight: {
        main: "#ffc62b",
        secondary: "#b41d87"
    }
})

export default theme