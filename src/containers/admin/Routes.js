import React from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';

import AuthenticatedRoute from "../../components/AuthenticatedRoute";
// ROUTES
import Dashboard from './Dashboard'
import UsersList from './users/List'
import UsersCreate from './users/Create'
import UsersView from './users/View'

export default function AdminRoutes() {
    let { path } = useRouteMatch();

    return (
        <Switch>
            <AuthenticatedRoute exact path={path}>
                <Dashboard />
            </AuthenticatedRoute>
            <AuthenticatedRoute path={`${path}/users`}>
                <UsersList />
            </AuthenticatedRoute>
            <AuthenticatedRoute path={`${path}/user/new`}>
                <UsersCreate />
            </AuthenticatedRoute>
            <AuthenticatedRoute path={`${path}/user/:id`}>
                <UsersView />
            </AuthenticatedRoute>
        </Switch>
    );
}