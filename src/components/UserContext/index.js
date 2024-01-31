import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState("");
  const [admin, setAdmin] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    let show = Cookies.get("show-modal");
    if (show) return;
    else {
      setTimeout(() => setShow(true), 4000);
    }
  }, []);
  useEffect(() => {
    let auth = Cookies.get("user-auth");
    let adminAuth = Cookies.get("admin-auth");
    setUser(auth);
    setAdmin(adminAuth);
  }, []);

  return (
    <UserContext.Provider
      value={{ user, setUser, setAdmin, admin, show, setShow }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
