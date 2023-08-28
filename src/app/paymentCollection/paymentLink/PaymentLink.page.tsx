import React, { useContext, useState } from 'react'
import { FiLink2, FiPhone } from 'react-icons/fi'
import { Card, Box, FormControl, FormLabel, TextField, Typography, Button, Checkbox, FormControlLabel } from '@mui/material'
import CrudTable from '@/shared/components/CrudTable'
import DialogForm from '@/shared/components/DialogForm'
import { BiCalendar, BiDollar, BiMailSend, BiPhone } from 'react-icons/bi'
import PrefixedTextField from '@/shared/components/PrefixedTextField'
import { HiPhone } from 'react-icons/hi2'
import { MdEmail, MdMail } from 'react-icons/md'
import { BsClock, BsMailbox, BsMailbox2 } from 'react-icons/bs'
import { IoMail } from 'react-icons/io5'
import { ConfirmContext } from '@/shared/components/FeedBackProvider'


export default function PaymentLink() {
    const setConfirmMessage = useContext(ConfirmContext);

    const [formOpen, setFormOpen] = useState(false)

    const fakeData = [
        { date: new Date().toLocaleDateString(), paymentId: 'mohammad', email: '092424', amount: 1353, status: 'Active', actions: <Button color='secondary' variant='text' sx={{ width: 40, px: 0, minWidth: 40, height: 40 }}><FiLink2 className='text-inheriti text-xl'></FiLink2></Button> },
        { date: new Date().toLocaleDateString(), paymentId: 'mohammad', email: '092424', amount: 1353, status: 'Active', actions: <Button color='secondary' variant='text' sx={{ width: 40, px: 0, minWidth: 40, height: 40 }}><FiLink2 className='text-inheriti text-xl'></FiLink2></Button> },
        { date: new Date().toLocaleDateString(), paymentId: 'mohammad', email: '092424', amount: 1353, status: 'Active', actions: <Button color='secondary' variant='text' sx={{ width: 40, px: 0, minWidth: 40, height: 40 }}><FiLink2 className='text-inheriti text-xl'></FiLink2></Button> },
        { date: new Date().toLocaleDateString(), paymentId: 'mohammad', email: '092424', amount: 1353, status: 'Active', actions: <Button color='secondary' variant='text' sx={{ width: 40, px: 0, minWidth: 40, height: 40 }}><FiLink2 className='text-inheriti text-xl'></FiLink2></Button> },
    ]
    return (
        <div>
            <Card sx={{ px: 4, py: 2 }}>
                <Typography variant='h5' fontWeight='bold'>Overview</Typography>
                <Box display={'flex'} gap={4} justifyContent={'space-between'}>
                    <Card sx={{ flexGrow: 1, px: 2, py: 2, my: 2 }}>
                        <Typography className='text-teal-800/70' fontWeight={'500'}>Active links</Typography>
                        <Typography fontWeight={'500'} fontSize={24} color={t => t.palette.secondary.main}>42000 AED</Typography>


                    </Card>
                    <Card sx={{ flexGrow: 1, px: 2, py: 2, my: 2 }}>
                        <Typography className='text-teal-800/80' fontWeight={'500'}>Revenue via payment links</Typography>
                        <Typography fontWeight={'500'} fontSize={24} color={t => t.palette.secondary.main}>42000 AED</Typography>

                    </Card>

                </Box>
            </Card>

            <Box display='flex' my={2} justifyContent={'space-between'}>
                <Typography variant='h5' fontWeight='bold'>Payment Links</Typography>
                <Button onClick={() => setFormOpen(true)} startIcon={<FiLink2></FiLink2>}>New Payment Link</Button>
            </Box>

            <CrudTable tableCardPrepend={
                <Box p={2} display={'flex'} gap={4}>
                    <FormControl>
                        <FormLabel>Search</FormLabel>
                        <TextField></TextField>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Date Filter</FormLabel>
                        <TextField></TextField>
                    </FormControl>
                </Box>
            }

                heads={[
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

                data={fakeData}></CrudTable>

            <DialogForm title='New Payment Link' open={formOpen} onClose={() => {
                setConfirmMessage({
                    message: 'Are you sure you want to delete this Payment Link. Your progress will not be saved.',
                    title:'Cancel payment link',
                    

                    onConfirm: () => {

                        setFormOpen(false)
                    }
                })


            }}
                formActions={
                    <>
                        <Box width='100%'>
                            <Button fullWidth variant='contained'>Create Payment Link</Button>
                            <Button fullWidth sx={{ mt: 1 }} variant='text'>Save for later</Button>
                        </Box>
                    </>
                }

            >
                <Box>
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-6">

                            <PrefixedTextField Icon={BiDollar} label='Amount'></PrefixedTextField>
                        </div>

                        <div className="col-span-12 ">
                            <FormControl fullWidth>
                                <FormLabel>Payment For</FormLabel>
                                <TextField placeholder='Enter Description'></TextField>
                            </FormControl>
                        </div>

                        <div className="col-span-12 ">
                            <FormLabel>Customer Details</FormLabel>
                        </div>
                        <div className="col-span-6 flex flex-col">
                            <PrefixedTextField placeholder='example@mail.com' Icon={MdMail}></PrefixedTextField>
                            <FormControlLabel
                                value="start"
                                control={<Checkbox />}
                                label="Notify via email"
                                labelPlacement="end"
                                sx={{
                                    '& span': {
                                        fontSize: '14px'
                                    }
                                }}

                            />
                        </div>
                        <div className="col-span-6 flex flex-col">
                            <PrefixedTextField Icon={BiPhone}></PrefixedTextField>

                            <FormControlLabel
                                value="start"
                                control={<Checkbox />}
                                label="Notify via sms"
                                labelPlacement="end"
                                sx={{
                                    '& span': {
                                        fontSize: '14px'
                                    }
                                }}

                            />
                        </div>
                        <div className="col-span-12 ">
                            <FormControl fullWidth>
                                <FormLabel>Payment For</FormLabel>
                                <TextField placeholder='Enter Description'></TextField>
                            </FormControl>
                        </div>
                        <div className="col-span-12 ">
                            <FormLabel>Link Expiration</FormLabel>
                            <div>

                                <FormControlLabel
                                    value="start"
                                    control={<Checkbox />}
                                    label="This link has expiration date"
                                    labelPlacement="end"
                                />
                            </div>
                        </div>
                        <div className="col-span-6">
                            <PrefixedTextField placeholder='DD-MM-YYYY' Icon={BiCalendar}></PrefixedTextField>
                        </div>
                        <div className="col-span-6">
                            <PrefixedTextField placeholder="hh-mm" Icon={BsClock}></PrefixedTextField>
                        </div>

                    </div>
                </Box>
            </DialogForm>

        </div >
    )
}
