import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';

function App() {
  return (
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
  );
}

export default App;
