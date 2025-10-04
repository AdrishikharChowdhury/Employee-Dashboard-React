import React, { createContext, useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage, useSeededData } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(()=>{return getLocalStorage()});

  useEffect(()=>{
    setUserData(()=>{return getLocalStorage()});
  },[])

  useSeededData();
  

  useEffect(() => {
    const employees=userData.employees;
    const admin=userData.admin;
    setLocalStorage(employees, admin);
  }, [userData]);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
