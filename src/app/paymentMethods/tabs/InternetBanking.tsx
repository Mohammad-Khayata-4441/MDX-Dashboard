import { RadioGroup, Radio, Select, MenuItem, InputLabel, FormControl, FormControlLabel, Card, Paper } from '@mui/material'
import React from 'react'

export default function InternetBanking() {
    return (
        <div>

            <h5>Popular Banks </h5>

            <div className='grid grid-cols-12'>
                <div className='col-span-12'>

                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <Paper sx={{ p: 2, mr: 1, mb:1 ,width: { xs: '100%', md:'auto' } }}>

                            <FormControlLabel value="female" control={<Radio />} label={<img src="https://www.freepnglogos.com/uploads/sbi-logo-png/sbi-logo-state-bank-india-group-vector-eps-0.png" width={165} />} />
                        </Paper>
                        <Paper sx={{ p: 2, mr: 1, mb:1  ,width: { xs: '100%', md:'auto' } }}>
                            <FormControlLabel value="male" control={<Radio />} label={<img src="https://www.freepnglogos.com/uploads/sbi-logo-png/sbi-logo-state-bank-india-group-vector-eps-0.png" width={165} />} />
                        </Paper>
                        <Paper sx={{ p: 2, mr: 1, mb:1  ,width: { xs: '100%', md:'auto' } }}>

                            <FormControlLabel value="other" control={<Radio />} label={<img src="https://www.freepnglogos.com/uploads/sbi-logo-png/sbi-logo-state-bank-india-group-vector-eps-0.png" width={165} />} />
                        </Paper>
                        <Paper sx={{ p: 2, mr: 1, mb:1  ,width: { xs: '100%', md:'auto' } }}>

                            <FormControlLabel value="other" control={<Radio />} label={<img src="https://www.freepnglogos.com/uploads/sbi-logo-png/sbi-logo-state-bank-india-group-vector-eps-0.png" width={165} />} />
                        </Paper>

                    </RadioGroup>
                </div>

                <h5>All Banks </h5>

                <div className='col-span-12'>
                    <InputLabel > Choose Bank </InputLabel>
                    <FormControl placeholder='Select bank' size='small' fullWidth>
                        <Select placeholder='Select bank' >
                            <MenuItem value="A">Bank A</MenuItem>
                            <MenuItem value="A">Bank B</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
        </div >
    )
}
