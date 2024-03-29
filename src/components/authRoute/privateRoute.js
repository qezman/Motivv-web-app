import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ challenge, user, component: Comp, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) => {
        return user ? (
          <Comp {...props} user={user} />
        ) : (
          <Redirect to={challenge ? "/challenges" : "/"} />
        );
      }}
    />
  );
};

export default PrivateRoute;
