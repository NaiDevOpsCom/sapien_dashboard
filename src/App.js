import {   BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import App_details from './Components/App/App_details';

function App() {
  return (
    <div className="App">
		<BrowserRouter>

		<Routes>
			<Route path='/' element={<Home/>} />
			<Route path='/login' element={<Login/>} />
			<Route path='/app' element={<App_details/>} />
			<Route path='/register' element={<Register/>} />
		</Routes>
		
		</BrowserRouter>
    
    </div>
  );
}

export default App;
