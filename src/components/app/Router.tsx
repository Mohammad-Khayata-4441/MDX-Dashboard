import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import DashboardLayout from '../layout/Dashboard/Dashboard'
const Home = React.lazy(() => import('@/features/Home/pages'))
function Router() {
    const routes = [
        {
            layout: DashboardLayout,
            name: Home,
            path: '/'
        },


    ]

    return (
        <Routes>
            {routes.map((Page, i) => (
                <Route key={i} element={
                    <Page.layout>
                        <Suspense fallback={'Loading Some Thing'}>
                            <main >
                                <Page.name />
                            </main>
                        </Suspense>
                    </Page.layout>
                } path={Page.path} >
                </Route>
            ))}
        </Routes>
    )
}

export default Router