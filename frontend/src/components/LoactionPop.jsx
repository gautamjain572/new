import React, { useRef } from 'react'
import { IoMdCloseCircle } from "react-icons/io";

const LoactionPop = ({onClose}) => {

    const popRef = useRef();
    const closeModel = (e) => {
        if (popRef.current === e.target) {
            onClose();
        }
    }

  return (
    <div ref={popRef} onClick={closeModel} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <div className='flex flex-col gap-2'>
            <button onClick={onClose} className='text-2xl place-self-end text-red-600'><IoMdCloseCircle /></button>
            <div className='bg-white rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4'>
                <h1 className='text-3xl font-extrabold'>Select Your City</h1>
                <button className='border rounded-full px-4 py-4 hover:bg-[#ea7700]'>Legend Cinemas Lounges</button>
                <button className='border rounded-full px-4 py-4 hover:bg-[#ea7700]'>Legend Cinemas Bhiwadi</button>
                <button className='border rounded-full px-4 py-4 hover:bg-[#ea7700]'>Legend Cinemas Faridabad</button>
                <button className='bg-[#ea7700] border border-transparent text-white px-4 py-2 rounded-lg'>Save</button>
            </div>
        </div>
    </div>
  )
}

export default LoactionPop