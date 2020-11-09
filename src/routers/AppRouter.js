import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';

import { HomeRoutes } from './HomeRoutes';

export const AppRouter = () => {
    return (        
        <Router>
            <Switch> 
                <Route path="/" component={ HomeRoutes } />
            </Switch>
        </Router>
    )
}
