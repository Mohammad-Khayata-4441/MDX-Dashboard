import { IconType } from 'react-icons'
export interface NavigationRecord {
    text: string,
    icon: IconType,
    path?: string,
    childrens?: NavigationRecord[]
}