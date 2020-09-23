import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
// ROUTES
import Home from './containers/Home';
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import Settings from "./containers/Settings";
import Admin from './containers/Admin';

import NotFound from "./containers/NotFound";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <UnauthenticatedRoute path="/login">
                <Login />
            </UnauthenticatedRoute>
            <UnauthenticatedRoute path="/signup">
                <Signup />
            </UnauthenticatedRoute>
            <AuthenticatedRoute path="/admin">
                <Admin />
            </AuthenticatedRoute>
            <AuthenticatedRoute path="/settings">
                <Settings />
            </AuthenticatedRoute>
            <AuthenticatedRoute path="/notes/new">
                <NewNote />
            </AuthenticatedRoute>
            <AuthenticatedRoute path="/notes/:id">
                <Notes />
            </AuthenticatedRoute>
            {/* Finally, catch all unmatched routes */}
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}