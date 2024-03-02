import { IconType } from 'react-icons'
export interface NavigationRecord {
    text: string,
    path: string,
    icon: IconType,
    childrens?: NavigationRecord[]
}