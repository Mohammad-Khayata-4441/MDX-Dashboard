import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer, { DrawerProps } from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardNavLinks from "./DashboardNavLinks";
import { Alert, CssBaseline, Divider, Typography } from "@mui/material";
import Navbar from "./Navbar";
import { BsChevronCompactLeft } from 'react-icons/bs'

const drawerFullWidth = 240;
const miniSizedDrawerWidth = 90





const openedMixin = (theme: Theme, drawerWidth: number): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme, drawerWidth: number): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: miniSizedDrawerWidth + 'px',
  [theme.breakpoints.up("sm")]: {
    width: miniSizedDrawerWidth + 'px',
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open", })<{ drawerWidth: number }>(({ theme, open, drawerWidth }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme, drawerWidth),
    "& .MuiDrawer-paper": openedMixin(theme, drawerWidth),
  }),
  ...(!open && {
    ...closedMixin(theme, drawerWidth),
    "& .MuiDrawer-paper": closedMixin(theme, drawerWidth),
  }),
}));

export default function MiniDrawer(props: any) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const drawerWidth = React.useMemo(() => open ? drawerFullWidth : miniSizedDrawerWidth, [open])
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", transition: '0.3s', flexDirection: 'column', width: `calc(100% - ${drawerWidth}px)`, ml: drawerWidth + 'px' }}>
      <CssBaseline />

      <Navbar drawerOpen={open} drawerWidth={drawerWidth} onOpen={handleDrawerOpen} />

      <Drawer variant="permanent" open={open} drawerWidth={drawerWidth} PaperProps={{ elevation: 0, variant: 'elevation', sx: { border: 'none' } }}>
        <DrawerHeader  >
          <Box
            display={"flex"}

            justifyContent={open ? "space-between" : 'center'}
            width={"100%"}
            alignItems={"center"}
            px={1}
          >
            <img width="48" src="/logo.png" />
            {
              open &&
              <Typography fontSize={13} fontWeight={"bold"} variant="h2">
                MDX Dashboard
              </Typography>
            }
            {
              open &&
              <IconButton size="small" onClick={() => open ? handleDrawerClose() : handleDrawerOpen()}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <BsChevronCompactLeft />
                )}
              </IconButton>


            }

          </Box>
        </DrawerHeader>
        <Box mt={2}>
          <DashboardNavLinks isOpen={open} />
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, position: "relative", p: '24px' }}>



        {props.children}
      </Box>
    </Box >
  );
}
