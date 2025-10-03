import React from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useState, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useContext } from 'react'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setuser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const {userData,setUserData} = useContext(AuthContext);


  useEffect(() => {
    const loggedInUser=localStorage.getItem('loggedInUser');
    if(loggedInUser){
      const authData=JSON.parse(loggedInUser)
      setuser(authData.role);
      setLoggedInUserData(authData.info);
    }
  }, [])
  

  const handleUser=(email,password)=>{
    console.log(userData);
    if(userData.adminData.find((e)=>email==e.email && password==e.password)){
      const admin=userData.adminData.find((e)=>email==e.email && password==e.password)
      setuser('admin');
      setLoggedInUserData(admin)
      localStorage.setItem('loggedInUser',JSON.stringify({role: 'admin', info: admin}));
    }
    else if(userData){
      const employee=userData.employeeData.find((e)=>email==e.email && password==e.password)
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
      <div className="min-h-screen w-screen h-full bg-black relative">
      {/* Midnight Aurora Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, 
              rgba(58, 123, 255, 0.25) 0%, 
              rgba(100, 149, 237, 0.15) 25%, 
              rgba(123, 104, 238, 0.07) 35%, 
              transparent 50%
            )
          `,
        }}
      />


      {!user ? <Login handleUser={handleUser}/> : ""}
      {user=='admin' ? <AdminDashboard changeUser={setuser} adminInfo={loggedInUserData} /> : (user=='employee' ? <EmployeeDashboard changeUser={setuser} employeeInfo={loggedInUserData} setEmployeeInfo={setLoggedInUserData} /> : null)}
    </div>
  )
}

export default App