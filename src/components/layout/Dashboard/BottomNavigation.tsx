import * as React from 'react';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Navigation from '@/Navigation';
import { useLocation, useRoutes } from 'react-router-dom';
export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState('');
    const location = useLocation()
    React.useEffect(() => {
        setValue(location.pathname)
    }, [])
    return (
        <Box sx={{ width: 500, position: 'fixed', bottom: 0, display: { md: 'none' } }}>
            <Paper>

                <BottomNavigation

                    value={value}
                    onChange={(_, newValue) => {
                        setValue(newValue);
                    }}
                >
                    {
                        Navigation.map((nav) => (
                            <BottomNavigationAction value={nav.path} label={nav.text}
                                icon={

                                    <nav.icon />
                                } />
                        ))
                    }
                </BottomNavigation>
            </Paper>

        </Box>
    );
}