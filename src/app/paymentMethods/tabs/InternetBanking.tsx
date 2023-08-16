import { RadioGroup, Radio, Select, MenuItem, InputLabel, FormControl, FormControlLabel, Card, Paper } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'

export default function InternetBanking() {
    return (
        <div>

            <h5>Popular Banks </h5>

            <Grid2 container>
                <Grid2 xs={12}>

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
                </Grid2>

                <h5>All Banks </h5>

                <Grid2 xs={12}>
                    <InputLabel > Choose Bank </InputLabel>
                    <FormControl placeholder='Select bank' size='small' fullWidth>
                        <Select placeholder='Select bank' >
                            <MenuItem value="A">Bank A</MenuItem>
                            <MenuItem value="A">Bank B</MenuItem>
                        </Select>
                    </FormControl>
                </Grid2>
            </Grid2>
        </div >
    )
}
