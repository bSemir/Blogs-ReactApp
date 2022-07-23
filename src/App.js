import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            {/* u switch navodimo Route a u njemu path na koji ce se pozvati komponenta Home, u ovom primjeru */}
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </div>
      </div>
    </Router>
  );
}

export default App;
