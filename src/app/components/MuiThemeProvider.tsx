import React, { PropsWithChildren, useContext, useEffect, useMemo } from 'react'
import { ColorModeContext } from '../hooks/useDarkMode'
import { darkTheme, lightTheme } from '@/plugins'
import { ThemeProvider } from '@mui/material/styles';

export default function MuiThemeProvider(props: PropsWithChildren) {
    const { mode } = useContext(ColorModeContext)
    console.log('context value is', mode)
    const isDarkMode = useMemo(() => mode === 'dark', [mode])
    const activeTheme = useMemo(() => isDarkMode ? darkTheme : lightTheme, [isDarkMode])
    useEffect(() => {
        isDarkMode ? document.body.classList.add('dark') : document.body.classList.remove('dark')
    }, [isDarkMode])
    return (
        <ThemeProvider theme={activeTheme}>
            {props.children}
        </ThemeProvider>
    )
}
