import { useContext,useState,useEffect } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import React from 'react';
import { setLocalStorage } from '../../utils/localStorage';

const CreateTask = () => {

    const {userData,setUserData} = useContext(AuthContext);
    const employeeInfo = userData?.employeeData ?? [];

    const [taskTitle, settaskTitle] = useState('');
    const [taskDescription, settaskDescription] = useState('');
    const [taskDate, settaskDate] = useState('');
    const [assignTo, setassignTo] = useState(employeeInfo.length > 0 ? employeeInfo[0].name : '');
    const [category, setcategory] = useState('');

    useEffect(() => {
    console.log("assignTo changed:", assignTo);
    }, [assignTo]);


    const submitHandler = (e) => {
        e.preventDefault();
        const newTask = {
                title: taskTitle,
                description: taskDescription,
                date: taskDate,
                category,
                active: false,
                new: true,
                failed: false,
                completed: false,
            };

        const updatedEmployees = employeeInfo.map(employee => {
            if (assignTo === employee.name) {
            return {
                ...employee,
                tasks: [...employee.tasks, newTask],
                taskCount: {
                ...employee.taskCount,
                new: employee.taskCount.new + 1,
                },
            };
            }
            return employee;
            });

            // Update the userData object immutably
            setUserData(prev => ({
                ...prev,
                employeeData: updatedEmployees,
            }));

        setLocalStorage(); // Be sure this updates localStorage based on userData after setUserData

        // Reset form inputs
        setcategory('');
        settaskDate('');
        settaskDescription('');
        settaskTitle('');
        };



    const handleTitle=(e)=>{
        settaskTitle(e.target.value);
    }

    const handleDescription=(e)=>{
        settaskDescription(e.target.value);
    }

    const handleAssignTo=(e)=>{
        setassignTo(e.target.value);
        console.log(assignTo)
    }

    const handleCategory=(e)=>{
        setcategory(e.target.value);
        
    }

    const handleDate=(e)=>{
        settaskDate(e.target.value);
    }

  return (
    <div className="z-20 relative text-white w-full h-max flex flex-col justify-start items-center gap-4">
            <h1 className='text-4xl font-semibold'>Create Task</h1>
            <form 
            className='flex justify-evenly items-center border-2 border-blue-900 shadow-blue-900 shadow-2xl p-10 rounded-2xl text-xl gap-5 w-3/5 min-h-max h-156'
            onSubmit={(e)=>{submitHandler(e)}}>
            <div className="flex flex-col justify-center items-start gap-5 w-4/5">
                <label className='flex flex-col justify-center items-start w-full gap-2' htmlFor="">
                    <p>Task Title:</p>
                    <input 
                    className='border-2 border-blue-500 p-4 rounded-xl text-lg w-full outline-none' type="text" name=""
                    placeholder='Enter the Task Title...'
                    onChange={(e)=>handleTitle(e)}
                    value={taskTitle}
                    />
                </label>
                <label className='flex flex-col justify-center items-start w-full gap-2' htmlFor="">
                    <p>Date:</p>
                    <input 
                    className='border-2 border-blue-500 p-4 rounded-xl text-lg w-full outline-none' type="date" name=""
                    value={taskDate}
                    onChange={(e)=>{handleDate(e)}}/>
                </label>
                <label className='flex flex-col justify-center items-start w-full gap-2' htmlFor="">
                    <p>Assign to:</p>
                    <select 
                    className='border-2 border-blue-500 p-4 rounded-xl text-lg w-full outline-none'
                    value={assignTo}
                    onChange={(e) => handleAssignTo(e)}
                    >
                    {employeeInfo.map((employee) => (
                        <option key={employee.id} value={employee.name}>
                        {employee.name}
                        </option>
                    ))}
                    </select>
                </label>
                <label className='flex flex-col justify-center items-start w-full gap-2' htmlFor="">
                    <p>Category</p>
                    <input 
                    className='border-2 border-blue-500 p-4 rounded-xl text-lg w-full outline-none' type="text" name=""
                    placeholder='Enter the Category of the Task'
                    value={category}
                    onChange={(e)=>{handleCategory(e)}}/>
                </label>
                <button className='bg-blue-700 p-4 w-full cursor-pointer rounded-full'>Create</button>
            </div>
            <div className="h-full flex justify-center items-center w-full">
                <label className='flex flex-col justify-center items-start w-full gap-1.5 h-full' htmlFor="">
                    <p>Task Description:</p>
                    <textarea 
                    className='h-full border-2 border-blue-500 p-4 rounded-xl text-lg w-full outline-none' 
                    name=""
                    placeholder='Enter the Task Description...'
                    onChange={(e)=>handleDescription(e)}
                    value={taskDescription}></textarea>
                </label>
            </div>
            </form>
        </div>
  )
}

export default CreateTask