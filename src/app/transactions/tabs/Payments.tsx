import CrudTable from '@/shared/components/CrudTable'
import React from 'react'
import {Box, TextField, Button}  from '@mui/material'
import { BiEdit } from 'react-icons/bi'
const fakeData = [
    { date: new Date().toLocaleDateString(), paymentId: 'mohammad', email: '092424', amount: 1353, status: 'Active', actions: <Button color='primary' variant='contained' sx={{ width: 40, px: 0, minWidth: 40, height: 40 }}><BiEdit className='text-inheriti text-xl'></BiEdit></Button> },
    { date: new Date().toLocaleDateString(), paymentId: 'mohammad', email: '092424', amount: 1353, status: 'Active', actions: <Button color='primary' variant='contained' sx={{ width: 40, px: 0, minWidth: 40, height: 40 }}><BiEdit className='text-inheriti text-xl'></BiEdit></Button> },
    { date: new Date().toLocaleDateString(), paymentId: 'mohammad', email: '092424', amount: 1353, status: 'Active', actions: <Button color='primary' variant='contained' sx={{ width: 40, px: 0, minWidth: 40, height: 40 }}><BiEdit className='text-inheriti text-xl'></BiEdit></Button> },
    { date: new Date().toLocaleDateString(), paymentId: 'mohammad', email: '092424', amount: 1353, status: 'Active', actions: <Button color='primary' variant='contained' sx={{ width: 40, px: 0, minWidth: 40, height: 40 }}><BiEdit className='text-inheriti text-xl'></BiEdit></Button> },
]
export default function Payments() {
    return (
        <CrudTable data={fakeData} heads={[
            {
                key: 'date',
                title: 'Date',

            },
            {
                key: 'paymentId',
                title: 'paymentId',

            },
            {
                key: 'email',
                title: 'email',

            },
            {
                key: 'amount',
                title: 'amount',

            },
            {
                key: 'status',
                title: 'status',

            },
            {
                key: 'actions',
                title: 'actions',
                customRenderer: (item) => item.actions

            },

        ]

        }
            tableCardPrepend={
                <Box p={2} display='flex' gap={2}>
                    <div>

                        <TextField label='label' />
                    </div>

                </Box>

            }



        ></CrudTable>

    )
}
