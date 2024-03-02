import Home from "@/app/dashboard/home/home.page";
import { RouteRecord } from "@/shared/types/route";
import DashboardLayout from './dashboard.layout'

export const DashboardRoutes: RouteRecord[] = [
    {
        layout: DashboardLayout,
        component: Home,
        path: '/',
        
    }
]