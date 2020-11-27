import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="container">
        hola
      </div>
      <Switch>
        <Route path="/" exact>
          home..
        </Route>
        <Route path="/login">
          login..
        </Route>
        <Route path="/admin">
          admin..
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
