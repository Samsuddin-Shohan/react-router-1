import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Router>
      <Navbar></Navbar>
      <Switch>
      

          
          <Route exact path='/' component = {Home}></Route>
          <Route path = '/about' component={About}></Route>
          <Route path = '/services' component={Services}></Route>
          <Route component={NotFound}></Route>

      </Switch>
      </Router>
    </div>
  );
}

export default App;
