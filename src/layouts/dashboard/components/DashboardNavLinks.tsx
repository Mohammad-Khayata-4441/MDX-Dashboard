import List from "@mui/material/List";
import { Typography } from '@mui/material'
import { NavLink } from "react-router-dom";
import { DashboardNavigationMain, PaymentNavigationLinks } from "@/router/dasboard.navigation";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
type Props = {
  isOpen: boolean;
};
export default function DashboardNavLinks(props: Props) {
  return (
    <List sx={{ p: 0 }}>
      {DashboardNavigationMain.map((item) => (

        <NavLink to={{ pathname: item.path }} end key={item.path}>
          {({ isActive }) => {
            return (
              <ListItem sx={{ pl: 1 , pr:props.isOpen?0.8:0.2 }}>
                <ListItemButton
                  sx={({ palette }) => ({
                    py: 0.8,
                    px: 2,
                    borderRadius: "0.5rem",
                    minHeight: 45,
                    transition: '0.2s',
                    color: "white",
                    ":hover": {
                      background: 'transparent',
                      color: palette.primary.main,
                    },
                    "&.Mui-selected , &.Mui-selected:hover": {
                      backgroundColor: palette.primary.main,
                      color: palette.background.paper
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
                  {props.isOpen && <ListItemText primary={item.text} />}
                </ListItemButton>
              </ListItem>
            );
          }}
        </NavLink>


      ))
      }

      {

        props.isOpen ?
          <ListItem className="text-white/40 text-sm font-bold " sx={{ my: 2, mx: 2 }}>Payment Collection</ListItem>
          : <span>...</span>
      }

      {PaymentNavigationLinks.map((item) => (



        <NavLink to={{ pathname: item.path }} end key={item.path}>
          {({ isActive }) => {
            return (
              <ListItem sx={{ pl: 1 , pr:props.isOpen?0.5:0.2 }}>
                <ListItemButton
                  sx={({ palette }) => ({
                    py: 0.8,
                    px: 2,
                    borderRadius: "0.5rem",
                    minHeight: 45,
                    transition: '0.2s',
                    color: "white",
                    ":hover": {
                      background: 'transparent',
                      color: palette.primary.main,
                    },
                    "&.Mui-selected , &.Mui-selected:hover": {
                      backgroundColor: palette.primary.main,
                      color: palette.background.paper
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
                  {props.isOpen && <ListItemText primary={item.text} />}
                </ListItemButton>
              </ListItem>
            );
          }}
        </NavLink>


      ))
      }
      {PaymentNavigationLinks.map((item) => (



        <NavLink to={{ pathname: item.path }} end key={item.path}>
          {({ isActive }) => {
            return (
              <ListItem sx={{ pl: 1 , pr:props.isOpen?0.5:0.2 }}>
                <ListItemButton
                  sx={({ palette }) => ({
                    py: 0.8,
                    px: 2,
                    borderRadius: "0.5rem",
                    minHeight: 45,
                    transition: '0.2s',
                    color: "white",
                    ":hover": {
                      background: 'transparent',
                      color: palette.primary.main,
                    },
                    "&.Mui-selected , &.Mui-selected:hover": {
                      backgroundColor: palette.primary.main,
                      color: palette.background.paper
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
                  {props.isOpen && <ListItemText primary={item.text} />}
                </ListItemButton>
              </ListItem>
            );
          }}
        </NavLink>


      ))
      }



    </List>
  );
}
