import React from 'react'


const Home = () => {
  return (
       <div>

<div className="h-full">
    <div className="min-h-full">
        
        <nav className="bg-gray-800">
			<div className=" mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-7">
						<div>
							{/* <!-- Website Logo --> */}
							<a href="#" className="flex items-center py-4 px-2">
							
                                {/* <img className=" w-90" style="height:3.5rem;" src="s_joined_logo.png" alt="Sapien Africa"> */}
							</a>
						</div>
						
					</div>
					{/* <!-- Secondary Navbar items --> */}
					<div className="hidden md:flex items-center space-x-3 ">
                            <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer  ring-2 ring-gray-300 dark:ring-gray-500" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" >
                                <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                            </div>
                            {/* <!-- Dropdown menu --> */}
                            <div id="userDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                  <div id="username"></div><br/>
                                  <div className="font-medium" id="plan"></div>
                                </div>
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                                    <li>
                                        <a href="http://sapienafrica.com/documentation.html" target="_blank" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Documentation
                                        </a>
                                      </li>
                                  <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" id="Appfeedback" data-mdb-toggle="modal" data-mdb-target="#appfeedback">
                                        Send Feedback
                                    </a>
                                  </li>
                                </ul>
                                <div className="py-1">
                                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" id="logApp" onclick="logout()">Sign out</a>
                                </div>
                            </div>
                    {/* </button> */}
					</div>
					{/* <!-- Mobile menu button --> */}
					<div className="md:hidden flex items-center">
						<button className="outline-none mobile-menu-button">
						<svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
				</div>
			</div>
			{/* <!-- mobile menu --> */}
			<div className="hidden mobile-menu"  style={{textAlign: "center"}}>
				<ul className="">
                    <li>
                        <a className="
                        dropdown-item
                        text-sm
                        py-2
                        px-4
                        font-normal
                        block
                        text-white
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100
                      " href="#" id="mobile_username"></a>
                      </li>
                      <li>
                        <a className="
                        dropdown-item
                        text-sm
                        py-2
                        px-4
                        font-normal
                        block
                        text-white
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100
                      " href="#" id="mobile_plan"></a>
                      </li>
                      <li>
                        <a className="
                        dropdown-item
                        text-sm
                        py-2
                        px-4
                        font-normal
                        block
                        text-white
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100
                      " href="http://sapienafrica.com/documentation.html" target="_blank">Documentation</a>
                      </li>
                    <li>
                        <a className="
                        dropdown-item
                        text-sm
                        py-2
                        px-4
                        font-normal
                        block
                        text-white
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100
                      " href="#" id="Appfeedback" data-mdb-toggle="modal" data-mdb-target="#appfeedback">Send Feedback</a>
                      </li>
                      <li>
                        <a className="
                        dropdown-item
                        text-sm
                        py-2
                        px-4
                        font-normal
                        block
                        text-white
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100
                      " href="#" id="logApp" onclick="logout()">Sign Out</a>
                      </li>
                     {/* <li><button type="button"
                        className=" inline-flex items-center px-4 py-2  border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        id="Appfeedback" data-mdb-toggle="modal" data-mdb-target="#appfeedback">
                        Provide Feedback
                    </button></li> <br />
                    <li><button type="button"
                        className=" items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white btn-warning focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        id="logApp" onclick="logout()">
                        Log Out
                    </button></li><br />  */}
				</ul>
			</div>
			{/* <script>
				const btn = document.querySelector("button.mobile-menu-button");
				const menu = document.querySelector(".mobile-menu");

				btn.addEventListener("click", () => {
					menu.classNameList.toggle("hidden");
				});
			</script> */}
		</nav>
    </div>


    <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900"><a href="index.html" style={{textDecoration: "none", color: "#1f2937"}}>My Apps</a>
                    </h1>
                </div>
                <div className="col-md-6">
                    <button type="button"
                        className="float-right inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        id="creatApp" data-mdb-toggle="modal" data-mdb-target="#createApp">
                        Create App
                    </button>

                </div>
            </div>
        </div>
    </header>
    <main style={{height: "100vh"}}>

        <div className="modal fade" id="alertmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div role="alert" className="alert">

                </div>
            </div>
        </div>

        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">

            {/* <!-- Replace with your content --> */}
            <div className="px-4 py-6 sm:px-0 rounded-lg border-4 border-dashed border-gray-200">
                <div className="">

                    <ul className="list-group list-group-light" id="app_list">

                    </ul>
                </div>
            </div>

        </div>
    </main>
    </div>

    {/* <!-- Modal --> */}
    <div className="modal fade" id="createApp" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
        style={{marginTop: "16%"}}>
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Create New App</h5>
                    <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                </div>
                <div className="modal-body">
                    <form>
                        {/* <!-- Name input --> */}
                        <div className="form-outline mb-4">
                            <input type="text" id="apNmae" className="form-control" onkeyup="checkFormat()" />
                            <label className="form-label" for="apNmae">App Name</label>

                        </div>
                        <p style={{fontSize: "15px"}}><u>Rules:</u></p>
                        <ol style={{listStyle: "block",
                        paddingLeft: "20px"}}>
                            <li><p style={{fontSize: "12px"}}>App name should be in lowercase.</p></li>
                            <li><p style={{fontSize: "12px"}}>App name should not contain any special characters apart from hyphens(-)</p></li>
                            <li><p style={{fontS0ize: "12px"}}>App name should be unique.</p></li>
                        </ol>
                  
                        {/* <!-- Submit button --> */}
                        <button type="button"
                            className="float-right inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            id="newApp" onclick="createNewApp()">
                            Save
                        </button>
                    </form>
                </div>
                <div className="modal-footer">
                    {/* <!-- <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">Close</button> --> */}
                </div>
            </div>
        </div>
    </div>

    {/* <!-- feedback modal --> */}
    <div className="modal fade" id="appfeedback" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
        style={{marginTop: "16%"}}>
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Kindly Provide Feedback</h5>
                    <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                </div>
                <div className="modal-body">
                    <form>

                        <div className="form-outline mb-4">
                            <textarea className="form-control" id="feedback_text" rows="6"></textarea>
                            <label className="form-label" for="feedback_text">Message</label>

                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label" for="rating">Rate Us:</label>
                            <input data-role="rating" id="rating" />
                        </div>

                        {/* <!-- Submit button --> */}
                        <button type="button"
                            className="float-right inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            id="" onclick="sendFeedback()">
                            Send
                        </button>
                    </form>
                </div>
                <div className="modal-footer">
                    {/* <!-- <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">Close</button> --> */}
                </div>
            </div>
        </div>
    </div>
    <script src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js"></script>
    {/* <!-- <script src="https://cdn.tailwindcss.com"></script> --> */}
</div>
   
    
  )
}

export default Home