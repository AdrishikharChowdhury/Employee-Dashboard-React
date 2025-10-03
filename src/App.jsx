import React from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useState, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useContext } from 'react'
import { AuthContext } from './context/AuthProvider'
import Background from "./assets/background.jpg"

const App = () => {

  const [user, setuser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const {userData,setUserData} = useContext(AuthContext);


  useEffect(() => {
    setLocalStorage();
    const loggedInUser=localStorage.getItem('loggedInUser');
    if(loggedInUser){
      const authData=JSON.parse(loggedInUser)
      setuser(authData.role);
      setLoggedInUserData(authData.info);
    }
  }, [])
  

  const handleUser=(email,password)=>{ 
      if(userData.admin.find((e)=>email==e.email && password==e.password)){
      const admin=userData.admin.find((e)=>email==e.email && password==e.password)
      setuser('admin');
      setLoggedInUserData(admin)
      localStorage.setItem('loggedInUser',JSON.stringify({role: 'admin', info: admin}));
    }
    else if(userData){
      const employee=userData.employees.find((e)=>email==e.email && password==e.password)
      if(employee){
        setuser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role: 'employee', info: employee}));
      }
    }
    else{
      alert("Invalid Creadentials");
    }
  }

  return (
    <div className="relative min-h-screen h-full min-w-screen w-full flex flex-col lg:gap-6 md:gap-4 gap-2 justify-center items-center">
      <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover filter blur-sm"
          style={{ backgroundImage: `url(${Background})` }}
      ></div>
      {!user ? <Login handleUser={handleUser}/> : ""}
      {user=='admin' ? <AdminDashboard changeUser={setuser} adminInfo={loggedInUserData} /> : (user=='employee' ? <EmployeeDashboard changeUser={setuser} employeeInfo={loggedInUserData} setEmployeeInfo={setLoggedInUserData} /> : null)}
    </div>
  )
}

export default App