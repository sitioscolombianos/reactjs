import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const Navbar = lazy(() => import('../components/ui/Navbar'));
const Banner = lazy(() => import('../components/ui/Banner'));
const Cards  = lazy(() => import('../components/ui/Cards'));
const Slide  = lazy(() => import('../components/ui/Slide'));

const LoveThisPlanet = lazy(() => import('../components/front/LoveThisPlanet'));

export const HomeRoutes = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
            <LoveThisPlanet />
            <Banner />
            <Cards />
            <Slide />
        </Suspense>
    )
}
