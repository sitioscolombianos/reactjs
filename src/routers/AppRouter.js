import React, { Suspense, lazy } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';

const Navbar = lazy(() => import('../components/ui/Navbar'));
const Banner = lazy(() => import('../components/ui/Banner'));
const Cards  = lazy(() => import('../components/ui/Cards'));
const Slide  = lazy(() => import('../components/ui/Slide'));

const LoveThisPlanet = lazy(() => import('../components/front/LoveThisPlanet'));

export const AppRouter = () => {
    return (
    <Router>
        <Switch>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                <LoveThisPlanet />
                <Banner />
                <Cards />
                <Slide />
            </Suspense>
        </Switch>
    </Router>
    )
}
