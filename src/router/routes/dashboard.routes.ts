import Home from "@/app/home/home.page";
import { RouteRecord } from "@/shared/types/route";
import DashboardLayout from '@/layouts/dashboard/dashboard.layout'
import PaymentMethods from "@/app/paymentMethods/payment";
import TransactionsPage from "@/app/transactions/transactions.page";
import FullScreenLayout from "@/layouts/fullscreen.layout";
import PaymentLink from "@/app/paymentCollection/paymentLink/PaymentLink.page";
import Invoice from "@/app/paymentCollection/invoices/pages/invoice.page";
import CreateInvoice from "@/app/paymentCollection/invoices/pages/createInvoice.page";

export const DashboardRoutes: RouteRecord[] = [
    {
        layout: DashboardLayout,
        component: Home,
        path: '/',
        
    },
    {
        layout: DashboardLayout,
        component: TransactionsPage,
        path: '/transactions',
        
    },
    {
        layout: FullScreenLayout,
        component: PaymentMethods,
        path: '/new-payment/:sessionId',
        
    },
    {
        layout: DashboardLayout,
        component: PaymentLink,
        path: '/payment-link',
    },
    {
        layout: DashboardLayout,
        component: Invoice,
        path: '/invoices',
    },
    {
        layout: DashboardLayout,
        component: CreateInvoice,
        path: '/invoices/:id',
    },

]