import { IconProps } from "@mui/material";
import { FC } from "react";
import { IconBaseProps, IconType } from 'react-icons'
export interface NavigationRecord {
    text: string,
    path: string,
    icon: FC<IconBaseProps | IconProps>,
}