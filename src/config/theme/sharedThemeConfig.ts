import { Theme } from '@mui/material'
export const sharedThemeConfig: Partial<Theme> = {
    components: {
        
        MuiButton: {
            
            styleOverrides: {
                root: () => ({
                    borderRadius: '0.6rem',
                })
            }
        },
        MuiOutlinedInput: {
            defaultProps:{
                size:'small'
            },
            styleOverrides: {
                
                root: (t) => ({
                    borderRadius: '0.6rem',
                    backgroundColor: t.ownerState.variant === 'outlined' ? t.theme.palette.background.default : 'transparent',
                })
            }
        },
        MuiFormLabel:{
            styleOverrides:{
                root:{
                    marginBottom:"5px"
                }
            }
        },
        MuiAppBar: {
            defaultProps: {
                variant:'outlined',
                elevation: 0,
            },
            styleOverrides: {

            }
        },
        MuiPaper: {
            defaultProps:{
                elevation:0,
                variant:'outlined'
            },
            
            styleOverrides: {
                root: () => ({
                    borderRadius: '1.2rem',

                })
            }
        },

    },
    // typography: {
    //     fontFamily: ['"poppins"', '"almarai"'].join(","),
    //   } 
}