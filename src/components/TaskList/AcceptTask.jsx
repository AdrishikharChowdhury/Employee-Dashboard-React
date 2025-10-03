import React, { useEffect } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AcceptTask = ({title,description,date,category,name,tId}) => {

  const {userData,setUserData}=useContext(AuthContext);
    const employeeInfo = userData?.employeeData ?? [];

    useEffect(() => {
      localStorage.setItem('userData', JSON.stringify(userData));
    }, [userData])
    

    const handleCompleted = () => {
    const updatedEmployees = employeeInfo.map(employee => {
        if (employee.name === name) {
        return {
            ...employee,
            tasks: employee.tasks.map((task, idx) => {
            if (idx === tId) {
                return {
                ...task,
                completed: true,     // assuming you want to toggle this to false
                active: false,
                };
            }
            return task;
            }),
            taskCount: {
            ...employee.taskCount,
            completed: employee.taskCount.completed + 1,
            active: employee.taskCount.active - 1,
            },
        };
        }
        return employee;
    });

    setUserData(prev => ({ ...prev, employeeData: updatedEmployees }));
    };

    const handleFailed = () => {
    const updatedEmployees = employeeInfo.map(employee => {
        if (employee.name === name) {
        return {
            ...employee,
            tasks: employee.tasks.map((task, idx) => {
            if (idx === tId) {
                return {
                ...task,
                failed: true,     // assuming you want to toggle this to false
                active: false,
                };
            }
            return task;
            }),
            taskCount: {
            ...employee.taskCount,
            failed: employee.taskCount.failed + 1,
            active: employee.taskCount.active - 1,
            },
        };
        }
        return employee;
    });

    setUserData(prev => ({ ...prev, employeeData: updatedEmployees }));
    };


  return (
    <div className="text-black size-100 p-5 bg-yellow-400 flex-shrink-0 border-2 rounded-xl border-yellow-800 flex flex-col justify-between gap-10">
        <div className="w-full flex items-center justify-between">
            <h2 className='bg-red-600 p-2 rounded-lg text-white'>{category}</h2>
            <h2>{date}</h2>
        </div>
        <div className="flex flex-col justify-center items-start gap-2">
            <h3 className='text-2xl font-bold'>{title}</h3>
            <h3 className='text-sm'>{description}</h3>
        </div>
        <div className="flex w-full flex-col gap-4 text-white">
            <button 
            className='cursor-pointer w-full p-3 bg-green-600 rounded-xl'
            onClick={handleCompleted}>
              Mark As Completed
            </button>
            <button 
            className='cursor-pointer w-full p-3 bg-red-600 rounded-xl'
            onClick={handleFailed}>
              Mark As Failed
            </button>
        </div>
    </div>
  )
}

export default AcceptTask