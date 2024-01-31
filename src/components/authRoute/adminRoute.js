import React from "react";
import { Route, Redirect } from "react-router-dom";

const AdminRoute = ({ user, component: Comp, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) => {
        return user ? (
          <Comp {...props} user={user} />
        ) : (
          <Redirect to="/admin" />
        );
      }}
    />
  );
};

export default AdminRoute;
