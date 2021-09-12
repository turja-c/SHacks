import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import DesignChatbot from './pages/DesignChatbot';

function App() {
  return (

    <div className="App">
      <Router>
      <Switch> 
        <Route path='/'exact component={Home} />
        <Route path='/Design'exact component={DesignChatbot} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
