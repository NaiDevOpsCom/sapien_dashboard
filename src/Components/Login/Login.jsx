import React from 'react'
import s_main from "../assets/images/s_main_logo.png"

const Login = () => {
  return (
    <div>
        <div className="h-full">
<div className="flex min-h-full items-center justify-center py-20 px-4 sm:px-6 lg:px-8" style={{height: "100vh"}}>
    <div className="modal fade" id="alertmodal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div role="alert" className="alert">

          </div>
        </div>
    </div>
    <div className="w-full max-w-md space-y-8">
      <div>
        <img className="mx-auto h-23 w-auto" src={s_main} alt="Your Company" />
    
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Welcome Back!</h2>
      </div>
      <form className="mt-8 space-y-6" id="login_form" method="POST">
      
        <div className="-space-y-px rounded-md shadow-sm">
          <div style={{marginBottom: "26px"}}>
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autoComplete="email" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address" />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input id="password" name="password" type="password" autoComplete="current-password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password" />
          </div>
        </div>
  
        <div className="flex items-center justify-between">
          <div className="flex items-center">
          </div>
  
          <div className="text-sm">
            <a href="forgot_password.html" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
          </div>
        </div>
  
        <div>
          <button type="submit"  id="login_btn" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              {/* <!-- Heroicon name: mini/lock-closed --> */}
              <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path  d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
              </svg>
            </span>
            Sign in
          </button>
          <br />
          <label className="ml-2 block text-sm text-gray-900 text-center">Don't have an account? <a href="register">Register</a></label>
        </div>
      </form>
    </div>
  </div>
  
</div>

    </div>
  )
}

export default Login