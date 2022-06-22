import { Route, Switch } from "react-router-dom";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import { useEffect, useState } from "react";

function Routes({setUser, user}){

    const [auth, setAuth] = useState(false)

    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

        if(token){
            return setAuth(true);
        }
    }, [auth])

    return(
        <Switch>
            <Route exact path="/">
                <Login setAuth={setAuth} auth={auth} user={user}/>
            </Route>
            <Route path="/register">
                <Register auth={auth} user={user} setUser = {setUser} />
            </Route>
            <Route path="/home">
                <Home setAuth={setAuth} auth={auth}/>
            </Route>
        </Switch>
    )
}

export default Routes