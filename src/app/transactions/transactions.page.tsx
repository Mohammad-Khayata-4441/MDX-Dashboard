import CrudTable from '@/shared/components/CrudTable'
import Page from '@/shared/components/Page'
import { Box, Tab, Button, Tabs, TextField, FormControl } from '@mui/material'
import { useState } from 'react'
import { BiEdit } from 'react-icons/bi'
import Payments from './tabs/Payments'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom'
import { IoAdd } from 'react-icons/io5'
type Tab = 'payments' | 'orders' | 'refunds' | 'batchRefunds' | 'dispatch'




export default function TransactionsPage() {
    const [tab, setTab] = useState<Tab>('payments')
    const navigate = useNavigate()
    const route = useLocation()
    return (
        <div>
            <Page title='Transactions'>
                <Box display='flex' alignItems={'center'} justifyContent={'space-between'}>

                    <Tabs sx={{ mb: 2 }} value={route.hash} onChange={(e, value) => navigate(`${route.pathname}${value}`,)}>

                        <Tab value='#payments' label='Payments'></Tab>
                        <Tab value='#orders' label='Orders'></Tab>
                        <Tab value='#refunds' label='Refunds'></Tab>
                        <Tab value='#batchRefunds' label='Batch Refunds'></Tab>
                        <Tab value='#disputs' label='Disputs'></Tab>

                    </Tabs>

                    <Button endIcon={<IoAdd/>}>New</Button>
                </Box>
                <Payments></Payments>


            </Page>
        </div >
    )
}
