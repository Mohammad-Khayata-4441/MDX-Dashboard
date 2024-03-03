import List, { ListProps } from "@mui/material/List";
import { NavLink } from "react-router-dom";
import ListItem, { ListItemProps } from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavigationRecord } from "@/shared/types/navigation";
import { useState } from "react";
import { MdArrowDropDown, MdArrowRight } from 'react-icons/md'
import { BiCaretRight } from "react-icons/bi";
import { BsChevronCompactDown, BsChevronCompactRight, BsChevronDown, BsChevronRight } from "react-icons/bs";
type Props = {
  isOpen: boolean;
  items: NavigationRecord[],
  listProps?: ListProps,
  listItemProps?: ListItemProps
};

export const DashboardNavLink = ({ item, isOpen, listItemProps }: { item: NavigationRecord } & Props) => {
  const [open, setOpen] = useState(false)
  return <>
    <ListItem {...listItemProps} sx={{ display: 'flex', flexDirection: 'column', ...listItemProps?.sx }}>
      <NavLink onClick={() => setOpen(!open)} className='w-full' to={{ pathname: item.path }} end key={item.path}>
        {({ isActive }) => {
          return (
            <ListItemButton
              sx={({ palette }) => ({
                py: 0.8,
                px: 2,
                borderRadius: '0.5rem',
                minHeight: 45,
                transition: '0.2s',
                color: item.path && isActive ? "white" : palette.text.primary,

                "&.Mui-selected , &.Mui-selected:hover": {
                  color: palette.primary.main,
                  "::after": ({ palette }) => ({
                    content: "''",
                    background: palette.primary.main,
                    width: '5px',
                    position: 'absolute',
                    height: '100%',
                    right: '-16px',
                    borderRadius: '0.5rem 0 0 0.5rem',

                  })
                },
              })}
              selected={!!item.path && isActive}
            >

              <ListItemIcon
                sx={() => ({
                  minWidth: 40,
                  color: 'inherit'
                })}
              >

                <item.icon size={"1.4rem"} />
              </ListItemIcon>
              {isOpen && <ListItemText primary={item.text} />}

              {
                item.childrens && (

                  open ? <BsChevronCompactDown /> :
                    <BsChevronCompactRight />
                )
              }


            </ListItemButton>
          );
        }}
      </NavLink>
      {
        item.childrens && open && <DashboardNavLinks listProps={{ sx: { py: 0 } }} listItemProps={{ sx: { px: 0, pl: 0.5 } }} isOpen={isOpen} items={item.childrens}></DashboardNavLinks>
      }
    </ListItem>

  </>
}



export default function DashboardNavLinks(props: Props) {
  return (
    <List {...props.listProps} sx={{ width: '100%', py: 0, ...props.listItemProps?.sx }}>
      {props.items.map((item) => (
        <DashboardNavLink key={item.path} item={item} {...props}></DashboardNavLink>
      ))}
    </List>
  );
}
