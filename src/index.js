import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: '#f6f6f6'
      }
    },
    MuiBottomNavigationAction: {
      root: {
        padding: 0,
        minWidth: 0,
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: 45
      }
    },
    MuiList: {
      padding: {
        paddingTop: '0px',
        paddingBottom: '0px'
      }
    },
    MuiListItem: {
      gutters: {
        paddingLeft: '0px',
        paddingRight: '0px',
      },
    },
    MuiToolbar: {
      regular: {
        height: "50px",
        minHeight: "50px",
        '@media (min-width: 600px)': {
          minHeight: "50px"
        }
      }
    },
  },
  palette: {
    primary: {
      main: "#ca0a37",
    },
    secondary: {
      main: '#983cc9',
    }
  },
  typography: {
    button: {
      textTransform: 'none',
      "fontWeight": 630,
    },
    "fontFamily": `"Segoe UI",Roboto,Helvetica,Arial,sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
   }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
