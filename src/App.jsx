import './App.css'
import Navbar from './Components/Navbar'
import Title from '../public/title'
import Summary from './Components/Summary'
import EmployeeTable from './Components/EmployeeTable'
import IqamaStats from './Components/IqamaStats'
import SummaryText from './Components/SummaryText'
import Footer from './Components/Footer'

function App() {

  return (
    <div className='flex flex-col px-[14px]   justify-center w-full text-[12px] lg:text-lg font-centrale'>
        <div className=' pt-[30px] pb-4 flex justify-between items-center'>
            <Navbar/>
            <div className='text-[12px] lg:text-lg'> 
              <span className='font-bold'> Date: </span>
              <span className='font-normal'> 13 Mar 2025 </span>
            </div>
        </div>

        <hr/>

        <div className='py-[12px] w-full flex justify-center'>
          <img src='/title.png'/>
        </div>

        <div className='flex w-full justify-center items-center'>
            <div className='h-[32px] w-1 bg-[#BE9941]'/>
            <div className='font-bold text-[18px] lg:text-lg text-[#1A6D73] px-4'>
                Employee Residency Status Report  
            </div>
            <div className='h-[32px] w-1 bg-[#BE9941]'/>
        </div>

        <div className='font-normal w-full py-[12px] justify-center flex'>
          This report provides the residency (Iqama) status of employees, including expiry dates, issuance dates, and renewal status for the month of March.
        </div>

        <Summary/>

        <div className='text-[16px] font-medium w-full text-center text-[#04080B]'>Employee residency status report with employee ID</div>

        <EmployeeTable/>

        <IqamaStats/>

        <SummaryText/>

        <Footer/>
    </div>
  )
}

export default App
