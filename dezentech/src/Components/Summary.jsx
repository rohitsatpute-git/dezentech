import React from 'react'
import SummaryTable from './SummaryTable'

function Summary() {
    return (
        <div className='flex flex-col w-full'>
            <span className='font-bold text-[#1A6D73] text-[14px] lg:text-lg w-fit'>Summary</span>

            <SummaryTable/>
        </div>
    )
}

export default Summary