import React from "react";
import { Route } from "react-router-dom";
import { BrowseRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "../../screens/LoginScreen/LoginScreen";
import RegisterScreen from "../../screens/RegisterScreen/RegisterScreen";
import ForgotPaswordScreen from "../../screens/ForgotPasswordScreen/ForgotPasswordScreen";
import ResetPasswordScreen from "../../screens/ResetPasswordScreen/ResetPasswordScreen";
import ProtectedRoutes from "../Routes/ProtectedRoutes/ProtectedRoutes";

const Body = () => {
  return (
    <Router>
      <Switch>
        <ProtectedRoutes exact path="/" component={PrivateScreen} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Route exact path="/forgotPasword" component={ForgotPaswordScreen} />
        <Route
          exact
          path="/resetPassword/:token"
          component={ResetPasswordScreen}
        />
      </Switch>
    </Router>
  );
};

export default Body;
