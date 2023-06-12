import { Theme, createTheme } from "@mui/material";



export const lightTheme = createTheme({
  direction: 'ltr',
  palette: {
    background: {
      default: '#fafafa',
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
        elevation: 0,
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: (t) => ({
          borderRadius:4,
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
      main: "#FD413C"
    },
    secondary: {
      main: '#FEBC2C'
    },

    background: {
      default: '#212529',
      paper: '#2A2E32',
    },
    text: {
      primary: "#ffffff",
      secondary: "#eeeeee"
    },
    divider: '#373C40'
  },
  components: {

    MuiTextField: {
      styleOverrides: {
      
        root: (t) => ({
          borderRadius:4,
          backgroundColor: t.ownerState.variant === 'outlined' ? t.theme.palette.background.default : 'transparent',
        })
      }
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      }
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
        sx: { border: 'none' }
      }
    }
  },
  typography: {
    ...lightTheme.typography
  }
})

