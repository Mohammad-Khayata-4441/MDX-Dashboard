import React, { PropsWithChildren } from 'react'
import { ColorModeContext, useDarkMode } from '../hooks/useDarkMode'

export default function ColorModeProvider(props: PropsWithChildren) {
    const { mode, setMode } = useDarkMode();
    return (
        <ColorModeContext.Provider value={{ mode, setMode }}>
            {props.children}
        </ColorModeContext.Provider>
    )
}
