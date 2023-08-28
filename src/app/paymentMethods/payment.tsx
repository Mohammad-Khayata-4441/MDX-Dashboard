import Page from '@/shared/components/Page'
import { useEffect, useState } from 'react'
import { Tabs, Tab, Typography, Card, Box, Container } from '@mui/material'
import CreditCardTab from './tabs/CreditCard'
import InternetBanking from './tabs/InternetBanking'
import { useParams } from 'react-router-dom'
import { SessionActions } from '@/api/session/session.actions'
import { GetSessionDto } from '@/api/session/session.dto'



export default function PaymentMethods() {
    const params = useParams()
    const [sessionData, setSessionData] = useState<null | GetSessionDto>({
        id: 'iiiiddd',
        sessionInfo: {
            amount: {
                amountInCents: '3535',
                currency: 'AED',
            },
            description: 'Description',
            merchant: {
                name: 'Marchant name'
            },
            merchantTransactionId: 'merchantTransactionId',
            paymentType: 'card0.0',
            status: 'test'
        }
    })
    useEffect(() => {
        const fetchData = async () => {
            if (params.sessionId) {
                const data = await SessionActions.GetSession(params.sessionId);
                if (data)
                    setSessionData(data)
            }
        }
        fetchData()
    }, [params.sessionId])



    const [tab, settab] = useState(1)
    const TabTitles: { [key: number]: string } = { 1: 'Card', 2: 'Bank' }
    return (
        <div>
            <Container>

                <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} minHeight={'80vh'} >
                    <Typography variant='h5'>Choose payment method</Typography>
                    <Tabs value={tab} onChange={((_, value) => { settab(value) })}>
                        <Tab value={1} label='Card'></Tab>
                        <Tab value={2} label='Internet Banking '></Tab>
                    </Tabs>

                    <Card sx={{ px: 2, py: 3, mt: 2, bgcolor: t => t.palette.background.default }}>
                        <Typography fontWeight='bold'> Payment By {TabTitles[tab]} </Typography>
                        <div className='grid grid-cols-12 gap-8 py-4' >

                            <div className='col-span-12 lg:col-span-8'>

                                {
                                    tab == 1 && <CreditCardTab sessionData={sessionData}></CreditCardTab>
                                }
                                {

                                    tab === 2 && <InternetBanking></InternetBanking>
                                }
                            </div>



                            <div className='col-span-12 lg:col-span-4' >
                                {
                                    sessionData &&
                                    <Card sx={{ p: 2, my: { xs: 2, md: 0 } }} >
                                        <Typography fontWeight='bold' variant='h6'>{sessionData.sessionInfo.merchant.name}</Typography>
                                        <Typography >{sessionData.sessionInfo.description}</Typography>

                                        <Box sx={{ p: 1, mt: 4, backgroundColor: (t) => t.palette.background.default, borderRadius: 2, }}>Payment Ammount : {sessionData.sessionInfo.amount.amountInCents} ${sessionData.sessionInfo.amount.currency}</Box>
                                    </Card>
                                }
                            </div>

                        </div>

                    </Card>


                </Box>
            </Container>

        </div>
    )
}
