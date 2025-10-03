import React from 'react'
import NewTask from './NewTask'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import { AuthContext } from '../../context/AuthProvider'
import { useContext } from 'react'

const TaskList = ({name}) => {

    const {userData,setUserData}=useContext(AuthContext);
    const employeeInfo = userData?.employeeData ?? [];

    const info=employeeInfo.find((employee)=>employee.name===name)

  return (
    <div className='flex-col mt-10 h-full relative z-20 flex justify-center items-start gap-5  px-6 py-8'>
        <h1 className='text-3xl font-semibold flex-nowrap'>Your Tasks:</h1>
        <div className="flex items-center no-scrollbar w-full overflow-x-auto justify-start gap-8">
            {info.tasks.map((task,idx)=>{
                if(task.new){
                    return <NewTask name={name} tId={idx} key={idx} title={task.title} description={task.description} date={task.date} category={task.category} />
                }
                if(task.active){
                    return <AcceptTask name={name} tId={idx} key={idx} title={task.title} description={task.description} date={task.date} category={task.category} />
                }
                if(task.completed){
                    return <CompleteTask key={idx} title={task.title} description={task.description} date={task.date} category={task.category} />
                }
                if(task.failed){
                    return <FailedTask key={idx} title={task.title} description={task.description} date={task.date} category={task.category} />
                }
            })}
        </div>
    </div>
  )
}

export default TaskList