import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AssignedTasks from '../other/AssignedTasks'
import EmployeeInfo from '../other/EmployeeInfo'

const AdminDashboard = ({ adminInfo, changeUser }) => {
  return (
    <div className='w-screen min-h-screen h-full flex flex-col justify-start items-center text-white gap-25 z-20  relative'>
        <Header changeUser={changeUser} info={adminInfo} />
        <CreateTask />
        <AssignedTasks />
        <EmployeeInfo />
    </div>
  )
}

export default AdminDashboard