
import { HiLink, HiMiniQrCode, HiOutlineBuildingLibrary, HiOutlineHome } from 'react-icons/hi2'
import { NavigationRecord } from '@/shared/types/navigation'
import { MdManageAccounts, MdPayment} from 'react-icons/md';
import { AiOutlineGateway, AiOutlineTransaction } from 'react-icons/ai';
import { BsFillClipboardDataFill } from 'react-icons/bs';
import { IoReceipt } from 'react-icons/io5';
import { FiLink2 } from 'react-icons/fi';
export const DashboardNavigationMain: NavigationRecord [] = [

    {
        text: "Dashboard",
        path: "/",
        icon: HiOutlineHome,
    },
    {
        text: "Transactions",
        path: "/transactions",
        icon: AiOutlineTransaction,
    },
    {
        text: "Settelements",
        path: "/settelements",
        icon: HiOutlineBuildingLibrary,
    },
    {
        text: "Report",
        path: "/reports",
        icon: BsFillClipboardDataFill,
    },
    {
        text: "Account Settings",
        path: "/account-settings",
        icon: MdManageAccounts,
    },
    // {
    //     text: "Payment Methods",
    //     path: "/payment-methods",
    //     icon: MdPayment,
    // },

  
]

export const PaymentNavigationLinks : NavigationRecord [] = [
    {
        text:"Payment Gateway",
        icon:AiOutlineGateway,
        path:'/payment-gateway',
    },

    {
        text:'Qr Payment',
        icon:HiMiniQrCode,
        path:'/qr-payment'
    },

    {
        text:'Payment Link',
        icon:FiLink2,
        path:'/payment-link'
    },

    {
        text:'Invoices',
        icon:IoReceipt,
        path:'/invoices'
    },
    {
        text:'Subscriptions',
        icon:HiMiniQrCode,
        path:'/subscriptions'
    },
]

 



export default DashboardNavigationMain;