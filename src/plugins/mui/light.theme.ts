import { createTheme } from '@mui/material'
import { sharedThemeConfig } from './sharedThemeConfig';
export const lightTheme = createTheme({
    ...sharedThemeConfig,
    direction: 'ltr',
    palette: {
        primary: {
            main: '#72B6F9'

        },
        secondary: {
            main: "#F57077",
        },
        background: {
            default: '#f9f9f9',
            paper: '#ffffff',
        },
        text: {
            primary: "#2f2f2f",
            secondary: "#777777"
        },
        divider: '#eeeeee'
    },
});
