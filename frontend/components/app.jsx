import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { AuthRoute, ProtectedRoute } from '../util/route_util'

import HomePageContainer from "./home/homepage";
import SignUpFormContainer from "./users/signup_form_container";
import SignInFormContainer from "./users/signin_form_container";

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <AuthRoute exact path="/signin" component={SignInFormContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
