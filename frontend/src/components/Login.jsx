import React from 'react'

const Login = () => {
    return (
        <div className='h-[90vh] items-center flex justify-center flex-col bg-[#f6f5f7] '>
            <div className='relative w-[768px] max-w-full min-h-[480px] bg-white rounded-xl shadow-lg '>
                <div className='absolute top-0 left-0 h-full transition-all ease-in-out w-1/2 opacity-0 z-10 transform translate-x-full'>
                    <form className='bg-white flex items-center flex-col px-12 h-full text-center justify-center'>
                        <h1 className='font-bold'>Create Account</h1>
                        <input className='bg-[#eee] py-3 px-4 m-2 w-full rounded-md border-none outline-none' type="text" placeholder='Name' required />
                        <input className='bg-[#eee] py-3 px-4 m-2 w-full rounded-md border-none outline-none' type="email" placeholder='Email' required />
                        <input className='bg-[#eee] py-3 px-4 m-2 w-full rounded-md border-none outline-none' type="password" placeholder='Password' required />
                        <button className='text-white bg-[#ff4b2b] rounded-3xl active:scale-50 font-bold py-3 px-14 m-5 border border-inherit outline-none uppercase transition-transform ease-in' type='submit'>Sign Up</button>
                    </form>
                </div>

                <div className='absolute top-0 left-0 h-full transition-all ease-in-out w-1/2 z-20 transform translate-x-full opacity-100'>
                    <form className='bg-white flex items-center flex-col px-12 h-full text-center justify-center'>
                        <h1 className='font-bold m-0'>Sign In</h1>
                        <input className='bg-[#eee] py-3 px-4 m-2 w-full rounded-md border-none outline-none' type="email" placeholder='Email' required />
                        <input className='bg-[#eee] py-3 px-4 m-2 w-full rounded-md border-none outline-none' type="password" placeholder='Password' required />
                        <p className='text-base font-thin m-4'>Forget Password ?</p>
                        <button className='text-white bg-[#ff4b2b] rounded-3xl active:scale-50 font-bold py-3 px-14 m-5 border border-inherit outline-none uppercase transition-transform ease-in-out' type='submit'>Login</button>
                    </form>
                </div>

                <div className='absolute top-0 left-0 w-1/2 h-full overflow-hidden transition-transform ease-in-out z-100 transform -translate-x-full'>
                    <div className='relative text-white bg-[#ff416c] -left-full h-full w-[200%] '>
                        <div>
                            <h1>Welcome Back!</h1>
                            <p className='text-base font-thin m-4'>To Keep connected with us please login with your personal info</p>
                            <button className='bg-transparent text-white bg-[#ff4b2b] rounded-3xl active:scale-50 font-bold py-3 px-14 m-5 border border-inherit outline-none uppercase transition-transform ease-in-out'>Login</button>
                        </div>
                        <div>
                            <h1>Hello, Friend</h1>
                            <p className='text-base font-thin m-4'>Enter your personal details and start journey with us</p>
                            <button className='bg-transparent text-white bg-[#ff4b2b] rounded-3xl active:scale-50 font-bold py-3 px-14 m-5 border border-inherit outline-none uppercase transition-transform ease-in-out'>Sign Up</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login