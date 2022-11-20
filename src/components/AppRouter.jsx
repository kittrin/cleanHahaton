import React from 'react';
import {routes} from "../router";
import {Redirect, Route, Switch} from "react-router-dom";

const AppRouter = () => {
    return (
        <Switch>
            {routes.map(route=>
                <Route
                    component={route.component}
                    path={route.path}
                    key={route.path}
                />
            )}
            <Redirect to='/auth'/>
        </Switch>
    );
};

export default AppRouter;