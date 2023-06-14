import { createTheme } from "@mui/material";



export const lightTheme = createTheme({
  direction: 'ltr',
  palette: {
    primary: {
      main: '#6F00FF'

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
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      }
    },
    MuiPaper: {

      defaultProps: {
        sx: {
          border: 'none',
          borderRadius: 5
        },

        elevation: 1,
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: (t) => ({
          borderRadius: 4,
          border: 'none',
          backgroundColor: t.ownerState.variant === 'outlined' ? t.theme.palette.background.default : 'transparent',
        })
      }
    },
    MuiCssBaseline: {
      styleOverrides: `
          body{
            font-family:'poppins' , 'almarai' ;
        }
          `,
    },
  },
  typography: {
    fontFamily: ['"poppins"', '"almarai"'].join(","),
  },
});


export const darkTheme = createTheme({
  direction: 'ltr',


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
  components: {
    MuiButton: {
      defaultProps: {
        sx: {
          borderRadius: 4
        }
      }
    },
    MuiTextField: {
      styleOverrides: {

        root: (t) => ({
          borderRadius: 4,
          backgroundColor: t.ownerState.variant === 'outlined' ? t.theme.palette.background.default : 'transparent',
        })
      }
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },

    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
        sx: {
          border: 'none',
          borderRadius: 5
        }
      }
    }
  },
  typography: {
    ...lightTheme.typography
  }
})

