import React, { useEffect } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';
import { motion } from 'framer-motion';

const AcceptTask = ({title,description,date,category,name,tId}) => {

  const {userData,setUserData}=useContext(AuthContext);
    const employeeInfo = userData.employees;

    useEffect(() => {
      setLocalStorage(userData.employees,userData.admin);
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

    setUserData(prev => ({ ...prev, employees: updatedEmployees }));
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

    setUserData(prev => ({ ...prev, employees: updatedEmployees }));
    setLocalStorage();
    };


  return (
    <div className="text-black lg:size-100 size-80 lg:p-5 p-3 yellowwood flex-shrink-0 border-2 rounded-xl border-white flex flex-col justify-between gap-10">
        <div className="w-full flex items-center justify-between">
            <h2 className='bg-red-600 p-2 rounded-lg text-white'>{category}</h2>
            <h2>{date}</h2>
        </div>
        <div className="flex flex-col justify-center items-start gap-2">
            <h3 className='lg:text-2xl text-lg font-bold'>{title}</h3>
            <h3 className='text-sm'>{description}</h3>
        </div>
        <div className="flex w-full flex-col lg:gap-4 gap-1.5 text-white lg:text-base text-sm">
            <motion.button 
            className='cursor-pointer w-full p-3 bg-stone-green border-2 border-white'
            onClick={handleCompleted}
            whileTap={{
                    scale: 0.8
                }}>
              Mark As Completed
            </motion.button>
            <motion.button 
            className='cursor-pointer w-full p-3 bg-senku-red border-2 border-white'
            onClick={handleFailed}
            whileTap={{
                    scale: 0.8
                }}>
              Mark As Failed
            </motion.button>
        </div>
    </div>
  )
}

export default AcceptTask