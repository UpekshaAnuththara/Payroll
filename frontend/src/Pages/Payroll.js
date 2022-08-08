import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import pay from '../images/pay.png'
import report from '../images/report.png'
import salary from '../images/salary.png'
import { Link } from 'react-router-dom';
import "./Payroll.css";
import { Tab, Tabs } from '@mui/material';

function Payroll() {
  return (
    <div style={{textAlign: "center"}}>

      <Tabs  centered>
        <Link to='/PaySalary' style={{ textDecoration: 'none' }}>
        <div>
          <Card sx={{ maxWidth: 345 }} className='payroll-padding'>
            <CardMedia
              className='payimg'
              component="img"
              alt="green iguana"
              height="200"
              src={pay}
            />
            <CardContent>
              <Typography 
              gutterBottom variant="h5" component="div"
              textAlign='center'>
                Pay Salary
              </Typography>        
            </CardContent>
          </Card>
        </div>
        </Link>

        <div>
          <Card sx={{ maxWidth: 345 }} className='payroll-padding'>
            <CardMedia
              component="img"
              alt="green iguana"
              height="200"
              src={report}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Employees' Report
              </Typography>        
            </CardContent>
          </Card>
        </div>
      </Tabs>

      <div >
        <Tabs centered>
          <Card sx={{ maxWidth: 400, width: 500 }} className='payroll-bottom'>
            <CardMedia
              component="img"
              alt="green iguana"
              height="150"
              src={salary}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Salary Sheet
              </Typography>        
            </CardContent>
          </Card>
        </Tabs>
      </div>
    </div>
  );
}

export default Payroll;