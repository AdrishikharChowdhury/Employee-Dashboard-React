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
    <div className='flex-col sm:gap-8 gap-4 text-white flex items-center justify-center h-screen w-screen z-20 relative'>
        <div className="glass border-2 border-green-900 rounded-2xl sm:p-4 p-2 shadow-xl shadow-green-950 lg:w-2/5 md:w-1/2 sm:w-3/4 w-9/10">
            <h1 className='text-white font-extrabold text-center sm:py-6 py-3 sm:text-4xl text-2xl w-full'>De-Petrification</h1>
            <form 
            className='flex flex-col items-center sm:gap-6 gap-4 sm:p-6 p-3 sm:text-xl text-md'
            onSubmit={(e)=>{handleSubmit(e)}}>
                <input 
                type="email" name="" id="" 
                placeholder='Enter your email'
                className='border-2 border-green-500 p-4 rounded-full sm:text-lg text-sm w-full outline-none'
                required
                value={email}
                onChange={(e)=>{handleEmail(e)}}
                />
                <input 
                type="password" name="" id="" 
                placeholder='Enter your password'
                className='border-2 border-green-500 p-4 rounded-full sm:text-lg text-sm w-full outline-none'
                required
                value={password}
                onChange={(e)=>{handlePassword(e)}}
                />
                <button 
                className='w-full bg-stone-green border-2 border-white text-white rounded-full sm:p-4 p-3 cursor-pointer'
                onClick={handleMessage}>
                    De-Petrify
                </button>
            </form>
        </div>
        <p className={`glass border-2 border-green-900 rounded-2xl p-4 shadow-xl shadow-green-950 ${isMessage ? "inline" : "hidden"}`}>
            {isMessage ? `Email: ${emailMessage} login succesfully` : ""}
        </p>
    </div>
  )
}

export default Login