import React from 'react'
import './payrollbar.css'
import payroll from '../images/payroll.png'
import { Tab, Tabs } from '@mui/material';
import { Link } from 'react-router-dom';

function payrollbar() {
  return (
    <div>
        <Link to='/' style={{ textDecoration: 'none' }}>
            <Tabs centered style={{paddingBottom: 60}}>
            <img className='payroll-top-img' src={payroll}/>
            <Tab label="Payroll Management"/>
      </Tabs>
        </Link>
    </div>
  )
}

export default payrollbar