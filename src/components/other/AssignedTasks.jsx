import React from 'react'
import TaskCard from './TaskCard'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AssignedTasks = () => {

    const {userData,setUserData} = useContext(AuthContext);
    const employeeInfo = userData?.employeeData ?? [];


    const status=(task)=>{
        if(task.active){return "Active"}
        if(task.new){return "New"}
        if(task.failed){return "Failed"}
        if(task.completed){return "Completed"}
    }
  return (
    <div className="flex flex-col justify-center items-start gap-8 w-full px-10">
        <h1 className='text-4xl font-semibold'>Assigned Tasks: </h1>
        <div className='overflow-x-auto w-full relative z-20 flex justify-start items-center gap-6 flex-nowrap no-scrollbar'>
            {employeeInfo.length === 0 ? (
                <div>Loading...</div>
                ) : (
                employeeInfo.flatMap((employee, empIdx) =>
                    employee.tasks.map((task, tIdx) => (
                    <TaskCard
                        key={`${empIdx}-${tIdx}`}
                        title={task.title}
                        description={task.description}
                        date={task.date}
                        name={employee.name}
                        status={status(task)}
                        category={task.category}
                    />
                    ))
                )
                )}
        </div>
    </div>
  )
}

export default AssignedTasks