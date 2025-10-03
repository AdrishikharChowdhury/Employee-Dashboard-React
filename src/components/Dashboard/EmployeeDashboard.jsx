import React from 'react'
import Header from '../other/Header'
import Tasksection from '../other/Tasksection'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ employeeInfo,changeUser }) => {
  return (
    <div className='text-white w-full flex flex-col justify-start'>
        <Header changeUser={changeUser} info={employeeInfo} />
        <Tasksection name={employeeInfo.name} />
        <TaskList name={employeeInfo.name} />
    </div>
  )
}

export default EmployeeDashboard