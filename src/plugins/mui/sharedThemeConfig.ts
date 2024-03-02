import { Theme } from '@mui/material'
 export const sharedThemeConfig: Partial<Theme> = {


    // ? components default config
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
                variant:'outlined',
                elevation: 0,
            },
        },
        MuiPaper: {
            defaultProps:{
                elevation:0,
                variant:'outlined'
            },
        },
    },
}