import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import sithumi from '../images/sithumi.jpg'
import'../styles/PaySalary.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

const Grid = styled(MuiGrid)(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& [role="separator"]': {
      margin: theme.spacing(0, 2),
    },
  }));

export default function SimpleContainer() {

    const theme = useTheme();

  return (
    <React.Fragment>
      <CssBaseline /> 
      <Container maxWidth="md" 
      >
        <Box 
        className = 'box-margin'
        border={2} 
        borderColor='#DFE2FF' sx={{ p:2 }}>
            

            <Grid container>
                <Grid item xs>
                
                <Card>
                
                    <CardMedia  className='img-border'
                    component="img"
                    sx={{ width: 150 }}
                    image={sithumi}
                     />
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography className='text-dec' component="div" variant="h5">
                        Sithumi Rathnayake
                    </Typography>
                    <Typography className='text-dec' variant="subtitle1" color="text.secondary" component="div">
                        Ui/Ux Designer
                    </Typography>
                    </CardContent>
            
                </Card>
                </Grid>
                < Divider orientation="vertical" flexItem/>
                    
                
                <Grid item xs>
                <Box sx={{p:2}}>
                <Stack spacing={2}>
                <TextField
                    id="outlined-read-only-input"
                    label="Email"
                    defaultValue="sithumi.rathnayake@gmail.com"
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    id="outlined-read-only-input"
                    label="Address"
                    defaultValue="43/B, New Kandy Rd, Delogoda"
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    id="outlined-read-only-input"
                    label="Joined Date"
                    defaultValue="14.07.2021"
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    id="outlined-read-only-input"
                    label="DOB"
                    defaultValue="23.03.1995"
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    id="outlined-read-only-input"
                    label="Department"
                    defaultValue="IT Department"
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    id="outlined-read-only-input"
                    label="Status"
                    defaultValue="Full Time"
                    InputProps={{
                        readOnly: true,
                    }}
                />
                
            </Stack>
            </Box>

                </Grid>
            </Grid>

            <Link to="PaySalaryForm" style={{ textDecoration: 'none' }}>
            <Button
              
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Deposit Money
            </Button> 
            </Link>             
        </Box>
      </Container>
    </React.Fragment>
  );
}
