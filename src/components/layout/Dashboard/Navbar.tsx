import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Avatar, Badge, Box, Paper, IconButton, InputAdornment, TextField, Tooltip, Typography } from "@mui/material";
import { IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDarkMode } from "usehooks-ts";
import { BsChevronCompactRight } from 'react-icons/bs'
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

interface Props {
  drawerWidth: number;
  drawerOpen: boolean;
  onOpen: (e: any) => void;
}
export default function Navbar({
  drawerWidth,
  onOpen,
  drawerOpen,
}: Props) {

  const { toggle, isDarkMode } = useDarkMode();

  const handleOpenUserMenu = () => { }


  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })<AppBarProps>(({ theme, open: drawerOpen }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(drawerOpen && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));







  return (
    <AppBar position="sticky" color="transparent" sx={{ p: 2 }} >

      <Paper sx={{ p:2 }}>



        <Box display={'flex'} alignItems={'center'}  justifyContent={'space-between'} width={'100%'}>
          <Box className="left" display={'flex'} gap={2} alignItems={'center'}>
            {
              !drawerOpen &&
              (

                <IconButton
                size="small"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={onOpen}
                  edge="start"
                 
                >
                  <BsChevronCompactRight />
                </IconButton>
              )

            }
            <TextField
              sx={{
                width: {
                  sm: 300,
                  md: 400,
                  lg: 500
                }
              }}
              size="small"
              variant="outlined"
              label='wtf'
              placeholder="Search For Some Thing"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IoSearchOutline />
                  </InputAdornment>
                ),
              }}

            />






          </Box>
          <Box className="right relative">

            <Box sx={{ flexGrow: 0 }} display={'flex'}>



              <IconButton sx={{ mr: 2 }} onClick={() => toggle()}  >
                {
                  isDarkMode ?
                    <HiOutlineSun />
                    :
                    <HiOutlineMoon />
                }
              </IconButton>

              <div className="flex">
                <Badge variant="standard" color="error" badgeContent={5}>
                  <IconButton  >
                    <IoNotificationsOutline></IoNotificationsOutline>
                  </IconButton>

                </Badge>
              </div>


              <Tooltip title="Open settings" sx={{ ml: 4 }}>
                <Box display={'flex'} alignItems={'center'} gap="10px">

                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/user.jpg" />
                  </IconButton>
                  <div className="flex flex-col">
                    <Typography>User Name</Typography>
                    <Typography fontSize={10} className="text-gray-700">Admin</Typography>
                  </div>


                </Box>

              </Tooltip>


              {/* <Menu
              
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu> */}
            </Box>


          </Box>


        </Box>
      </Paper>

    </AppBar>
  );
}
