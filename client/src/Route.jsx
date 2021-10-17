import {Redirect, Switch, Route} from "react-router-dom";
import {useSelector} from "react-redux";
import LoginPage from "./components/LoginPage";
import ControlPage from "./components/ControlPage";

export default function Routee() {

    let isLogin = useSelector(state => state.login.isLogin);

    return (
        isLogin ?
            <Switch>
                <Route path={'/control'}>
                    <ControlPage />
                </Route>
                <Redirect to={'/control'}/>
            </Switch>
            :
            <Switch>
                <Route path='/login'>
                    <LoginPage />
                </Route>
                <Redirect to='/login'/>
            </Switch>
    )
}