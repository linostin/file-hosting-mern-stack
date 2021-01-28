import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/register" component={SignUp}/>
          <Route path="/login" component={SignIn}/> 
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
