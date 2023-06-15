import React from 'react'

const Register = () => {
  return (
    <div>
        <div className="h-full">

<div className="flex min-h-full items-center justify-center py-36 px-4 sm:px-6 lg:px-8" style={{paddingTop: "49px", height: "100vh"}}>
  <div className="modal fade" id="alertmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div role="alert" className="alert">

      </div>
    </div>
</div>
    <div className="w-full max-w-md space-y-8">
      <div>
        {/* <!-- <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"> --> */}
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Register </h2>
        {/* <!-- <p className="mt-2 text-center text-sm text-gray-600">
          Or
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">start your 14-day free trial</a>
        </p> --> */}
      </div>
      <form className="mt-8 space-y-6" id="register_form" method="POST">
        <div className="-space-y-px rounded-md shadow-sm">
            <div className="row">
                <div className="col-md-6">
                    <div style={{marginBottom: "26px"}}>
                        <label for="first-Name" className="sr-only">First Name</label>
                        <input id="first-Name" name="first_name" type="text" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="First Name" />
                      </div>
                </div>
                <div className="col-md-6">
                    <div style={{marginBottom: "26px"}}>
                        <label for="last-Name" className="sr-only">Last Name</label>
                        <input id="last-Name" name="last_name" type="text"  required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Last Name" />
                      </div>
                </div>
            </div>

            <div style={{marginBottom: "26px"}}>
                <label for="email-address" className="sr-only">Email address</label>
                <input id="email-address" name="email" type="email" autocomplete="email" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address" />
              </div>

            <div className="row">
                <div className="col-md-6">
                    <div style={{marginBottom: "26px"}}>
                        <label for="company" className="sr-only">Company</label>
                        <input id="company" name="company" type="text" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 
                        px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none 
                        focus:ring-indigo-500 sm:text-sm" placeholder="Company" />
                      </div>
                </div>
                <div className="col-md-6">
                    <div style={{marginBottom: "26px"}}>
                        <label for="speciality" className="sr-only">Speciality</label>
                        {/*  <input id="speciality" name="speciality" type="text"  required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 
                        px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none 
                        focus:ring-indigo-500 sm:text-sm" placeholder="Speciality">  */}
                        <select id="speciality" name="speciality" className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300
                        px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none
                        focus:ring-indigo-500 sm:text-sm" placeholder="Speciality" required>
                        <option disabled selected>Select Speciality</option>
                            <option value="Business_development">Business Development</option>
                            <option value="Developer">Developer</option>
                            <option value="Designer">Designer</option>
                            <option value="Sales">Sales</option>
                            <option value="Consultant">Consultant</option>
                            <option value="Marketer">Marketer</option>
                            <option value="Manager">Manager</option>
                            <option value="Owner">Owner</option>
                        </select>
                      </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div style={{marginBottom: "26px"}}>
                        <label for="country" className="sr-only">Country</label>
                         <select id="country" name="country" className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300
                            px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none
                            focus:ring-indigo-500 sm:text-sm" required>
                            <option disabled selected>Select Country</option>
                            <option value="United States">United States</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="Angola">Angola</option>
                            <option value="Kenya">Kenya</option>
                            <option value="South Africa">South Africa</option>
                            <option value="Zimbabwe">Zimbabwe</option>
                            <option value="Zambia">Zambia</option>
                            <option value="Uganda">Uganda</option>
                            <option value="Tanzania">Tanzania</option>
                            <option value="Rwanda">Rwanda</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Morocco">Morocco</option>
                            <option value="Mozambique">Mozambique</option>
                            <option value="Mauritius">Mauritius</option>
                            <option value="Madagascar">Madagascar</option>
                            <option value="Malawi">Malawi</option>
                            <option value="Mali">Mali</option>
                         </select>
                      </div>
                </div>
                <div className="col-md-6">
                    <div style={{marginBottom: "26px"}}>
                        <label for="primary_dev_language" className="sr-only">Primary Development Language</label>
                        {/*  <input id="primary_dev_language" name="primary_dev_language" type="text"  required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300
                         px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none
                          focus:ring-indigo-500 sm:text-sm" placeholder="Development Language">  */}
                          <select id="primary_dev_language" name="primary_dev_language" className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300
                            px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none
                            focus:ring-indigo-500 sm:text-sm" required>
                            <option disabled selected>Select Dev Language</option>
                            <option value="Java">Java</option>
                            <option value="C#">C#</option>
                            <option value="Python">Python</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="PHP">PHP</option>
                            <option value="Ruby">Ruby</option>
                            <option value="C++">C++</option>
                            <option value="C">C</option>
                            <option value="Go">Go</option>
                            <option value="Swift">Swift</option>
                            <option value="Kotlin">Kotlin</option>
                            <option value="R">R</option>
                            <option value="Scala">Scala</option>
                            <option value="TypeScript">TypeScript</option>
                            <option value="Rust">Rust</option>
                            <option value="Dart">Dart</option>
                            <option value="Objective-C">Objective-C</option>
                            <option value="Perl">Perl</option>
                            <option value="Groovy">Groovy</option>
                            </select>
                      </div>
                </div>
            </div>

          <div>
            <label for="password" className="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password" />
          </div>
        </div>
  
  
        <div>
          <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              {/*  Heroicon name: mini/lock-closed  */}
              <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
              </svg>
            </span>
           Register
          </button>
          <label className="ml-2 block text-sm text-gray-900 text-center">Already have an account? <a href="login.html"> Login </a> </label>
        </div>
      </form>
    </div>
  </div>
  
</div>
    </div>
  )
}

export default Register