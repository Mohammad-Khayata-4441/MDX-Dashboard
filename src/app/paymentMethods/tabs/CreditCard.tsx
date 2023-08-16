import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import {  Box, Card, FormLabel, FormControl, TextField, Button } from '@mui/material'

export default function CreditCardTab() {
  return (
    <>
    <Box display='flex' gap='15px' my={2} alignItems='center' >
        <Card sx={{ borderRadius: 2, px: 1, py: "3px" }}>
            <img height={36} src="/images/paymentMethods/visa.png" alt="" />
        </Card>
        <Card sx={{ borderRadius: 2, px: 1, py: "3px" }}>
            <img height={36} src="/images/paymentMethods/master.png" alt="" />
        </Card>

    </Box>

    <form className='block'>
        <Grid2 container spacing={2}>
            <Grid2 xs={12} md={6}>
                <FormControl sx={{ width: '100%' }}>
                    <FormLabel>Card Number</FormLabel>
                    <TextField placeholder='Enter card number'></TextField>
                </FormControl>
            </Grid2>

            <Grid2 xs={12} md={3}>
                <FormControl sx={{ width: '100%' }}>
                    <FormLabel> Expiration Date Year</FormLabel>
                    <TextField placeholder='Enter Year'></TextField>
                </FormControl>
            </Grid2>
            <Grid2 xs={12} md={3} >
                <FormControl sx={{ width: '100%' }}>
                    <FormLabel> Expiration Date Month</FormLabel>
                    <TextField placeholder='Enter Month'></TextField>
                </FormControl>
            </Grid2>
            <Grid2 xs={12} md={3} >
                <FormControl sx={{ width: '100%' }}>
                    <FormLabel> CVV / CVC</FormLabel>
                    <TextField placeholder='Enter CVV/CVC'></TextField>
                </FormControl>
            </Grid2>
            <Grid2 xs={12} md={3} >
                <FormControl sx={{ width: '100%' }}>
                    <FormLabel> Holder Name</FormLabel>
                    <TextField placeholder='Enter Holder Name'></TextField>
                </FormControl>
            </Grid2>
            <Grid2 md={4} display='flex' justifyContent='flex-end' mdOffset={2} order={6} justifySelf={'end'} alignSelf='end'>
                <Button sx={{ minWidth: 120 }} variant='contained'>Make Payment</Button>

            </Grid2>
        </Grid2>
    </form>
</>
  )
}
