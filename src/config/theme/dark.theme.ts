
import { createTheme } from '@mui/material'
import {sharedThemeConfig} from './sharedThemeConfig'
export const darkTheme = createTheme({
    direction: 'ltr',
    ...sharedThemeConfig,

    palette: {
        mode: 'dark',
        primary: {
            main: "#76FCFF"
        },
        secondary: {
            main: '#F57077'
        },

        background: {
            default: '#13181F',
            paper: '#171E27',
        },
        text: {
            primary: "#ffffff",
            secondary: "#eeeeee"
        },
        divider: '#373C40'
    },


})
