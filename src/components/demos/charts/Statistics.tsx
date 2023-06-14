import React from 'react'
import { Card, Typography, Box, Icon } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { BiUpArrow, BiDownArrow } from 'react-icons/bi'
import { FaBoxes } from 'react-icons/fa'
import { HiUsers } from 'react-icons/hi2'
export default function Statistics() {
    return (
        <Card sx={{ p: 2 }}>
            <Typography color='primary' fontWeight={'bold'} variant="h6">Daily Statistics</Typography>

            <Grid container spacing={{
                xs:5,
                md:0
            }} paddingY={3}>
                <Grid xs={12} md={3}>
                    <Box display={'flex'} flexDirection={'column'} >
                        <div className="flex gap-4  items-center">
                            <Box borderRadius={'100%'} sx={({ palette }) => ({
                                backgroundColor: palette.background.default,
                                width: 40,
                                height: 40,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                border: `2px solid ${palette.divider}`
                            })} >
                                <Icon color='success' sx={{ fontSize: 24 }}>
                                    <BiUpArrow></BiUpArrow>
                                </Icon>
                            </Box>
                            <Typography variant='h6'>

                                Earnings incoming
                            </Typography>
                        </div>

                        <Typography fontSize={
                            {
                                xs: 32,
                                md: 44
                            }
                        } fontWeight={'bold'} >
                            <span className='dark:text-gray-400 mx-1' >$</span> 150k
                        </Typography>

                    </Box>
                </Grid>
                <Grid xs={12} md={3}>
                    <Box display={'flex'} flexDirection={'column'} >
                        <div className="flex gap-4  items-center">
                            <Box borderRadius={'100%'} sx={({ palette }) => ({
                                backgroundColor: palette.background.default,
                                width: 40,
                                height: 40,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                border: `2px solid ${palette.divider}`
                            })} >
                                <Icon color='error' sx={{ fontSize: 24 }}>
                                    <BiDownArrow></BiDownArrow>
                                </Icon>
                            </Box>
                            <Typography variant='h6'>

                                Refunds
                            </Typography>
                        </div>

                        <Typography fontSize={
                            {
                                xs: 32,
                                md: 44
                            }
                        } fontWeight={'bold'} >
                            <span className='dark:text-gray-400 mx-1' >$</span> 5K
                        </Typography>

                    </Box>
                </Grid>
                <Grid xs={12} md={3}>
                    <Box display={'flex'} flexDirection={'column'} >
                        <div className="flex gap-4  items-center">
                            <Box borderRadius={'100%'} sx={({ palette }) => ({
                                backgroundColor: palette.background.default,
                                width: 40,
                                height: 40,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                border: `2px solid ${palette.divider}`
                            })} >
                                <Icon color='primary' sx={{ fontSize: 24 }}>
                                    <HiUsers></HiUsers>
                                </Icon>
                            </Box>
                            <Typography variant='h6'>

                                New Users
                            </Typography>
                        </div>

                        <Typography fontSize={
                            {
                                xs: 32,
                                md: 44
                            }
                        } fontWeight={'bold'} >
                            <span className='dark:text-gray-400 mx-1' >+</span> 200
                        </Typography>

                    </Box>
                </Grid>
                <Grid xs={12} md={3}>
                    <Box display={'flex'} flexDirection={'column'} >
                        <div className="flex gap-4  items-center">
                            <Box borderRadius={'100%'} sx={({ palette }) => ({
                                backgroundColor: palette.background.default,
                                width: 40,
                                height: 40,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                border: `2px solid ${palette.divider}`
                            })} >
                                <Icon color='secondary' sx={{ fontSize: 24 }}>
                                    <FaBoxes></FaBoxes>
                                </Icon>
                            </Box>
                            <Typography variant='h6'>

                                New Products
                            </Typography>
                        </div>

                        <Typography fontSize={
                            {
                                xs: 32,
                                md: 44
                            }
                        } fontWeight={'bold'} >
                            <span className='text-red-500 dark:text-gray-400 mx-1' >+</span> 120
                        </Typography>

                    </Box>
                </Grid>


            </Grid >

        </Card >
    )
}
