import Home from "@/app/home/home.page";
import { RouteRecord } from "@/shared/types/route";
import DashboardLayout from '@/layouts/dashboard/dashboard.layout'
import PaymentMethods from "@/app/paymentMethods/PaymentMethods.page";

export const DashboardRoutes: RouteRecord[] = [
    {
        layout: DashboardLayout,
        component: Home,
        path: '/',
        
    },
    {
        layout: DashboardLayout,
        component: PaymentMethods,
        path: '/payment-methods',
        
    }
]