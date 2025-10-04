import React from 'react'
import { AuthContext } from '../../context/AuthProvider';
import { useContext } from 'react';
import EmployeeCard from './EmployeeCard';
import { motion,AnimatePresence } from 'framer-motion';

const EmployeeInfo = () => {

    const {userData,setUserData} = useContext(AuthContext);
    const employeeInfo = userData?.employees ?? [];

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
        opacity: 1,
        transition: {
            delay: 5,
            staggerChildren: 0.2, // delay between children animations
        },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };


  return (
    <div className='flex flex-col justify-center items-start gap-8 w-full lg:px-10 px-5 pb-12'>
        <h1 className='lg:text-4xl text-2xl font-semibold p-4 glass rounded-xl'>Kingdom Of Science Members:</h1>
        <motion.div 
        className="glass p-3 overflow-x-auto w-full relative z-20 flex justify-start items-center lg:gap-6 gap-3 flex-nowrap no-scrollbar"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        >
            <AnimatePresence>
                    {employeeInfo.length === 0 ?
                        (<div>
                            Loading...
                        </div>)
                        :
                    employeeInfo.map((employee,idx)=>{
                        return <motion.div key={idx} variants={itemVariants}>
                            <EmployeeCard key={idx} 
                            name={employee.name} 
                            taskCount={employee.taskCount}
                            photo={employee.photo} />
                        </motion.div>
                    })}
                </AnimatePresence>
        </motion.div>
    </div>
  )
}

export default EmployeeInfo