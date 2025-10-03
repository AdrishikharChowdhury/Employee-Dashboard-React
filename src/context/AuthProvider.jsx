import React, { createContext, useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    return getLocalStorage(); // load employees and admin on init
  });

  useEffect(() => {
    setLocalStorage(userData.employeeData, userData.adminData);
  }, [userData]);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
