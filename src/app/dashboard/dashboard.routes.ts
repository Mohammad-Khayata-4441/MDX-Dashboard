import Home from "@/app/dashboard/home/home.page";
import { RouteRecord } from "@/shared/types/route";
import DashboardLayout from './dashboard.layout'
import TestPage from "./test/test.page";

export const DashboardRoutes: RouteRecord[] = [
    {
        layout: DashboardLayout,
        component: Home,
        path: '/',
    },
    {
        layout:DashboardLayout,
        component:TestPage,
        path:'/test',
    }
]