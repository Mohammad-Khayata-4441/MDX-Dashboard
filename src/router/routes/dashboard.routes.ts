import Home from "@/app/home/home.page";
import { RouteRecord } from "@/shared/types/route";
import DashboardLayout from '@/layouts/dashboard/dashboard.layout'


export const DashboardRoutes: RouteRecord[] = [
    {
        layout: DashboardLayout,
        component: Home,
        path: '/',
        
    }
]