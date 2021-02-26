import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./actions/user";
import Disk from "./components/Disk/Disk";

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    
      dispatch(auth());
    
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        {!isAuth ? (
          <Switch>
            <Route path="/register" component={SignUp} />
            <Route path="/login" component={SignIn} />
            <Redirect to="/login" />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/" component={Disk} />
            <Redirect to="/" />
          </Switch>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
