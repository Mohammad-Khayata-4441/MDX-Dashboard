import { Theme } from '@mui/material'
import { Typography } from '@mui/material/styles/createTypography'
export const sharedThemeConfig: Partial<Theme> = {


    // ? components default config
    typography: {
        "fontFamily": `"Roboto", "almarai", "Arial", sans-serif`,
    } as Typography,

    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: (t) => ({
                    backgroundColor: t.ownerState.variant === 'outlined' ? t.theme.palette.background.default : 'transparent',
                })
            }
        },
        MuiAppBar: {
            defaultProps: {
                variant: 'outlined',
                elevation: 0,
            },
        },
        MuiPaper: {
            defaultProps: {
                elevation: 0,
                variant: 'outlined'
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    minWidth: '100px'
                }
            }
        }
    },
}