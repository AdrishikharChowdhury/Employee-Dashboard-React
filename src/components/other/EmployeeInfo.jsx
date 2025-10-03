import React from 'react'
import { AuthContext } from '../../context/AuthProvider';
import { useContext } from 'react';
import EmployeeCard from './EmployeeCard';

const EmployeeInfo = () => {

    const {userData,setUserData} = useContext(AuthContext);
    const employeeInfo = userData?.employeeData ?? [];


  return (
    <div className='flex flex-col justify-center items-start gap-8 w-full lg:px-10 px-5 pb-12'>
        <h1 className='lg:text-4xl text-2xl font-semibold'>Employee Statistics:</h1>
        <div className="overflow-x-auto w-full relative z-20 flex justify-start items-center lg:gap-6 gap-3 flex-nowrap no-scrollbar">
            {employeeInfo.length === 0 ?
                (<div>
                    Loading...
                </div>)
                :
            employeeInfo.map((employee,idx)=>{
                return <EmployeeCard key={idx} 
                name={employee.name} 
                taskCount={employee.taskCount} />
            })}
        </div>
    </div>
  )
}

export default EmployeeInfo