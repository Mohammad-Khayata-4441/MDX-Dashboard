import CrudTable from '@/shared/components/CrudTable'
import Page from '@/shared/components/Page'
import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { BiEdit, BiReceipt } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export default function Invoice() {
    const fakeData = [
        { date: new Date().toLocaleDateString(), paymentId: 'mohammad', email: '092424', amount: 1353, status: 'Active', actions: <Button color='primary' variant='contained' sx={{ width: 40, px: 0, minWidth: 40, height: 40 }}><BiEdit className='text-inheriti text-xl'></BiEdit></Button> },
        { date: new Date().toLocaleDateString(), paymentId: 'mohammad', email: '092424', amount: 1353, status: 'Active', actions: <Button color='primary' variant='contained' sx={{ width: 40, px: 0, minWidth: 40, height: 40 }}><BiEdit className='text-inheriti text-xl'></BiEdit></Button> },
        { date: new Date().toLocaleDateString(), paymentId: 'mohammad', email: '092424', amount: 1353, status: 'Active', actions: <Button color='primary' variant='contained' sx={{ width: 40, px: 0, minWidth: 40, height: 40 }}><BiEdit className='text-inheriti text-xl'></BiEdit></Button> },
        { date: new Date().toLocaleDateString(), paymentId: 'mohammad', email: '092424', amount: 1353, status: 'Active', actions: <Button color='primary' variant='contained' sx={{ width: 40, px: 0, minWidth: 40, height: 40 }}><BiEdit className='text-inheriti text-xl'></BiEdit></Button> },
    ]
    return (
        <Page title='Invoices' actions={
            <Link to='/invoices/0'>
                <Button startIcon={<BiReceipt></BiReceipt>}>New Invoice</Button>
            </Link>

        }>

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

                        <TextField label='label' />
                        <TextField label='label' />

                    </Box>

                }



            ></CrudTable>

        </Page>
    )
}
