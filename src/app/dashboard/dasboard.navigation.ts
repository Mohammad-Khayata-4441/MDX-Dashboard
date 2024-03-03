
import { HiOutlineHome, HiOutlineShoppingCart, HiOutlineUsers } from 'react-icons/hi2'
import { IoFolderOpenOutline, IoNotificationsOutline } from 'react-icons/io5'
import { NavigationRecord } from '@/shared/types/navigation'
import { BsBoxes, BsEmojiExpressionless } from 'react-icons/bs';
import { FaList } from 'react-icons/fa';
const DashboardNavigation: NavigationRecord[] = [
    {
        text: "Home",
        path: "/",
        icon: HiOutlineHome
    },
    {
        text: "eCommerce",
        icon: HiOutlineShoppingCart,
        childrens: [
            { text: "Products", path: '/products', icon: BsBoxes },
            { text: "Categories", path: '/categories', icon: FaList },
        ]
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
        icon: IoNotificationsOutline,
    },
    {
        text: "Test",
        path: "/test",
        icon: BsEmojiExpressionless,
    },

]


export default DashboardNavigation;