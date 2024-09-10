import { createTheme, responsiveFontSizes } from '@mui/material'

const palette = {
  type: 'light',
  boxShadow: '0px 14px 64px -4px rgba(0, 0, 0, 0.12)',
  purple: {
    1: '#6665DD',
    2: '#524192',
    3: '#151537',
  },
  green: {
    1: 'green',
  },
  gray: {
    1:'gray',
  },
  yellow: {
    1: '#FAED00',
  },
  red: {
    1: 'red',
  },
  tan: {
    20: '#E6DECC',
  },
  mono: {
    white: '#FFFFFF',
    black: {
      1: '#1F242D',
    },
  },
  grey: {
    1: 'grey',
  },
  text: {
    primary: '#1F242D',
    secondary: '#5E6D88',
    success: '#43A391',
    successLight: '#347F71',
    successDark: '#347F71',
    purple70: '#313181',
    red70: '#9D1643',
    default: '#77663B',
    error: '#9D1643',
    danger: '#C10040',
  },
  background: {
    error: '#FCE9EF',
    paper: '#FFFFFF',
    dark: '#000000',
  },
  border: {
    error: '#F6BCCF',
    success: '#C9E9E3',
  },
  loading: {
    default: '#D2D7E080',
  },
}

export const getMainTheme = () =>
  responsiveFontSizes(
    createTheme({
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
          mobile: 0,
          tablet: 1024,
          desktop: 1280,
        },
      },
      palette,
      layout: {
        contentWidth: 1236,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: 1000,
            },
          },
        },
        MuiInputBase: {
          defaultProps: {
            inputProps: {
              style: { fontSize: 16 },
            },
          },
        },
        MuiInputLabel: {
          defaultProps: {
            style: { fontSize: 16 },
          },
        },
        MuiSelect: {
          defaultProps: {
            style: { fontSize: 16 },
          },
        },
        MuiMenuItem: {
          defaultProps: {
            style: { fontSize: 16 },
          },
        },
      },
      typography: {
        button: {
          textTransform: 'none',
          fontFamily: 'SuisseIntl',
          fontWeight: 400,
        },
      },
      zIndex: {
        appBar: 1200,
        drawer: 1100,
      },
    }),
  )
