
import { HiOutlineHome, HiOutlineShoppingCart, HiOutlineUsers } from 'react-icons/hi2'
import { IoExtensionPuzzleOutline, IoFolderOpenOutline, IoNotificationsOutline } from 'react-icons/io5'
import { NavigationRecord } from '@/shared/types/navigation'
const DashboardNavigation: NavigationRecord[] = [
    {
        text: "Home",
        path: "/",
        icon: HiOutlineHome
    },
    {
        text: "Components",
        path: "/components",
        icon: IoExtensionPuzzleOutline
    },
    {
        text: "eCommerce",
        path: "/eCommerce",
        icon: HiOutlineShoppingCart
    },
    {
        text: "File",
        path: "/fileManager",
        icon: IoFolderOpenOutline
    },
    {
        text: "Accounts",
        path: "/accounts",
        icon: HiOutlineUsers
    },
    {
        text: "Notifications",
        path: "/notifications",
        icon: IoNotificationsOutline
    },
]


export default DashboardNavigation;