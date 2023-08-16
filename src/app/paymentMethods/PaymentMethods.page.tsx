import Page from '@/shared/components/Page'
import { useState } from 'react'
import { Tabs, Tab, Typography, Card, Grid, Box, } from '@mui/material'
import CreditCardTab from './tabs/CreditCard'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import InternetBanking from './tabs/InternetBanking'
export default function PaymentMethods() {
    const [tab, settab] = useState(1)
    const TabTitles: { [key: number]: string } = { 1: 'Credit Card', 2: 'Debit Card', 3: 'Bank' }
    return (
        <div>
            <Page title='Payment Methods' appendTitle={<Tabs value={tab} onChange={((_, value) => { settab(value) })}>
                <Tab value={1} label='Credit Card'></Tab>
                <Tab value={2} label='Debit Card '></Tab>
                <Tab value={3} label='Internet Banking '></Tab>
            </Tabs>} >



                <Card sx={{ px: 2, py: 3, mt: 2 }}>
                    <Typography fontWeight='bold'> Payment By {TabTitles[tab]} </Typography>
                    <Grid2 container>

                        <Grid2 md={8}>

                            {
                                tab == 1 && <CreditCardTab></CreditCardTab>
                            }
                            {

                                tab === 3 && <InternetBanking></InternetBanking>
                            }
                        </Grid2>


                        <Grid2 md={4} px={4} >
                            <Card sx={{ p: 2, my: { xs: 2, md: 0 } }} >
                                <Typography fontWeight='bold' variant='h6'>Customer Name</Typography>
                                <Typography >Some description About the customer and Some description About the customer</Typography>

                                <Box sx={{ p: 1, mt: 4, backgroundColor: (t) => t.palette.background.default, borderRadius: 2, }}>Payment Ammount : 2300 $</Box>
                            </Card>
                        </Grid2>

                    </Grid2>

                </Card>


            </Page>
        </div>
    )
}
