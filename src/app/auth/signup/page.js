import React from 'react'
import { LiaLanguageSolid } from "react-icons/lia";

function Signup() {
  return (
    <div className=' w-full h-[100vh] relative '>
            <img
            src='/auth/background.png' 
            alt='background-image'
            className='absolute inset-0 w-full h-[100vh] bg-cover'
            />
          <div className='absolute z-10  h-[120%] w-[40%] bottom-0 top-[15%] left-[10%]' >
             <img  src='/auth/phone.png'
            alt='phone-image'
            className='h-[100%] w-[100%] '
         
            />
          </div>
           
            <div className=' w-auto flex absolute right-0  bg-white flex-col p-[5%] ' >
                <div className='logo flex flex-col gap-2'>
                    <img src='/auth/logo.png' alt='website-logo' className='w-[30%] h-[66%]' />
                    <p className='p-2 bg-[#53ABFF] rounded-lg self-start '>Hisab Karo</p>
                </div>
                <div className='signup-details flex flex-col justify-center  '>
                    <div className='details  flex flex-col gap-3 '>
                   <p className='text-[#53ABFF] text-[35px] font-bold mt-2'>Sign up</p>
                    <input 
                    placeholder='Email ID'
                    name='email'
                    type='email'
                    className='border-2 rounded-lg p-2'
                    />
                    <input 
                     placeholder='Password'
                     name='password'
                     type='password'
                     className='border-2 rounded-lg  p-2'
                    />
                    <input 
                      placeholder='Confirm Password'
                      name='password'
                      type='password'
                      className='border-2 rounded-lg  p-2'
                    />
                      {/* <div className='buttons flex flex-col max-w-[70%] mt-8 gap-3'> */}
                      <div className='buttons flex flex-col mt-2 gap-3 '>
                        <button className='signup-button text-center p-3  rounded-lg bg-[#1FD661] '>
                            Sign Up
                        </button>
                        <button className='login-button border-2 p-3 rounded-lg  border-[#5699D5] bg-[#F3F9FF] text-[#61A9EA] '>
                            Login
                        </button>
                        <button className='login-number-button border-2 rounded-lg  p-3 border-[#5699D5] bg-[#F3F9FF] text-[#61A9EA]'>
                            Login with mobile number
                        </button>
                        <p className='text-[#BCBCBC] text-[10px]'>
                         By login/sign up, you agree to 
                         the <span className='underline'> Terms of Service </span>  
                         and <span  className='underline'> Privacy Policy </span>
                        </p>
                       </div>
                       </div>
                     
                       <div className='language-option flex text-[12px] self-center
                    '>
                        <p className='underline'>
                            Select Language 
                        </p>
                        <LiaLanguageSolid size={20} />                        
                       </div>


                </div>
            </div>
         </div>
    
  )
}

export default Signup
