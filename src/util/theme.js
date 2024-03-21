import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

let theme = createTheme({

  palette: {
    mode: 'light',

    primary: {
      main: '#ff73e0',
    },
    secondary: {
      main: '#e868cc',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f7f7f7',
      paper: '#f5f5f5',
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      qs: 380, // quite small
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
      // custom: {
      //   light: '#ffa726',
      //   main: '#f57c00',
      //   dark: '#ef6c00',
      //   contrastText: 'rgba(0, 0, 0, 0.87)',
      // },
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
})
theme = responsiveFontSizes(theme)

export default theme