import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
import { createTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core'

const theme = createTheme({    // it will override default setting of mui
  palette: {
    primary: {
      main: '#fefefe'       // here it changing primary clor of mui
    }
  },
  typography: {             // here it has changed default font of mui
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
