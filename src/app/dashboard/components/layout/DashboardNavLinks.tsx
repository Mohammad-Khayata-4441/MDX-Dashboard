import List from "@mui/material/List";
import { NavLink } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavigationRecord } from "@/shared/types/navigation";
type Props = {
  isOpen: boolean;
  items: NavigationRecord[]
};

export const DashboardNavLink = ({ item, isOpen }: { item: NavigationRecord } & Props) =>
  <>
 
  <ListItem sx={{display:'flex' , flexDirection:'column'}}>
    <NavLink className='w-full' to={{ pathname: item.path }} end key={item.path}>
      {({ isActive }) => {
        return (
          <ListItemButton
            sx={({ palette }) => ({
              py: 0.8,
              px: 2,
              borderRadius:'0.5rem',
              minHeight: 45,
              transition: '0.2s',
              color: isActive ? "white" : palette.text.primary,

              "&.Mui-selected , &.Mui-selected:hover": {
                color: palette.primary.main,
                "::after": ({ palette }) => ({
                  content: "''",
                  background: palette.primary.main,
                  width: '5px',
                  position: 'absolute',
                  height: '100%',
                  right: '-16px',
                  borderRadius:'0.5rem 0 0 0.5rem',

                })
              },
            })}
            selected={isActive}
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
          </ListItemButton>
        );
      }}
    </NavLink>
    {/* {
      item.childrens && <DashboardNavLinks isOpen={isOpen} items={item.childrens}></DashboardNavLinks>
    } */}
  </ListItem>
 
</>



export default function DashboardNavLinks(props: Props) {
  return (
    <List>
      {props.items.map((item) => (
        <DashboardNavLink key={item.path} item={item} {...props}></DashboardNavLink>
      ))}
    </List>
  );
}
