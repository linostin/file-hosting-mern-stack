import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SignUp from "./components/smart/SignUp";
import SignIn from "./components/smart/SignIn";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./actions/user"
import Disk from "./components/Disk/Disk";
import * as S from "./styled";

import PhotoIcon from "@material-ui/icons/Photo";
import TopMenu from './components/DiskComponents/TopMenu'

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, []);

  return (
    <BrowserRouter>
      <S.PageContainer>
        <S.Header>
          <Navbar />
          <TopMenu label="test top" icon={<PhotoIcon/>}/>
        </S.Header>
        <S.Content>
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
        </S.Content>
      </S.PageContainer>
    </BrowserRouter>
  );
}

export default App;
