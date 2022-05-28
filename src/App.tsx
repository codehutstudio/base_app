import { CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import AppRouting from "./AppRouting";
import Providers from "./Providers";
import theme from "./Theme";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Providers>
            <Outlet />
          </Providers>
        </ThemeProvider>
    )
}