import React from 'react'

const App_details = () => {
  return (
    <div>
        <body className="h-full">
            <div className="min-h-full">
                <div className="min-h-full">
                    <nav className="bg-gray-800">
                        <div className=" mx-auto px-4">
                            <div className="flex justify-between">
                                <div className="flex space-x-7">
                                <div>
                                    {/* <!-- Website Logo --> */}
                                    <a href="#" className="flex items-center py-4 px-2">
                                    
                                        <img className=" w-90" style={{height: "3.5rem"}} src="s_joined_logo.png" alt="Sapien Africa" />
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
                                {/* <!-- <li><button type="button"
                                    className=" inline-flex items-center px-4 py-2  border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    id="Appfeedback" data-mdb-toggle="modal" data-mdb-target="#appfeedback">
                                    Provide Feedback
                                </button></li><br/>
                                <li><button type="button"
                                    className=" items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white btn-warning focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    id="logApp" onclick="logout()">
                                    Log Out
                                </button></li><br/> --> */}
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
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900"><a href="index.html">My App</a>
                                <span id="appName" className="text-2xl  tracking-tight text-gray-500"></span>
                            </h1>
                        </div>
                        <div className="col-md-6">
                            <button type="button"
                                className="float-right inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                id="deleteApp" onclick="deleteApp()">
                                DELETE
                            </button>
                        </div>
                    </div>

                </div>
            </header>
            <main style={{height: "100vh"}}>
                <div className="modal fade" id="alertmodal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog">
                        <div role="alert" className="alert">

                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">


                    <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" id="ex1-tab-0" data-mdb-toggle="tab" href="#analytics_tab" role="tab"
                                aria-controls="analytics_tab" aria-selected="true">Analytics</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="ex1-tab-1" data-mdb-toggle="tab" href="#settings_tab" role="tab"
                                aria-controls="settings_tab" aria-selected="true">Settings</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="ex1-tab-2" data-mdb-toggle="tab" href="#config_tab" role="tab"
                                aria-controls="config_tab" aria-selected="true">Configs & Keys</a>
                        </li>
                    </ul>

                    <div className="tab-content" id="ex1-content">
                        <div className="tab-pane fade show active" id="analytics_tab" role="tabpanel"
                        aria-labelledby="ex1-tab-0">
                        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                            <input name="guid" id="AppGUID1" type="hidden" value=""/>
                            <div className="container">
                                <canvas id="myChart" width="100" height="40"></canvas>
                            </div>
                            <hr/>
                        
                
                        
                        </div>
                        <br/><br/>
                        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                        
                        
                            <div className="container">
                                <canvas id="myChart2" style={{position: "relative", height:"40vh", width:"80vw"}}></canvas>
                            </div>
                
                        
                        </div>

                    </div>
                        <div className="tab-pane fade show" id="settings_tab" role="tabpanel"
                            aria-labelledby="ex1-tab-1">
                            <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                                <form id="app_config_update" method="post">
                                    <div className="px-4 py-5 sm:px-6">
                                        <h3 className="text-lg font-medium leading-6 text-gray-900">App Configs</h3>
                                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Settings below are used only by this
                                            app
                                        </p>
                                        <button type="submit"
                                            className="float-right inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            id="createApp">
                                            Save
                                        </button>
                                    </div>
                                    <div className="border-t border-gray-200" style={{marginTop: "23px"}}>
                                        <dl>
                                            <div className="bg-gray-50 px-4 py-5" id="app_info">
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <dt className="text-sm font-medium text-gray-500">App Information</dt>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <p className="font-bold">App Name:</p>
                                                                <p className="font-bold">App URL:</p>
                                                            </div>
                                                            <div className="col-md-6">

                                                                <input name="guid" id="AppGUID" type="hidden" value=""/>
                                                                <dd
                                                                    className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                                                    <span id="AppName"></span>
                                                                </dd>
                                                                <dd
                                                                    className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                                                    <span id="AppURL"></span>
                                                                </dd>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>

                                            <div className="bg-white px-4 py-5 " id="service_defination">
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <dt className="text-sm font-medium text-gray-500">Service Definations
                                                            <p id="service_allowed"></p>
                                                        </dt>
                                                    </div>
                                                    <div className="col-md-6">

                                                        <div className="form-outline">
                                                            <textarea name="service_definations" id="service_definations"
                                                                cols="30" rows="10" className="form-control"
                                                                style={{textAlign: "left"}} onfocusout="prettyPrint()"
                                                                placeholder="e.g [
                                                                                                                                {
                                                                        'name':'users',
                                                                        'url':'http://localhost:5000'
                                                                    },
                                                                    {
                                                                        'name':'products',
                                                                        'url':'http://localhost:5001'
                                                                    }
                                                                    ]"></textarea>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 px-4 py-5 " id="request_body">
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <dt className="text-sm font-medium text-gray-500">Request Body
                                                            Conversion
                                                        </dt>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <dd
                                                                    className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                                                    Incoming Request Body</dd>

                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-outline">
                                                                    <select className="form-select" id="incoming_request_body"
                                                                        name="data_incoming_protocol"
                                                                        aria-label="Default select example">
                                                                        <option disabled>Select Body Type</option>
                                                                        <option value="json">JSON</option>
                                                                        <option value="xml">XML</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div><br/><br/>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <dd
                                                                    className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                                                    Outgoing Request Body</dd>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-outline">
                                                                    <select className="form-select" id="outgoing_request_body"
                                                                        name="data_outgoing_protocol"
                                                                        aria-label="Default select example">
                                                                        <option disabled>Select Body Type</option>
                                                                        <option value="json">JSON</option>
                                                                        <option value="xml">XML</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-white px-4 py-5" id="app_auth">
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <dt className="text-sm font-medium text-gray-500">App Authentication
                                                            type
                                                        </dt>
                                                    </div>
                                                    <div className="col-md-6">

                                                        <div className="form-outline">
                                                            <select className="form-select" id="app_authentication"
                                                                name="app_authentication"
                                                                aria-label="Default select example">
                                                                <option disabled>Select Auth Type</option>
                                                                <option value="None">None</option>
                                                                <option value="Basic">Basic</option>
                                                                <option value="Custom">Custom</option>
                                                                <option value="JWT" id="jwt_auth">JWT</option>
                                                                <option value="ApiKey">API Key</option>
                                                            </select>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 px-4 py-5 " id="ignore_auth">
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <dt className="text-sm font-medium text-gray-500">Ignore Authentication
                                                            Routes</dt>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-outline">
                                                            <input type="text" id="ignored_routes" name="ignored_routes"
                                                                className="form-control" style={{border:"1px solid #bdbdbd"}} />

                                                            <div className="form-helper">*This paths won't be checked if
                                                                authentication is set. e.g /login,/logout]</div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-white px-4 py-5 " id="ip_whitelist">
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <dt className="text-sm font-medium text-gray-500">URL Whitelisting
                                                            Routes</dt>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-outline">

                                                            <input type="text" id="whitelist_urls" name="restricted_ip"
                                                                className="form-control" style={{border:"1px solid #bdbdbd"}} />

                                                            <div className="form-helper">*Whitelist IP's enter the IP's
                                                                separated by comma(,)</div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 px-4 py-5">
                                                <button type="submit"
                                                    className="float-right inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                    id="createApp">
                                                    Save
                                                </button><br/>
                                            </div>
                                        </dl>

                                    </div>
                                </form>
                            </div>

                        </div>
                        <div className="tab-pane fade show " id="config_tab" role="tabpanel">
                            <div className="row">
                                <div className="col-md-3" id="ckey_card">
                                    <div className="card text-center">
                                        <div className="card-body">
                                            <h5 className="card-title font-bold"><u>Consumer Key</u></h5><br />
                                            <p className="card-text"><span id="consumerkey"></span>
                                                <i className="fas fa-copy" style={{float:"right"}}></i>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3" id="csecret_card">
                                    <div className="card text-center">
                                        <div className="card-body">
                                            <h5 className="card-title font-bold"><u>Consumer Secret</u></h5><br />
                                            <p className="card-text"><span id="consumersecret"></span>
                                                <i className="fas fa-copy" style="float:right;"></i>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3" id="jwt_card">
                                    <div className="card text-center">
                                        <div className="card-body">
                                            <h5 className="card-title font-bold"><u>JWT secret</u></h5><br />
                                            <p className="card-text"><span id="jwtsecret"></span>
                                                <i className="fas fa-copy" style={{float:"right"}}></i>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3" id="api_card">
                                    <div className="card text-center">
                                        <div className="card-body">
                                            <h5 className="card-title font-bold"><u>API Key</u></h5><br />
                                            <p className="card-text"><span id="apikey"></span>
                                                <i className="fas fa-copy" style={{float:"right"}}></i>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </main>
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
                        id="newApp" onclick="sendFeedback()">
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
        </body>
    </div>
  )
}

export default App_details