import React from 'react'
import {backgroundImg} from '../utils/constant'
import Header from '../component/Header'
import LoginForm from '../component/LoginForm'
/*
 * The login page contains the header section, background image + signIn/signUp page.
*/

function Login() {
  return (
    <>
        <div className='relative h-screen'>
            <Header />
            <LoginForm/>
            <img src = {backgroundImg} alt = 'Background Image'  className="top-0 left-0 w-full h-full object-cover"/>
        </div>
    </>
  )
}

export default Login