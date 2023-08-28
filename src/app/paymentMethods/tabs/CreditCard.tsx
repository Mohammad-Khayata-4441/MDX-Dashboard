import React, { useEffect, useMemo, useState } from 'react'
import { Box, Card, FormLabel, FormControl, TextField, Button, Select, ListItem, MenuItem } from '@mui/material'
import { cc_format, getCardType } from '@/utils/getCardType'
import ExpiryInput from '@/shared/components/ExpiryInput'
import countries, { countriesWithNoPostalCode } from '@/shared/data/countries'
import { CreatePaymentDto } from '@/api/payment/payment.dto'
import { useForm, Controller } from 'react-hook-form'
import { GetSessionDto } from '@/api/session/session.dto'
import { useApi } from '@/shared/hooks/useApi'
import { SessionActions } from '@/api/session/session.actions'
import { useParams } from 'react-router-dom'
import { PaymentAcions } from '@/api/payment/payment.actions'
export default function CreditCardTab({ sessionData }: {
    sessionData: GetSessionDto | null
}) {

    const [number, setNumber] = useState('')
    const [country, setCountry] = useState("AE")
    const params = useParams()
    const { control, handleSubmit, watch } = useForm<CreatePaymentDto>({
        defaultValues: {
            paymentMethod: {
                card: {
                    ccv: '',
                    brand: '',
                    expiry: '',
                    is3DSEnabled: false,
                    name: '',
                    pan: ''
                }
            }

        }
    })


    const hasZipCode = useMemo(() => !countriesWithNoPostalCode.includes(country), [country])


    const submit = async (data: CreatePaymentDto) => {
        console.log(!!sessionData , !!params.sessionId)

         if (!!sessionData && !!params.sessionId) {
            console.log('submit',data)
            const payload: CreatePaymentDto = {
                amount: sessionData.sessionInfo.amount,
                description: sessionData.sessionInfo.description,
                paymentMethod: {
                    type: 'card',
                    card: {
                        brand: getCardType(data.paymentMethod.card.pan),
                        ccv: data.paymentMethod.card.pan,
                        expiry: data.paymentMethod.card.expiry,
                        is3DSEnabled: false,
                        name: data.paymentMethod.card.name,
                        pan: data.paymentMethod.card.pan
                    },

                },
                merchantTransactionId: sessionData.sessionInfo.merchantTransactionId,
                paymentType: sessionData.sessionInfo.paymentType


            }

            await PaymentAcions.CreatePayment(params.sessionId, payload)


        }
    }




    return (
        <>

            <form className='block' onSubmit={handleSubmit(submit)}>
                <div className='grid grid-cols-12 gap-8 ' >
                    <div className='col-span-12 md:col-span-6'>
                        <FormControl sx={{ width: '100%' }}>
                            <FormLabel>Card Number</FormLabel>
                            <Controller control={control} name='paymentMethod.card.pan' rules={{ required: true, minLength: { message: 'Enter a valid card number', value: 16 }, maxLength: { message: 'Enter a valid card number', value: 16 } }} render={({ field, fieldState }) =>
                                <TextField {...field} error={fieldState.invalid} helperText={fieldState.error?.message}
                                    InputProps={{
                                        endAdornment: (
                                            <img height={25} width={40} src={`/images/payment/${getCardType(field.value)}.png`}></img>
                                        ),
                                    }}
                                    placeholder='Enter card number'></TextField>
                            } />
                        </FormControl>
                    </div>

                    <div className='col-span-12 md:col-span-3'>
                        <FormControl sx={{ width: '100%' }}>
                            <FormLabel> Date</FormLabel>
                            <Controller control={control} name='paymentMethod.card.expiry' rules={{ required: true, pattern: { value: /^(0[1-9]|1[0-2])\/\d{2}$/, message: 'Please enter the value in format MM/YY' } }} render={({ field, fieldState }) =>
                                <TextField placeholder='YY/MM' {...field} error={fieldState.invalid} helperText={fieldState.error?.message}  ></TextField>
                            } />
                        </FormControl>
                    </div>

                    <div className='col-span-12 md:col-span-3' >
                        <FormControl sx={{ width: '100%' }}>
                            <FormLabel> CVV / CVC</FormLabel>
                            <Controller control={control} name='paymentMethod.card.ccv' rules={{ required: true, pattern: { value: /\d{3}\/\d{3}/, message: 'Please enter value in format CVV/CVC' } }} render={({ field, fieldState }) => <TextField error={fieldState.invalid} helperText={fieldState.error?.message} inputProps={{ maxLength: 9 }}
                                {...field} placeholder='Enter CVV/CVC'></TextField>
                            } />
                        </FormControl>
                    </div>



                    <div className='col-span-12 md:col-span-4' >
                        <FormControl fullWidth >
                            <FormLabel> Holder Name</FormLabel>
                            <Controller control={control} name='paymentMethod.card.name' rules={{ required: true }} render={({ field, fieldState }) =>
                                <TextField error={fieldState.invalid} helperText={fieldState.error?.message} {...field} fullWidth placeholder='Enter Holder Name'></TextField>
                            } />
                        </FormControl>
                    </div>
                    <div className='col-span-12 md:col-span-4' >
                        <FormControl fullWidth size='small'>
                            <FormLabel>Country</FormLabel>
                            {/* <Controller  control={control} name='paymentMethod.card.is3DSEnabled' rules={{ required: true }} render={({ field, fieldState }) => */}
                            <Select value={'US'}
                            //  error={fieldState.invalid}  {...field} 
                            >

                                {
                                    countries.map((c) => <MenuItem key={c.code} value={c.code}>{c.name}</MenuItem>)
                                }

                            </Select>
                            {/* } /> */}
                        </FormControl>
                    </div>
                    {
                        hasZipCode &&
                        <div className='col-span-12 md:col-span-4' >
                            <FormControl fullWidth >
                                <FormLabel> Zip Code</FormLabel>
                                {/* <Controller control={control} name='paymentMethod.card.pan' rules={{ required: true }} render={({ field, fieldState }) => */}
                                <TextField
                                    // error={fieldState.invalid} helperText={fieldState.error?.message} {...field} 
                                    fullWidth placeholder='Enter Zip Code'></TextField>
                                {/* } /> */}
                            </FormControl>
                        </div>
                    }


                    <div className="col-span-12 md:col-span-4 flex md:items-end ">

                        <Button type='submit' fullWidth sx={{ minWidth: 120 }} variant='contained'>Make Payment</Button>

                    </div>

                </div>
            </form >

        </>

    )
}
