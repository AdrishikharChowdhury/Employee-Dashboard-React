import React,{ useState } from 'react'
import { useEffect } from 'react';

const Login = ({handleUser}) => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [isMessage, setisMessage] = useState(false);
    const [emailMessage, setemailMessage] = useState(``)

    useEffect(() => {
    if (isMessage) 
    {
        const timeoutId = setTimeout(() => {
        setisMessage(false);
        }, 1500);
        return () => clearTimeout(timeoutId);
    }
    }, [isMessage]);

    const handleEmail=(e)=>{
        setemail(e.target.value);
    }

    const handlePassword=(e)=>{
        setpassword(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        handleUser(email,password)
        setemailMessage(`${email}`);
        setemail('');
        setpassword('');
    }

    const handleMessage=()=>{
        setisMessage(true);
    }

  return (
    <div className='flex-col gap-8 text-white flex items-center justify-center h-screen w-screen z-20 relative'>
        <div className="border-2 border-blue-900 rounded-2xl p-4 shadow-xl shadow-blue-950 w-1/4">
            <h1 className='text-white font-extrabold text-center py-6 text-4xl w-full'>Login</h1>
            <form 
            className='flex flex-col items-center gap-6 p-6 text-xl'
            onSubmit={(e)=>{handleSubmit(e)}}>
                <input 
                type="email" name="" id="" 
                placeholder='Enter your email'
                className='border-2 border-blue-500 p-4 rounded-full text-lg w-full outline-none'
                required
                value={email}
                onChange={(e)=>{handleEmail(e)}}
                />
                <input 
                type="password" name="" id="" 
                placeholder='Enter your password'
                className='border-2 border-blue-500 p-4 rounded-full text-lg w-full outline-none'
                required
                value={password}
                onChange={(e)=>{handlePassword(e)}}
                />
                <button 
                className='w-full bg-blue-800 text-white rounded-full p-4 cursor-pointer'
                onClick={handleMessage}>
                    Login
                </button>
            </form>
        </div>
        <p className={`border-2 border-blue-900 rounded-2xl p-4 shadow-xl shadow-blue-950 ${isMessage ? "inline" : "hidden"}`}>
            {isMessage ? `Email: ${emailMessage} login succesfully` : ""}
        </p>
    </div>
  )
}

export default Login