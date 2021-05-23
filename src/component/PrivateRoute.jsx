import { Redirect, Route } from "react-router-dom";

import { useSelector } from "react-redux";
export function PrivateRoute() {
 
        return <Route>
            <Redirect to="/" />
        </Route>
    



}