import Page from '@/shared/components/Page'
import PrefixedTextField from '@/shared/components/PrefixedTextField'
import { Box, Button, Card, Checkbox, FormControl, FormControlLabel, FormLabel, IconButton, List, ListItem, ListItemText, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography, styled } from '@mui/material'
import React, { useMemo } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { BiCalendar } from 'react-icons/bi'
import { BsArrowRight } from 'react-icons/bs'
import { FiDelete } from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'
import { useParams } from 'react-router-dom'

export default function CreateInvoice() {

 
  const params = useParams()
  const isModify = useMemo(() => params.id && params.id !== '0', [params])
  return (
    <Page title={isModify ? 'Update Invoice' : 'Create Invoice'}>
      <form>

        <div className="grid grid-cols-12 mt-8">
          <div className="col-span-12 md:col-span-8">
            <Card sx={{ py: 4, px: 2 }}>
              {/* Header */}
              <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Typography variant='h5' fontWeight={'bold'}>Merchant Name</Typography>
                <img src='/logo.svg'></img>
              </Box>

              {/* Fields */}
              <Box className='grid grid-cols-12 xl:gap-x-4 gap-y-4 ' mt={2} >

                <FormControl className='col-span-12'>
                  <FormLabel>Invoice#</FormLabel>
                  <TextField placeholder='Invoice number'>BillingTo</TextField>
                </FormControl>
                <div className="col-span-12 xl:col-span-6 grid grid-cols-12 gap-y-4">
                  <FormControl className='col-span-12'>
                    <FormLabel>Billing to</FormLabel>
                    <TextField placeholder='Company\Invidual'>BillingTo</TextField>
                  </FormControl>
                  <div className='col-span-12'>
                    <PrefixedTextField type='date' fullWidth label={'Issue Data'} placeholder='Add Adress' Icon={BiCalendar}>Billing Address</PrefixedTextField>

                  </div>
                  <div className='col-span-12'>
                    <PrefixedTextField type='date' fullWidth label={'Expiry Date'} placeholder='Add Adress' Icon={BiCalendar}>Billing Address</PrefixedTextField>
                  </div>

                </div>

                <div className="col-span-12 xl:col-span-6 grid grid-cols-12  ">

                  <FormControl className='col-span-12'>
                    <FormLabel>Billing to</FormLabel>
                    <TextField placeholder='Add Adress'>Billing Address</TextField>
                  </FormControl>
                  <FormControl className='col-span-12'>
                    <FormLabel >Shipping Address</FormLabel>
                    <FormControlLabel control={<Checkbox></Checkbox>} label='Same as Billing Address' />
                    <TextField placeholder='Add Address'></TextField>
                  </FormControl>
                </div>
              </Box>


              <Box className='space-y-4 mt-4'>
                <Box className='grid grid-cols-12' sx={{bgcolor:t=>t.palette.secondary.light}}>
                  <Box className='col-span-4 py-4 px-2'>Item Name</Box>
                  <Box className='col-span-2 py-4 px-2'>Rate</Box>
                  <Box className='col-span-2 py-4 px-2'>QTY</Box>
                  <Box className='col-span-2 py-4 px-2'>Total</Box>
                  <Box className='col-span-2 py-4 px-2'>Delete</Box>
                </Box>
                <Box className='grid grid-cols-12' sx={{bgcolor:t=>t.palette.secondary.light}}>
                  <Box className='col-span-4 py-2 px-2'>
                    <TextField variant='standard' fullWidth></TextField>
                  </Box>
                  <Box className='col-span-2 py-2 px-2'>
                    <TextField variant='standard'></TextField>
                  </Box>
                  <Box className='col-span-2 py-2 px-2'>
                    <TextField variant='standard'></TextField>
                  </Box>
                  <Box className='col-span-2 py-2 px-2'>
                    <TextField variant='standard'></TextField>
                  </Box>
                  <Box className='col-span-2 py-2 px-2'>
                    <IconButton>
                      <MdDelete></MdDelete>
                    </IconButton>
                  </Box>
                </Box>
        

 
              </Box>





            </Card>
          </div>
          <div className="col-span-12 md:col-span-4 mt-8 md:mt-0 md:px-4 xl:px-12 ">
            <Box display='flex' gap={1} flexDirection={'column'}>
              <Button>Finalize and Issue</Button>
              <Button sx={(t) => ({ backgroundColor: t.palette.background.paper, color: t.palette.text.primary, '&:hover': { backgroundColor: t.palette.background.paper, color: t.palette.primary.dark } })}  >Save Draft </Button>
              <Button sx={(t) => ({ backgroundColor: t.palette.background.paper, color: t.palette.text.primary, '&:hover': { backgroundColor: t.palette.error.light, color: t.palette.background.paper } })}  >Delete</Button>
            </Box>


            <Card sx={{ p: 2, mt: 4 }}>
              <Typography variant='caption'>Settings</Typography>
              <Paper>
                <List>
                  <ListItem sx={{ borderBottom: t => `1px solid ${t.palette.divider}`, display: 'block' }}>

                    <Box display='flex' alignItems="center" >

                      <ListItemText sx={{ color: t => t.palette.secondary.main }}>

                        Create GST Enabled Invoice
                      </ListItemText>

                      <Checkbox></Checkbox>
                    </Box>
                    <div>


                      <Box >
                        <Typography color={'gray'} fontSize={12}>Add your GST number</Typography>
                      </Box>
                    </div>

                  </ListItem>
                  <ListItem sx={{ borderBottom: t => `1px solid ${t.palette.divider}`, display: 'block' }}>

                    <Box display='flex' alignItems="center" >

                      <ListItemText sx={{ color: t => t.palette.secondary.main }}>

                        Create GST Enabled Invoice
                      </ListItemText>

                      <Checkbox></Checkbox>
                    </Box>
                    <div>


                      <Box >
                        <Typography color={'gray'} fontSize={12}>Allow accepting multiple payments
                        </Typography>
                      </Box>
                    </div>

                  </ListItem>
                  <ListItem sx={{ display: 'block' }}>

                    <Box display='flex' alignItems="center" >

                      <ListItemText sx={{ color: t => t.palette.secondary.main }}>

                        Change Invoice Label
                      </ListItemText>
                      <IconButton >
                        <BsArrowRight></BsArrowRight>
                      </IconButton>
                    </Box>
                    <div>


                      <Box >
                        <Typography color={'gray'} fontSize={12}>Invoices will be issued under this label
                        </Typography>
                      </Box>
                    </div>

                  </ListItem>
                </List>
              </Paper>
            </Card>

          </div>
        </div>
      </form>


    </Page >
  )
}
