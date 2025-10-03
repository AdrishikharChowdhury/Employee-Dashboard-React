import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { setLocalStorage } from '../../utils/localStorage';
import { useEffect } from 'react';


const NewTask = ({title,description,date,category,name,tId}) => {

    const {userData,setUserData}=useContext(AuthContext);
    const employeeInfo = userData?.employeeData ?? [];

    useEffect(() => {
      localStorage.setItem('userData', JSON.stringify(userData));
    }, [userData])
    

    const handleAccept = () => {
    const updatedEmployees = employeeInfo.map(employee => {
        if (employee.name === name) {
        return {
            ...employee,
            tasks: employee.tasks.map((task, idx) => {
            if (idx === tId) {
                return {
                ...task,
                new: false,     // assuming you want to toggle this to false
                active: true,
                };
            }
            return task;
            }),
            taskCount: {
            ...employee.taskCount,
            new: employee.taskCount.new - 1,       // decrement new count by 1
            active: employee.taskCount.active + 1, // increment active count by 1
            },
        };
        }
        return employee;
    });

    setUserData(prev => ({ ...prev, employeeData: updatedEmployees }));
    };


  return (
    <div className="lg:size-100 size-80 lg:p-5 p-3 bg-blue-400 flex-shrink-0 border-2 rounded-xl border-blue-800 text-black flex flex-col justify-between gap-10">
        <div className="w-full flex items-center justify-between">
            <h2 className='bg-red-600 p-2 rounded-lg text-white'>{category}</h2>
            <h2>{date}</h2>
        </div>
        <div className="flex flex-col justify-center items-start gap-2">
            <h3 className='lg:text-2xl text-lg font-bold'>{title}</h3>
            <h3 className='text-sm'>{description}</h3>
        </div>
        <button 
        className='cursor-pointer w-full p-3 bg-green-600 rounded-xl text-white'
        onClick={handleAccept}>
            Accept Task
        </button>
    </div>
  )
}

export default NewTask