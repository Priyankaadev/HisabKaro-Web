import React from 'react'
import { LiaLanguageSolid } from "react-icons/lia";

function Login() {
  return (
    <div className=' w-full h-[100vh] relative overflow-hidden '>
            <img
            src='/auth/background.png' 
            alt='background-image'
            className='absolute inset-0 w-[90vw] h-[100vh] bg-cover'
            />
          <div className='absolute z-10  h-[120%] w-[40%] bottom-0 top-[15%] left-[10%]' >
             <img  src='/auth/phone.png'
            alt='phone-image'
            className='h-[100%] w-[100%] '
         
            />
          </div>
          {/* right side  */}
           
            <div className=' w-[40vw] flex absolute right-0  bg-white flex-col px-[5%] py-[3%]  ' >
                <div className='logo flex flex-col gap-2'>
                    <img src='/auth/logo.png' alt='website-logo' className='w-[26%] h-[60%]' />
                    <p className='py-1 bg-[#53ABFF] rounded-lg self-start px-3'>Hisab Karo</p>
                </div>
                <div className='signup-details flex flex-col justify-center  '>
                    <div className='details  flex flex-col gap-3 '>
                   <p className='text-[#53ABFF] text-[30px] font-bold mt-3'>Login</p>
                    <input 
                    placeholder='Email ID'
                    name='email'
                    type='email'
                    className='border-2 rounded-lg p-1'
                    />
                    <input 
                     placeholder='Password'
                     name='password'
                     type='password'
                     className='border-2 rounded-lg  p-1'
                    />

                    <div className='flex text-[10px] justify-between '>
                          <div className='flex items-center  '>
                           <input id="remember-me" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500  focus:ring-2 " />
                           <label for="remember-me" class="ms-2 text-sm font-medium text-gray-900 ">Remember me</label>
                   </div>

                  <p className='text-[#61A9EA]'>Reset Password</p>
                   
                    </div>
                   
                      <div className='buttons flex flex-col mt-2 gap-3 '>
                        <button className='signup-button text-center p-2  rounded-lg bg-[#1FD661] '>
                         Login
                        </button>
                        <button className='login-button border-2 p-2 rounded-lg  border-[#5699D5] bg-[#F3F9FF] text-[#61A9EA] '>
                            Sign up
                        </button>
                        <button className='login-number-button border-2 rounded-lg  p-3 border-[#5699D5] bg-[#F3F9FF] text-[#61A9EA]'>
                            Login with mobile number
                        </button>
                        <p className='text-[#BCBCBC] text-[12px] text-center'>
                         By login/sign up, you agree to 
                         the <span className='underline'> Terms of Service </span>  
                         and <span  className='underline'> Privacy Policy </span>
                        </p>
                       </div>
                       </div>
                     
                       <div className='language-option flex text-[12px] self-center mt-2 '>
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

export default Login
