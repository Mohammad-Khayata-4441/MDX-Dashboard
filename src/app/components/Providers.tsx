import { PropsWithChildren } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryCleint } from '@/plugins'
import ColorModeProvider from './ColorModeProvider'
import MuiThemeProvider from './MuiThemeProvider'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/plugins/i18n'
import FeedBackProvider, { ConfirmContext } from './FeedBackProvider'

export default function AppProviders(props: PropsWithChildren) {
    return (
        <>
            <QueryClientProvider client={queryCleint}>

                <I18nextProvider i18n={i18n}>
                    <ColorModeProvider>
                        <MuiThemeProvider>
                            <FeedBackProvider>
                                {props.children}
                            </FeedBackProvider>
                        </MuiThemeProvider>
                    </ColorModeProvider>
                </I18nextProvider>
            </QueryClientProvider>

        </>
    )
}
