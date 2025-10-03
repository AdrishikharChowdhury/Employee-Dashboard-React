import { useContext,useState,useEffect } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { setLocalStorage } from '../../utils/localStorage';
import React from 'react';
import { motion } from 'framer-motion'

const CreateTask = () => {

    const {userData,setUserData} = useContext(AuthContext);
    const employeeInfo = userData?.employees ?? [];

    const [taskTitle, settaskTitle] = useState('');
    const [taskDescription, settaskDescription] = useState('');
    const [taskDate, settaskDate] = useState('');
    const [assignTo, setassignTo] = useState(employeeInfo.length > 0 ? employeeInfo[0].name : '');
    const [category, setcategory] = useState('');
    const [isMessage, setisMessage] = useState(false)

    useEffect(() => {
    if (isMessage) 
    {
        const timeoutId = setTimeout(() => {
        setisMessage(false);
        }, 1500);
        return () => clearTimeout(timeoutId);
    }
    }, [isMessage]);

    const handleMessage=()=>{
        setisMessage(true);
    }

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
                employees: updatedEmployees,
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
            <h1 className='lg:text-4xl text-2xl font-semibold p-4 glass'>New Mission</h1>
            <form 
            className='glass flex sm:flex-row flex-col justify-evenly items-center border-2 border-green-900 shadow-green-900 shadow-2xl lg:p-10 p-5 rounded-2xl lg:text-xl text-sm lg:gap-5 gap-4 lg:w-8/10 w-9/10 min-h-max lg:h-156 h-max'
            onSubmit={(e)=>{submitHandler(e)}}>
            <div className="flex flex-col justify-center items-start lg:gap-5 gap-3 sm:w-4/5 w-full">
                <label className='flex flex-col justify-center items-start w-full gap-2' htmlFor="">
                    <p>Mission Title:</p>
                    <input 
                    className='border-2 border-green-500 lg:p-4 p-3 rounded-xl lg:text-lg text-sm w-full outline-none' type="text" name=""
                    placeholder='Enter the Task Title...'
                    onChange={(e)=>handleTitle(e)}
                    value={taskTitle}
                    />
                </label>
                <label className='flex flex-col justify-center items-start w-full gap-2' htmlFor="">
                    <p>Date:</p>
                    <input 
                    className='border-2 border-green-500 lg:p-4 p-3 rounded-xl lg:text-lg text-sm w-full outline-none' type="date" name=""
                    value={taskDate}
                    onChange={(e)=>{handleDate(e)}}/>
                </label>
                <label className='flex flex-col justify-center items-start w-full gap-2' htmlFor="">
                    <p>Assign to:</p>
                    <select 
                    className='border-2 border-green-500 lg:p-4 p-3 rounded-xl lg:text-lg text-sm w-full outline-none'
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
                    <p>Mission Category</p>
                    <input 
                    className='border-2 border-green-500 lg:p-4 p-3 rounded-xl lg:text-lg text-sm w-full outline-none' type="text" name=""
                    placeholder='Enter the Category of the Task'
                    value={category}
                    onChange={(e)=>{handleCategory(e)}}/>
                </label>
                <motion.button 
                    className='bg-green-600 border-green-900 lg:p-4 p-3 w-full cursor-pointer rounded-full border-2 transition duration-500 ease-in-out hover:bg-green-700'
                    onClick={handleMessage}
                    whileTap={{
                        scale: 0.8,
                        transition: { duration: 0.2 }
                    }}
                    >
                    Send
                    </motion.button>
            </div>
            <div className="h-full flex justify-center items-center w-full">
                <label className='flex flex-col justify-center items-start w-full gap-1.5 h-full' htmlFor="">
                    <p>Mission Description:</p>
                    <textarea 
                    className='lg:h-125 h-92 border-2 border-green-500 lg:p-4 p-3 rounded-xl lg:text-lg text-sm w-full outline-none' 
                    name=""
                    placeholder='Enter the Task Description...'
                    onChange={(e)=>handleDescription(e)}
                    value={taskDescription}></textarea>
                </label>
            </div>
            </form>
            <p className={`glass border-2 border-green-900 rounded-2xl p-4 shadow-xl shadow-green-950 ${isMessage ? "inline" : "hidden"}`}>
                {isMessage ? `Task Created Successfully. Assigned to ${assignTo}` : ""}
            </p>
        </div>
  )
}

export default CreateTask