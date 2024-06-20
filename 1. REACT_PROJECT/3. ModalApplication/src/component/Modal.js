import React from 'react'
import { SquareX } from 'lucide-react';
import { Download } from 'lucide-react';
function Modal() {
  return (
    <div className='fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center'>
        <div className='mt-10 flex flex-col gap-5 text-white'>
            <button className='place-self-end'>
                <SquareX size={30}/>
            </button>
            <div className='bg-indigo-600 rounded-md px-20 py-10 flex flex-col gap-5 items-center mx-4'>
                <h1 className='text-3xl font-extrabold'> Download Free E-book </h1>
                <p className='text-3xl font-bold max-w-md text-center'>Want to Learn How to Crack Web Development Interviews Like a Pro!</p>
                <form className='flex flex-col'>
                    <input type='email' placeholder='Enter Your Email' requried
                        className='w-full px-4 py-3 text-black border-gray-300 rounded-md'
                    />
                    <button className='mt-3 w-full gap-2 flex items-center justify-center px-5 py-3 font-medium bg-black rounded-md'>
                        <Download/>
                        Download eBook
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Modal