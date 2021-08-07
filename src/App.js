
import './App.css';
import Landing from './Components/LandingPage/Landing';
import {BrowserRouter , Route, Switch } from 'react-router-dom'
import Login from './Components/LoginPage/Login';
import Signup from './Components/SignupPage/Signup';

function App() {
  return (
    
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Landing}></Route>
      <Route  path="/login" component={Login}></Route>
      <Route  path="/signup" component={Signup}></Route>
   
   </Switch>
   </BrowserRouter>
 
  );
}

export default App;
