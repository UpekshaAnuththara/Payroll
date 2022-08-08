import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PaymentsIcon from '@mui/icons-material/Payments';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import { DesktopDateRangePicker } from '@mui/x-date-pickers-pro/DesktopDateRangePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Deposit from './Deposit';
import { Link } from 'react-router-dom'
import "../styles/PaySalaryForm.css"

export default function PaySalaryForm() {
  
    const [value, setValue] = React.useState([null, null]);
    const [salary, setSalary] = useState(0);
    const [bonus, setBonus] = useState(0); 
    const [ot, setOt] = useState(0); 
    const [mah, setMah] = useState(0); 
    const [advance, setAdvance] = useState(0); 
    const [loan, setLoan] = useState(0); 
    const [total, setTotal] = useState(salary+bonus+ot+mah-loan-advance); 
    const theme = createTheme();

    function addThem(e){
      setTotal(salary+bonus+ot+mah-loan-advance);
      e.preventDefault();
    }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          className="border-style"
          border={2}
          borderColor='#DFE2FF'
          sx={{
            p:2,
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <PaymentsIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Pay Salary
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              
              <Grid item xs={12} >
              <LocalizationProvider
            dateAdapter={AdapterDateFns}
            localeText={{ start: 'From', end: 'To' }}
          >
            <DesktopDateRangePicker
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} />
                </React.Fragment>
              )}
            />
             </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>

              <TextField
                
                id="outlined-number"
                label="Basic Salary"
                defaultValue="65000"
                value={salary}
                onChange={e => setSalary(+e.target.value)}
                />
                    
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                label="Bonus"
                id="outlined-start-adornment"
                value={bonus}
                InputProps={{
                    startAdornment: <InputAdornment position="start">Rs.</InputAdornment>,
                }}
                onChange={e => setBonus(+e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
              <TextField
                label="OT"
                id="outlined-start-adornment"
                value={ot}
                InputProps={{
                    startAdornment: <InputAdornment position="start">Rs.</InputAdornment>,
                }}
                onChange={e => setOt(+e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
              <TextField
                label="Medical and Housing"
                id="outlined-start-adornment"
                value={mah}
                InputProps={{
                    startAdornment: <InputAdornment position="start">Rs.</InputAdornment>,
                }}
                onChange={e => setMah(+e.target.value)}
                />
              </Grid>
      
            </Grid>

                
            <h4 xs={12}>Reduction</h4>

            <Grid container spacing={2}>
              
              <Grid item xs={12} sm={6}>
              <TextField
                label="Advance"
                id="outlined-start-adornment"
                value={advance}
                InputProps={{
                    startAdornment: <InputAdornment position="start">Rs.</InputAdornment>,
                }}
                onChange={e => setAdvance(+e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
              <TextField
                label="Loan"
                id="outlined-start-adornment"
                value={loan}
                InputProps={{
                    startAdornment: <InputAdornment position="start">Rs.</InputAdornment>,
                }}
                onChange={e => setLoan(+e.target.value)}
                />
              </Grid>
              
            </Grid>

            <h4 xs={12}>Total Salary</h4>

            <Button 
            variant="contained"
            color='success'
            onClick={addThem}
            >
              Calculate Total
            </Button>

            <h2>{total}</h2>

            <Link to="Deposit"
            style={{ textDecoration: 'none' }}
            >
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2}}
              
            >
              Deposit Money
            </Button>  
            </Link>

          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}