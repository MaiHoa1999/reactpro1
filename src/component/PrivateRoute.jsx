import { Redirect, Route } from "react-router-dom";

import { useSelector } from "react-redux";
export function PrivateRoute(props) {
  let { login } = useSelector((store) => store.auth);

  if (!login) {
  
    return <Redirect to="/" />;
  }
  return <Route {...props} />;
}
