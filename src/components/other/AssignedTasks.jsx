import React from 'react';
import TaskCard from './TaskCard';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { motion,AnimatePresence } from 'framer-motion';

const AssignedTasks = () => {
  const { userData, setUserData } = useContext(AuthContext);
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

  const status = (task) => {
    if (task.active) return "Active";
    if (task.new) return "New";
    if (task.failed) return "Failed";
    if (task.completed) return "Completed";
  };

  return (
    <div className="flex flex-col justify-center items-start gap-8 w-full lg:px-10 px-5">
      <h1 className="lg:text-4xl text-2xl font-semibold p-4 glass rounded-xl">Assigned Missions:</h1>
      <motion.div
        className="glass p-3 overflow-auto w-full relative z-20 flex justify-start items-center gap-6 flex-nowrap no-scrollbar"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
        {employeeInfo.length === 0 ? (
          <div>Loading...</div>
        ) : (
          employeeInfo.flatMap((employee, empIdx) =>
            employee.tasks.map((task, tIdx) => (
              <motion.div key={`${empIdx}-${tIdx}`} variants={itemVariants}>
                <TaskCard
                  title={task.title}
                  description={task.description}
                  date={task.date}
                  name={employee.name}
                  status={status(task)}
                  category={task.category}
                />
              </motion.div>
            ))
          )
        )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default AssignedTasks;
