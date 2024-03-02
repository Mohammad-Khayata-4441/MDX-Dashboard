import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { DashboardRoutes } from '../app/dashboard/dashboard.routes'
function Router() {
    return (
        <Routes>
            {DashboardRoutes.map((Page, i) => (
                <Route key={i} element={
                    <Page.layout>
                        <Suspense fallback={'Loading Some Thing'}>
                            <main >
                                <Page.component />
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