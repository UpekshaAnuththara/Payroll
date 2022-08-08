import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Payroll from './Pages/Payroll'
import PaySalary from './Pages/PaySalary';
import PayrollBar from './components/payrollbar';
import PaySalaryForm from './Pages/PaySalaryForm';
import Deposit from './Pages/Deposit';

function App() {
  return (
    <BrowserRouter>
      <PayrollBar/>

      <Routes>

        <Route path="/" element={<Payroll/>}/>
        <Route path='/PaySalary' element={<PaySalary/>}/>
        <Route path='/PaySalary/PaySalaryForm' element={<PaySalaryForm/>}/>
        <Route path='/PaySalary/PaySalaryForm/Deposit' element={<Deposit/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
