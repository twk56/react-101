import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/img/goku.jpg';

type Props = {}

export default function Homepage({}: Props) {
    const navigation = useNavigate();

    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            

            {/* <div className='border-2 border-gray-300 p-8 rounded-lg shadow-lg'>
                <h1 className='text-2xl font-bold mb-6 text-center'>Welcome</h1>
                <div className='flex gap-4'>
                    <button 
                        onClick={() => navigation("/login")} 
                        className='px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition duration-300'>
                        Login
                    </button>
                    <button 
                        onClick={() => navigation("/register")} 
                        className='px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition duration-300'>
                        Register
                    </button>
                </div>
            </div> */}
        </div>
    )
}
