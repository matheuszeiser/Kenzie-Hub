import { Route, Switch } from "react-router-dom";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

function Routes(){
    return(
        <Switch>
            <Route exact path="/">
                <Login/>
            </Route>
            <Route path="/register">
                <Register/>
            </Route>
        </Switch>
    )
}

export default Routes