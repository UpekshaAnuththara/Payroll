import React from 'react'
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from 'styled-components';
import { bgcolor, createTheme } from '@mui/system';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

const theme=createTheme();


function Deposit() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Container maxWidth='sm'>
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <Avatar style={{justifyContent: "center", display: "flex" }} sx={{ m: 1, bgcolor:"green"}}>
                <CheckCircleIcon/>
            </Avatar>
            <h2 style={{textAlign:"center"}}>Deposited Successfully</h2>
            <p style={{textAlign:"center"}}>Employee Added to Salary Sheet</p>
            <p style={{textAlign:"center"}}>Payslip Added to Employee's Profile</p>
        
            <Link to='/' style={{ textDecoration: 'none' }}>
                <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2}}>View PaySlip</Button>
            </Link>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <Button fullWidth variant="outlined" sx={{ mt: 3, mb: 2}}>Dashboard</Button>
            </Link>

        </Box>   
        </Container>
    </ThemeProvider>
  )
}

export default Deposit